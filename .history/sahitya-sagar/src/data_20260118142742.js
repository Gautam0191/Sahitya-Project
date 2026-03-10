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
