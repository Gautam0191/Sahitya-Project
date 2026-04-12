// 1. जरूरी औजार (Importing Modules)
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const Author = require("./models/Author");
const Content = require("./models/Content");

const app = express();

// --- Middleware ---
// ✅ CORS FIX: इसे लाइव सर्वर के लिए अपडेट किया गया है
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

// ✅ इमेज एक्सेस के लिए रास्ता
app.use(express.static(path.join(__dirname, "public")));

// --- 💡 प्रोफेशनल ऑटो-सिंक फंक्शन ---
const syncFavorites = async () => {
  try {
    const favoriteIds = [217, 224, 112, 115, 119, 108, 101];
    await Author.updateMany({}, { $set: { isFavorite: false } });
    const result = await Author.updateMany(
      { id: { $in: favoriteIds } },
      { $set: { isFavorite: true } },
    );
    console.log(`✅ Favorites Updated in DB: ${result.modifiedCount} authors.`);
  } catch (err) {
    console.error("❌ Sync Error:", err);
  }
};

// --- 🛠️ API ROUTES ---

// 🔍 ग्लोबल सर्च रूट (UPDATED)
app.get("/api/content/all/search", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) return res.json([]);
    const searchRegex = new RegExp(query, "i");

    const [works, authors] = await Promise.all([
      // 1. रचनाओं (Stories/Poems) में सर्च करें
      Content.find({
        $or: [
          { title: { $regex: searchRegex } },
          { authorName: { $regex: searchRegex } },
          { searchTags: { $regex: searchRegex } }, // ✅ यहाँ पहले से है
        ],
      })
        .limit(20)
        .lean(),

      // 2. लेखकों (Authors) में सर्च करें
      Author.find({
        $or: [
          { name: { $regex: searchRegex } },
          { nickName: { $regex: searchRegex } },
          { bio: { $regex: searchRegex } },
          { searchTags: { $regex: searchRegex } }, // 🚀 यह लाइन गायब थी, इसे जोड़ दिया है!
        ],
      })
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
    console.error("Search Error:", err);
    res.status(500).json({ error: "Search Failed" });
  }
});
// 📁 स्मार्ट कैटेगरी रूट
app.get("/api/featured-authors-by-type", async (req, res) => {
  try {
    const { category } = req.query;
    const map = {
      poetry: "kavi",
      kavita: "kavi",
      story: "kahanikar",
      kahani: "kahanikar",
      nibandh: "nibandhkar",
      sher: "shayar",
      shayar: "shayar",
      dohe: "sant",
    };
    const dbCategory = map[category];
    if (!dbCategory) return res.json([]);
    const authors = await Author.find({ category: dbCategory }).limit(11);
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: "Data fetch failed" });
  }
});

// 📚 समस्त संग्रह रूट
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
      dohe: "doha",
    };
    const searchType = mapping[type] || type;
    const works = await Content.find({ type: searchType }).lean();
    works.sort((a, b) => a.title.localeCompare(b.title, "hi"));
    res.json(works);
  } catch (err) {
    res.status(500).json({ error: "Error fetch" });
  }
});

// 🏠 होमपेज रूट्स
app.get("/api/home/poetry", async (req, res) => {
  try {
    let poetry = await Content.find({ type: "poetry", isFeatured: true }).limit(
      10,
    );
    if (poetry.length === 0)
      poetry = await Content.find({ type: "poetry" }).limit(10);
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
    const drama = await Content.find({ type: "drama", isFeatured: true });
    res.json(drama);
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

// 📖 सिंगल कंटेंट पेज
app.get("/api/content/:authorId/:title", async (req, res) => {
  try {
    const work = await Content.findOne({
      authorId: Number(req.params.authorId),
      title: req.params.title,
    });
    work ? res.json(work) : res.status(404).json({ message: "Not found" });
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

// 👤 लेखक प्रोफाइल रूट्स
app.get("/api/authors", async (req, res) => {
  try {
    const authors = await Author.find(
      req.query.category ? { category: req.query.category } : {},
    );
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

app.get("/api/authors/:id", async (req, res) => {
  try {
    const author = await Author.findOne({ id: Number(req.params.id) });
    author ? res.json(author) : res.status(404).json({ message: "Not found" });
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

// 🚀 सर्वर स्टार्टअप (Database Connection First)
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully! 🚀");
    syncFavorites();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Database connection error: ", err));
