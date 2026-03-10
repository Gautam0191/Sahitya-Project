const mongoose = require('mongoose');
require('dotenv').config();
const Author = require('./models/Author'); // आपका मॉडल
const { navbarPoetsData, navbarStorytellersData,  } = require('./authorsData');

// सारा डेटा एक लिस्ट में मिला लें
const allAuthors = [...navbarPoetsData, ...navbarStorytellersData, ...];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB for seeding... 🌱");
    
    // पुराना डेटा साफ़ करें (ताकि डबल न हो)
    await Author.deleteMany({});
    
    // नया डेटा डालें
    await Author.insertMany(allAuthors);
    
    console.log(`${allAuthors.length} Authors uploaded successfully! ✅`);
    process.exit();
  })
  .catch(err => {
    console.error("Error seeding data:", err);
    process.exit(1);
  });