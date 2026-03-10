// src/data.js

// --- 1. स्लाइडर डेटा ---
export const sliderData = [
  { id: 1, img: "sahity-sagar-heroSection.jpg" },
  { id: 2, img: "sahity-sagar-heroSection.jpg" },
  { id: 3, img: "sahity-sagar-heroSection.jpg" },
  { id: 4, img: "sahity-sagar-heroSection.jpg" },
  { id: 5, img: "sahity-sagar-heroSection.jpg" },
];

// --- 2. कविता डेटा ---
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
    img: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=500",
  },
];

// --- 3. कहानियों का डेटा ---
export const featuredStory = {
  title: "दाहिना हाथ",
  desc: "सच्चे मनुष्य की कुछ विचित्र बातें होती हैं। वह समाज की भीड़ से अलग सोचता है और अपने विवेक से निर्णय लेता है।",
  date: "23 दिसंबर 2025",
  img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=800",
};

export const sliderStories = [
  {
    id: 1,
    title: "नदी का विद्रोह",
    date: "21 दिसंबर 2025",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
  },
];

// --- 4. कवियों की मास्टर लिस्ट ---
export const navbarPoetsData = [
  {
    id: 101,
    name: "अज्ञेय",
    category: "kavi",
    img: "/authors/ageya.jpg",
    books: "56 रचनाएँ",
    works: ["कितनी नावों में कितनी बार"],
  },
  {
    id: 102,
    name: "अटल बिहारी वाजपेयी",
    category: "kavi",
    img: "/authors/atal-bihari-vajpayee.jpg",
    books: "05 रचनाएँ",
    works: ["मेरी इक्यावन कविताएँ"],
  },
  {
    id: 103,
    name: "अमीर खुसरो",
    category: "kavi",
    img: "/authors/khusro.jpg",
    books: "100+ रचनाएँ",
    works: ["पहेलियाँ"],
  },
  {
    id: 104,
    name: "अयोध्या सिंह उपाध्याय 'हरिऔध'",
    category: "kavi",
    img: "/authors/hariaudh.jpg",
    books: "15 रचनाएँ",
    works: ["प्रियप्रवास"],
  },
  {
    id: 105,
    name: "कबीरदास",
    category: "kavi",
    img: "/authors/kabir.jpg",
    books: "बीजक",
    works: ["साखी"],
  },
  {
    id: 106,
    name: "गजानन माधव मुक्तिबोध",
    category: "kavi",
    img: "/authors/gajanan-madhav-muktibodh.jpg",
    books: "08 रचनाएँ",
    works: ["अँधेरे में"],
  },
  {
    id: 107,
    name: "गोपालदास 'नीरज'",
    category: "kavi",
    img: "/authors/neeraj.jpg",
    books: "25 रचनाएँ",
    works: ["प्राण गीत"],
  },
  {
    id: 108,
    name: "जयशंकर प्रसाद",
    category: "kavi",
    img: "/authors/jaisankar-prasadh.jpg",
    books: "16 रचनाएँ",
    works: ["कामायनी"],
  },
  {
    id: 109,
    name: "तुलसीदास",
    category: "kavi",
    img: "/authors/tulsidas.jpg",
    books: "12 रचनाएँ",
    works: ["रामचरितमानस"],
  },
  {
    id: 110,
    name: "दुष्यंत कुमार",
    category: "kavi",
    img: "/authors/dushyant.jpg",
    books: "05 रचनाएँ",
    works: ["साये में धूप"],
  },
  {
    id: 111,
    name: "नागार्जुन",
    category: "kavi",
    img: "/authors/baba-nagarjun.jpg",
    books: "25 रचनाएँ",
    works: ["युगधारा"],
  },
  {
    id: 112,
    name: "महादेवी वर्मा",
    category: "kavi",
    img: "/authors/mhadevi-varma.jpg",
    books: "32 रचनाएँ",
    works: ["यामा"],
  },
  {
    id: 113,
    name: "मैथिलीशरण गुप्त",
    category: "kavi",
    img: "/authors/maithili.jpg",
    books: "40 रचनाएँ",
    works: ["साकेत"],
  },
  {
    id: 114,
    name: "मीराबाई",
    category: "kavi",
    img: "/authors/mira.jpg",
    books: "04 रचनाएँ",
    works: ["पदावली"],
  },
  {
    id: 115,
    name: "रामधारी सिंह 'दिनकर'",
    category: "kavi",
    img: "/authors/ramdramdharisingh-dinkar.jpg",
    books: "22 रचनाएँ",
    works: ["रश्मिरथी"],
  },
  {
    id: 116,
    name: "रसखान",
    category: "kavi",
    img: "/authors/raskhan.jpg",
    books: "प्रसिद्ध सवैये",
    works: ["सुजान रसखान"],
  },
  {
    id: 117,
    name: "रहीम",
    category: "kavi",
    img: "/authors/rahim.jpg",
    books: "दोहावली",
    works: ["रहीम सतसई"],
  },
  {
    id: 118,
    name: "सूर्यकांत त्रिपाठी 'निराला'",
    category: "kavi",
    img: "/authors/Suryakant-Tripathi-Nirala.jpg",
    books: "32 रचनाएँ",
    works: ["अनामिका"],
  },
  {
    id: 119,
    name: "सुभद्रा कुमारी चौहान",
    category: "kavi",
    img: "/authors/subhdhra-kumari-chauhan.jpg",
    books: "14 रचनाएँ",
    works: ["झांसी की रानी"],
  },
  {
    id: 120,
    name: "सुमित्रानंदन पंत",
    category: "kavi",
    img: "/authors/pant.jpg",
    books: "28 रचनाएँ",
    works: ["चिदंबरा"],
  },
  {
    id: 121,
    name: "सूरदास",
    category: "kavi",
    img: "/authors/surdas.jpg",
    books: "05 रचनाएँ",
    works: ["सूरसागर"],
  },
  {
    id: 122,
    name: "हरिवंश राय बच्चन",
    category: "kavi",
    img: "/authors/bachhan.jpg",
    books: "30 रचनाएँ",
    works: ["मधुशाला"],
  },
];

// --- 5. कहानीकार डेटा ---
export const navbarStorytellersData = [
  {
    id: 201,
    name: "मुंशी प्रेमचंद",
    category: "kahanikar",
    img: "/authors/prem-chand.jpg",
    books: "300+ कहानियाँ",
    works: ["गोदान", "गबन", "कफ़न"],
  },
  {
    id: 202,
    name: "यशपाल",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=यशपाल",
    works: ["पर्दा"],
  },
  {
    id: 203,
    name: "भीष्म साहनी",
    category: "kahanikar",
    img: "/authors/Bhisham-Sahni.jpg",
    works: ["तमस"],
  },
  {
    id: 204,
    name: "मन्नू भंडारी",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=मन्नू",
    works: ["यही सच है"],
  },
  {
    id: 205,
    name: "कमलेश्वर",
    category: "kahanikar",
    img: "https://dummyimage.com/200x200/f0f0f0/666&text=कमलेश्वर",
    works: ["कितने पाकिस्तान"],
  },
];

// --- 6. नाटककार और नाटक ---
export const navbarNatakData = [
  {
    id: 301,
    name: "मोहन राकेश",
    category: "natak",
    img: "/authors/rakesh.jpg",
    works: ["आषाढ़ का एक दिन", "आधे-अधूरे"],
  },
  {
    id: 302,
    name: "धर्मवीर भारती",
    category: "natak",
    img: "/authors/dharmveer.jpg",
    works: ["अंधा युग"],
  },
  {
    id: 303,
    name: "विजय तेंदुलकर",
    category: "natak",
    img: "/authors/vijay.jpg",
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

// होम पेज 'नाट्य मंच' के लिए डेटा
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
    title: "आधे-अधूरे",
    type: "सामाजिक नाटक",
    authorId: 301,
    img: "https://picsum.photos/id/453/600/600",
  },
];

// --- 7. अन्य डेटा ---
export const vishayKavitaData = [
  { id: 1, title: "स्त्री", img: "/authors/woman.jpg" },
  { id: 6, title: "प्रेम", img: "/authors/love.jpg" },
];

export const nibandhData = [
  {
    id: 501,
    name: "रामचंद्र शुक्ल",
    category: "nibandhkar",
    img: "/authors/acharya-ramchandra-shukla.jpg",
    works: ["चिंतामणि"],
  },
  {
    id: 502,
    name: "हजारी प्रसाद द्विवेदी",
    category: "nibandhkar",
    img: "/authors/hajari-prasadh.jpg",
    works: ["कुटज"],
  },
];

export const sherData = [
  {
    id: 601,
    name: "मिर्ज़ा ग़ालिब",
    category: "shayar",
    img: "authors/mirja-galib.jpg",
    works: ["दीवान-ए-ग़ालिब"],
  },
];

export const doheData = [
  {
    id: 701,
    name: "कबीर दास",
    category: "kavi",
    img: "/authors/kaveer.jpg",
    works: ["बीजक"],
  },
];

// --- 8. पसंदीदा लेखक (सुरक्षित इंडेक्स के साथ) ---
export const favoriteAuthorsData = [
  navbarStorytellersData[0], // प्रेमचंद
  navbarPoetsData[7], // जयशंकर प्रसाद
  navbarPoetsData[11], // महादेवी वर्मा
  navbarPoetsData[14], // दिनकर
  navbarPoetsData[18], // सुभद्रा कुमारी
  navbarPoetsData[17], // निराला
  navbarPoetsData[0], // अज्ञेय
];

// --- 9. मास्टर एक्सपोर्ट (Final Combined List) ---
export const allAuthorsData = [
  ...(navbarPoetsData || []),
  ...(navbarStorytellersData || []),
  ...(navbarNatakData || []),
  ...(nibandhData || []),
  ...(sherData || []),
  ...(doheData || []),
];
