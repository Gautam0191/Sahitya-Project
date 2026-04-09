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
    { title: "विनय पत्रिका", author: "तुलसीदास" },
    { title: "हिमाद्रि तुंग शृंग से", author: "जयशंकर प्रसाद" },
    { title: "कुरुक्षेत्र", author: "रामधारी सिंह दिनकर" },
    { title: "साकेत", author: "मैथिलीशरण गुप्त" },
  ];

  return (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", padding: "80px 20px", color: "#fff" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        {/* बोल्ड और ड्रामेटिक हेडिंग */}
        <div className="mb-5 text-center">
          <h1 style={{ 
            fontSize: "clamp(3rem, 10vw, 7rem)", 
            fontWeight: "900", 
            textTransform: "uppercase",
            color: "transparent",
            WebkitTextStroke: "2px #5a2a3a",
            letterSpacing: "-5px"
          }}>
            {getTitle()}
          </h1>
        </div>

        {/* आर्टिस्टिक लिस्ट */}
        <div className="d-flex flex-wrap justify-content-center">
          {poems.map((poem, index) => (
            <div key={index} 
              className="p-4 m-3" 
              style={{ 
                width: "300px", 
                border: "1px solid #333",
                transition: "0.5s",
                cursor: "pointer",
                textAlign: "center"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#5a2a3a";
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{poem.title}</h3>
              <p style={{ color: "#8a7b6f", fontSize: "0.8rem", textTransform: "uppercase" }}>{poem.author}</p>
              <div style={{ height: "2px", width: "30px", backgroundColor: "#5a2a3a", margin: "15px auto" }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;