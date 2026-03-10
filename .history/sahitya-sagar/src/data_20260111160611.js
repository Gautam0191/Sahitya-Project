// src/data.js

// --- 1. स्लाइडर डेटा ---
export const sliderData = [
  { id: 1, img: "sahity-sagar-heroSection.jpg" },
  { id: 2, img: "sahity-sagar-heroSection.jpg" },
  { id: 3, img: "sahity-sagar-heroSection.jpg" },
  { id: 4, img: "sahity-sagar-heroSection.jpg" },
  { id: 5, img: "sahity-sagar-heroSection.jpg" },
];

// --- 2. मास्टर डेटा (इन्हें सबसे ऊपर रखना जरूरी है ताकि नीचे रेफरेंस मिल सके) ---

// कहानीकार मास्टर लिस्ट
export const authorsData = [
  {
    id: 801,
    name: "मुंशी प्रेमचंद",
    category: "kahanikar",
    type: "kahanikar",
    img: "/authors/prem-chand.jpg",
    books: "32 रचनाएँ",
    bio: "मुंशी प्रेमचंद (1880–1936) हिंदी और उर्दू के महानतम लेखकों में से एक हैं। उन्हें 'उपन्यास सम्राट' और 'कलम का सिपाही' कहा जाता है। उनकी कहानियों में भारतीय ग्रामीण जीवन, सामाजिक कुरीतियाँ और आम आदमी के संघर्ष का सजीव चित्रण मिलता है।",
    works: ["गोदान (उपन्यास)", "गबन (उपन्यास)", "कफ़न (कहानी)", "ईदगाह (कहानी)", "नमक का दारोगा (कहानी)", "बूढ़ी काकी (कहानी)", "पूस की रात (कहानी)", "दो बैलों की कथा (कहानी)"],
    specialization: "यथार्थवाद और सामाजिक सुधार",
    born: "31 जुलाई 1880, लमही (वाराणसी)",
    died: "8 अक्टूबर 1936",
  },
];

// कविता/कवि मास्टर लिस्ट (Bio और Works के साथ)
export const masterPoets = [
  {
    id: 2,
    name: "जयशंकर प्रसाद",
    books: "16 रचनाएँ",
    img: "/authors/jaisankar-prasadh.jpg",
    category: "kavi",
    bio: "जयशंकर प्रसाद हिन्दी कवि, नाटककार, कहानीकार, उपन्यासकार तथा निबन्धकार थे। वे हिन्दी के छायावादी युग के चार प्रमुख स्तंभों में से एक हैं।",
    works: ["कामायनी", "आँसू", "लहर", "चंद्रगुप्त", "ध्रुवस्वामिनी"],
  },
  {
    id: 3,
    name: "महादेवी वर्मा",
    books: "32 रचनाएँ",
    img: "/authors/mhadevi-varma.jpg",
    category: "kavi",
    bio: "महादेवी वर्मा हिंदी भाषा की कवयित्री थीं। उन्हें 'आधुनिक मीरा' भी कहा जाता है।",
    works: ["नीहार", "रश्मि", "नीरजा", "दीपशिखा", "यामा"],
  },
  {
    id: 4,
    name: "दिनकर",
    books: "22 रचनाएँ",
    img: "/authors/ramdramdharisingh-dinkar.jpg",
    category: "kavi",
    bio: "दिनकर जी राष्ट्रकवि के रूप में विख्यात हैं और वीर रस के बेजोड़ कवि हैं।",
    works: ["कुरुक्षेत्र", "रश्मिरथी", "उर्वशी", "परशुराम की प्रतीक्षा"],
  },
  {
    id: 5,
    name: "सुभद्रा कुमारी",
    books: "14 रचनाएँ",
    img: "/authors/subhdhra-kumari-chauhan.jpg",
    category: "kavi",
    bio: "सुभद्रा कुमारी चौहान वीर रस की एकमात्र हिंदी कवयित्री थीं।",
    works: ["झांसी की रानी", "मुकुल", "त्रिधारा", "बिखरे मोती"],
  },
  {
    id: 6,
    name: "निराला",
    books: "32 रचनाएँ",
    img: "/authors/Suryakant-Tripathi-Nirala.jpg",
    category: "kavi",
    bio: "निराला जी अपनी विद्रोही कविताओं और मुक्त छंद के लिए जाने जाते हैं।",
    works: ["अनामिका", "परिमल", "तुलसीदास", "कुकुरमुत्ता"],
  },
  {
    id: 7,
    name: "अज्ञेय",
    books: "56 रचनाएँ",
    img: "/authors/ageya.jpg",
    category: "kavi",
    bio: "सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' आधुनिक हिंदी साहित्य के प्रमुख हस्ताक्षर हैं।",
    works: ["कितनी नावों में कितनी बार", "आँगन के पार द्वार", "शेखर: एक जीवनी"],
  },
];

// --- 3. होम पेज सेक्शन (पसंदीदा लेखक) - मास्टर डेटा से लिंक ---
export const favoriteAuthorsData = [
  authorsData[0],    // प्रेमचंद (id 801)
  masterPoets[0],    // जयशंकर प्रसाद (id 2)
  masterPoets[1],    // महादेवी वर्मा (id 3)
  masterPoets[2],    // दिनकर (id 4)
  masterPoets[3],    // सुभद्रा कुमारी (id 5)
  masterPoets[4],    // निराला (id 6)
  masterPoets[5],    // अज्ञेय (id 7)
];

// --- 4. कविता और कहानियों का लिस्टिंग डेटा ---
export const poetryData = [
  { id: 1, title: "शहर नक्शे से नहीं...", poet: "राशि पांडेय", img: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=500" },
  { id: 2, title: "नदी का विद्रोह", poet: "माणिक बंदोपाध्याय", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500" },
  // ... बाकी डेटा वैसा ही रहेगा
];

export const featuredStory = {
  title: "दाहिना हाथ",
  desc: "सच्चे मनुष्य की कुछ विचित्र बातें होती हैं।",
  date: "23 दिसंबर 2025",
  img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=800",
};

// --- 5. नेविगेशन पेज डेटा (सिंपल कार्ड्स के लिए) ---
export const navbarPoetsData = [
  { id: 101, name: "गजानन माधव मुक्तिबोध", img: "https://upload.wikimedia.org/wikipedia/hi/thumb/5/52/Gajanan_Madhav_Muktibodh.jpg/220px-Gajanan_Madhav_Muktibodh.jpg" },
  { id: 102, name: "अज्ञेय", img: "/authors/ageya.jpg" },
  { id: 111, name: "निराला", img: "/authors/Suryakant-Tripathi-Nirala.jpg" },
  { id: 112, name: "जयशंकर प्रसाद", img: "/authors/jaisankar-prasadh.jpg" },
  { id: 115, name: "रामधारी सिंह दिनकर", img: "/authors/ramdramdharisingh-dinkar.jpg" },
  // ... बाकी लिस्ट वैसे ही
];

export const navbarStorytellersData = [
  { id: 201, name: "मुंशी प्रेमचंद", img: "/authors/prem-chand.jpg" },
  { id: 203, name: "भीष्म साहनी", img: "/authors/Bhisham-Sahni.jpg" },
];

// --- 6. अन्य विधाएं ---
export const nibandhData = [
  { id: "501", name: "रामचंद्र शुक्ल", category: "nibandhkar", img: "/authors/acharya-ramchandra-shukla.jpg", bio: "आचार्य रामचंद्र शुक्ल हिंदी साहित्य के सर्वश्रेष्ठ निबंधकार हैं।", works: ["चिंतामणि", "उत्साह"] },
];

export const geetkarData = [
  { id: 901, name: "अमीर ख़ुसरो", category: "geetkar", img: "/authors/amir-khusro.jpg", bio: "अमीर ख़ुसरो चौदहवीं सदी के प्रमुख कवि और संगीतकार थे।", works: ["छाप तिलक सब छीनी", "पहेलियाँ"] },
];

export const sherData = [{ id: 601, name: "मिर्ज़ा ग़ालिब", category: "shayar", img: "authors/mirja-galib.jpg", bio: "महान शायर", works: ["दीवान-ए-ग़ालिब"] }];
export const doheData = [{ id: 701, name: "कबीर दास", category: "kavi", img: "/authors/kaveer.jpg", bio: "संत कबीर", works: ["बीजक"] }];

// --- 7. मास्टर एक्सपोर्ट (सबसे नीचे) ---
export const allAuthorsData = [
  ...authorsData,
  ...masterPoets,
  ...geetkarData,
  ...nibandhData,
  ...sherData,
  ...doheData,
  ...navbarPoetsData,
  ...navbarStorytellersData,
];