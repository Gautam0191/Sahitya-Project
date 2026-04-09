import React from "react";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/bhakti-kavya") return "भक्ति काव्य";
    if (location.pathname === "/veer-ras") return "वीर रस";
    if (location.pathname === "/chhayavad") return "छायावाद";
    return "साहित्य";
  };

  // डमी डेटा (इसे आप बाद में अपनी असली कविताओं से बदल सकते हैं)
  const poems = [
    { id: 1, title: "रामचरितमानस", snippet: "मंगल भवन अमंगल हारी...", author: "तुलसीदास" },
    { id: 2, title: "वीरों का कैसा हो वसंत", snippet: "आ रही हिमालय से पुकार...", author: "सुभद्रा कुमारी चौहान" },
    { id: 3, title: "जुही की कली", snippet: "मैं वसंत-दूत, लेकर...", author: "निराला" },
  ];

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "80vh", paddingBottom: "60px" }}>
      {/* हेडर सेक्शन */}
      <div className="container py-5 text-center">
        <h1 style={{ color: "#5a2a3a", fontWeight: "700", fontSize: "3rem" }}>{getTitle()}</h1>
        <div style={{ width: "80px", height: "4px", backgroundColor: "#5a2a3a", margin: "15px auto", borderRadius: "2px" }}></div>
        <p className="text-muted">हिंदी साहित्य के अनमोल रत्नों का संकलन</p>
      </div>

      {/* कविता कार्ड्स का ग्रिड */}
      <div className="container">
        <div className="row g-4">
          {poems.map((poem) => (
            <div key={poem.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm" style={{ border: "none", borderRadius: "15px", transition: "0.3s" }}>
                <div className="card-body p-4">
                  <h5 className="card-title" style={{ color: "#5a2a3a", fontWeight: "bold" }}>{poem.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">लेखक: {poem.author}</h6>
                  <p className="card-text mt-3" style={{ fontStyle: "italic" }}>"{poem.snippet}..."</p>
                  <button className="btn mt-3" style={{ backgroundColor: "#5a2a3a", color: "white", borderRadius: "8px" }}>
                    पूरा पढ़ें
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;