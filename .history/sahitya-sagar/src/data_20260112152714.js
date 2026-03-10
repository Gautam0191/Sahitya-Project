// src/data.js

// --- 1. स्लाइडर डेटा ---
export const sliderData = [
  { id: 1, img: "sahity-sagar-heroSection.jpg" },
  { id: 2, img: "sahity-sagar-heroSection.jpg" },
  { id: 3, img: "sahity-sagar-heroSection.jpg" },
  { id: 4, img: "sahity-sagar-heroSection.jpg" },
  { id: 5, img: "sahity-sagar-heroSection.jpg" },
];

// --- 5. ओरिजिनल कविता डेटा (10 प्रसिद्ध कविताएँ) ---
export const poetryData = [
  {
    id: 1,
    title: "रश्मिरथी (कृष्ण की चेतावनी)",
    poet: "रामधारी सिंह 'दिनकर'",
    img: "/authors/krishna-ki-chetavni.jpg",
  },
  {
    id: 2,
    title: "मधुशाला",
    poet: "हरिवंश राय बच्चन",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500",
  },
  {
    id: 3,
    title: "झाँसी की रानी",
    poet: "सुभद्रा कुमारी चौहान",
    img: "/authors/rani_of_jhansi.jpg",
  },
  {
    id: 4,
    title: "पुष्प की अभिलाषा",
    poet: "माखनलाल चतुर्वेदी",
    img: "/authors/Pushp-Ki-Abhilasha.jpg",
  },
  {
    id: 5,
    title: "कुकुरमुत्ता",
    poet: "सूर्यकांत त्रिपाठी 'निराला'",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500",
  },
  {
    id: 6,
    title: "कामायनी (चिंता सर्ग)",
    poet: "जयशंकर प्रसाद",
    img: "",
  },
  {
    id: 7,
    title: "जो बीत गई सो बात गई",
    poet: "हरिवंश राय बच्चन",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500",
  },
  {
    id: 8,
    title: "बादल राग",
    poet: "सूर्यकांत त्रिपाठी 'निराला'",
    img: "https://images.unsplash.com/photo-1534274988757-a28bf1f539cf?w=500",
  },
  {
    id: 9,
    title: "अँधेरे में",
    poet: "गजानन माधव मुक्तिबोध",
    img: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=500",
  },
  {
    id: 10,
    title: "हिमाद्रि तुंग शृंग से",
    poet: "जयशंकर प्रसाद",
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

// --- 7. कवियों की मास्टर लिस्ट (यही 'Kavi' पेज और 'Navbar' दोनों के लिए काम आएगी) ---
export const navbarPoetsData = [
  {
    id: 101,
    name: "अज्ञेय",
    category: "kavi",
    img: "/authors/ageya.jpg",
    books: "56 रचनाएँ",
    bio: "सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' आधुनिक हिंदी साहित्य के प्रमुख हस्ताक्षर हैं।",
    works: ["कितनी नावों में कितनी बार", "आँगन के पार द्वार", "शेखर: एक जीवनी"],
  },
  {
    id: 102,
    name: "अटल बिहारी वाजपेयी",
    category: "kavi",
    img: "/authors/atal-bihari-vajpayee.jpg",
    books: "05 रचनाएँ",
    bio: "भारत के पूर्व प्रधानमंत्री और प्रखर वक्ता, जिनकी कविताएँ राष्ट्रवाद और मानवीय संवेदनाओं से ओत-प्रोत हैं।",
    works: ["मेरी इक्यावन कविताएँ", "हार नहीं मानूँगा"],
  },
  {
    id: 103,
    name: "अमीर खुसरो",
    category: "kavi",
    img: "/authors/khusro.jpg",
    books: "100+ रचनाएँ",
    bio: "प्रथम मुस्लिम कवि जिन्होंने हिंदी शब्दों का खुलकर प्रयोग किया। वे अपनी पहेलियों और मुकरियों के लिए प्रसिद्ध हैं।",
    works: ["खालिक-बारी", "पहेलियाँ", "मुकरियाँ"],
  },
  {
    id: 104,
    name: "अयोध्या सिंह उपाध्याय 'हरिऔध'",
    category: "kavi",
    img: "/authors/hariaudh.jpg",
    books: "15 रचनाएँ",
    works: ["प्रियप्रवास", "वैदेही वनवास", "अधखिला फूल"],
  },
  {
    id: 105,
    name: "कबीरदास",
    category: "kavi",
    img: "/authors/kabir.jpg",
    books: "बीजक",
    bio: "समाज सुधारक और निर्गुण भक्ति धारा के प्रमुख संत कवि।",
    works: ["साखी", "सबद", "रमैनी"],
  },
  {
    id: 106,
    name: "गजानन माधव मुक्तिबोध",
    category: "kavi",
    img: "/authors/gajanan-madhav-muktibodh.jpg",
    books: "08 रचनाएँ",
    works: ["चाँद का मुँह टेढ़ा है", "अँधेरे में"],
  },
  {
    id: 107,
    name: "गोपालदास 'नीरज'",
    category: "kavi",
    img: "/authors/neeraj.jpg",
    books: "25 रचनाएँ",
    works: ["प्राण गीत", "दर्द दिया है", "आसावरी"],
  },
  {
    id: 108,
    name: "जयशंकर प्रसाद",
    category: "kavi",
    img: "/authors/jaisankar-prasadh.jpg",
    books: "16 रचनाएँ",
    bio: "हिन्दी के छायावादी युग के चार प्रमुख स्तंभों में से एक हैं।",
    works: ["कामायनी", "आँसू", "लहर", "चंद्रगुप्त"],
  },
  {
    id: 109,
    name: "तुलसीदास",
    category: "kavi",
    img: "/authors/tulsidas.jpg",
    books: "12 रचनाएँ",
    bio: "भक्ति काल के रामभक्ति शाखा के प्रमुख कवि जिन्होंने 'रामचरितमानस' की रचना की।",
    works: ["रामचरितमानस", "विनय पत्रिका", "हनुमान चालीसा"],
  },
  {
    id: 110,
    name: "दुष्यंत कुमार",
    category: "kavi",
    img: "/authors/dushyant.jpg",
    books: "05 रचनाएँ",
    bio: "हिंदी गज़ल को आम आदमी की आवाज़ बनाने वाले क्रांतिकारी कवि।",
    works: ["साये में धूप", "एक कंठ विषपायी"],
  },
  {
    id: 111,
    name: "नागार्जुन",
    category: "kavi",
    img: "/authors/baba-nagarjun.jpg",
    books: "25 रचनाएँ",
    works: ["युगधारा", "सतरंगे पंखों वाली", "बादल को घिरते देखा है"],
  },
  {
    id: 112,
    name: "महादेवी वर्मा",
    category: "kavi",
    img: "/authors/mhadevi-varma.jpg",
    books: "32 रचनाएँ",
    bio: "आधुनिक मीरा के नाम से प्रसिद्ध छायावादी कवयित्री।",
    works: ["यामा", "नीहार", "रश्मि", "दीपशिखा"],
  },
  {
    id: 113,
    name: "मैथिलीशरण गुप्त",
    category: "kavi",
    img: "/authors/maithili.jpg",
    books: "40 रचनाएँ",
    bio: "खड़ी बोली के महत्वपूर्ण कवि और भारत के प्रथम राष्ट्रकवि।",
    works: ["साकेत", "भारत-भारती", "यशोधरा"],
  },
  {
    id: 114,
    name: "मीराबाई",
    category: "kavi",
    img: "/authors/mira.jpg",
    books: "04 रचनाएँ",
    works: ["पदावली", "राग गोविंद", "गीत गोविंद टीका"],
  },
  {
    id: 115,
    name: "रामधारी सिंह 'दिनकर'",
    category: "kavi",
    img: "/authors/ramdramdharisingh-dinkar.jpg",
    books: "22 रचनाएँ",
    bio: "राष्ट्रकवि के रूप में विख्यात और वीर रस के बेजोड़ कवि।",
    works: ["कुरुक्षेत्र", "रश्मिरथी", "उर्वशी"],
  },
  {
    id: 116,
    name: "रसखान",
    category: "kavi",
    img: "/authors/raskhan.jpg",
    books: "प्रसिद्ध सवैये",
    works: ["सुजान रसखान", "प्रेम वाटिका"],
  },
  {
    id: 117,
    name: "रहीम",
    category: "kavi",
    img: "/authors/rahim.jpg",
    books: "दोहावली",
    works: ["रहीम सतसई", "मदनाष्टक"],
  },
  {
    id: 118,
    name: "सूर्यकांत त्रिपाठी 'निराला'",
    category: "kavi",
    img: "/authors/Suryakant-Tripathi-Nirala.jpg",
    books: "32 रचनाएँ",
    bio: "विद्रोही कविताओं और मुक्त छंद के प्रवर्तक।",
    works: ["अनामिका", "परिमल", "तुलसीदास", "कुकुरमुत्ता"],
  },
  {
    id: 119,
    name: "सुभद्रा कुमारी चौहान",
    category: "kavi",
    img: "/authors/subhdhra-kumari-chauhan.jpg",
    books: "14 रचनाएँ",
    works: ["झांसी की रानी", "मुकुल", "बिखरे मोती"],
  },
  {
    id: 120,
    name: "सुमित्रानंदन पंत",
    category: "kavi",
    img: "/authors/pant.jpg",
    books: "28 रचनाएँ",
    bio: "प्रकृति के सुकुमार कवि कहे जाने वाले छायावाद के स्तंभ।",
    works: ["चिदंबरा", "पल्लव", "गुंजन"],
  },
  {
    id: 121,
    name: "सूरदास",
    category: "kavi",
    img: "/authors/surdas.jpg",
    books: "05 रचनाएँ",
    works: ["सूरसागर", "सूरसारावली", "साहित्य-लहरी"],
  },
  {
    id: 122,
    name: "हरिवंश राय बच्चन",
    category: "kavi",
    img: "/authors/bachhan.jpg",
    books: "30 रचनाएँ",
    works: ["मधुशाला", "निशा निमंत्रण", "मधुबाला"],
  },
];
export const navbarStorytellersData = [
  {
    id: 208,
    name: "अज्ञेय",
    category: "kahanikar",
    img: "/authors/ageya.jpg",
    books: "15+ संग्रह",
    bio: "सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' आधुनिकतावादी कहानी के प्रणेता थे।",
    works: ["रोज (गैंग्रीन)", "कोठरी की बात", "शरणार्थी", "जयडोल"],
    specialization: "मनोवैज्ञानिक और व्यक्तिपरक यथार्थ",
    born: "7 मार्च 1911",
    died: "4 अप्रैल 1987"
  },
  {
    id: 210,
    name: "अमरकांत",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=अमरकांत",
    books: "10+ संग्रह",
    bio: "नई कहानी आंदोलन के प्रमुख स्तंभ, जिन्होंने मध्यम वर्ग के जीवन का सजीव चित्रण किया।",
    works: ["दोपहर का भोजन", "डिप्टी कलेक्टरी", "ज़िंदगी और जोंक", "हत्यारे"],
    specialization: "सामाजिक यथार्थवाद",
    born: "1 जुलाई 1925",
    died: "17 फरवरी 2014"
  },
  {
    id: 205,
    name: "कमलेश्वर",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=कमलेश्वर",
    books: "20+ संग्रह",
    bio: "समानांतर कहानी आंदोलन के सूत्रधार और आधुनिक बोध के प्रखर लेखक।",
    works: ["राजा निरबंसिया", "कितने पाकिस्तान", "दिल्ली में एक मौत", "खोई हुई दिशाएँ"],
    specialization: "आधुनिक जीवन की विसंगतियां",
    born: "6 जनवरी 1932",
    died: "27 जनवरी 2007"
  },
  {
    id: 209,
    name: "चंद्रधर शर्मा गुलेरी",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=गुलेरी",
    books: "3 कालजयी कहानियाँ",
    bio: "हिंदी कहानी की 'मील का पत्थर' मानी जाने वाली कहानी 'उसने कहा था' के लेखक।",
    works: ["उसने कहा था", "सुखमय जीवन", "बुद्धू का काँटा"],
    specialization: "पूर्वदीप्ति (Flashback) शैली",
    born: "7 जुलाई 1883",
    died: "12 सितंबर 1922"
  },
  {
    id: 207,
    name: "जैनेन्द्र कुमार",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=जैनेन्द्र",
    books: "10+ संग्रह",
    bio: "हिंदी कहानी में मनोवैज्ञानिक धारा के प्रवर्तक जिन्होंने व्यक्ति के अंतर्मन को प्रधानता दी।",
    works: ["पाजेब", "नीलम देश की राजकन्या", "एक रात", "पत्नी"],
    specialization: "मनोविश्लेषणवाद",
    born: "2 जनवरी 1905",
    died: "24 दिसंबर 1988"
  },
  {
    id: 206,
    name: "फणीश्वरनाथ रेणु",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=रेणु",
    books: "12+ संग्रह",
    bio: "आंचलिक कथा साहित्य के पुरोधा जिन्होंने ग्रामीण अंचलों की खुशबू को साहित्य में उतारा।",
    works: ["तीसरी कसम", "लाल पान की बेगम", "रसप्रिया", "ठुमरी"],
    specialization: "आंचलिकता और लोक संस्कृति",
    born: "4 मार्च 1921",
    died: "11 अप्रैल 1977"
  },
  {
    id: 203,
    name: "भीष्म साहनी",
    category: "kahanikar",
    img: "/authors/Bhisham-Sahni.jpg",
    books: "10+ संग्रह",
    bio: "मानवीय मूल्यों के चितेरे लेखक, जिनकी कहानियों में विभाजन और सामाजिक संघर्ष झलकता है।",
    works: ["चीफ़ की दावत", "अमृतसर आ गया है", "तमस", "वाङचू"],
    specialization: "मध्यवर्गीय समाज और विभाजन की त्रासदी",
    born: "8 अगस्त 1915",
    died: "11 जुलाई 2003"
  },
  {
    id: 204,
    name: "मन्नू भंडारी",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=मन्नू",
    books: "15+ रचनाएँ",
    bio: "स्त्री मन के सूक्ष्म द्वंद्वों और आधुनिक रिश्तों की जटिलता को उकेरने वाली प्रमुख लेखिका।",
    works: ["यही सच है", "त्रिशंकु", "मैं हार गई", "आपका बंटी"],
    specialization: "स्त्री विमर्श और नारी मनोविज्ञान",
    born: "3 अप्रैल 1931",
    died: "15 नवंबर 2021"
  },
  {
    id: 201,
    name: "मुंशी प्रेमचंद",
    category: "kahanikar",
    img: "/authors/prem-chand.jpg",
    books: "300+ कहानियाँ",
    bio: "उपन्यास सम्राट और कलम के सिपाही। ग्रामीण भारत और सामाजिक विसंगतियों के महान चितेरे।",
    works: ["गोदान", "कफ़न", "ईदगाह", "नमक का दारोगा", "पूस की रात"],
    specialization: "यथार्थवाद और आदर्शोन्मुख यथार्थ",
    born: "31 जुलाई 1880",
    died: "8 अक्टूबर 1936"
  },
  {
    id: 202,
    name: "यशपाल",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=यशपाल",
    books: "20+ संग्रह",
    bio: "प्रगतिशील साहित्य के प्रमुख हस्ताक्षर जिन्होंने मार्क्सवादी चेतना को स्वर दिया।",
    works: ["पर्दा", "फूलों का कुर्ता", "झूठा सच", "पिंजरे की उड़ान"],
    specialization: "मार्क्सवादी विचारधारा और सामाजिक यथार्थ",
    born: "3 दिसंबर 1903",
    died: "26 दिसंबर 1976"
  }
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

// --- नाटककार और उनके नाटक (सब एक ही जगह) ---
export const navbarNatakData = [
  {
    id: 301,
    name: "मोहन राकेश",
    category: "natak",
    img: "/authors/rakesh.jpg",
    books: "प्रसिद्ध नाटककार",
    bio: "आधुनिक हिंदी नाटक के प्रवर्तक जिन्होंने 'आषाढ़ का एक दिन' जैसे कालजयी नाटक रचे।",
    works: ["आषाढ़ का एक दिन", "आधे-अधूरे"], // ✅ अब यह टेक्स्ट बन गया, एरर नहीं आएगा
  },
  {
    id: 302,
    name: "धर्मवीर भारती",
    category: "natak",
    img: "/authors/dharmveer.jpg",
    books: "काव्य नाटक विशेषज्ञ",
    bio: "बहुमुखी प्रतिभा के धनी लेखक, जिनका 'अंधा युग' हिंदी रंगमंच का सबसे महत्वपूर्ण नाटक है।",
    works: ["अंधा युग"], 
  },
  {
    id: 303,
    name: "विजय तेंदुलकर",
    category: "natak",
    img: "/authors/vijay.jpg",
    books: "सामाजिक नाटककार",
    works: ["खामोश! अदालत जारी है"],
  },
  {
    id: 304,
    name: "जयशंकर प्रसाद",
    category: "natak",
    img: "/authors/jaisankar-prasadh.jpg",
    works: ["चंद्रगुप्त", "स्कंदगुप्त"],
  },
];

export const natakData = [
  {
    id: 1,
    title: "आषाढ़ का एक दिन",
    type: "ऐतिहासिक नाटक",
    authorId: 301,
    img: "https://picsum.photos/id/452/600/600",
  },
  {
    id: 2,
    title: "अंधा युग",
    type: "काव्य नाटक",
    authorId: 302,
    img: "https://picsum.photos/id/1043/600/600",
  },
  {
    id: 3,
    title: "खामोश! अदालत जारी है",
    type: "सामाजिक नाटक",
    authorId: 303,
    img: "https://picsum.photos/id/635/600/600",
  },
  {
    id: 4,
    title: "चंद्रगुप्त",
    type: "ऐतिहासिक नाटक",
    authorId: 304, 
    img: "https://picsum.photos/id/1029/600/600",
  },
  {
    id: 5,
    title: "कोणार्क",
    type: "पौराणिक नाटक",
    authorId: 301, // या संबंधित लेखक की ID
    img: "https://picsum.photos/id/1015/600/600",
  }
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
  ...navbarPoetsData,
  ...navbarStorytellersData,
  ...navbarNatakData,

  ...nibandhData,

  ...sherData,
  ...doheData,
];
