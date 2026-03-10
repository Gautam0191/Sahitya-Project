const mongoose = require("mongoose");
const Content = require("./models/Content");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Part 1 connecting..."))
  .catch((err) => console.log(err));

const kavyData = [
  // --- 101: अज्ञेय ---
  {
    authorId: 101,
    authorName: "अज्ञेय",
    title: "कितनी नावों में कितनी बार",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/ageya1.jpg",
    description: "ज्ञानपीठ पुरस्कृत रचना",
  },
  {
    authorId: 101,
    authorName: "अज्ञेय",
    title: "आँगन के पार द्वार",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/ageya2.jpg",
    description: "दार्शनिक कविता",
  },
  {
    authorId: 101,
    authorName: "अज्ञेय",
    title: "इत्यलम",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "काव्य संग्रह",
  },
  {
    authorId: 101,
    authorName: "अज्ञेय",
    title: "सागर मुद्रा",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "काव्य संग्रह",
  },
  {
    authorId: 101,
    authorName: "अज्ञेय",
    title: "शेखर: एक जीवनी",
    type: "story",
    content: "उपन्यास का पाठ यहाँ आएगा...",
    description: "मनोवैज्ञानिक उपन्यास",
  },
  {
    authorId: 101,
    authorName: "अज्ञेय",
    title: "नदी के द्वीप",
    type: "story",
    content: "उपन्यास का पाठ यहाँ आएगा...",
    description: "प्रसिद्ध उपन्यास",
  },
  {
    authorId: 101,
    authorName: "अज्ञेय",
    title: "अपने-अपने अजनबी",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "उपन्यास",
  },

  // --- 102: अटल बिहारी वाजपेयी ---
  {
    authorId: 102,
    authorName: "अटल बिहारी वाजपेयी",
    title: "मेरी इक्यावन कविताएँ",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/atal1.jpg",
    description: "प्रसिद्ध काव्य संग्रह",
  },
  {
    authorId: 102,
    authorName: "अटल बिहारी वाजपेयी",
    title: "हार नहीं मानूँगा",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/atal2.jpg",
    description: "प्रेरणादायक पंक्तियाँ",
  },
  {
    authorId: 102,
    authorName: "अटल बिहारी वाजपेयी",
    title: "रग-रग हिंदू मेरा परिचय",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "राष्ट्रवादी कविता",
  },

  // --- 103: अमीर खुसरो ---
  {
    authorId: 103,
    authorName: "अमीर खुसरो",
    title: "खालिक-बारी",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "शब्दकोश काव्य",
  },
  {
    authorId: 103,
    authorName: "अमीर खुसरो",
    title: "पहेलियाँ",
    type: "poetry",
    content: "पहेली यहाँ आएगी...",
    description: "लोकप्रिय पहेलियाँ",
  },
  {
    authorId: 103,
    authorName: "अमीर खुसरो",
    title: "मुकरियाँ",
    type: "poetry",
    content: "मुकरी यहाँ आएगी...",
    description: "मनोरंजक रचनाएँ",
  },
  {
    authorId: 103,
    authorName: "अमीर खुसरो",
    title: "दो सुखने",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य रूप",
  },

  // --- 104: हरिऔध ---
  {
    authorId: 104,
    authorName: "अयोध्या सिंह उपाध्याय 'हरिऔध'",
    title: "प्रियप्रवास",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/hariaudh1.jpg",
    description: "खड़ी बोली का प्रथम महाकाव्य",
  },
  {
    authorId: 104,
    authorName: "अयोध्या सिंह उपाध्याय 'हरिऔध'",
    title: "वैदेही वनवास",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "करुण रस का महाकाव्य",
  },
  {
    authorId: 104,
    authorName: "अयोध्या सिंह उपाध्याय 'हरिऔध'",
    title: "चोखे चौपदे",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य",
  },
  {
    authorId: 104,
    authorName: "अयोध्या सिंह उपाध्याय 'हरिऔध'",
    title: "चुभते चौपदे",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य",
  },
  {
    authorId: 104,
    authorName: "अयोध्या सिंह उपाध्याय 'हरिऔध'",
    title: "अधखिला फूल",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "उपन्यास",
  },

  // --- 105: कबीरदास ---
  {
    authorId: 105,
    authorName: "कबीरदास",
    title: "बीजक (साखी, सबद, रमैनी)",
    type: "poetry",
    content: "ऐसी वाणी बोलिए, मन का आपा खोये...",
    img: "/content/poetry/kabir1.jpg",
    description: "निर्गुण भक्ति के अनमोल दोहे",
  },
  {
    authorId: 105,
    authorName: "कबीरदास",
    title: "कबीर ग्रंथावली",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "कबीर के पद",
  },

  // --- 106: मुक्तिबोध ---
  {
    authorId: 106,
    authorName: "गजानन माधव 'मुक्तिबोध'",
    title: "चाँद का मुँह टेढ़ा है",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "प्रसिद्ध कविता संग्रह",
  },
  {
    authorId: 106,
    authorName: "गजानन माधव 'मुक्तिबोध'",
    title: "भूरी-भूरी खाक धूल",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "काव्य रचना",
  },
  {
    authorId: 106,
    authorName: "गजानन माधव 'मुक्तिबोध'",
    title: "काठ का सपना",
    type: "story",
    content: "कहानी यहाँ आएगी...",
    description: "कहानी संग्रह",
  },

  // --- 107: गोपालदास 'नीरज' ---
  {
    authorId: 107,
    authorName: "गोपालदास 'नीरज'",
    title: "प्राण गीत",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "गीत संग्रह",
  },
  {
    authorId: 107,
    authorName: "गोपालदास 'नीरज'",
    title: "दर्द दिया है",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "लोकप्रिय गीत",
  },
  {
    authorId: 107,
    authorName: "गोपालदास 'नीरज'",
    title: "कारवाँ गुजर गया",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/neeraj1.jpg",
    description: "विश्व प्रसिद्ध फिल्मी गीत",
  },

  // --- 108: जयशंकर प्रसाद ---
  {
    authorId: 108,
    authorName: "जयशंकर प्रसाद",
    title: "कामायनी",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/kamayani.jpg",
    description: "छायावाद का शिखर ग्रंथ",
  },
  {
    authorId: 108,
    authorName: "जयशंकर प्रसाद",
    title: "आँसू",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    description: "विरह काव्य",
  },
  {
    authorId: 108,
    authorName: "जयशंकर प्रसाद",
    title: "चंद्रगुप्त",
    type: "drama",
    isFeatured: true,
    content: "नाटक का पाठ यहाँ आएगा...",
    img: "/covers/chandrgupta.jpg",
    description: "ऐतिहासिक नाटक",
  },
  {
    authorId: 108,
    authorName: "जयशंकर प्रसाद",
    title: "ध्रुवस्वामिनी",
    type: "drama",
    isFeatured: true,
    content: "पाठ यहाँ आएगा...",
    img: "/covers/dhurvsvamini.jpg",
    description: "स्त्री चेतना का नाटक",
  },
  {
    authorId: 108,
    authorName: "जयशंकर प्रसाद",
    title: "तितली",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "उपन्यास",
  },

  // --- 109: तुलसीदास ---
  {
    authorId: 109,
    authorName: "तुलसीदास",
    title: "रामचरितमानस",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/tulsidas1.jpg",
    description: "कालजयी महाकाव्य",
  },
  {
    authorId: 109,
    authorName: "तुलसीदास",
    title: "विनय पत्रिका",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "भक्ति पद",
  },
  {
    authorId: 109,
    authorName: "तुलसीदास",
    title: "हनुमान चालीसा",
    type: "poetry",
    content: "श्री गुरु चरन सरोज रज...",
    description: "अति लोकप्रिय स्तुति",
  },

  // --- 110: दुष्यंत कुमार ---
  {
    authorId: 110,
    authorName: "दुष्यंत कुमार",
    title: "साये में धूप",
    type: "poetry",
    content: "हो गई है पीर पर्वत सी पिघलनी चाहिए...",
    img: "/content/poetry/dushyant1.jpg",
    description: "क्रांतिकारी गज़ल संग्रह",
  },
  {
    authorId: 110,
    authorName: "दुष्यंत कुमार",
    title: "एक कंठ विषपायी",
    type: "drama",
    content: "काव्य नाटक का पाठ यहाँ आएगा...",
    description: "गीति नाट्य",
  },

  // --- 111: नागार्जुन ---
  {
    authorId: 111,
    authorName: "नागार्जुन",
    title: "युगधारा",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य संग्रह",
  },
  {
    authorId: 111,
    authorName: "नागार्जुन",
    title: "सतरंगे पंखों वाली",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "कविता संग्रह",
  },
  {
    authorId: 111,
    authorName: "नागार्जुन",
    title: "बलचनमा",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "आंचलिक उपन्यास",
  },

  // --- 112: महादेवी वर्मा ---
  {
    authorId: 112,
    authorName: "महादेवी वर्मा",
    title: "यामा",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/yaama.jpg",
    description: "ज्ञानपीठ पुरस्कृत संकलन",
  },
  {
    authorId: 112,
    authorName: "महादेवी वर्मा",
    title: "अतीत के चलचित्र",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "संस्मरण और रेखाचित्र",
  },
  {
    authorId: 112,
    authorName: "महादेवी वर्मा",
    title: "स्मृति की रेखाएं",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "रेखाचित्र",
  },

  // --- 113: मैथिलीशरण गुप्त ---
  {
    authorId: 113,
    authorName: "मैथिलीशरण गुप्त",
    title: "साकेत",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/saket.jpg",
    description: "रामकथा पर आधारित महाकाव्य",
  },
  {
    authorId: 113,
    authorName: "मैथिलीशरण गुप्त",
    title: "भारत-भारती",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/maithili1.jpg",
    description: "राष्ट्रभक्ति की अमर रचना",
  },
  {
    authorId: 113,
    authorName: "मैथिलीशरण गुप्त",
    title: "यशोधरा",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "गौतम बुद्ध की पत्नी पर आधारित",
  },
  {
    authorId: 113,
    authorName: "मैथिलीशरण गुप्त",
    title: "जयद्रथ वध",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "खंडकाव्य",
  },
  {
    authorId: 113,
    authorName: "मैथिलीशरण गुप्त",
    title: "पंचवटी",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य रचना",
  },

  // --- 114: मीराबाई ---
  {
    authorId: 114,
    authorName: "मीराबाई",
    title: "पदावली",
    type: "poetry",
    content: "मेरे तो गिरधर गोपाल दूसरो न कोई...",
    img: "/content/poetry/meera1.jpg",
    description: "कृष्ण भक्ति के मधुर पद",
  },
  {
    authorId: 114,
    authorName: "मीराबाई",
    title: "राग गोविंद",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "भक्ति काव्य",
  },
  {
    authorId: 114,
    authorName: "मीराबाई",
    title: "नरसी जी का मायरा",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "प्रसिद्ध रचना",
  },

  // --- 115: रामधारी सिंह 'दिनकर' ---
  {
    authorId: 115,
    authorName: "रामधारी सिंह 'दिनकर'",
    title: "रश्मिरथी",
    type: "poetry",
    isFeatured: true,
    content: "मूल पाठ यहाँ आएगा...",
    img: "/covers/krishna-ki-chetavni.jpg",
    description: "वीर रस का सर्वश्रेष्ठ काव्य",
  },
  {
    authorId: 115,
    authorName: "रामधारी सिंह 'दिनकर'",
    title: "कुरुक्षेत्र",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "युद्ध और शांति पर मंथन",
  },
  {
    authorId: 115,
    authorName: "रामधारी सिंह 'दिनकर'",
    title: "उर्वशी",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "ज्ञानपीठ पुरस्कृत काव्य-नाटक",
  },
  {
    authorId: 115,
    authorName: "रामधारी सिंह 'दिनकर'",
    title: "हुंकार",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "ओजस्वी कविताएँ",
  },
  {
    authorId: 115,
    authorName: "रामधारी सिंह 'दिनकर'",
    title: "संस्कृति के चार अध्याय",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "ऐतिहासिक और सांस्कृतिक निबंध",
  },

  // --- 116: रसखान ---
  {
    authorId: 116,
    authorName: "रसखान",
    title: "सुजान रसखान",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "कृष्ण भक्ति सवैया",
  },
  {
    authorId: 116,
    authorName: "रसखान",
    title: "प्रेम वाटिका",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "दोहावली",
  },

  // --- 117: रहीम ---
  {
    authorId: 117,
    authorName: "रहीम",
    title: "रहीम सतसई",
    type: "poetry",
    content: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय...",
    img: "/content/poetry/rahim1.jpg",
    description: "नीतिपरक दोहे",
  },
  {
    authorId: 117,
    authorName: "रहीम",
    title: "मदनाष्टक",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य रचना",
  },

  // --- 118: सूर्यकांत त्रिपाठी 'निराला' ---
  {
    authorId: 118,
    authorName: "सूर्यकांत त्रिपाठी 'निराला'",
    title: "अनामिका",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य संग्रह",
  },
  {
    authorId: 118,
    authorName: "सूर्यकांत त्रिपाठी 'निराला'",
    title: "परिमल",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य संग्रह",
  },
  {
    authorId: 118,
    authorName: "सूर्यकांत त्रिपाठी 'निराला'",
    title: "कुकुरमुत्ता",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "प्रसिद्ध व्यंग्य कविता",
  },
  {
    authorId: 118,
    authorName: "सूर्यकांत त्रिपाठी 'निराला'",
    title: "सरोज स्मृति",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/nirala1.jpg",
    description: "हिंदी का सर्वश्रेष्ठ शोकगीत",
  },
  {
    authorId: 118,
    authorName: "सूर्यकांत त्रिपाठी 'निराला'",
    title: "अप्सरा",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    description: "उपन्यास",
  },

  // --- 119: सुभद्रा कुमारी चौहान ---
  {
    authorId: 119,
    authorName: "सुभद्रा कुमारी चौहान",
    title: "झाँसी की रानी",
    isFeatured: true,
    type: "poetry",
    content: "बुंदेले हरबोलों के मुँह हमने सुनी कहानी थी...",
    img: "/covers/rani_of_jhansi.jpg",
    description: "वीर रस की अमर रचना",
  },
  {
    authorId: 119,
    authorName: "सुभद्रा कुमारी चौहान",
    title: "मुकुल",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "कविता संग्रह",
  },
  {
    authorId: 119,
    authorName: "सुभद्रा कुमारी चौहान",
    title: "बिखरे मोती",
    type: "story",
    content: "कहानी का पाठ यहाँ आएगा...",
    description: "प्रसिद्ध कहानी संग्रह",
  },

  // --- 120: सुमित्रानंदन पंत ---
  {
    authorId: 120,
    authorName: "सुमित्रानंदन पंत",
    title: "पल्लव",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "छायावादी प्रकृति सौंदर्य",
  },
  {
    authorId: 120,
    authorName: "सुमित्रानंदन पंत",
    title: "चिदंबरा",
    type: "poetry",
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/poetry/pant1.jpg",
    description: "ज्ञानपीठ पुरस्कृत संकलन",
  },
  {
    authorId: 120,
    authorName: "सुमित्रानंदन पंत",
    title: "युगांत",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "प्रगतिवादी रचना",
  },

  // --- 121: सूरदास ---
  {
    authorId: 121,
    authorName: "सूरदास",
    title: "सूरसागर",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    img: "/content/poetry/surdas1.jpg",
    description: "वात्सल्य रस का अक्षय भंडार",
  },
  {
    authorId: 121,
    authorName: "सूरदास",
    title: "साहित्य-लहरी",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य रचना",
  },

  // --- 122: हरिवंश राय बच्चन ---
  {
    authorId: 122,
    authorName: "हरिवंश राय बच्चन",
    title: "मधुशाला",
    type: "poetry",
    isFeatured: true,
    content: "मृदु भावों के अंगूरों की आज बना लाया हाला...",
    img: "/covers/madhusala.jpg",
    description: "हालावाद की कालजयी कृति",
  },
  {
    authorId: 122,
    authorName: "हरिवंश राय बच्चन",
    title: "निशा निमंत्रण",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "गीत काव्य",
  },
  {
    authorId: 122,
    authorName: "हरिवंश राय बच्चन",
    title: "क्या भूलूँ क्या याद करूँ",
    type: "story",
    content: "आत्मकथा का पाठ यहाँ आएगा...",
    img: "/content/story/bachhan_auto.jpg",
    description: "विश्वप्रसिद्ध आत्मकथा",
  },

  // --- 123: भारतेन्दु हरिश्चंद्र ---
  {
    authorId: 123,
    authorName: "भारतेन्दु हरिश्चंद्र",
    title: "अंधेर नगरी",
    type: "drama",
    isFeatured: true,
    content: "पाठ यहाँ आएगा...",
    description: "प्रसिद्ध नाटक",
  },
  {
    authorId: 123,
    authorName: "भारतेन्दु हरिश्चंद्र",
    title: "भारत दुर्दशा",
    type: "drama",
    content: "पाठ यहाँ आएगा...",
    img: "/content/drama/bhartendu1.jpg",
    description: "प्रसिद्ध नाटक",
  },

  {
    authorId: 123,
    authorName: "भारतेन्दु हरिश्चंद्र",
    title: "प्रेम मालिका",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "काव्य रचना",
  },

  // --- 124: धर्मवीर भारती ---
  {
    authorId: 124,
    authorName: "धर्मवीर भारती",
    title: "कनुप्रिया",
    type: "poetry",
    content: "पाठ यहाँ आएगा...",
    description: "आधुनिक राधा-कृष्ण काव्य",
  },
  {
    authorId: 124,
    authorName: "धर्मवीर भारती",
    title: "अंधा युग",
    type: "drama",
    isFeatured: true,
    content: "मूल पाठ यहाँ आएगा...",
    img: "/content/drama/andha-yug.jpg",
    description: "महाभारत युद्ध के बाद का चित्रण",
  },
  {
    authorId: 124,
    authorName: "धर्मवीर भारती",
    title: "गुनाहों का देवता",
    type: "story",
    content: "पाठ यहाँ आएगा...",
    img: "/content/story/gunaho-ka-devta.jpg",
    description: "अमर प्रेम कहानी (उपन्यास)",
  },

  // --- 125: हबीब तनवीर ---
  {
    authorId: 125,
    authorName: "हबीब तनवीर",
    title: "चरनदास चोर",
    type: "drama",
    content: "नाटक का पाठ यहाँ आएगा...",
    img: "/content/drama/habib1.jpg",
    description: "लोक संस्कृति आधारित कालजयी नाटक",
  },
  {
    authorId: 125,
    authorName: "हबीब तनवीर",
    title: "आगरा बाज़ार",
    type: "drama",
    content: "पाठ यहाँ आएगा...",
    description: "प्रसिद्ध नाटक",
  },
];
const storyData = [
  // 202: अमरकांत
  {
    authorId: 202,
    authorName: "अमरकांत",
    title: "दोपहर का भोजन",
    type: "story",
    content: "सिद्धेश्वरी ने चकला-बेलन रखा और...",
    description: "गरीबी और गरिमा की कहानी",
  },
  {
    authorId: 202,
    authorName: "अमरकांत",
    title: "डिप्टी कलेक्टरी",
    type: "story",
    content: "सकलदीप बाबू के सपनों की कथा...",
    description: "मध्यमवर्गीय आशा",
  },
  {
    authorId: 202,
    authorName: "अमरकांत",
    title: "ज़िंदगी और जोंक",
    type: "story",
    content: "रजुआ की जिजीविषा...",
    description: "यथार्थवादी चित्रण",
  },
  {
    authorId: 202,
    authorName: "अमरकांत",
    title: "इन्हीं हथियारों से",
    type: "story",
    content: "बलिया के स्वतंत्रता संग्राम की गाथा...",
    description: "ऐतिहासिक उपन्यास",
  },

  // 203: अमृतलाल नागर
  {
    authorId: 203,
    authorName: "अमृतलाल नागर",
    title: "मानस का हंस",
    type: "story",
    content: "तुलसी के अंतर्मन की कथा...",
    description: "तुलसीदास की जीवनी पर आधारित",
  },
  {
    authorId: 203,
    authorName: "अमृतलाल नागर",
    title: "खंजन नयन",
    type: "story",
    content: "सूरदास के जीवन का चित्रण...",
    description: "सूरदास पर आधारित उपन्यास",
  },
  {
    authorId: 203,
    authorName: "अमृतलाल नागर",
    title: "सुहाग के नूपुर",
    type: "story",
    content: "ऐतिहासिक पृष्ठभूमि...",
    description: "तमिल महाकाव्य पर आधारित",
  },

  // 204: इलाचंद्र जोशी
  {
    authorId: 204,
    authorName: "इलाचंद्र जोशी",
    title: "जहाज का पंछी",
    type: "story",
    content: "मनुष्य की भटकन की कहानी...",
    description: "मनोवैज्ञानिक उपन्यास",
  },
  {
    authorId: 204,
    authorName: "इलाचंद्र जोशी",
    title: "सन्यासी",
    type: "story",
    content: "मन की जटिलताओं का विश्लेषण...",
    description: "मनोवैज्ञानिक चित्रण",
  },

  // 205: उदय प्रकाश
  {
    authorId: 205,
    authorName: "उदय प्रकाश",
    title: "तिरिछ",
    type: "story",
    content: "पिताजी और शहर की क्रूरता...",
    description: "जादुई यथार्थवाद",
  },
  {
    authorId: 205,
    authorName: "उदय प्रकाश",
    title: "पाल गोमरा का स्कूटर",
    type: "story",
    content: "आधुनिक विसंगतियों पर चोट...",
    description: "फंतासी कहानी",
  },

  // 206: कमलेश्वर
  {
    authorId: 206,
    authorName: "कमलेश्वर",
    title: "राजा निरबंसिया",
    type: "story",
    content: "जगपति और चंदा की कहानी...",
    description: "नैतिकता का द्वंद्व",
  },
  {
    authorId: 206,
    authorName: "कमलेश्वर",
    title: "कितने पाकिस्तान",
    type: "story",
    content: "इतिहास की कचहरी में सवाल...",
    description: "विभाजन पर आधारित उपन्यास",
  },

  // 207: काशीनाथ सिंह
  {
    authorId: 207,
    authorName: "काशीनाथ सिंह",
    title: "काशी का अस्सी",
    type: "story",
    content: "बनारस के घाटों का मिजाज...",
    description: "बनारसी संस्कृति",
  },
  {
    authorId: 207,
    authorName: "काशीनाथ सिंह",
    title: "रेहन पर रग्घू",
    type: "story",
    content: "गाँव और शहर के बीच का बदलाव...",
    description: "साहित्य अकादमी पुरस्कृत",
  },

  // 208: कृष्णा सोबती
  {
    authorId: 208,
    authorName: "कृष्णा सोबती",
    title: "सिक्का बदल गया",
    type: "story",
    content: "शाहनी का घर छोड़ना...",
    description: "विभाजन की मार्मिक कहानी",
  },
  {
    authorId: 208,
    authorName: "कृष्णा सोबती",
    title: "मित्रो मरजानी",
    type: "story",
    content: "स्त्री की बेबाक आवाज...",
    description: "साहसिक लेखन",
  },
  {
    authorId: 208,
    authorName: "कृष्णा सोबती",
    title: "ज़िन्दगीनामा",
    type: "story",
    content: "पंजाब के जीवन का दस्तावेज़...",
    description: "सांस्कृतिक महाकाव्य",
  },

  // 209: गुलशेर खाँ शानी
  {
    authorId: 209,
    authorName: "गुलशेर खाँ शानी",
    title: "काला जल",
    type: "story",
    content: "बस्तर के मुस्लिम समाज का यथार्थ...",
    description: "आंचलिक उपन्यास",
  },

  // 210: चंद्रधर शर्मा गुलेरी
  {
    authorId: 210,
    authorName: "चंद्रधर शर्मा गुलेरी",
    title: "उसने कहा था",
    type: "story",
    isFeatured: true,
    img: "/covers/usne-kha-tha.jpg",
    content: "लहना सिंह का बलिदान...",
    description: "हिंदी की कालजयी कहानी",
  },

  // 211: जैनेन्द्र कुमार
  {
    authorId: 211,
    authorName: "जैनेन्द्र कुमार",
    title: "पाजेब",
    type: "story",
    content: "आशुतोष की कहानी...",
    description: "बाल मनोविज्ञान",
  },
  {
    authorId: 211,
    authorName: "जैनेन्द्र कुमार",
    title: "त्यागपत्र",
    type: "story",
    content: "मृणाल का विद्रोह...",
    description: "मनोवैज्ञानिक उपन्यास",
  },

  // 212: निर्मल वर्मा
  {
    authorId: 212,
    authorName: "निर्मल वर्मा",
    title: "परिंदे",
    type: "story",
    content: "लतिका का इंतज़ार...",
    description: "नई कहानी की शुरुआत",
  },

  // 213: फणीश्वरनाथ रेणु
  {
    authorId: 213,
    authorName: "फणीश्वरनाथ रेणु",
    title: "तीसरी कसम",
    type: "story",

    content: "हीरामन और हीराबाई...",
    description: "ग्रामीण प्रेम कथा",
  },
  {
    authorId: 213,
    authorName: "फणीश्वरनाथ रेणु",
    title: "मैला आँचल",
    type: "story",

    content: "पूर्णिया की मिट्टी की सोंधी खुशबू...",
    description: "आंचलिक उपन्यास",
  },
  {
    authorId: 213,
    authorName: "फणीश्वरनाथ रेणु",
    title: "पंचलाइट",
    type: "story",

    content: "गोधन और मुनरी की कहानी...",
    description: "लोक जीवन",
  },

  // 214: भीष्म साहनी
  {
    authorId: 214,
    authorName: "भीष्म साहनी",
    title: "चीफ़ की दावत",
    type: "story",
    isFeatured: true,
    img: "/covers/chif-ki-davat.jpg",
    content: "बूढ़ी माँ का अपमान और सेवा...",
    description: "रिश्तों का बाजार",
  },
  {
    authorId: 214,
    authorName: "भीष्म साहनी",
    title: "तमस",
    type: "story",

    content: "दंगों का काला सच...",
    description: "विभाजन की त्रासदी",
  },

  // 215: मन्नू भंडारी
  {
    authorId: 215,
    authorName: "मन्नू भंडारी",
    title: "यही सच है",
    type: "story",
    content: "दीपा का प्रेम द्वंद्व...",
    description: "आधुनिक नारी की भावनाएं",
  },
  {
    authorId: 215,
    authorName: "मन्नू भंडारी",
    title: "आपका बंटी",
    type: "story",
    isFeatured: true,
    img: "/covers/aapka-banti.jpg",
    content: "तलाक का बच्चे पर असर...",
    description: "मार्मिक उपन्यास",
  },
  {
    authorId: 215,
    authorName: "मन्नू भंडारी",
    title: "महाभोज",
    type: "story",
    img: "/covers/mhabhoj.jpg",
    isFeatured: true,
    content: "राजनीति का नंगा नाच...",
    description: "सत्ता पर चोट",
  },

  // 216: मार्कण्डेय
  {
    authorId: 216,
    authorName: "मार्कण्डेय",
    title: "हंसा जाइ अकेला",
    type: "story",
    content: "ग्रामीण जीवन का सच...",
    description: "मशहूर कहानी",
  },

  // 217: मुंशी प्रेमचंद
  {
    authorId: 217,
    authorName: "मुंशी प्रेमचंद",
    title: "कफ़न",
    type: "story",
    isFeatured: true,
    img: "/covers/kafan.jpg",
    content: "घीसू-माधव की संवेदनहीनता...",
    description: "यथार्थवादी कहानी",
  },
  {
    authorId: 217,
    authorName: "मुंशी प्रेमचंद",
    title: "ईदगाह",
    type: "story",
    content: "हामिद का चिमटा...",
    description: "बाल संवेदना",
  },
  {
    authorId: 217,
    authorName: "मुंशी प्रेमचंद",
    title: "नमक का दारोगा",
    type: "story",
    content: "ईमानदारी की जीत...",
    description: "प्रेरणादायक कहानी",
  },
  {
    authorId: 217,
    authorName: "मुंशी प्रेमचंद",
    title: "गोदान",
    type: "story",
    content: "होरी का जीवन संघर्ष...",
    description: "कृषक जीवन का उपन्यास",
  },

  // 218: मोहन राकेश
  {
    authorId: 218,
    authorName: "मोहन राकेश",
    title: "मलबे का मालिक",
    type: "story",
    content: "विभाजन के बाद की स्मृतियाँ...",
    description: "मानवीय संवेदना",
  },
  {
    authorId: 218,
    authorName: "मोहन राकेश",
    title: "आषाढ़ का एक दिन",
    type: "drama",
    isFeatured: true,
    content: "कालिदास और मल्लिका...",
    description: "प्रसिद्ध नाटक",
  },

  // 219: यशपाल
  {
    authorId: 219,
    authorName: "यशपाल",
    title: "पर्दा",
    type: "story",
    content: "झूठी इज्जत का बोझ...",
    description: "सामाजिक व्यंग्य",
  },
  {
    authorId: 219,
    authorName: "यशपाल",
    title: "झूठा सच",
    type: "story",
    content: "देश के बंटवारे का इतिहास...",
    description: "विशाल उपन्यास",
  },

  // 220: राजेन्द्र यादव
  {
    authorId: 220,
    authorName: "राजेन्द्र यादव",
    title: "जहाँ लक्ष्मी कैद है",
    type: "story",
    content: "रिश्तों की घुटन...",
    description: "नई कहानी",
  },
  {
    authorId: 220,
    authorName: "राजेन्द्र यादव",
    title: "छोटे-छोटे ताजमहल",
    type: "story",
    content: "अतृप्त प्रेम की कहानी...",
    description: "प्रसिद्ध कहानी",
  },

  // 221: राहुल सांकृत्यायन
  {
    authorId: 221,
    authorName: "राहुल सांकृत्यायन",
    title: "वोल्गा से गंगा",
    type: "story",
    content: "सभ्यता की यात्रा...",
    description: "ऐतिहासिक कहानियाँ",
  },

  // 222: शिवप्रसाद सिंह
  {
    authorId: 222,
    authorName: "शिवप्रसाद सिंह",
    title: "कर्मनाशा की हार",
    type: "story",
    content: "अंधविश्वास और यथार्थ...",
    description: "लोकप्रिय कहानी",
  },

  // 223: शेखर जोशी
  {
    authorId: 223,
    authorName: "शेखर जोशी",
    title: "कोसी का घटवार",
    type: "story",
    content: "गुसाईं की यादें...",
    description: "पहाड़ी जीवन",
  },
  {
    authorId: 223,
    authorName: "शेखर जोशी",
    title: "दाज्यू",
    type: "story",
    content: "मदन की कहानी...",
    description: "बाल मन की चोट",
  },

  // --- शिवानी जी की कहानियों का संग्रह (ID: 224) ---

  {
    authorId: 224,
    authorName: "शिवानी",
    title: "लाल हवेली",
    type: "story",
    content:
      "लाल हवेली की ऊँची दीवारों के पीछे छिपे रहस्य और नारी मन की घुटन की यह एक कालजयी कहानी है...",
    description: "नारी मन के द्वंद्व की एक मार्मिक कथा।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "लाटी",
    type: "story",
    content:
      "पहाड़ की वादियों में पली-बढ़ी एक मूक युवती 'लाटी' के जीवन का संघर्ष और उसकी सरलता की कहानी...",
    description: "पहाड़ी परिवेश और मानवीय संवेदना की कहानी।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "नथ",
    type: "story",
    content:
      "कुमाऊँ की रीतियों और एक स्त्री के आत्मसम्मान की रक्षा के इर्द-गिर्द घूमती मार्मिक कहानी...",
    description: "कुमाऊँनी परंपरा और स्त्री संघर्ष।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "पिटी हुई गोट",
    type: "story",
    content:
      "मध्यवर्गीय परिवार की विसंगतियों और रिश्तों के उतार-चढ़ाव को दिखाती यह कहानी...",
    description: "पारिवारिक रिश्तों का सजीव चित्रण।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "गूंगा",
    type: "story",
    content:
      "समाज की बेरुखी और एक निशब्द पीड़ा को व्यक्त करती शिवानी जी की बेहतरीन रचना...",
    description: "निशब्द वेदना की कहानी।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "श्राप",
    type: "story",
    content:
      "अतीत की गलतियों और उनके वर्तमान पर पड़ने वाले साये की एक मनोवैज्ञानिक कहानी...",
    description: "मनोवैज्ञानिक और सामाजिक कथा।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "सौत",
    type: "story",
    content:
      "पारिवारिक ईर्ष्या और स्त्री मन के जटिल भावों को उकेरती प्रसिद्ध कहानी...",
    description: "घरेलू संबंधों का मनोवैज्ञानिक चित्रण।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "तीन कन्या",
    type: "story",
    content: "तीन अलग-अलग स्वभाव की युवतियों के जीवन और उनके सपनों की कहानी...",
    description: "युवा मन के सपनों की कथा।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "चन्नी",
    type: "story",
    content:
      "पहाड़ी आँचल की एक भोली-भाली लड़की के जीवन के रंगों और दुखों की कहानी...",
    description: "पहाड़ी जनजीवन की झलक।",
  },
  {
    authorId: 224,
    authorName: "शिवानी",
    title: "धुआँ",
    type: "story",
    content: "उम्मीदों और हकीकत के बीच धुंधलाते रिश्तों की एक संजीदा कहानी...",
    description: "रिश्तों की कड़वाहट और सच्चाई।",
  },
  // 225: हरिशंकर परसाई
  {
    authorId: 225,
    authorName: "हरिशंकर परसाई",
    title: "भोलाराम का जीव",
    type: "story",
    content: "पेंशन और भ्रष्टाचार...",
    description: "तीखा व्यंग्य",
  },
  {
    authorId: 225,
    authorName: "हरिशंकर परसाई",
    title: "सदाचार का तावीज़",
    type: "story",
    content: "भ्रष्टाचार मिटाने का तावीज़...",
    description: "प्रसिद्ध व्यंग्य",
  },
];
const essayData = [
  // 401: रामचंद्र शुक्ल
  {
    authorId: 401,
    authorName: "रामचंद्र शुक्ल",
    title: "कविता क्या है",
    type: "essay",
    content:
      "कविता मनुष्य के हृदय को स्वार्थ-सम्बन्धों के संकुचित मण्डल से ऊपर उठाकर...",
    description: "हिंदी का सर्वश्रेष्ठ समीक्षात्मक निबंध",
  },
  {
    authorId: 401,
    authorName: "रामचंद्र शुक्ल",
    title: "उत्साह",
    type: "essay",
    content: "साहसपूर्ण आनंद की उमंग का नाम उत्साह है।...",
    description: "मनोविकार संबंधी निबंध",
  },
  {
    authorId: 401,
    authorName: "रामचंद्र शुक्ल",
    title: "क्रोध",
    type: "essay",
    content: "सामाजिक जीवन में क्रोध की बहुत आवश्यकता पड़ती है।...",
    description: "मनोवैज्ञानिक विश्लेषण",
  },

  // 402: हजारी प्रसाद द्विवेदी
  {
    authorId: 402,
    authorName: "हजारी प्रसाद द्विवेदी",
    title: "अशोक के फूल",
    type: "essay",
    content: "अशोक में फिर फूल आ गए हैं। इन छोटे-छोटे लाल-लाल फूलों में...",
    description: "सांस्कृतिक और ललित निबंध",
  },
  {
    authorId: 402,
    authorName: "हजारी प्रसाद द्विवेदी",
    title: "कुटज",
    type: "essay",
    content: "कह कहते हैं पर्वत की चोटी पर उगने वाला यह छोटा सा वृक्ष...",
    description: "जिजीविषा और अपराजेय शक्ति का प्रतीक",
  },

  // 403: हरिशंकर परसाई
  {
    authorId: 403,
    authorName: "हरिशंकर परसाई",
    title: "पगडंडियों का जमाना",
    type: "essay",
    content: "आजकल सीधे रास्ते पर कोई नहीं चलना चाहता, सबको पगडंडी चाहिए।...",
    description: "तीखा सामाजिक व्यंग्य",
  },
  {
    authorId: 403,
    authorName: "हरिशंकर परसाई",
    title: "सदाचार का ताबीज",
    type: "essay",
    content: "राज्य में भ्रष्टाचार फैला था, राजा ने पूछा इसे कैसे मिटाएं?...",
    description: "भ्रष्टाचार पर करारा प्रहार",
  },

  // 404: भगवतशरण उपाध्याय
  {
    authorId: 404,
    authorName: "भगवतशरण उपाध्याय",
    title: "ठूँठा आम",
    type: "essay",
    content: "वह आम का पेड़ अब सूख गया है, पर उसकी जड़ें इतिहास में हैं।...",
    description: "इतिहास और संस्कृति का संगम",
  },

  // 405: विद्यानिवास मिश्र
  {
    authorId: 405,
    authorName: "विद्यानिवास मिश्र",
    title: "मेरे राम का मुकुट भीग रहा है",
    type: "essay",
    content: "आधी रात बीत गई है, बाहर वर्षा हो रही है और मन में चिंता है कि...",
    description: "प्रसिद्ध ललित निबंध",
  },

  // 406: कुबेरनाथ राय
  {
    authorId: 406,
    authorName: "कुबेरनाथ राय",
    title: "प्रिया नीलकंठी",
    type: "essay",
    content: "नीलकंठ का स्वर और वर्षा की ऋतू का वर्णन।...",
    description: "सौंदर्यशास्त्रीय ललित निबंध",
  },

  // 407: महावीर प्रसाद द्विवेदी
  {
    authorId: 407,
    authorName: "महावीर प्रसाद द्विवेदी",
    title: "साहित्य की महत्ता",
    type: "essay",
    content: "साहित्य समाज का दर्पण है और उसकी उन्नति का आधार है।...",
    description: "साहित्यिक विमर्श",
  },

  // 408: बाबू गुलाबराय
  {
    authorId: 408,
    authorName: "बाबू गुलाबराय",
    title: "ठलुआ क्लब",
    type: "essay",
    content: "खाली बैठे लोगों की गोष्ठी और उनके विनोदपूर्ण विचार।...",
    description: "हास्य-विनोद प्रधान निबंध",
  },
  {
    authorId: 408,
    authorName: "बाबू गुलाबराय",
    title: "मेरी असफलताएं",
    type: "essay",
    content: "अपनी गलतियों और अनुभवों से सीखने की एक विनम्र स्वीकारोक्ति।...",
    description: "आत्मपरक निबंध",
  },

  // 409: सरदार पूर्ण सिंह
  {
    authorId: 409,
    authorName: "सरदार पूर्ण सिंह",
    title: "आचरण की सभ्यता",
    type: "essay",
    content: "विद्या, कला, कविता, साहित्य और धन से भी उत्तम आचरण है।...",
    description: "नैतिकता और श्रेष्ठ जीवन",
  },
  {
    authorId: 409,
    authorName: "सरदार पूर्ण सिंह",
    title: "मजदूरी और प्रेम",
    type: "essay",
    content: "किसान का जीवन और श्रमिक का पसीना सबसे बड़ी इबादत है।...",
    description: "श्रम की महत्ता",
  },

  // 410: बालकृष्ण भट्ट
  {
    authorId: 410,
    authorName: "बालकृष्ण भट्ट",
    title: "साहित्य जनसमूह के हृदय का विकास है",
    type: "essay",
    content:
      "जैसे मनुष्य के भाव बदलते हैं, वैसे ही उसके साहित्य का स्वरूप बदलता है।...",
    description: "भारतेंदु युगीन श्रेष्ठ निबंध",
  },
];
const shayariData = [
  // 501: मिर्ज़ा ग़ालिब
  {
    authorId: 501,
    authorName: "मिर्ज़ा ग़ालिब",
    title: "हज़ारों ख़्वाहिशें ऐसी",
    type: "shayari",
    content:
      "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले, बहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।",
    description: "इश्क़ और दर्शन का संगम",
  },
  {
    authorId: 501,
    authorName: "मिर्ज़ा ग़ालिब",
    title: "दिल-ए-नादाँ",
    type: "shayari",
    content: "दिल-ए-नादाँ तुझे हुआ क्या है, आख़िर इस दर्द की दवा क्या है?",
    description: "मशहूर ग़ज़ल",
  },

  // 502: दुष्यंत कुमार
  {
    authorId: 502,
    authorName: "दुष्यंत कुमार",
    title: "पीर पर्वत सी",
    type: "shayari",
    content:
      "हो गई है पीर पर्वत सी पिघलनी चाहिए, इस हिमालय से कोई गंगा निकलनी चाहिए।",
    description: "क्रांतिकारी हिंदी ग़ज़ल",
  },
  {
    authorId: 502,
    authorName: "दुष्यंत कुमार",
    title: "साये में धूप",
    type: "shayari",
    content:
      "यहाँ दरख़्तों के साये में धूप लगती है, चलो यहाँ से चलें और उम्र भर के लिए।",
    description: "व्यवस्था पर करारी चोट",
  },

  // 503: बहादुर शाह ज़फ़र
  {
    authorId: 503,
    authorName: "बहादुर शाह ज़फ़र",
    title: "बदनसीब ज़फ़र",
    type: "shayari",
    content:
      "कितना है बदनसीब 'ज़फ़र' दफ़्न के लिए, दो गज़ ज़मीन भी न मिली कू-ए-यार में।",
    description: "अंतिम मुगल सम्राट का दर्द",
  },

  // 504: जौन एलिया
  {
    authorId: 504,
    authorName: "जौन एलिया",
    title: "तन्हाई",
    type: "shayari",
    content: "जो गुज़ारी न जा सकी हम से, हम ने वो ज़िंदगी गुज़ारी है।",
    description: "आधुनिक दौर की तन्हाई",
  },
  {
    authorId: 504,
    authorName: "जौन एलिया",
    title: "नया एक रिश्ता",
    type: "shayari",
    content: "अब नहीं कोई बात ख़तरे की, अब सभी को सभी से ख़तरा है।",
    description: "गहन दार्शनिकता",
  },

  // 505: राहत इंदौरी
  {
    authorId: 505,
    authorName: "राहत इंदौरी",
    title: "हिंदुस्तान",
    type: "shayari",
    content:
      "सभी का ख़ून है शामिल यहाँ की मिट्टी में, किसी के बाप का हिंदुस्तान थोड़ी है।",
    description: "बेबाक और इंक़लाबी स्वर",
  },
  {
    authorId: 505,
    authorName: "राहत इंदौरी",
    title: "बुलाती है मगर",
    type: "shayari",
    content: "बुलाती है मगर जाने का नईं, ये दुनिया है उधर जाने का नईं।",
    description: "मंचों की सबसे लोकप्रिय रचना",
  },

  // 506: शकील बदायूँनी
  {
    authorId: 506,
    authorName: "शकील बदायूँनी",
    title: "प्यार किया तो डरना क्या",
    type: "shayari",
    content:
      "इश्क़ में क्या बतायें क्या हुआ है, जब से वो मिले हैं बस ख़ुदा ही ख़ुदा हुआ है।",
    description: "फ़िल्मी और साहित्यिक संगम",
  },

  // 507: बशीर बद्र
  {
    authorId: 507,
    authorName: "बशीर बद्र",
    title: "अहसास",
    type: "shayari",
    content:
      "कोई हाथ भी न मिलाएगा जो गले मिलोगे तपाक से, ये नए मिज़ाज का शहर है ज़रा फ़ासले से मिला करो।",
    description: "शहरी रिश्तों का सच",
  },

  // 508: निदा फ़ाज़ली
  {
    authorId: 508,
    authorName: "निदा फ़ाज़ली",
    title: "दुनिया जिसे कहते हैं",
    type: "shayari",
    content:
      "दुनिया जिसे कहते हैं जादू का खिलौना है, मिल गया सो मिट्टी है खो गया सो सोना है।",
    description: "जीवन की सादगी",
  },

  // 509: मीर तकी मीर
  {
    authorId: 509,
    authorName: "मीर तकी मीर",
    title: "इब्तिदा-ए-इश्क़",
    type: "shayari",
    content: "इब्तिदा-ए-इश्क़ है रोता है क्या, आगे-आगे देखिए होता है क्या।",
    description: "दर्द-ए-मीर",
  },

  // 510: साहिर लुधियानवी
  {
    authorId: 510,
    authorName: "साहिर लुधियानवी",
    title: "ताजमहल",
    type: "shayari",
    content:
      "इक शहंशाह ने दौलत का सहारा लेकर, हम ग़रीबों की मोहब्बत का उड़ाया है मज़ाक़।",
    description: "प्रसिद्ध नज़्म",
  },
  {
    authorId: 510,
    authorName: "साहिर लुधियानवी",
    title: "वो अफ़साना",
    type: "shayari",
    content:
      "वो अफ़साना जिसे अंजाम तक लाना न हो मुमकिन, उसे इक ख़ूबसूरत मोड़ देकर छोड़ना अच्छा।",
    description: "जज़्बाती और समझदार मोड़",
  },
];
const dohaDataContent = [
  // 601: कबीरदास
  {
    authorId: 601,
    authorName: "कबीरदास",
    title: "साखी - कबीर",
    type: "doha",
    content: "ऐसी बानी बोलिये, मन का आपा खोय। औरन को शीतल करै, आपहु शीतल होय॥",
    description: "मीठी वाणी का महत्व",
  },
  {
    authorId: 601,
    authorName: "कबीरदास",
    title: "गुरु महिमा",
    type: "doha",
    content:
      "गुरु गोविंद दोऊ खड़े, काके लागूं पाय। बलिहारी गुरु आपने, गोविंद दियो बताय॥",
    description: "ईश्वर से बड़ा गुरु का स्थान",
  },

  // 602: रहीम
  {
    authorId: 602,
    authorName: "रहीम",
    title: "रहीम के दोहे",
    type: "doha",
    content:
      "रहिमन पानी राखिये, बिन पानी सब सून। पानी गये न ऊबरे, मोती मानुष चून॥",
    description: "सम्मान और विनम्रता का महत्व",
  },
  {
    authorId: 602,
    authorName: "रहीम",
    title: "परोपकार",
    type: "doha",
    content:
      "तरुवर फल नहिं खात है, सरवर पियहि न पान। कहि रहीम परकाज हित, संपति सँचहि सुजान॥",
    description: "सज्जनों का धन दूसरों के लिए होता है",
  },

  // 603: तुलसीदास
  {
    authorId: 603,
    authorName: "तुलसीदास",
    title: "दोहावली",
    type: "doha",
    content:
      "तुलसी मीठे बचन ते, सुख उपजत चहुं ओर। वशीकरण इक मंत्र है, परिहरू बचन कठोर॥",
    description: "मधुर वचन का प्रभाव",
  },
  {
    authorId: 603,
    authorName: "तुलसीदास",
    title: "राम भक्ति",
    type: "doha",
    content:
      "राम नाम मनि दीप धरु, जीह देहरी द्वार। तुलसी भीतर बाहरहुँ, जौं चाहसि उजियार॥",
    description: "नाम स्मरण की महिमा",
  },

  // 604: बिहारी
  {
    authorId: 604,
    authorName: "बिहारी",
    title: "बिहारी सतसई",
    type: "doha",
    content:
      "कनक कनक ते सौ गुनी, मादकता अधिकाय। वा खाये बौराये जग, या पाये बौराये॥",
    description: "धन और अहंकार का प्रभाव",
  },
  {
    authorId: 604,
    authorName: "बिहारी",
    title: "नीति",
    type: "doha",
    content:
      "नर की अरु नल-नील की, गति एकै करि जोय। जेतो नीचो ह्वै चले, तेतो ऊँधो होय॥",
    description: "विनम्रता से उन्नति",
  },

  // 605: रसखान
  {
    authorId: 605,
    authorName: "रसखान",
    title: "सवैये",
    type: "doha",
    content:
      "मानुस हों तो वही रसखानि बसौं ब्रज गोकुल गाँव के ग्वारन। जो पसु हों तो कहा बस मेरो चरौं नित नंद की धेनु मंझारन॥",
    description: "कृष्ण भक्ति और ब्रज प्रेम",
  },

  // 606: सूरदास
  {
    authorId: 606,
    authorName: "सूरदास",
    title: "भ्रमरगीत",
    type: "doha",
    content: "ऊधो, मन न भये दस बीस। एक हुतो सो गयौ स्याम संग, को आराधे ईस॥",
    description: "अनन्य कृष्ण भक्ति",
  },

  // 607: दादू दयाल
  {
    authorId: 607,
    authorName: "दादू दयाल",
    title: "दादू की बानी",
    type: "doha",
    content:
      "दादू इस संसार में, दो पक्ष हैं जगदीश। एक अरूपी एक रूप है, दोनों ही का ईश॥",
    description: "निर्गुण और सगुण का समन्वय",
  },

  // 608: मलिक मोहम्मद जायसी
  {
    authorId: 608,
    authorName: "मलिक मोहम्मद जायसी",
    title: "पद्मावत अंश",
    type: "doha",
    content: "मानुस प्रेम भयउ बैकुंठी। नाहिं त काह छार भरि मूठी॥",
    description: "प्रेम की दिव्यता",
  },

  // 609: गुरु नानक देव
  {
    authorId: 609,
    authorName: "गुरु नानक देव",
    title: "गुरु वाणी",
    type: "doha",
    content: "नानक नीचैं कहि चंचल मति, कनक कामिनी बिषै बिकार।",
    description: "मन की शुद्धि का संदेश",
  },

  // 610: सेनापति
  {
    authorId: 610,
    authorName: "सेनापति",
    title: "ऋतु वर्णन",
    type: "doha",
    content: "बरन बरन तरु फूले उपबन बन, सोई चतुरंग संग दल बलियत है।",
    description: "वसंत ऋतु का सजीव चित्रण",
  },
];

// --- SEEDER FUNCTION ---
const seedDB = async () => {
  try {
    await Content.deleteMany({});
    console.log("पुराना डेटा साफ़ हुआ...");

    const totalData = [
      ...kavyData, // पक्का करें कि kavyData डिफाइन है
      ...storyData,
      ...essayData,
      ...shayariData,
      ...dohaDataContent,
    ];

    await Content.insertMany(totalData);

    console.log(
      `बधाई हो! कुल ${totalData.length} रचनाएँ सफलतापूर्वक सेव हो गईं! ✅`,
    );
    process.exit(0);
  } catch (err) {
    console.error("एरर आया: ", err);
    process.exit(1);
  }
};

seedDB();
