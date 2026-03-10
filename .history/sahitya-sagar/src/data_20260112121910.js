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
    name: "तुलसीदास",
    category: "kavi",
    img: "/authors/tulsidas.jpg", // अपनी इमेज का पाथ यहाँ डालें
    books: "12 रचनाएँ",
    bio: "गोस्वामी तुलसीदास हिंदी साहित्य के भक्ति काल के रामभक्ति शाखा के प्रमुख कवि थे। उन्होंने 'रामचरितमानस' जैसा महान महाकाव्य रचा, जो भारतीय संस्कृति का आधार स्तंभ है।",
    works: ["रामचरितमानस", "विनय पत्रिका", "कवितावली", "दोहावली", "हनुमान चालीसा"],
  },
  {
    id: 104,
    name: "सूरदास",
    category: "kavi",
    img: "/authors/surdas.jpg",
    books: "05 रचनाएँ",
    bio: "महाकवि सूरदास हिंदी साहित्य के सूर्य माने जाते हैं। वे भक्ति काल के सगुण धारा की कृष्णभक्ति शाखा के सर्वोपरि कवि हैं। उन्होंने भगवान कृष्ण की बाल-लीलाओं का अद्भुत वर्णन किया है।",
    works: ["सूरसागर", "सूरसारावली", "साहित्य-लहरी"],
  },
  {
    id: 105,
    name: "मीराबाई",
    category: "kavi",
    img: "/authors/mira.jpg",
    books: "04 रचनाएँ",
    bio: "मीराबाई 16वीं शताब्दी की एक हिंदू आध्यात्मिक कवयित्री और कृष्ण भक्त थीं। उनकी कविताएँ प्रेम, भक्ति और समर्पण का प्रतीक हैं, जो आज भी पूरे भारत में लोकप्रिय हैं।",
    works: ["पदावली", "नरसी जी रो माहेरो", "राग गोविंद", "गीत गोविंद टीका"],
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

// --- 8. कहानीकार पेज के लिए (20 कार्ड्स) ---
export const navbarStorytellersData = [
  authorsData[0], // मुंशी प्रेमचंद (Master ID: 801 से लिंक)
  {
    id: 202,
    name: "यशपाल",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=यशपाल",
    bio: "यशपाल हिंदी साहित्य के प्रमुख कहानीकार और उपन्यासकार थे। वे क्रांतिकारी आंदोलनों से भी जुड़े रहे और जेल भी गए। उनका लेखन सामाजिक यथार्थ पर आधारित है।",
    works: ["पर्दा", "ज्ञानदान", "पिंजरे की उड़ान", "झूठा सच", "अमिता"],
  },
  {
    id: 203,
    name: "भीष्म साहनी",
    category: "kahanikar",
    img: "/authors/Bhisham-Sahni.jpg",
    bio: "भीष्म साहनी मानवीय संवेदनाओं और विभाजन की त्रासदियों के बेजोड़ लेखक थे। उन्हें 'तमस' के लिए जाना जाता है।",
    works: ["चीफ की दावत", "तमस", "अमृतसर आ गया है", "भाग्यरेखा", "पालो"],
  },
  {
    id: 204,
    name: "मन्नू भंडारी",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=मन्नू",
    bio: "मन्नू भंडारी नई कहानी आंदोलन की प्रमुख स्तंभ थीं। उन्होंने मध्यम वर्गीय परिवारों के द्वंद्व और स्त्री मन का सजीव चित्रण किया।",
    works: ["यही सच है", "मैं हार गई", "आपका बंटी", "त्रिशंकु", "एक प्लेट सैलाब"],
  },
  {
    id: 205,
    name: "कमलेश्वर",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=कमलेश्वर",
    bio: "कमलेश्वर ने नई कहानी आंदोलन को नई दिशा दी। वे सारिका जैसी महत्वपूर्ण पत्रिकाओं के संपादक भी रहे।",
    works: ["कितनी पाकिस्तान", "राजा निरबंसिया", "खोई हुई दिशाएं", "बयान"],
  },
  {
    id: 206,
    name: "मोहन राकेश",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=मोहन",
    bio: "मोहन राकेश ने आधुनिक जीवन के अकेलेपन और टूटने हुए संबंधों को अपनी कहानियों का विषय बनाया।",
    works: ["मलबे का मालिक", "एक और जिंदगी", "इंसान के खंडहर", "नये बादल"],
  },
  {
    id: 207,
    name: "चंद्रधर शर्मा 'गुलेरी'",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=गुलेरी",
    bio: "गुलेरी जी ने कम लिखकर भी हिंदी कहानी में वो मुकाम हासिल किया जो दूसरों के लिए सपना है। 'उसने कहा था' मील का पत्थर है।",
    works: ["उसने कहा था", "सुखमय जीवन", "बुद्धू का कांटा"],
  },
  {
    id: 208,
    name: "जैनेन्द्र कुमार",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=जैनेन्द्र",
    bio: "जैनेन्द्र कुमार को हिंदी कहानी का 'शरदचंद्र' कहा जाता है। उन्होंने मनोविज्ञान को साहित्य से जोड़ा।",
    works: ["पाजेब", "नीलम देश की राजकन्या", "एक रात", "दो चिड़ियाँ"],
  },
  {
    id: 209,
    name: "फणीश्वर नाथ 'रेणु'",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=रेणु",
    bio: "आंचलिक कहानियों के बेताज बादशाह। उन्होंने बिहार के ग्रामीण अंचल की मिट्टी की महक को कहानियों में पिरोया।",
    works: ["तीसरी कसम", "लाल पान की बेगम", "रसप्रिया", "ठुमरी"],
  },
  {
    id: 210,
    name: "अमरकांत",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=अमरकांत",
    bio: "अमरकांत की कहानियों में आम आदमी का संघर्ष और मध्यम वर्ग का स्वाभिमान साफ झलकता है।",
    works: ["दोपहर का भोजन", "डिप्टी कलेक्टरी", "जिंदगी और जोंक", "हथियारे"],
  },
  {
    id: 211,
    name: "निर्मल वर्मा",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=निर्मल",
    bio: "निर्मल वर्मा ने हिंदी कहानी को नई भाषा और शिल्प दिया। उनकी कहानियों में गहरा सन्नाटा और उदासी का सौंदर्य मिलता है।",
    works: ["परिंदे", "पिछली गर्मियों में", "बीच बहस में", "कौवे और काला पानी"],
  },
  {
    id: 212,
    name: "कृष्णा सोबती",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=कृष्णा",
    bio: "अपनी विशिष्ट भाषाई शैली और बेबाक स्त्री पात्रों के लिए प्रसिद्ध। उन्होंने समाज के दोहरे चरित्र पर कड़ा प्रहार किया।",
    works: ["मित्रो मरजानी", "बादलों के घेरे", "सिक्का बदल गया", "डार से बिछुड़ी"],
  },
  {
    id: 213,
    name: "हरिशंकर परसाई",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=परसाई",
    bio: "हिंदी के सबसे बड़े व्यंग्यकार। उनकी कहानियाँ हँसाते-हँसाते कड़वे सच का आईना दिखा देती हैं।",
    works: ["भोलाराम का जीव", "सदाचार का ताबीज", "निठल्ले की डायरी"],
  },
  {
    id: 214,
    name: "राजेंद्र यादव",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=राजेंद्र",
    bio: "नई कहानी के पुरोधा और 'हंस' पत्रिका के यशस्वी संपादक। उन्होंने कहानी को समाज से जोड़ने का काम किया।",
    works: ["जहाँ लक्ष्मी कैद है", "छोटा आदमी", "किनारे से किनारे तक"],
  },
  {
    id: 215,
    name: "उदय प्रकाश",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=उदय",
    bio: "समकालीन कहानी के सबसे चर्चित नाम। उनकी कहानियाँ जादुई यथार्थवाद और तीखे कटाक्ष से भरी हैं।",
    works: ["तिरिछ", "पीली छतरी वाली लड़की", "पालगोमरा का स्कूटर"],
  },
  {
    id: 216,
    name: "शेखर जोशी",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=शेखर",
    bio: "पहाड़ी जीवन और विस्थापन के दर्द को शेखर जोशी ने बहुत ही संवेदनशीलता से अपनी कहानियों में उकेरा है।",
    works: ["कोसी का घटवार", "दाज्यू", "बदबू", "नौरंगी बीमार है"],
  },
  {
    id: 217,
    name: "अज्ञेय",
    category: "kahanikar",
    img: "/authors/ageya.jpg",
    bio: "सच्चिदानंद हीरानंद वात्स्यायन अज्ञेय ने कविता के साथ कहानी विधा को भी नई ऊंचाइयों पर पहुँचाया।",
    works: ["रोज़ (गैंग्रीन)", "कोठरी की बात", "शरणार्थी", "जयदोल"],
  },
  {
    id: 218,
    name: "ज्ञानरंजन",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=ज्ञान",
    bio: "ज्ञानरंजन ने अपनी कहानियों के माध्यम से समाज की रूढ़ियों और मध्यवर्गीय जड़ता पर सवाल उठाए।",
    works: ["पिता", "घंटा", "यात्रा", "बहिर्गमन"],
  },
  {
    id: 219,
    name: "मृदुला गर्ग",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=मृदुला",
    bio: "स्त्री-पुरुष संबंधों और समाज के जटिल तानों-बानों को मृदुला गर्ग ने बहुत ही साहसी ढंग से लिखा है।",
    works: ["दुनिया का कायदा", "कितनी कैदें", "मेरे देश की मिट्टी अहा"],
  },
  {
    id: 220,
    name: "शिवप्रसाद सिंह",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=शिवप्रसाद",
    bio: "शिवप्रसाद सिंह की कहानियों में लोक जीवन का रस और परंपराओं का टकराव बखूबी दिखता है।",
    works: ["कर्मनाशा की हार", "आर पार की माला", "धरातल"],
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
