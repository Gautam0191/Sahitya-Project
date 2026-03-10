// src/data.js

// --- 1. स्लाइडर डेटा ---
export const sliderData = [
  { id: 1, img: "sahity-sagar-heroSection.jpg" },
  { id: 2, img: "sahity-sagar-heroSection.jpg" },
  { id: 3, img: "sahity-sagar-heroSection.jpg" },
  { id: 4, img: "sahity-sagar-heroSection.jpg" },
  { id: 5, img: "sahity-sagar-heroSection.jpg" },
];


export const navbarStorytellersData = [
 {
    id: 202,
    name: "अमरकांत",
    category: "kahanikar",
    categoryLabel: "मध्यम वर्ग के कथाकार",
    img: "/authors/amarkant.jpg",
    birthDate: "1 जुलाई 1925",
    deathDate: "17 फरवरी 2014",
    birthPlace: "बलिया, उत्तर प्रदेश",
    nickName: "अमरकांत",
    bio: "मध्यम वर्ग के जीवन के सजीव और निष्पक्ष चित्रण के लिए विख्यात लेखक।",
    longBio: "अमरकांत नई कहानी आंदोलन के एक प्रमुख हस्ताक्षर थे। उन्होंने अपनी कहानियों में शहरी और ग्रामीण मध्यम वर्ग के संघर्षों, विसंगतियों और उनकी जिजीविषा को बहुत ही सहजता से चित्रित किया है।",
    structuredWorks: {
      "प्रसिद्ध कहानियाँ": ["दोपहर का भोजन", "डिप्टी कलेक्टरी", "ज़िंदगी और जोंक", "हत्यारे"],
      "कहानी संग्रह": ["देश के लोग", "मौत का नगर", "कुहासा"],
      "उपन्यास": ["इन्हीं हथियारों से", "सूखा पत्ता"]
    }
  },
  {
    id: 203,
    name: "अमृतलाल नागर",
    category: "kahanikar",
    categoryLabel: "सांस्कृतिक किस्सागो",
    img: "/authors/amritlal-nagar.jpg",
    birthDate: "17 अगस्त 1916",
    deathDate: "23 फरवरी 1990",
    birthPlace: "आगरा, उत्तर प्रदेश",
    nickName: "नागर जी",
    bio: "किस्सागोई की अद्भुत कला के धनी, जिन्होंने इतिहास और लोकजीवन को अमर किया।",
    longBio: "नागर जी के साहित्य में लखनऊ की तहजीब और भारतीय इतिहास का गहरा रंग मिलता है। वे पात्रों के चरित्र चित्रण में माहिर थे।",
    structuredWorks: {
      "प्रमुख उपन्यास": ["मानस का हंस", "खंजन नयन", "सुहाग के नूपुर"],
      "कहानी संग्रह": ["एटम बम", "एकदा नैमिषारण्ये", "पीपल की परी"]
    }
  },
  {
    id: 204,
    name: "इलाचंद्र जोशी",
    category: "kahanikar",
    categoryLabel: "मनोवैज्ञानिक कथाकार",
    img: "/authors/ila-joshi.jpg",
    birthDate: "13 दिसंबर 1902",
    deathDate: "1982",
    birthPlace: "अल्मोड़ा, उत्तराखंड",
    nickName: "जोशी जी",
    bio: "हिंदी में मनोवैज्ञानिक कहानियों के आधार स्तंभ माने जाते हैं।",
    longBio: "जोशी जी ने हिंदी कहानी को फ्रायड के मनोविश्लेषण से जोड़कर नई ऊंचाइयां दीं। उनकी कहानियाँ मानवीय मन की गहरी परतों को खोलती हैं।",
    structuredWorks: {
      "कहानी संग्रह": ["धूप रेखा", "दिवाली और होली", "रोमांटिक छाया", "आहुति"],
      "उपन्यास": ["जहाज का पंछी", "सन्यासी"]
    }
  },
  {
    id: 205,
    name: "उदय प्रकाश",
    category: "kahanikar",
    categoryLabel: "जादुई यथार्थवादी",
    img: "/authors/uday-prakash.jpg",
    birthDate: "1 जनवरी 1952",
    deathDate: "सक्रिय",
    birthPlace: "मध्य प्रदेश",
    nickName: "उदय",
    bio: "समकालीन कहानी के सबसे चर्चित नाम, जो जादुई यथार्थवाद के लिए जाने जाते हैं।",
    longBio: "उदय प्रकाश आधुनिक सत्ता के शोषण और राजनीति के क्रूर यथार्थ को अपनी कहानियों में फंतासी के साथ पिरोते हैं।",
    structuredWorks: {
      "प्रसिद्ध कहानियाँ": ["तिरिछ", "पाल गोमरा का स्कूटर", "दत्तारेय के दुख"],
      "लघु उपन्यास": ["पीली छतरी वाली लड़की", "अरेबा-परेबा"]
    }
  },
  {
    id: 206,
    name: "कमलेश्वर",
    category: "kahanikar",
    categoryLabel: "समानांतर कहानी के नायक",
    img: "/authors/kamleshwar.jpg",
    birthDate: "6 जनवरी 1932",
    deathDate: "27 जनवरी 2007",
    birthPlace: "मैनपुरी, उत्तर प्रदेश",
    nickName: "कमलेश्वर",
    bio: "समानांतर कहानी आंदोलन के प्रणेता और नई कहानी के सशक्त हस्ताक्षर।",
    structuredWorks: {
      "कहानी संग्रह": ["राजा निरबंसिया", "मांस का दरिया", "कस्बे का आदमी"],
      "उपन्यास": ["कितने पाकिस्तान", "काली आँधी"]
    }
  },
  {
    id: 207,
    name: "काशीनाथ सिंह",
    category: "kahanikar",
    categoryLabel: "बनारसी मिज़ाज के लेखक",
    img: "/authors/kashinath-singh.jpg",
    birthDate: "1 जनवरी 1937",
    deathDate: "सक्रिय",
    birthPlace: "चंदौली, उत्तर प्रदेश",
    nickName: "काशी",
    bio: "बनारस के मिजाज़ और बदलते समाज को कहानियों में उतारने वाले प्रमुख लेखक।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["काशी का अस्सी", "रेहन पर रग्घू", "सदी का सबसे बड़ा आदमी"]
    }
  },
  {
    id: 208,
    name: "कृष्णा सोबती",
    category: "kahanikar",
    categoryLabel: "विशिष्ट भाषाई शैली की लेखिका",
    img: "/authors/krishna-sobti.jpg",
    birthDate: "18 फरवरी 1925",
    deathDate: "25 जनवरी 2019",
    birthPlace: "गुजरात (अब पाकिस्तान)",
    nickName: "हशमत",
    bio: "अपनी विशिष्ट भाषाई शैली और साहसिक लेखन के लिए प्रसिद्ध।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["मित्रो मरजानी", "सिक्का बदल गया", "बादलों के घेरे", "ज़िन्दगीनामा"]
    }
  },
  {
    id: 209,
    name: "गुलशेर खाँ शानी",
    category: "kahanikar",
    categoryLabel: "आंचलिक कथाकार",
    img: "/authors/shani.jpg",
    birthDate: "1933",
    deathDate: "1995",
    birthPlace: "जगदलपुर, छत्तीसगढ़",
    nickName: "शानी",
    bio: "बस्तर के अंचलों और मुस्लिम समाज के यथार्थ को उकेरने वाले कथाकार।",
    structuredWorks: {
      "उपन्यास/कहानी": ["काला जल", "पेड़ में पानी", "युद्ध", "जहाँपनाह"]
    }
  },
  {
    id: 210,
    name: "चंद्रधर शर्मा गुलेरी",
    category: "kahanikar",
    categoryLabel: "शिल्प के आचार्य",
    img: "/authors/guleri.jpg",
    birthDate: "1883",
    deathDate: "1922",
    birthPlace: "जयपुर, राजस्थान",
    nickName: "गुलेरी जी",
    bio: "सिर्फ तीन कहानियों से हिंदी साहित्य में अमर होने वाले लेखक।",
    structuredWorks: {
      "कालजयी कहानियाँ": ["उसने कहा था", "सुखमय जीवन", "बुद्धू का काँटा"]
    }
  },
  {
    id: 211,
    name: "जैनेन्द्र कुमार",
    category: "kahanikar",
    categoryLabel: "मनोवैज्ञानिक यथार्थवादी",
    img: "/authors/jainendra.jpg",
    birthDate: "1905",
    deathDate: "1988",
    birthPlace: "अलीगढ़, उत्तर प्रदेश",
    nickName: "जैनेन्द्र",
    bio: "हिंदी कहानी को दार्शनिकता और अंतर्मन की गहराई देने वाले लेखक।",
    structuredWorks: {
      "कहानी संग्रह": ["पाजेब", "नीलम देश की राजकन्या", "एक रात", "फाँसी"],
      "उपन्यास": ["त्यागपत्र", "परख"]
    }
  },
  {
    id: 212,
    name: "निर्मल वर्मा",
    category: "kahanikar",
    categoryLabel: "नई कहानी के पुरोधा",
    img: "/authors/nirmal-verma.jpg",
    birthDate: "1929",
    deathDate: "2005",
    birthPlace: "शिमला, हिमाचल प्रदेश",
    nickName: "निर्मल",
    bio: "अपनी कहानियों में अकेलेपन और स्मृतियों को बुनने वाले जादुई कथाकार।",
    structuredWorks: {
      "कहानी संग्रह": ["परिंदे", "जलती झाड़ी", "बीच बहस में", "कौवे और काला पानी"]
    }
  },
  {
    id: 213,
    name: "फणीश्वरनाथ रेणु",
    category: "kahanikar",
    categoryLabel: "आंचलिक कथा सम्राट",
    img: "/authors/renu.jpg",
    birthDate: "1921",
    deathDate: "1977",
    birthPlace: "पूर्णिया, बिहार",
    nickName: "रेणु",
    bio: "मिट्टी की सोंधी खुशबू को साहित्य में उतारने वाले महान लेखक।",
    structuredWorks: {
      "प्रसिद्ध कहानियाँ": ["तीसरी कसम", "लाल पान की बेगम", "पंचलाइट", "रसप्रिया"],
      "उपन्यास": ["मैला आँचल", "परती परिकथा"]
    }
  },
  {
    id: 214,
    name: "भीष्म साहनी",
    category: "kahanikar",
    categoryLabel: "मानवतावादी लेखक",
    img: "/authors/bhisham-sahni.jpg",
    birthDate: "1915",
    deathDate: "2003",
    birthPlace: "रावलपिंडी",
    nickName: "भीष्म",
    bio: "विभाजन की त्रासदी और मानवीय मूल्यों के सशक्त चितेरे।",
    structuredWorks: {
      "कहानी": ["चीफ़ की दावत", "अमृतसर आ गया है"],
      "उपन्यास/नाटक": ["तमस", "कबीरा खड़ा बज़ार में"]
    }
  },
  {
    id: 215,
    name: "मन्नू भंडारी",
    category: "kahanikar",
    categoryLabel: "नई कहानी की सशक्त स्तंभ",
    img: "/authors/mannu-bhandari.jpg",
    birthDate: "1931",
    deathDate: "2021",
    birthPlace: "मध्य प्रदेश",
    nickName: "मन्नू",
    bio: "आधुनिक नारी के द्वंद्व और संबंधों को स्वर देने वाली लेखिका।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["यही सच है", "त्रिशंकु", "आपका बंटी", "महाभोज"]
    }
  },
  {
    id: 216,
    name: "मार्कण्डेय",
    category: "kahanikar",
    categoryLabel: "ग्रामीण जीवन के कथाकार",
    img: "/authors/markandey.jpg",
    birthDate: "1930",
    deathDate: "2010",
    birthPlace: "जौनपुर, उत्तर प्रदेश",
    nickName: "मार्कण्डेय",
    bio: "ग्रामीण अंचलों और प्रगतिशील चेतना के महत्वपूर्ण कथाकार।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["पान फूल", "हंसा जाइ अकेला", "महुए का पेड़", "भूदान"]
    }
  },
  {
    id: 217,
    name: "मुंशी प्रेमचंद",
    category: "kahanikar",
    categoryLabel: "कथा सम्राट",
    img: "/authors/prem-chand.jpg",
    birthDate: "31 जुलाई 1880",
    deathDate: "8 अक्टूबर 1936",
    birthPlace: "वाराणसी, उत्तर प्रदेश",
    nickName: "नवाब राय",
    bio: "हिंदी कहानी को आम आदमी और यथार्थ से जोड़ने वाले युगप्रवर्तक।",
    structuredWorks: {
      "कालजयी कहानियाँ": ["कफ़न", "ईदगाह", "नमक का दारोगा", "पूस की रात"],
      "उपन्यास": ["गोदान", "गबन", "निर्मला"]
    }
  },
  {
    id: 218,
    name: "मोहन राकेश",
    category: "kahanikar",
    categoryLabel: "आधुनिकता के कथाकार",
    img: "/authors/rakesh.jpg",
    birthDate: "1925",
    deathDate: "1972",
    birthPlace: "अमृतसर",
    nickName: "राकेश",
    bio: "नई कहानी के प्रमुख स्तंभ जिन्होंने मध्यवर्गीय जटिलता को दिखाया।",
    structuredWorks: {
      "कहानी": ["मलबे का मालिक", "इंसान के खंडहर", "एक और ज़िंदगी"],
      "नाटक": ["आषाढ़ का एक दिन", "आधे अधूरे"]
    }
  },
  {
    id: 219,
    name: "यशपाल",
    category: "kahanikar",
    categoryLabel: "मार्क्सवादी कथाकार",
    img: "/authors/yashpal.jpg",
    birthDate: "1903",
    deathDate: "1976",
    birthPlace: "फिरोजपुर",
    nickName: "यशपाल",
    bio: "सामाजिक क्रांति और तर्कशीलता के प्रधान लेखक।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["पर्दा", "फूलों का कुर्ता", "झूठा सच", "पिंजरे की उड़ान"]
    }
  },
  {
    id: 220,
    name: "राजेन्द्र यादव",
    category: "kahanikar",
    categoryLabel: "नई कहानी के शिल्पी",
    img: "/authors/rajendra-yadav.jpg",
    birthDate: "1929",
    deathDate: "2013",
    birthPlace: "आगरा",
    nickName: "राजेन्द्र",
    bio: "नई कहानी के महत्वपूर्ण हस्ताक्षर और 'हंस' के संपादक।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["जहाँ लक्ष्मी कैद है", "छोटे-छोटे ताजमहल", "सारा आकाश"]
    }
  },
  {
    id: 221,
    name: "राहुल सांकृत्यायन",
    category: "kahanikar",
    categoryLabel: "महापंडित",
    img: "/authors/rahul-s.jpg",
    birthDate: "1893",
    deathDate: "1963",
    birthPlace: "आजमगढ़",
    nickName: "राहुल",
    bio: "इतिहास और पुरातत्व को कथाओं में ढालने वाले महापंडित।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["वोल्गा से गंगा", "सतमी के बच्चे", "कनैल की कथा"]
    }
  },
  {
    id: 222,
    name: "शिवप्रसाद सिंह",
    category: "kahanikar",
    categoryLabel: "सांस्कृतिक यथार्थवादी",
    img: "/authors/shivprasad-singh.jpg",
    birthDate: "1928",
    deathDate: "1998",
    birthPlace: "वाराणसी, उत्तर प्रदेश",
    nickName: "शिवप्रसाद",
    bio: "नई कहानी आंदोलन के दौर के महत्वपूर्ण आंचलिक कहानीकार।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["कर्मनाशा की हार", "आर-पार की माला", "मुरदा सराये"],
      "उपन्यास": ["नीला चाँद", "गली आगे मुड़ती है"]
    }
  },
  {
    id: 223,
    name: "शेखर जोशी",
    category: "kahanikar",
    categoryLabel: "श्रमजीवी समाज के चितेरे",
    img: "/authors/shekhar-joshi.jpg",
    birthDate: "1932",
    deathDate: "2022",
    birthPlace: "अल्मोड़ा, उत्तराखंड",
    nickName: "शेखर",
    bio: "श्रमजीवियों और पहाड़ के जनजीवन के मर्मस्पर्शी चितेरे।",
    structuredWorks: {
      "कालजयी कहानियाँ": ["कोसी का घटवार", "दाज्यू", "बदबू", "नौरंगी बीमार है"]
    }
  },
  {
    id: 224,
    name: "शैलैश मटियानी",
    category: "kahanikar",
    categoryLabel: "जन-कथाकार",
    img: "/authors/matiyani.jpg",
    birthDate: "1931",
    deathDate: "2001",
    birthPlace: "अल्मोड़ा, उत्तराखंड",
    nickName: "मटियानी",
    bio: "पहाड़ और महानगर की झुग्गियों के यथार्थ को उकेरने वाले लेखक।",
    structuredWorks: {
      "प्रमुख रचनाएँ": ["महाभोज", "अर्धनारीश्वर", "दो दुखों का एक सुख", "चील"]
    }
  },
  {
    id: 225,
    name: "हरिशंकर परसाई",
    category: "kahanikar",
    categoryLabel: "व्यंग्य सम्राट",
    img: "/authors/parsai.jpg",
    birthDate: "1924",
    deathDate: "1995",
    birthPlace: "होशंगाबाद, मध्य प्रदेश",
    nickName: "परसाई",
    bio: "हिंदी के सबसे बड़े व्यंग्यकार, जिनकी कहानियों में गहरा सामाजिक कटाक्ष है।",
    longBio: "परसाई जी ने हिंदी साहित्य में व्यंग्य को एक स्वतंत्र विधा के रूप में स्थापित किया। उनकी रचनाएँ आज भी उतनी ही प्रासंगिक हैं जितनी पहले थीं।",
    structuredWorks: {
      "व्यंग्य कहानियाँ": ["भोलाराम का जीव", "जैसे उनके दिन फिरे", "सदाचार का तावीज़"],
      "संग्रह": ["ठिठुरता हुआ गणतंत्र", "पगडण्डियों का जमाना"]
    }
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
    id: 302,
    name: "धर्मवीर भारती",
    category: "natak",
    categoryLabel: "काव्य-नाटक के शिल्पी",
    img: "/authors/dharmveer.jpg",
    birthDate: "25 दिसंबर 1926",
    deathDate: "4 सितंबर 1997",
    birthPlace: "प्रयागराज, उत्तर प्रदेश",
    nickName: "भारती जी",
    bio: "बहुमुखी प्रतिभा के धनी लेखक, जिनका 'अंधा युग' हिंदी रंगमंच का मील का पत्थर है।",
    structuredWorks: {
      "कालजयी नाटक": ["अंधा युग"],
      "प्रसिद्ध उपन्यास": ["गुनाहों का देवता", "सूरज का सातवाँ घोड़ा"],
      "काव्य संग्रह": ["कनुप्रिया", "ठंडा लोहा"]
    }
  },
  {
    id: 303,
    name: "विजय तेंदुलकर",
    category: "natak",
    categoryLabel: "यथार्थवादी नाटककार",
    img: "/authors/vijay.jpg",
    birthDate: "6 जनवरी 1928",
    deathDate: "19 मई 2008",
    birthPlace: "कोल्हापुर, महाराष्ट्र",
    nickName: "तेंदुलकर",
    bio: "भारतीय रंगमंच के सशक्त हस्ताक्षर, जिन्होंने सामाजिक विसंगतियों पर कड़ा प्रहार किया।",
    structuredWorks: {
      "प्रमुख नाटक": ["खामोश! अदालत जारी है", "घासीराम कोतवाल", "सखाराम बाइंडर"],
      "पटकथा": ["मंथन", "आक्रोश", "अर्ध सत्य"]
    }
  },
  {
    id: 305,
    name: "जगदीश चंद्र माथुर",
    category: "natak",
    categoryLabel: "ऐतिहासिक नाटककार",
    img: "/authors/jagdish-mathur.jpg",
    birthDate: "16 जुलाई 1917",
    deathDate: "14 मई 1978",
    birthPlace: "खुर्जा, उत्तर प्रदेश",
    nickName: "माथुर जी",
    bio: "हिंदी नाटक और रंगमंच को सांस्कृतिक गरिमा प्रदान करने वाले रचनाकार।",
    structuredWorks: {
      "प्रसिद्ध नाटक": ["कोणार्क", "पहला राजा", "शारदीया", "दशरथ नंदन"],
      "एकांकी": ["भोर का तारा", "ओ मेरे सपने"]
    }
  },
  {
    id: 306,
    name: "भारतेन्दु हरिश्चंद्र",
    category: "natak",
    categoryLabel: "आधुनिक हिंदी के जनक",
    img: "/authors/bhartendu.jpg",
    birthDate: "9 सितंबर 1850",
    deathDate: "6 जनवरी 1885",
    birthPlace: "वाराणसी, उत्तर प्रदेश",
    nickName: "भारतेन्दु",
    bio: "हिंदी नाटक के पितामह, जिन्होंने भारतीय जनमानस में चेतना का संचार किया।",
    structuredWorks: {
      "प्रमुख नाटक": ["भारत दुर्दशा", "अंधेर नगरी", "सत्य हरिश्चंद्र"],
      "अनुवाद": ["मुद्राराक्षस", "रत्नावली"]
    }
  },
  {
    id: 308,
    name: "लक्ष्मी नारायण मिश्र",
    category: "natak",
    categoryLabel: "समस्या नाटककार",
    img: "/authors/laxmi-narayan.jpg",
    birthDate: "1903",
    deathDate: "1987",
    birthPlace: "आजमगढ़, उत्तर प्रदेश",
    nickName: "मिश्र जी",
    bio: "हिंदी में 'समस्या नाटक' विधा को प्रतिष्ठित करने वाले प्रमुख नाटककार।",
    structuredWorks: {
      "प्रमुख नाटक": ["संन्यास", "सिंदूर की होली", "राक्षस का मंदिर", "आधी रात"]
    }
  },
  {
    id: 309,
    name: "सुरेंद्र वर्मा",
    category: "natak",
    categoryLabel: "आधुनिक जीवन के नाटककार",
    img: "/authors/surendra-verma.jpg",
    birthDate: "7 सितंबर 1941",
    deathDate: "सक्रिय",
    birthPlace: "झांसी, उत्तर प्रदेश",
    nickName: "वर्मा जी",
    bio: "इतिहास और आधुनिकता के द्वंद्व को मंच पर उतारने वाले प्रतिष्ठित लेखक।",
    structuredWorks: {
      "प्रमुख नाटक": ["सूर्य की अंतिम किरण से सूर्य की पहली किरण तक", "द्रौपदी", "आठवाँ सर्ग", "छोटे सैयद बड़े सैयद"]
    }
  },
  {
    id: 310,
    name: "हबीब तनवीर",
    category: "natak",
    categoryLabel: "लोक रंगमंच के जादूगर",
    img: "/authors/habib-tanvir.jpg",
    birthDate: "1 सितंबर 1923",
    deathDate: "8 जून 2009",
    birthPlace: "रायपुर, छत्तीसगढ़",
    nickName: "हबीब साहब",
    bio: "छत्तीसगढ़ी लोक कलाओं को विश्व स्तर पर पहचान दिलाने वाले नाटककार।",
    structuredWorks: {
      "प्रसिद्ध नाटक": ["चरनदास चोर", "आगरा बाज़ार", "गाँव का नाम ससुराल, मोर नाम दामाद"]
    }
  },
  {
    id: 311,
    name: "उपेंद्रनाथ 'अश्क'",
    category: "natak",
    categoryLabel: "यथार्थवादी नाटककार",
    img: "/authors/upendranath-ashk.jpg",
    birthDate: "14 दिसंबर 1910",
    deathDate: "19 जनवरी 1996",
    birthPlace: "जालंधर, पंजाब",
    nickName: "अश्क",
    bio: "हिंदी नाटक को आधुनिक यथार्थ से जोड़ने वाले महत्वपूर्ण स्तंभ।",
    structuredWorks: {
      "प्रमुख नाटक": ["छठा बेटा", "अंजो दीदी", "कैद", "उड़ान"],
      "एकांकी": ["तौलिए", "लक्ष्मी का स्वागत"]
    }
  },
  {
    id: 312,
    name: "गिरिश कर्नाड",
    category: "natak",
    categoryLabel: "पौराणिक एवं ऐतिहासिक नाटककार",
    img: "/authors/girish-karnad.jpg",
    birthDate: "19 मई 1938",
    deathDate: "10 जून 2019",
    birthPlace: "माथेरान, महाराष्ट्र",
    nickName: "कर्नाड",
    bio: "भारतीय इतिहास और मिथकों को समकालीन संदर्भों में ढालने वाले महान नाटककार।",
    structuredWorks: {
      "प्रसिद्ध नाटक": ["तुगलक", "हयवदन", "ययाति", "नागमंडल"]
    }
  },
  {
    id: 313,
    name: "बादल सरकार",
    category: "natak",
    categoryLabel: "तीसरे रंगमंच के जनक",
    img: "/authors/badal-sarkar.jpg",
    birthDate: "15 जुलाई 1925",
    deathDate: "13 मई 2011",
    birthPlace: "कोलकाता, पश्चिम बंगाल",
    nickName: "बादल दा",
    bio: "हिंदी और बांग्ला रंगमंच को 'थर्ड थिएटर' की नई दिशा देने वाले क्रांतिकारी नाटककार।",
    structuredWorks: {
      "प्रमुख नाटक": ["एवम इंद्रजीत", "बाकी इतिहास", "पगला घोड़ा", "जुलूस"]
    }
  }
];
export const natakData = [
  {
    id: 1,
    title: "आषाढ़ का एक दिन",
    type: "ऐतिहासिक नाटक",
    authorId: 218, // मोहन राकेश की ID (Kahanikar category वाली)
    img: "https://picsum.photos/id/452/600/600",
  },
  {
    id: 2,
    title: "अंधा युग",
    type: "काव्य नाटक",
    authorId: 302, // धर्मवीर भारती की ID
    img: "https://picsum.photos/id/1043/600/600",
  },
  {
    id: 3,
    title: "खामोश! अदालत जारी है",
    type: "सामाजिक नाटक",
    authorId: 303, // विजय तेंदुलकर की ID
    img: "https://picsum.photos/id/635/600/600",
  },
  {
    id: 4,
    title: "चंद्रगुप्त",
    type: "ऐतिहासिक नाटक",
    authorId: 108, // जयशंकर प्रसाद की ID (Kavi category वाली)
    img: "https://picsum.photos/id/1029/600/600",
  },
  {
    id: 5,
    title: "कोणार्क",
    type: "पौराणिक नाटक",
    authorId: 305, // जगदीश चंद्र माथुर की ID
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
    id: 401,
    name: "रामचंद्र शुक्ल",
    category: "nibandhkar",
    img: "/authors/shukla.jpg",
    works: ["करुणा", "कविता क्या है", "क्रोध", "लोभ और प्रीति"],
  },
  {
    id: 402,
    name: "हजारी प्रसाद द्विवेदी",
    category: "nibandhkar",
    img: "/authors/hazari.jpg",
    works: ["अशोक के फूल", "कुटज", "देवदारु", "नाखून क्यों बढ़ते हैं"],
  },
  {
    id: 403,
    name: "विद्यानिवास मिश्र",
    category: "nibandhkar",
    img: "/authors/mishra.jpg",
    works: ["तुम चंदन हम पानी", "मेरे राम का मुकुट भीग रहा है"],
  },
];
export const sherData = [
  {
    id: 501,
    name: "मिर्ज़ा ग़ालिब",
    category: "shayar",
    img: "/authors/ghalib.jpg",
    works: [
      "हज़ारों ख़्वाहिशें ऐसी",
      "दिल-ए-नादाँ तुझे हुआ क्या है",
      "बस कि दुश्वार है",
    ],
  },
  {
    id: 502,
    name: "दुष्यंत कुमार",
    category: "shayar",
    img: "/authors/dushyant.jpg",
    works: [
      "कहाँ तो तय था चराग़ाँ",
      "पक गई हैं आदतें",
      "सिर्फ़ हंगामा खड़ा करना",
    ],
  },
  {
    id: 503,
    name: "बहादुर शाह जफ़र",
    category: "shayar",
    img: "/authors/zafar.jpg",
    works: [
      "लगता नहीं है जी मेरा",
      "दो गज़ ज़मीन भी न मिली",
      "न थी हाल की जब हमें",
    ],
  },
  {
    id: 504,
    name: "जौन एलिया",
    category: "shayar",
    img: "/authors/jaun.jpg",
    works: [
      "शर्मिंदगी है हम को",
      "क्या सितम है कि हम",
      "बे-क़रारी सी बे-क़रारी है",
    ],
  },
  {
    id: 505,
    name: "राहत इंदौरी",
    category: "shayar",
    img: "/authors/rahat.jpg",
    works: [
      "सभी का ख़ून है शामिल",
      "बुलाती है मगर जाने का नहीं",
      "कश्ती तेरा नसीब",
    ],
  },
  {
    id: 506,
    name: "फ़ैज़ अहमद फ़ैज़",
    category: "shayar",
    img: "/authors/faiz.jpg",
    works: ["मुझसे पहली सी मोहब्बत", "हम देखेंगे", "गुलों में रंग भरे"],
  },
  {
    id: 507,
    name: "अकबर इलाहाबादी",
    category: "shayar",
    img: "/authors/akbar.jpg",
    works: [
      "हंगामा है क्यों बरपा",
      "दुनिया में हूँ दुनिया का",
      "फ़लसफ़ा-ए-बेख़ुदी",
    ],
  },
];
export const doheData = [
  {
    id: 601,
    name: "कबीरदास",
    category: "sant",
    img: "/authors/kabir.jpg",
    works: ["नीति के दोहे", "गुरु महिमा", "प्रेम का महत्व", "साधु महिमा"],
  },
  {
    id: 602,
    name: "रहीम",
    category: "sant",
    img: "/authors/rahim.jpg",
    works: ["रहीम विलास", "प्रेम और संबंध", "परोपकार के दोहे"],
  },
  {
    id: 603,
    name: "तुलसीदास",
    category: "sant",
    img: "/authors/tulsi.jpg",
    works: ["रामचरितमानस सूत्र", "विनय के पद", "दोहावली"],
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
