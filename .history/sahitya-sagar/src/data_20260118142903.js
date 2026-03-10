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
