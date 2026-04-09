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
    { id: 1, title: "विनय पत्रिका", author: "तुलसीदास" },
    { id: 2, title: "हिमाद्रि तुंग शृंग से", author: "जयशंकर प्रसाद" },
    { id: 3, title: "कुरुक्षेत्र", author: "रामधारी सिंह दिनकर" },
  ];

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* प्रीमियम हेडर */}
      <div className="text-center py-5" style={{ borderBottom: "1px solid #e0dcd5" }}>
        <h1 style={{ color: "#5a2a3a", fontWeight: "900", fontSize: "3.5rem", letterSpacing: "-1px" }}>{getTitle()}</h1>
        <p style={{ color: "#8a7b6f", fontSize: "1.2rem", fontStyle: "italic" }}>शब्दों की गहराई, भावनाओं का सागर</p>
      </div>

      {/* सुंदर लिस्ट डिज़ाइन */}
      <div className="container mt-5" style={{ maxWidth: "800px" }}>
        {poems.map((poem) => (
          <div key={poem.id} className="d-flex align-items-center justify-content-between p-4 mb-3" 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "8px", 
              borderLeft: "4px solid #5a2a3a",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
            }}>
            <div>
              <h4 style={{ color: "#333", margin: "0", fontWeight: "600" }}>{poem.title}</h4>
              <p style={{ color: "#5a2a3a", margin: "0", fontSize: "0.9rem" }}>लेखक: {poem.author}</p>
            </div>
            <button className="btn" style={{ border: "1px solid #5a2a3a", color: "#5a2a3a", borderRadius: "0" }}>
              पढ़ें
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;