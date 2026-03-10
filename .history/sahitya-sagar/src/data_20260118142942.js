// src/data.js

// --- 1. स्लाइडर डेटा ---
export const sliderData = [
  { id: 1, img: "sahity-sagar-heroSection.jpg" },
  { id: 2, img: "sahity-sagar-heroSection.jpg" },
  { id: 3, img: "sahity-sagar-heroSection.jpg" },
  { id: 4, img: "sahity-sagar-heroSection.jpg" },
  { id: 5, img: "sahity-sagar-heroSection.jpg" },
];

// --- 4. पसंदीदा लेखक (होम पेज के लिए) ---
// अब हम सीधे navbarPoetsData से इंडेक्स के जरिए लेखक चुनेंगे
export const favoriteAuthorsData = [
  navbarStorytellersData[0], // प्रेमचंद (ID: 210)
  navbarPoetsData[7], // जयशंकर प्रसाद
  navbarPoetsData[11], // महादेवी वर्मा
  navbarPoetsData[14], // दिनकर
  navbarPoetsData[18], // सुभद्रा कुमारी चौहान
  navbarPoetsData[17], // निराला
  navbarPoetsData[0], // अज्ञेय
];



// --- 9. मास्टर एक्सपोर्ट (सबसे नीचे) ---
export const allAuthorsData = [
  ...navbarPoetsData,
  ...navbarStorytellersData,
  ...navbarNatakData,

  ...nibandhData,

  ...sherData,
  ...doheData,
];
