// 1. जरूरी औजार
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Author = require("./models/Author");
const Content = require("./models/Content");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/authors', express.static('public/authors'));

// --- 💡 प्रोफेशनल ऑटो-सिंक फंक्शन ---
const syncFavorites = async () => {
  try {
    const favoriteNames = [
      "मुंशी प्रेमचंद",
      "महादेवी वर्मा",
      "शिवानी",
      "जयशंकर प्रसाद",
      "रामधारी सिंह 'दिनकर'",
      "सुभद्रा कुमारी चौहान",
      "अज्ञेय",
    ];

    await Author.updateMany({}, { $set: { isFavorite: false } });
    const result = await Author.updateMany(
      { name: { $in: favoriteNames } },
      { $set: { isFavorite: true } },
    );
    console.log(
      `✅ Favorites Updated: ${result.modifiedCount} authors are now favorites.`,
    );
  } catch (err) {
    console.error("❌ Sync Error:", err);
  }
};

// 2. डेटाबेस कनेक्शन
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully! 🚀");
    syncFavorites();
  })
  .catch((err) => console.log("Database connection error: ", err));

// --- API ROUTES ---
// --- ✅ यहाँ पेस्ट करें: ग्लोबल सर्च रूट ---
app.get("/api/content/all/search", async (req, res) => {
  try {
    const query = req.query.q;
    const searchRegex = new RegExp(query, 'i');

    const [works, authors] = await Promise.all([
      Content.find({
        $or: [
          { title: { $regex: searchRegex } },
          { authorName: { $regex: searchRegex } }
        ]
      }).limit(20).lean(),

      Author.find({
        name: { $regex: searchRegex }
      }).limit(10).lean()
    ]);

    const finalData = [
      ...works,
      ...authors.map(a => ({ 
        ...a, 
        title: a.name, 
        type: 'लेखक', 
        isAuthor: true 
      }))
    ];

    res.json(finalData);
  } catch (err) {
    console.error("Search API Error:", err);
    res.status(500).json({ error: "Mongoose Search Failed" });
  }
});
// --- ✅ नया रूट: SmartContentPage के लिए (सिर्फ पसंदीदा लेखकों के लिए) ---
app.get("/api/featured-authors-by-type", async (req, res) => {
  try {
    const { category } = req.query;
    let dbCategory = "";

    // ✅ यहाँ हमने 'sant' और 'shayar' को सही से मैप कर दिया है
    if (category === "poetry" || category === "kavita") {
      dbCategory = "kavi";
    } else if (category === "story" || category === "kahani") {
      dbCategory = "kahanikar";
    } else if (category === "nibandh") {
      dbCategory = "nibandhkar";
    } else if (
      category === "sher" ||
      category === "shayar" ||
      category === "shayari"
    ) {
      dbCategory = "shayar";
    } else if (category === "dohe" || category === "sant") {
      dbCategory = "sant";
    }

    if (!dbCategory) return res.json([]);

    const authors = await Author.find({ category: dbCategory }).limit(11);
    res.json(authors);
  } catch (err) {
    console.error("Filtering Error:", err);
    res.status(500).json({ error: "Data fetch failed" });
  }
});
// पसंदीदा लेखक लाने का रूट
app.get("/api/authors/favorites", async (req, res) => {
  try {
    const favorites = await Author.find({ isFavorite: true });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: "सर्वर एरर" });
  }
});

//--- ✅ सुधार: समस्त संग्रह के लिए सीधे Content मॉडल का उपयोग ---
app.get("/api/content/all/:type", async (req, res) => {
  try {
    const { type } = req.params;

    // यह मैपिंग फ्रंटएंड के नाम को डेटाबेस के 'type' से जोड़ती है
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

    // सीधे Content मॉडल में ढूँढना सबसे सटीक है
    const works = await Content.find({ type: searchType }).lean();

    // अ-ज्ञ सॉर्टिंग
    works.sort((a, b) => a.title.localeCompare(b.title, "hi"));

    res.json(works);
  } catch (err) {
    console.error("Content Error:", err);
    res.status(500).json({ error: "Data fetch karne mein error" });
  }
});
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
    // पहले Featured कहानियाँ ढूंढो
    let stories = await Content.find({ type: "story", isFeatured: true }).limit(
      7,
    );

    // अगर Featured कहानियाँ नहीं मिलीं, तो कोई भी शुरू की 7 कहानियाँ उठा लो
    if (stories.length === 0) {
      stories = await Content.find({ type: "story" }).limit(7);
    }

    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: "Error fetching stories" });
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
    author
      ? res.json(author)
      : res.status(404).json({ message: "लेखक नहीं मिला" });
  } catch (err) {
    res.status(500).json({ error: "सर्वर त्रुटि" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
