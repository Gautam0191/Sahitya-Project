import React from "react";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const location = useLocation();

  // लिंक के हिसाब से टाइटल तय करना
  const getTitle = () => {
    if (location.pathname === "/bhakti-kavya") return "भक्ति काव्य";
    if (location.pathname === "/veer-ras") return "वीर रस";
    if (location.pathname === "/chhayavad") return "छायावाद";
    return "साहित्य";
  };

  return (
    <div className="container py-5" style={{ minHeight: "70vh" }}>
      <h1 className="text-center mb-4" style={{ color: "#5a2a3a" }}>{getTitle()}</h1>
      <hr />
      <p className="text-center">यहाँ {getTitle()} की चुनिंदा रचनाएं प्रदर्शित होंगी...</p>
      
      {/* यहाँ बाद में हम अपनी लिस्ट दिखाएंगे */}
    </div>
  );
};

export default CategoryPage;