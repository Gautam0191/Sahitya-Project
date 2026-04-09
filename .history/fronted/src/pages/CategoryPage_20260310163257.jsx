import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams(); // URL से कैटेगरी का नाम उठाएगा

  // यहाँ हम कैटेगरी का सही नाम सेट करेंगे
  const getCategoryTitle = (name) => {
    switch(name) {
      case "bhakti-kavya": return "भक्ति काव्य";
      case "veer-ras": return "वीर रस";
      case "chayavad": return "छायावाद";
      default: return "साहित्य";
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 style={{ color: "#5a2a3a" }}>{getCategoryTitle(categoryName)}</h1>
        <hr style={{ width: "100px", margin: "10px auto", borderTop: "3px solid #5a2a3a" }} />
      </div>
      
      {/* यहाँ हम बाद में कविताएं लिस्ट करेंगे */}
      <div className="row">
        <p className="text-center">जल्द ही यहाँ {getCategoryTitle(categoryName)} की रचनाएँ उपलब्ध होंगी...</p>
      </div>
    </div>
  );
};

export default CategoryPage;