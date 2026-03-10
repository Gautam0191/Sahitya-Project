import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"; // ✅ axios को इम्पोर्ट किया
import "./SahityaSangrah.css";

const SahityaSangrah = () => {
  const { type } = useParams();
  const getActiveKey = (t) => {
    const raw = t ? t.toLowerCase() : "kahani";
    const mapping = {
      "poetry": "kavita",
      "story": "kahani",
      "drama": "natak",
      "essay": "nibandh",
      "shayari": "sher",
      "doha": "dohe"
    };
    return mapping[raw] || raw;
  };

  const activeType = getActiveKey(type);
  // --- स्टेट्स (States) ---
  const [listData, setListData] = useState([]); // ✅ डेटाबेस से आने वाली लिस्ट के लिए
  const [loading, setLoading] = useState(true); // ✅ लोडिंग स्टेट
  const [likedItems, setLikedItems] = useState({});

  // --- डेटाबेस से डेटा लाना (useEffect) ---
  useEffect(() => {
    const fetchFromDB = async () => {
      setLoading(true);
      try {
        // ✅ सुधार: ये नाम आपके ContentSchema के enum ['poetry', 'story', 'drama', 'essay', 'shayari', 'doha'] से मैच होने चाहिए
        const mapping = {
          kavita: "poetry",
          poetry: "poetry",
          kahani: "story",
          story: "story",
          natak: "drama",
          nibandh: "essay", // 👈 'nibandh' के लिए 'essay' भेजें
          sher: "shayari", // 👈 'sher' के लिए 'shayari' भेजें
          shayari: "shayari",
          dohe: "doha", // 👈 'dohe' के लिए 'doha' भेजें
        };

        const searchType = mapping[activeType] || activeType;

        console.log("Fetching from DB for type:", searchType); // चेक करने के लिए

        const res = await axios.get(
          `http://localhost:5000/api/content/all/${searchType}`,
        );
        setListData(res.data);
      } catch (err) {
        console.error("MongoDB से डेटा लाने में एरर:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFromDB();
  }, [activeType]);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // --- मॉडर्न कार्ड्स का डेटा (Sidebar) ---
  const getSidebarCollections = () => {
    const collections = {
      kahani: [
        {
          title: "प्रेमचंद की 10 जबरदस्त कहानियाँ",
          desc: "ग्रामीण भारत और मानवीय संवेदनाओं का महाकुंभ।",
          icon: "fas fa-book-open",
          bg: "#4db6ac",
          tags: ["ग्रामीण", "यथार्थ", "क्लासिक"],
        },
        {
          title: "स्त्री संघर्ष की 10 कहानियाँ",
          desc: "नारी चेतना और सामाजिक बदलाव की सशक्त आवाज़ें।",
          icon: "fas fa-female",
          bg: "#7986cb",
          tags: ["स्त्री", "चेतना", "संघर्ष"],
        },
      ],
      kavita: [
        {
          title: "निराला की 10 कालजयी कविताएँ",
          desc: "प्रकृति और मनुष्य के अंतर्द्वंद्व की कविताएँ।",
          icon: "fas fa-feather-alt",
          bg: "#81c784",
          tags: ["छायावाद", "क्रांति", "प्रकृति"],
        },
        {
          title: "वीर रस की 10 महान रचनाएँ",
          desc: "जोश और राष्ट्रभक्ति से भरी काव्य धारा।",
          icon: "fas fa-shield-alt",
          bg: "#e57373",
          tags: ["शौर्य", "प्रेरणा", "देश"],
        },
      ],
      natak: [
        {
          title: "प्रसाद के 5 ऐतिहासिक नाटक",
          desc: "भारतीय इतिहास का गौरवशाली और सांस्कृतिक चित्रण।",
          icon: "fas fa-theater-masks",
          bg: "#ffb74d",
          tags: ["इतिहास", "संस्कृति", "नाटक"],
        },
        {
          title: "मोहन राकेश के आधुनिक नाटक",
          desc: "मध्यवर्गीय जीवन और अकेलेपन का गहरा द्वंद्व।",
          icon: "fas fa-users",
          bg: "#a1887f",
          tags: ["आधुनिक", "समाज", "यथार्थ"],
        },
      ],
      nibandh: [
        {
          title: "रामचंद्र शुक्ल के श्रेष्ठ निबंध",
          desc: "साहित्यिक आलोचना और गंभीर विमर्श का संकलन।",
          icon: "fas fa-scroll",
          bg: "#90a4ae",
          tags: ["आलोचना", "विमर्श", "गंभीर"],
        },
        {
          title: "हजारीप्रसाद के ललित निबंध",
          desc: "सांस्कृतिक चेतना और लालित्य की सुंदर अभिव्यक्ति।",
          icon: "fas fa-leaf",
          bg: "#dce775",
          tags: ["सांस्कृतिक", "ललित", "कला"],
        },
      ],
      sher: [
        {
          title: "ग़ालिब के 10 मशहूर शेर",
          desc: "दिल्ली की तहजीब और फलसफे का बेहतरीन कलाम।",
          icon: "fas fa-pen-nib",
          bg: "#ba68c8",
          tags: ["इश्क़", "दर्शन", "दिल्ली"],
        },
        {
          title: "जौन एलिया की 10 गज़लें",
          desc: "तन्हाई और बेबाकी का अनोखा आधुनिक अंदाज़।",
          icon: "fas fa-moon",
          bg: "#ff8a65",
          tags: ["तन्हाई", "बेबाकी", "आधुनिक"],
        },
      ],
      dohe: [
        {
          title: "कबीर के 10 अनमोल दोहे",
          desc: "जीवन दर्शन और सामाजिक सुधार के कबीरपंथी मंत्र।",
          icon: "fas fa-sun",
          bg: "#f06292",
          tags: ["निर्गुण", "समाज", "ज्ञान"],
        },
        {
          title: "रहीम के नीतिपरक 10 दोहे",
          desc: "लोक व्यवहार और जीवन की नीतिपरक सुंदर सीख।",
          icon: "fas fa-hands-helping",
          bg: "#4fc3f7",
          tags: ["नीति", "व्यवहार", "भक्ति"],
        },
      ],
    };
    return collections[activeType] || collections["kahani"];
  };

  const curatedCards = getSidebarCollections();

  const getPageTitle = () => {
    const titles = {
      kavita: "कविता संग्रह",
      kahani: "कथा संग्रह",
      natak: "नाटक संग्रह",
      nibandh: "निबंध संग्रह",
      sher: "शेर संग्रह",
      dohe: "दोहावली",
    };
    return titles[activeType] || "साहित्य संग्रह";
  };

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="header-section text-center text-lg-start mb-5">
          <h1 className="page-main-title">{getPageTitle()}</h1>
          <p className="page-subtitle">
            हिंदी साहित्य की अनमोल कृतियों का डिजिटल संकलन
          </p>
        </div>

       <div className="row g-5">
  {/* LEFT LIST SECTION */}
  <div className="col-lg-8">
    <div className="work-list">
      {loading ? (
        <div className="text-center py-5">साहित्य लोड हो रहा है...</div>
      ) : listData.length > 0 ? (
        listData.map((item, index) => {
          // ✅ लेखक की ID और नाम को सुरक्षित तरीके से निकालना
          const authorDisplayName = item.authorId?.name || item.authorName || "अज्ञात रचनाकार";
          const authorKey = item.authorId?.id || item.authorId;

          return (
            <div
              key={item._id}
              className={`list-item-row ${
                index % 2 !== 0 ? "bg-tint" : ""
              }`}
            >
              <Link
                to={`/read/${authorKey}/${item.title}`}
                className="text-decoration-none flex-grow-1"
              >
                <div className="item-content">
                  <h5 className="work-title">{item.title}</h5>
                  <span className="author-name">
                    {/* ✅ यहाँ बदलाव किया है: अब authorDisplayName इस्तेमाल हो रहा है */}
                    रचनाकार: {authorDisplayName}
                  </span>
                </div>
              </Link>

              <div className="action-icons">
                <i
                  className={`fa-heart ${
                    likedItems[item._id] ? "fas text-danger" : "far"
                  }`}
                  onClick={() => toggleLike(item._id)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    transition: "0.2s",
                  }}
                ></i>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-5 text-muted">
          इस श्रेणी में अभी कोई रचना नहीं मिली।
        </div>
      )}
    </div>
  </div>
</div>
          {/* RIGHT SIDEBAR - MODERN CARDS */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "110px" }}>
              {curatedCards.map((card, i) => (
                <div
                  key={i}
                  className="modern-side-card mb-4"
                  style={{ backgroundColor: card.bg }}
                >
                  <div className="card-icon-box">
                    <i className={card.icon}></i>
                  </div>
                  <h4 className="modern-card-title">{card.title}</h4>
                  <p className="modern-card-desc">{card.desc}</p>
                  <div className="modern-tag-container">
                    {card.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="modern-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SahityaSangrah;
