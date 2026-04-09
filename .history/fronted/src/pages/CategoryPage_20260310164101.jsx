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

  const poems = [
    { title: "विनय पत्रिका", author: "तुलसीदास", date: "15 मार्च 2026" },
    { title: "हिमाद्रि तुंग शृंग से", author: "जयशंकर प्रसाद", date: "12 मार्च 2026" },
    { title: "कुरुक्षेत्र", author: "रामधारी सिंह दिनकर", date: "10 मार्च 2026" },
  ];

  return (
    <div style={{ backgroundColor: "#fbfaf7", minHeight: "100vh", padding: "60px 0" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* Editorial Header */}
        <div className="mb-5">
          <span style={{ textTransform: "uppercase", letterSpacing: "3px", color: "#8a7b6f", fontSize: "0.8rem" }}>साहित्य सागर संग्रह</span>
          <h1 style={{ color: "#2d2926", fontWeight: "700", fontSize: "4rem", marginTop: "10px", lineHeight: "1" }}>{getTitle()}</h1>
          <div style={{ height: "1px", backgroundColor: "#dcdcdc", marginTop: "30px" }}></div>
        </div>

        {/* Magazine Style Grid */}
        <div className="mt-5">
          {poems.map((poem, index) => (
            <div key={index} className="py-4" style={{ borderBottom: "1px solid #e7e4de", cursor: "pointer" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 style={{ fontSize: "1.8rem", color: "#2d2926", margin: "0" }}>{poem.title}</h2>
                  <div style={{ fontSize: "0.9rem", color: "#8a7b6f", marginTop: "5px" }}>
                    {poem.author} <span style={{ margin: "0 10px" }}>•</span> {poem.date}
                  </div>
                </div>
                <div style={{ fontSize: "1.5rem", color: "#5a2a3a" }}>→</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-5 text-center">
          <p style={{ color: "#8a7b6f", fontSize: "0.9rem" }}>— और रचनाएं जल्द ही जोड़ी जाएंगी —</p>
        </div>

      </div>
    </div>
  );
};

export default CategoryPage;