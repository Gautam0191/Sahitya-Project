// src/data.js

// --- 1. स्लाइडर और कहानियाँ ---
export const sliderData = [
  { id: 1, img: "sahity-sagar-heroSection.jpg" },
  { id: 2, img: "sahity-sagar-heroSection.jpg" },
  { id: 3, img: "sahity-sagar-heroSection.jpg" },
  { id: 4, img: "sahity-sagar-heroSection.jpg" },
  { id: 5, img: "sahity-sagar-heroSection.jpg" },
];

export const sliderStories = [
  { id: 1, title: "शहर तस्करी से नहीं...", date: "22 दिसंबर 2025", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400" },
  { id: 2, title: "तार्किकता का सिम...", date: "22 दिसंबर 2025", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400" },
  { id: 3, title: "नदी का विद्रोह", date: "21 दिसंबर 2025", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400" },
];

export const featuredStory = {
  title: "दाहिना हाथ",
  desc: "सच्चे मनुष्य की कुछ विचित्र बातें होती हैं।",
  date: "23 दिसंबर 2025",
  img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=800",
};

// --- 2. मास्टर डेटा (Original Records) ---

export const authorsData = [
  {
    id: 801,
    name: "मुंशी प्रेमचंद",
    category: "kahanikar",
    type: "kahanikar",
    img: "/authors/prem-chand.jpg",
    books: "32 रचनाएँ",
    bio: "मुंशी प्रेमचंद (1880–1936) हिंदी और उर्दू के महानतम लेखकों में से एक हैं। उन्हें 'उपन्यास सम्राट' कहा जाता है।",
    works: ["गोदान", "गबन", "कफ़न", "ईदगाह", "नमक का दारोगा"],
    born: "31 जुलाई 1880",
    died: "8 अक्टूबर 1936",
  },
];

export const masterPoets = [
  {
    id: 2,
    name: "जयशंकर प्रसाद",
    books: "16 रचनाएँ",
    img: "/authors/jaisankar-prasadh.jpg",
    category: "kavi",
    bio: "जयशंकर प्रसाद हिन्दी के छायावादी युग के प्रमुख स्तंभ हैं।",
    works: ["कामायनी", "आँसू", "लहर", "चंद्रगुप्त"],
  },
  {
    id: 3,
    name: "महादेवी वर्मा",
    books: "32 रचनाएँ",
    img: "/authors/mhadevi-varma.jpg",
    category: "kavi",
    bio: "आधुनिक मीरा महादेवी वर्मा।",
    works: ["नीहार", "रश्मि", "यामा"],
  },
  {
    id: 4,
    name: "दिनकर",
    books: "22 रचनाएँ",
    img: "/authors/ramdramdharisingh-dinkar.jpg",
    category: "kavi",
    bio: "राष्ट्रकवि रामधारी सिंह दिनकर।",
    works: ["कुरुक्षेत्र", "रश्मिरथी"],
  },
  { id: 5, name: "सुभद्रा कुमारी", books: "14 रचनाएँ", img: "/authors/subhdhra-kumari-chauhan.jpg", category: "kavi", bio: "वीर रस की कवयित्री।", works: ["झांसी की रानी"] },
  { id: 6, name: "निराला", books: "32 रचनाएँ", img: "/authors/Suryakant-Tripathi-Nirala.jpg", category: "kavi", bio: "सूर्यकांत त्रिपाठी निराला।", works: ["अनामिका", "परिमल"] },
  { id: 7, name: "अज्ञेय", books: "56 रचनाएँ", img: "/authors/ageya.jpg", category: "kavi", bio: "सच्चिदानंद हीरानंद वात्स्यायन अज्ञेय।", works: ["शेखर: एक जीवनी"] },
];

// --- 3. होम पेज डेटा (Ref link) ---
export const favoriteAuthorsData = [
  authorsData[0],
  ...masterPoets
];

// --- 4. नेविगेशन पेज डेटा (Navbar lists) ---
export const navbarPoetsData = [
  { id: 101, name: "मुक्तिबोध", img: "https://dummyimage.com/200" },
  { id: 106, name: "नागार्जुन", img: "/authors/baba-nagarjun.jpg" },
  masterPoets[0], masterPoets[4], masterPoets[5] // प्रसाद, निराला, अज्ञेय
];

export const navbarStorytellersData = [
  { id: 201, name: "मुंशी प्रेमचंद", img: "/authors/prem-chand.jpg" },
  { id: 203, name: "भीष्म साहनी", img: "/authors/Bhisham-Sahni.jpg" },
];

export const navbarNatakData = [
  { id: 301, name: "मोहन राकेश", img: "https://dummyimage.com/200" },
  { id: 302, name: "धर्मवीर भारती", img: "https://dummyimage.com/200" },
];

export const navbarGeetData = [
  { id: 401, name: "नीरज", img: "https://dummyimage.com/200" },
  { id: 402, name: "गुलज़ार", img: "https://dummyimage.com/200" },
];

// --- 5. अन्य विधाएं ---
export const poetryData = [
  { id: 1, title: "शहर नक्शे से नहीं", poet: "राशि पांडेय", img: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667" },
];

export const natakData = [
  { id: 1, title: "आषाढ़ का एक दिन", type: "ऐतिहासिक", img: "https://picsum.photos/id/452/600" },
];

export const vishayKavitaData = [
  { id: 1, title: "स्त्री", img: "/authors/woman.jpg" },
  { id: 2, title: "इतिहास", img: "/authors/history.jpg" },
];

export const nibandhData = [
  { id: "501", name: "रामचंद्र शुक्ल", category: "nibandhkar", img: "/authors/acharya-ramchandra-shukla.jpg", bio: "महान निबंधकार", works: ["चिंतामणि"] },
];

export const geetkarData = [
  { id: 901, name: "अमीर ख़ुसरो", category: "geetkar", img: "/authors/amir-khusro.jpg", bio: "सूफी कवि", works: ["छाप तिलक"] },
];

export const sherData = [{ id: 601, name: "मिर्ज़ा ग़ालिब", category: "shayar", img: "authors/mirja-galib.jpg", bio: "शायर", works: ["दीवान-ए-ग़ालिब"] }];
export const doheData = [{ id: 701, name: "कबीर दास", category: "kavi", img: "/authors/kaveer.jpg", bio: "संत", works: ["बीजक"] }];

// --- 6. मास्टर एक्सपोर्ट ---
export const allAuthorsData = [
  ...authorsData,
  ...masterPoets,
  ...navbarPoetsData,
  ...navbarStorytellersData,
  ...navbarNatakData,
  ...navbarGeetData,
  ...nibandhData,
  ...geetkarData,
  ...sherData,
  ...doheData,
];