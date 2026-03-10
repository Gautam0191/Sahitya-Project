const mongoose = require("mongoose");
require("dotenv").config();
const Author = require("./models/Author");
const data = require("./authorsData");

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB... 🌱");

    // --- चेक करें कि डेटा आ भी रहा है या नहीं ---
    console.log("Poets in File:", data.navbarPoetsData?.length || 0);
    console.log("Stories in File:", data.navbarStorytellersData?.length || 0);
    console.log("Sher/Shayar in File:", data.sherData?.length || 0);
    console.log("Dohe in File:", data.doheData?.length || 0);

    const allAuthors = [
      ...(data.navbarPoetsData || []),
      ...(data.navbarStorytellersData || []),
      ...(data.nibandhData || []),
      ...(data.sherData || []),
      ...(data.doheData || []),
    ];

    if (allAuthors.length === 0) {
      console.log("❌ Error: No authors found to upload! Check your exports.");
      process.exit();
    }

    await Author.deleteMany({});
    console.log("Database Cleared. 🧹");

    await Author.insertMany(allAuthors);
    console.log(`✅ Success! ${allAuthors.length} authors uploaded.`);

    mongoose.connection.close();
    process.exit();
  } catch (err) {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  }
};

seedDB();
