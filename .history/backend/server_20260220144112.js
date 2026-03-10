// 1. जरूरी औजार (Importing Modules)
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Author = require("./models/Author");
const Content = require("./models/Content");

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use("/authors", express.static("public/authors")); // इमेज एक्सेस के लिए
app.use(express.static("public"));

// --- 💡 प्रोफेशनल ऑटो-सिंक फंक्शन (पसंदीदा लेखकों के लिए) ---
const syncFavorites = async () => {
  try {
    // आपकी फाइल से मैच की गई IDs: प्रेमचंद(217), शिवानी(224), महादेवी(112), दिनकर(115), सुभद्रा(119), प्रसाद(108), अज्ञेय(101)
    const favoriteIds = [217, 224, 112, 115, 119, 108, 101];

    // 1. पहले सबको false करें
    await Author.updateMany({}, { $set: { isFavorite: false } });

    // 2. IDs के आधार पर पसंदीदा लेखकों को true करें
    const result = await Author.updateMany(
      { id: { $in: favoriteIds } }, 
      { $set: { isFavorite: true } }
    );

    console.log(`✅ Favorites Updated in DB: ${result.modifiedCount} authors.`);
    
    // एक छोटा सा चेक यहीं कर लेते हैं
    const check = await Author.countDocuments({ isFavorite: true });
    console.log(`🔍 Immediate DB Verification: Found ${check} favorites.`);

  } catch (err) {
    console.error("❌ Sync Error:", err);
  }
};
// 2. डेटाबेस कनेक्शन (MongoDB Connection)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully! 🚀");
    syncFavorites(); // कनेक्शन के बाद पसंदीदा लेखकों को सिंक करें
  })
  .catch((err) => console.log("Database connection error: ", err));

// --- 🛠️ API ROUTES ---

// 🔍 ग्लोबल सर्च रूट (लेखक और रचना दोनों के लिए)
app.get("/api/content/all/search", async (req, res) => {
  try {
    const query = req.query.q;
    const searchRegex = new RegExp(query, "i");

    const [works, authors] = await Promise.all([
      Content.find({
        $or: [
          { title: { $regex: searchRegex } },
          { authorName: { $regex: searchRegex } },
        ],
      })
        .limit(20)
        .lean(),
      Author.find({ name: { $regex: searchRegex } })
        .limit(10)
        .lean(),
    ]);

    const finalData = [
      ...works,
      ...authors.map((a) => ({
        ...a,
        title: a.name,
        type: "लेखक",
        isAuthor: true,
      })),
    ];
    res.json(finalData);
  } catch (err) {
    console.error("Search API Error:", err);
    res.status(500).json({ error: "Mongoose Search Failed" });
  }
});

// ⭐ पसंदीदा लेखक लाने का रूट (Home Page के लिए)
app.get("/api/authors/favorites", async (req, res) => {
  try {
    // हम isFavorite के साथ-साथ सीधे ID से भी चेक कर लेते हैं ताकि 0 आने की गुंजाइश ही न रहे
    const favoriteIds = [217, 224, 112, 115, 119, 108, 101];
    
    const favorites = await Author.find({
      $or: [
        { isFavorite: true },
        { id: { $in: favoriteIds } }
      ]
    }).lean();

    console.log("📡 API Response: Sending", favorites.length, "authors to frontend.");
    res.json(favorites);
  } catch (err) {
    console.error("API Error:", err);
    res.status(500).json({ error: "सर्वर एरर" });
  }
});

// 📁 स्मार्ट कैटेगरी रूट (SmartContentPage के लिए)
app.get("/api/featured-authors-by-type", async (req, res) => {
  try {
    const { category } = req.query;
    let dbCategory = "";

    const map = {
      poetry: "kavi",
      kavita: "kavi",
      story: "kahanikar",
      kahani: "kahanikar",
      nibandh: "nibandhkar",
      sher: "shayar",
      shayar: "shayar",
      shayari: "shayar",
      dohe: "sant",
      sant: "sant",
    };

    dbCategory = map[category];
    if (!dbCategory) return res.json([]);

    const authors = await Author.find({ category: dbCategory }).limit(11);
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: "Data fetch failed" });
  }
});

// 📚 समस्त संग्रह रूट (Type के आधार पर रचनाएँ)
app.get("/api/content/all/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const mapping = {
      kavita: "poetry",
      poetry: "poetry",
      kahani: "story",
      story: "story",
      nibandh: "essay",
      sher: "shayari",
      shayari: "shayari",
      dohe: "doha",
    };

    const searchType = mapping[type] || type;
    const works = await Content.find({ type: searchType }).lean();
    works.sort((a, b) => a.title.localeCompare(b.title, "hi"));
    res.json(works);
  } catch (err) {
    res.status(500).json({ error: "Data fetch karne mein error" });
  }
});

// 🏠 होमपेज स्पेसिफिक रूट्स
app.get("/api/home/poetry", async (req, res) => {
  try {
    const poetry = await Content.find({ type: "poetry" }).limit(10);
    res.json(poetry);
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

app.get("/api/home/stories", async (req, res) => {
  try {
    let stories = await Content.find({ type: "story", isFeatured: true }).limit(
      7,
    );
    if (stories.length === 0)
      stories = await Content.find({ type: "story" }).limit(7);
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

app.get("/api/home/drama", async (req, res) => {
  try {
    const drama = await Content.find({ type: "drama" }).limit(4);
    res.json(drama);
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

// 📖 सिंगल कंटेंट पेज रूट
app.get("/api/content/:authorId/:title", async (req, res) => {
  try {
    const { authorId, title } = req.params;
    const work = await Content.findOne({
      authorId: Number(authorId),
      title: title,
    });
    if (!work) return res.status(404).json({ message: "Not found" });
    res.json(work);
  } catch (err) {
    res.status(500).json({ error: "सर्वर त्रुटि" });
  }
});

// 👤 लेखक लिस्ट और सिंगल प्रोफाइल रूट
app.get("/api/authors", async (req, res) => {
  try {
    const query = req.query.category ? { category: req.query.category } : {};
    const authors = await Author.find(query);
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

app.get("/api/authors/:id", async (req, res) => {
  try {
    const author = await Author.findOne({ id: Number(req.params.id) });
    author
      ? res.json(author)
      : res.status(404).json({ message: "लेखक नहीं मिला" });
  } catch (err) {
    res.status(500).json({ error: "सर्वर त्रुटि" });
  }
});

// 🚀 सर्वर स्टार्टअप
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
