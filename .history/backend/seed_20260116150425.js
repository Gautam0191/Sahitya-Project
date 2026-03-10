const mongoose = require("mongoose");
require("dotenv").config();
const Author = require("./models/Author"); 
const { 
  navbarPoetsData, 
  navbarStorytellersData, 
  nibandhData, // यहाँ निबंध का डेटा जोड़ें
  sherData,    // यहाँ शेर का डेटा जोड़ें
  doheData     // यहाँ दोहे का डेटा जोड़ें
} = require("./authorsData"); // पक्का करें कि ये सब यहाँ से आ रहे हैं

// अब सभी को एक साथ मिला लें
const allAuthors = [
  ...navbarPoetsData, 
  ...navbarStorytellersData,
  ...nibandhData,
  ...sherData,
  ...doheData
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB for seeding... 🌱");

    await Author.deleteMany({}); // पुरानी सफाई

    // structuredWorks के हिसाब से डेटा डालना
    await Author.insertMany(allAuthors);

    console.log(`${allAuthors.length} Authors uploaded successfully! ✅`);
    process.exit();
  })
  .catch((err) => {
    console.error("Error seeding data:", err);
    process.exit(1);
  });