// src/data.js

// --- 1. स्लाइडर डेटा ---
export const sliderData = [
  { id: 1, img: "sahity-sagar-heroSection.jpg" },
  { id: 2, img: "sahity-sagar-heroSection.jpg" },
  { id: 3, img: "sahity-sagar-heroSection.jpg" },
  { id: 4, img: "sahity-sagar-heroSection.jpg" },
  { id: 5, img: "sahity-sagar-heroSection.jpg" },
];

// --- 2. कहानियाँ (Master List - प्रेमचंद का असली डेटा यहीं है) ---
export const authorsData = [
  {
    id: 801,
    name: "मुंशी प्रेमचंद",
    category: "kahanikar",
    type: "kahanikar",
    img: "/authors/prem-chand.jpg",
    books: "32 रचनाएँ",
    bio: "मुंशी प्रेमचंद (1880–1936) हिंदी और उर्दू के महानतम लेखकों में से एक हैं। उन्हें 'उपन्यास सम्राट' और 'कलम का सिपाही' कहा जाता है। उनकी कहानियों में भारतीय ग्रामीण जीवन, सामाजिक कुरीतियाँ और आम आदमी के संघर्ष का सजीव चित्रण मिलता है।",
    works: [
      "गोदान (उपन्यास)",
      "गबन (उपन्यास)",
      "कफ़न (कहानी)",
      "ईदगाह (कहानी)",
      "नमक का दारोगा (कहानी)",
      "बूढ़ी काकी (कहानी)",
      "पूस की रात (कहानी)",
      "दो बैलों की कथा (कहानी)",
    ],
    specialization: "यथार्थवाद और सामाजिक सुधार",
    born: "31 जुलाई 1880, लमही (वाराणसी)",
    died: "8 अक्टूबर 1936",
  },
];

// --- 3. कविता/कवि (Master List - पसंदीदा लेखकों के लिए) ---
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

// --- 4. पसंदीदा लेखक (होम पेज के लिए - रेफरेंस) ---
export const favoriteAuthorsData = [authorsData[0], ...masterPoets];

// --- 5. ओरिजिनल कविता डेटा (10 कार्ड्स) ---
export const poetryData = [
  {
    id: 1,
    title: "शहर नक्शे से नहीं, यात्राओं से पहचाने जाते हैं",
    poet: "राशि पांडेय",
    img: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=500",
  },
  {
    id: 2,
    title: "न नदी का विद्रोह: एक अनकही कहानी",
    poet: "माणिक बंदोपाध्याय",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500",
  },
  {
    id: 3,
    title: "बालमुकुंद गुप्त के भूले-बिसरे साहित्य घराने",
    poet: "सुधीर पचौरी",
    img: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=500",
  },
  {
    id: 4,
    title: "चार नाम, एक इंक़लाब: अमर गाथा",
    poet: "अर्जुन पांडेय",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
  },
  {
    id: 5,
    title: "कलम की धार और समाज का सच",
    poet: "अज्ञात",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500",
  },
  {
    id: 6,
    title: "साहित्य की नई लहर",
    poet: "लेखक का नाम",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    id: 7,
    title: "पुरानी यादें",
    poet: "लेखक का नाम",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500",
  },
  {
    id: 8,
    title: "गाँव की मिट्टी",
    poet: "लेखक का नाम",
    img: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=500",
  },
  {
    id: 9,
    title: "अनकहे शब्द",
    poet: "लेखक का नाम",
    img: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=500",
  },
  {
    id: 10,
    title: "सांध्य गीत",
    poet: "लेखक का नाम",
    img: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=500",
  },
];

// --- 6. कहानियों का डेटा ---
export const featuredStory = {
  title: "दाहिना हाथ",
  desc: "सच्चे मनुष्य की कुछ विचित्र बातें होती हैं। वह समाज की भीड़ से अलग सोचता है और अपने विवेक से निर्णय लेता है।",
  date: "23 दिसंबर 2025",
  img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=800",
};

export const sliderStories = [
  {
    id: 1,
    title: "शहर तस्करी से नहीं...",
    date: "22 दिसंबर 2025",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400",
  },
  {
    id: 2,
    title: "तार्किकता का सिम...",
    date: "22 दिसंबर 2025",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  },
  {
    id: 3,
    title: "नदी का विद्रोह",
    date: "21 दिसंबर 2025",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
  },
  {
    id: 4,
    title: "बालापुर युद्ध...",
    date: "20 दिसंबर 2025",
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=400",
  },
  {
    id: 5,
    title: "नई कहानी",
    date: "19 दिसंबर 2025",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
  },
];

// --- 7. नेविगेशन पेज डेटा (Navbar lists) ---
export const navbarPoetsData = [
  {
    id: 101,
    name: "गजानन माधव मुक्तिबोध",
    img: "/authors/gajanan-madhav-muktibodh.jpg",
  },
  masterPoets[5], // अज्ञेय (ID: 7 वाला मास्टर डेटा अपने आप यहाँ आ जाएगा)
  {
    id: 103,
    name: "शमशेर बहादुर सिंह",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=शमशेर",
  },
  {
    id: 104,
    name: "रघुवीर सहाय",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=रघुवीर",
  },
  {
    id: 105,
    name: "केदारनाथ अग्रवाल",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=केदारनाथ",
  },
  { id: 106, name: "नागार्जुन", img: "/authors/baba-nagarjun.jpg" },

  // --- यहाँ मास्टर डेटा का उपयोग करें ताकि प्रोफाइल सेम रहे ---
  masterPoets[4], // निराला (ID: 6)
  masterPoets[0], // जयशंकर प्रसाद (ID: 2)
  masterPoets[3], // सुभद्रा कुमारी (ID: 5)
  masterPoets[1], // महादेवी वर्मा (ID: 3)
  masterPoets[2], // दिनकर (ID: 4)
  // -----------------------------------------------------

  { id: 116, name: "बच्चन", img: "authors/bachhan.jpg" },
  { id: 117, name: "पंत", img: "authors/pant.jpg" },
  { id: 118, name: "अटल बिहारी", img: "authors/atal-bihari-vajpayee.jpg" },
];

export const navbarStorytellersData = [
  { id: 201, name: "मुंशी प्रेमचंद", img: "/authors/prem-chand.jpg" },
  {
    id: 202,
    name: "यशपाल",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=यशपाल",
  },
  { id: 203, name: "भीष्म साहनी", img: "/authors/Bhisham-Sahni.jpg" },
  {
    id: 204,
    name: "मन्नू भंडारी",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=मन्नू",
  },
  {
    id: 205,
    name: "कमलेश्वर",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=कमलेश्वर",
  },
];

export const navbarNatakData = [
  {
    id: 301,
    name: "मोहन राकेश",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=मोहन",
  },
  {
    id: 302,
    name: "धर्मवीर भारती",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=धर्मवीर",
  },
  {
    id: 303,
    name: "विजय तेंदुलकर",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=विजय",
  },
];

export const navbarGeetData = [
  {
    id: 401,
    name: "नीरज",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=नीरज",
  },
  {
    id: 402,
    name: "गुलज़ार",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=गुलज़ार",
  },
];

// --- 8. नाटक और विधा डेटा ---
export const natakData = [
  {
    id: 1,
    title: "आषाढ़ का एक दिन",
    type: "ऐतिहासिक नाटक",
    img: "https://picsum.photos/id/452/600/600",
  },
  {
    id: 2,
    title: "अंधा युग",
    type: "काव्य नाटक",
    img: "https://picsum.photos/id/1043/600/600",
  },
  {
    id: 3,
    title: "खामोश! अदालत जारी है",
    type: "सामाजिक नाटक",
    img: "https://picsum.photos/id/635/600/600",
  },
  {
    id: 4,
    title: "चंद्रगुप्त",
    type: "ऐतिहासिक नाटक",
    img: "https://picsum.photos/id/1029/600/600",
  },
  {
    id: 5,
    title: "कोणार्क",
    type: "पौराणिक नाटक",
    img: "https://picsum.photos/id/1015/600/600",
  },
];

export const vishayKavitaData = [
  { id: 1, title: "स्त्री", img: "/authors/woman.jpg" },
  { id: 2, title: "इतिहास", img: "/authors/history.jpg" },
  { id: 3, title: "कृष्ण", img: "/authors/god.jpg" },
  { id: 4, title: "बेटी", img: "/authors/beti.jpg" },
  { id: 5, title: "प्रकृति", img: "/authors/nature.jpg" },
  { id: 6, title: "प्रेम", img: "/authors/love.jpg" },
];

export const nibandhData = [
  {
    id: "501",
    name: "रामचंद्र शुक्ल",
    category: "nibandhkar",
    img: "/authors/acharya-ramchandra-shukla.jpg",
    bio: "आचार्य रामचंद्र शुक्ल हिंदी साहित्य के सर्वश्रेष्ठ निबंधकार और आलोचक हैं।",
    works: ["चिंतामणि", "उत्साह", "कविता क्या है"],
  },
  {
    id: "502",
    name: "हजारी प्रसाद द्विवेदी",
    category: "nibandhkar",
    img: "/authors/hajari-prasadh.jpg",
    bio: "हजारी प्रसाद द्विवेदी जी अपने ललित निबंधों के लिए प्रसिद्ध हैं।",
    works: ["कुटज", "अशोक के फूल"],
  },
];

export const geetkarData = [
  {
    id: 901,
    name: "अमीर ख़ुसरो",
    category: "geetkar",
    img: "/authors/amir-khusro.jpg",
    bio: "अमीर ख़ुसरो चौदहवीं सदी के प्रमुख कवि, गायक और संगीतकार थे।",
    works: ["खालिक़ बारी", "छाप तिलक सब छीनी"],
  },
];

export const sherData = [
  {
    id: 601,
    name: "मिर्ज़ा ग़ालिब",
    category: "shayar",
    img: "authors/mirja-galib.jpg",
    bio: "महान शायर",
    works: ["दीवान-ए-ग़ालिब"],
  },
];
export const doheData = [
  {
    id: 701,
    name: "कबीर दास",
    category: "kavi",
    img: "/authors/kaveer.jpg",
    bio: "संत कबीर",
    works: ["बीजक", "साखी"],
  },
];

// --- 9. मास्टर एक्सपोर्ट (सबसे नीचे) ---
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
