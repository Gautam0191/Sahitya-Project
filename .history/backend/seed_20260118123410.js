const mongoose = require("mongoose");
require("dotenv").config();
const Author = require("./models/Author");
const data = require("./authorsData"); // पक्का करें कि फ़ाइल का नाम और पाथ सही है

const seedDB = async () => {
  try {
    // 1. डेटाबेस से जुड़ना
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding... 🌱");

    // 2. सारा डेटा एक लिस्ट में इकट्ठा करना
    // हमने || [] इसलिए लगाया है ताकि अगर कोई डेटा न मिले तो एरर न आए
    const allAuthors = [
      ...(data.navbarPoetsData || []),
      ...(data.navbarStorytellersData || []),
      ...(data.nibandhData || []),
      ...(data.sherData || []),
      ...(data.doheData || [])
    ];

    if (allAuthors.length === 0) {
      console.log("No data found to upload! ⚠️");
      process.exit();
    }

    // 3. पुराना डेटा साफ़ करना (ताकि डेटा डबल न हो)
    await Author.deleteMany({});
    console.log("Old data cleared. 🧹");

    // 4. नया सारा डेटा एक साथ डालना
    await Author.insertMany(allAuthors);

    console.log(`${allAuthors.length} Authors (including Nibandh, Sher, Dohe) uploaded successfully! ✅`);
    
    // 5. कनेक्शन बंद करना
    mongoose.connection.close();
    process.exit();
  } catch (err) {
    console.error("Error seeding data: ❌", err);
    process.exit(1);
  }
};

seedDB();