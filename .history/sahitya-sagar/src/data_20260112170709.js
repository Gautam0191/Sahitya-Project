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
    id: 201,
    name: "अज्ञेय",
    category: "kahanikar",
    img: "/authors/ageya.jpg",
    books: "15+ संग्रह",
    bio: "सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' ने हिंदी कहानी में आधुनिकता और व्यक्तिवाद की शुरुआत की।",
    works: ["रोज (गैंग्रीन)", "कोठरी की बात", "शरणार्थी", "परम्परा"],
    specialization: "मनोवैज्ञानिक यथार्थ",
    born: "1911", died: "1987"
  },
  {
    id: 202,
    name: "अमरकांत",
    category: "kahanikar",
    img: "/authors/amarkant.jpg",
    books: "10+ संग्रह",
    bio: "मध्यम वर्ग के जीवन के सजीव और निष्पक्ष चित्रण के लिए विख्यात लेखक।",
    works: ["दोपहर का भोजन", "डिप्टी कलेक्टरी", "ज़िंदगी और जोंक", "हत्यारे"],
    specialization: "सामाजिक यथार्थवाद",
    born: "1925", died: "2014"
  },
  {
    id: 203,
    name: "अमृतलाल नागर",
    category: "kahanikar",
    img: "/authors/amritlal-nagar.jpg",
    books: "20+ रचनाएँ",
    bio: "किस्सागोई की अद्भुत कला के धनी, जिन्होंने लखनऊ के परिवेश को अमर कर दिया।",
    works: ["सुहाग के नूपुर", "मानस का हंस", "एटम बम", "एकदा नैमिषारण्ये"],
    specialization: "सांस्कृतिक और ऐतिहासिक कथा",
    born: "1916", died: "1990"
  },
  {
    id: 204,
    name: "इलाचंद्र जोशी",
    category: "kahanikar",
    img: "/authors/ila-joshi.jpg",
    books: "12+ संग्रह",
    bio: "हिंदी में मनोवैज्ञानिक कहानियों के आधार स्तंभ माने जाते हैं।",
    works: ["धूप रेखा", "दिवाली और होली", "रोमांटिक छाया", "आहुति"],
    specialization: "मनोविश्लेषण",
    born: "1902", died: "1982"
  },
  {
    id: 205,
    name: "उदय प्रकाश",
    category: "kahanikar",
    img: "/authors/uday-prakash.jpg",
    books: "10+ संग्रह",
    bio: "समकालीन कहानी के सबसे चर्चित नाम, जो जादुई यथार्थवाद के लिए जाने जाते हैं।",
    works: ["तिरिछ", "पीली छतरी वाली लड़की", "पाल गोमरा का स्कूटर", "दत्तारेय के दुख"],
    specialization: "जादुई यथार्थवाद",
    born: "1952", died: "सक्रिय"
  },
  {
    id: 206,
    name: "कमलेश्वर",
    category: "kahanikar",
    img: "/authors/kamleshwar.jpg",
    books: "25+ संग्रह",
    bio: "समानांतर कहानी आंदोलन के प्रणेता और नई कहानी के सशक्त हस्ताक्षर।",
    works: ["राजा निरबंसिया", "कितने पाकिस्तान", "दिल्ली में एक मौत", "मांस का दरिया"],
    specialization: "आधुनिक जीवन की जटिलता",
    born: "1932", died: "2007"
  },
  {
    id: 207,
    name: "काशीनाथ सिंह",
    category: "kahanikar",
    img: "/authors/kashinath-singh.jpg",
    books: "10+ रचनाएँ",
    bio: "बनारस के मिजाज़ और बदलते समाज को कहानियों में उतारने वाले प्रमुख लेखक।",
    works: ["काशी का अस्सी", "रेहन पर रग्घू", "सदी का सबसे बड़ा आदमी", "कल की फटेहाल कहानियाँ"],
    specialization: "व्यंग्यात्मक यथार्थ",
    born: "1937", died: "सक्रिय"
  },
  {
    id: 208,
    name: "कृष्णा सोबती",
    category: "kahanikar",
    img: "/authors/krishna-sobti.jpg",
    books: "15+ रचनाएँ",
    bio: "अपनी विशिष्ट भाषाई शैली और साहसिक लेखन के लिए जानी जाने वाली लेखिका।",
    works: ["मित्रो मरजानी", "बादलों के घेरे", "सिक्का बदल गया", "डार से बिछुड़ी"],
    specialization: "नारी अस्मिता और विभाजन",
    born: "1925", died: "2019"
  },
  {
    id: 209,
    name: "गुलशेर खाँ शानी",
    category: "kahanikar",
    img: "/authors/shani.jpg",
    books: "10+ संग्रह",
    bio: "बस्तर के अंचलों और मुस्लिम समाज के यथार्थ को उकेरने वाले कथाकार।",
    works: ["काला जल", "पेड़ में पानी", "युद्ध", "जहाँपनाह"],
    specialization: "आंचलिक यथार्थ",
    born: "1933", died: "1995"
  },
  {
    id: 210,
    name: "चंद्रधर शर्मा गुलेरी",
    category: "kahanikar",
    img: "/authors/guleri.jpg",
    books: "3 कालजयी कहानियाँ",
    bio: "सिर्फ तीन कहानियाँ लिखकर हिंदी साहित्य में 'उसने कहा था' के माध्यम से अमर हुए।",
    works: ["उसने कहा था", "सुखमय जीवन", "बुद्धू का काँटा"],
    specialization: "भावनात्मक और शिल्पगत नवीनता",
    born: "1883", died: "1922"
  },
  {
    id: 211,
    name: "जैनेन्द्र कुमार",
    category: "kahanikar",
    img: "/authors/jainendra.jpg",
    books: "10+ संग्रह",
    bio: "प्रेमचंद के बाद हिंदी कहानी को दार्शनिकता और अंतर्मन की गहराई देने वाले लेखक।",
    works: ["पाजेब", "नीलम देश की राजकन्या", "एक रात", "फाँसी"],
    specialization: "मनोविज्ञान और दर्शन",
    born: "1905", died: "1988"
  },
  {
    id: 212,
    name: "निर्मल वर्मा",
    category: "kahanikar",
    img: "/authors/nirmal-verma.jpg",
    books: "15+ संग्रह",
    bio: "अपनी कहानियों में अकेलेपन, उदासी और स्मृतियों को बुनने वाले जादुई कथाकार।",
    works: ["परिंदे", "जलती झाड़ी", "बीच बहस में", "कौवे और काला पानी"],
    specialization: "स्मृति और एकांत",
    born: "1929", died: "2005"
  },
  {
    id: 213,
    name: "फणीश्वरनाथ रेणु",
    category: "kahanikar",
    img: "/authors/renu.jpg",
    books: "12+ संग्रह",
    bio: "आंचलिक कथाओं के सम्राट, जिन्होंने मिट्टी की सोंधी खुशबू को साहित्य में उतारा।",
    works: ["तीसरी कसम", "लाल पान की बेगम", "रसप्रिया", "पंचलाइट"],
    specialization: "आंचलिक यथार्थ",
    born: "1921", died: "1977"
  },
  {
    id: 214,
    name: "भीष्म साहनी",
    category: "kahanikar",
    img: "/authors/bhisham-sahni.jpg",
    books: "10+ संग्रह",
    bio: "मानवीय संवेदनाओं और विभाजन की त्रासदी के सबसे विश्वसनीय लेखक।",
    works: ["चीफ़ की दावत", "अमृतसर आ गया है", "तमस", "भाग्यरेखा"],
    specialization: "मानवतावाद",
    born: "1915", died: "2003"
  },
  {
    id: 215,
    name: "मन्नू भंडारी",
    category: "kahanikar",
    img: "/authors/mannu-bhandari.jpg",
    books: "15+ रचनाएँ",
    bio: "नई कहानी आंदोलन की सशक्त स्तंभ, जिन्होंने आधुनिक नारी के द्वंद्व को स्वर दिया।",
    works: ["यही सच है", "त्रिशंकु", "एक प्लेट सैलाब", "आपका बंटी"],
    specialization: "नारी मनोविज्ञान",
    born: "1931", died: "2021"
  },
  {
    id: 216,
    name: "मार्कण्डेय",
    category: "kahanikar",
    img: "/authors/markandey.jpg",
    books: "08+ संग्रह",
    bio: "ग्रामीण अंचलों और प्रगतिशील चेतना के महत्वपूर्ण कथाकार।",
    works: ["पान फूल", "हंसा जाइ अकेला", "महुए का पेड़", "भूदान"],
    specialization: "ग्रामीण परिवेश",
    born: "1930", died: "2010"
  },
  {
    id: 217,
    name: "मुंशी प्रेमचंद",
    category: "kahanikar",
    img: "/authors/prem-chand.jpg",
    books: "300+ कहानियाँ",
    bio: "कथा सम्राट जिन्होंने हिंदी कहानी को खेत-खलिहान और आम आदमी से जोड़ा।",
    works: ["गोदान", "कफ़न", "ईदगाह", "नमक का दारोगा", "पूस की रात", "दो बैलों की कथा"],
    specialization: "आदर्शोन्मुख यथार्थवाद",
    born: "1880", died: "1936"
  },
  {
    id: 218,
    name: "मोहन राकेश",
    category: "kahanikar",
    img: "/authors/rakesh.jpg",
    books: "05+ संग्रह",
    bio: "नई कहानी के 'तीन नायकों' में से एक, जिन्होंने आधुनिक संबंधों के बिखराव को दिखाया।",
    works: ["मलबे का मालिक", "इंसान के खंडहर", "नये बादल", "एक और ज़िंदगी"],
    specialization: "शहरी मध्यवर्ग का द्वंद्व",
    born: "1925", died: "1972"
  },
  {
    id: 219,
    name: "यशपाल",
    category: "kahanikar",
    img: "/authors/yashpal.jpg",
    books: "20+ संग्रह",
    bio: "प्रगतिशील लेखक जिनके साहित्य में सामाजिक क्रांति और तर्कशीलता की प्रधानता है।",
    works: ["पर्दा", "फूलों का कुर्ता", "झूठा सच", "पिंजरे की उड़ान"],
    specialization: "मार्क्सवादी विचारधारा",
    born: "1903", died: "1976"
  },
  {
    id: 220,
    name: "राजेन्द्र यादव",
    category: "kahanikar",
    img: "/authors/rajendra-yadav.jpg",
    books: "10+ संग्रह",
    bio: "नई कहानी के महत्वपूर्ण हस्ताक्षर और प्रसिद्ध साहित्यिक पत्रिका 'हंस' के संपादक।",
    works: ["जहाँ लक्ष्मी कैद है", "छोटे-छोटे ताजमहल", "किनारे से किनारे तक", "सारा आकाश"],
    specialization: "आधुनिक दृष्टि",
    born: "1929", died: "2013"
  },
  {
    id: 221,
    name: "राहुल सांकृत्यायन",
    category: "kahanikar",
    img: "/authors/rahul-s.jpg",
    books: "विविध रचनाएँ",
    bio: "महापंडित के नाम से विख्यात, जिन्होंने इतिहास और पुरातत्व को कथाओं में ढाला।",
    works: ["वोल्गा से गंगा", "सतमी के बच्चे", "कनैल की कथा", "बहुरंगी मधुपुरी"],
    specialization: "ऐतिहासिक विकासक्रम",
    born: "1893", died: "1963"
  },
  {
    id: 222,
    name: "शिवप्रसाद सिंह",
    category: "kahanikar",
    img: "/authors/shivprasad-singh.jpg",
    books: "10+ संग्रह",
    bio: "नई कहानी आंदोलन के दौर के महत्वपूर्ण आंचलिक कहानीकार।",
    works: ["कर्मनाशा की हार", "आर-पार की माला", "मुरदा सराये", "नीला चाँद"],
    specialization: "सांस्कृतिक यथार्थ",
    born: "1928", died: "1998"
  },
  {
    id: 223,
    name: "शेखर जोशी",
    category: "kahanikar",
    img: "/authors/shekhar-joshi.jpg",
    books: "08+ संग्रह",
    bio: "श्रमजीवियों और पहाड़ के जनजीवन के मर्मस्पर्शी चितेरे।",
    works: ["कोसी का घटवार", "दाज्यू", "बदबू", "नौरंगी बीमार है"],
    specialization: "सर्वहारा वर्ग का जीवन",
    born: "1932", died: "2022"
  },
  {
    id: 224,
    name: "शैलैश मटियानी",
    category: "kahanikar",
    img: "/authors/matiyani.jpg",
    books: "30+ संग्रह",
    bio: "पहाड़ और महानगर की झुग्गियों के यथार्थ को उकेरने वाले जन-कथाकार।",
    works: ["महाभोज", "अर्धनारीश्वर", "दो दुखों का एक सुख", "चील"],
    specialization: "जनवादी चेतना",
    born: "1931", died: "2001"
  },
  {
    id: 225,
    name: "हरिशंकर परसाई",
    category: "kahanikar",
    img: "/authors/parsai.jpg",
    books: "20+ संग्रह",
    bio: "हिंदी के सबसे बड़े व्यंग्यकार, जिनकी कहानियों में समाज की विद्रूपताओं पर तीखा प्रहार है।",
    works: ["भोलाराम का जीव", "जैसे उनके दिन फिरे", "ठिठुरता हुआ गणतंत्र", "सदाचार का तावीज़"],
    specialization: "सामाजिक व्यंग्य",
    born: "1924", died: "1995"
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
    id: 401, name: "रामचंद्र शुक्ल", category: "nibandhkar", img: "/authors/shukla.jpg",
    works: ["करुणा", "कविता क्या है", "क्रोध", "लोभ और प्रीति"],
  },
  {
    id: 402, name: "हजारी प्रसाद द्विवेदी", category: "nibandhkar", img: "/authors/hazari.jpg",
    works: ["अशोक के फूल", "कुटज", "देवदारु", "नाखून क्यों बढ़ते हैं"],
  },
  {
    id: 403, name: "विद्यानिवास मिश्र", category: "nibandhkar", img: "/authors/mishra.jpg",
    works: ["तुम चंदन हम पानी", "मेरे राम का मुकुट भीग रहा है"],
  }
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
    id: 601, name: "कबीरदास", category: "sant", img: "/authors/kabir.jpg",
    works: ["नीति के दोहे", "गुरु महिमा", "प्रेम का महत्व", "साधु महिमा"],
  },
  {
    id: 602, name: "रहीम", category: "sant", img: "/authors/rahim.jpg",
    works: ["रहीम विलास", "प्रेम और संबंध", "परोपकार के दोहे"],
  },
  {
    id: 603, name: "तुलसीदास", category: "sant", img: "/authors/tulsi.jpg",
    works: ["रामचरितमानस सूत्र", "विनय के पद", "दोहावली"],
  }
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
