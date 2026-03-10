const mongoose = require("mongoose");
const Content = require("./models/Content");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected for seeding..."))
  .catch(err => console.log(err));

const dummyData = [
  // 10 कविताएँ (Poetry)
  ...Array.from({ length: 10 }).map((_, i) => ({
    authorId: 101, 
    title: `बेहतरीन कविता ${i + 1}`,
    type: "poetry",
    content: "लहरों से डरकर नौका पार नहीं होती, कोशिश करने वालों की कभी हार नहीं होती...",
    img: "https://via.placeholder.com/300x400?text=Kavita",
    description: "जीवन में संघर्ष और सफलता की एक प्रेरणादायक कविता।"
  })),

  // 6 कहानियाँ (Stories)
  ...Array.from({ length: 6 }).map((_, i) => ({
    authorId: 101,
    title: `रोचक कहानी ${i + 1}`,
    type: "story",
    content: "एक समय की बात है, एक घने जंगल में एक शेर रहता था...",
    img: "https://via.placeholder.com/500x300?text=Kahani",
    description: "नैतिक मूल्यों और साहस पर आधारित एक छोटी और प्यारी कहानी।"
  })),

  // 4 नाटक (Drama) ✅ अब एरर नहीं आएगी
  ...Array.from({ length: 4 }).map((_, i) => ({
    authorId: 101,
    title: `प्रसिद्ध नाटक ${i + 1}`,
    type: "drama",
    content: "पहला दृश्य: मंच पर अंधेरा है, धीरे-धीरे रोशनी बढ़ती है और सूत्रधार का प्रवेश होता है...",
    img: "https://via.placeholder.com/400x500?text=Natak",
    description: "साहित्य जगत का एक जीवंत और मर्मस्पर्शी नाटक।"
  }))
];

const seedDB = async () => {
  try {
    await Content.deleteMany({}); // पुराना सारा डेटा साफ करने के लिए
    await Content.insertMany(dummyData);
    console.log("डेटाबेस में 10 कविताएँ, 6 कहानियाँ और 4 नाटक भर दिए गए हैं! ✅");
    process.exit();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();