import React from "react";
import { useNavigate } from "react-router-dom";
import { favoriteAuthorsData } from "../data"; 
import "./SmartContentPage.css";

const SmartContentPage = ({ type, title, subtitle }) => {
  const navigate = useNavigate();

  // डेटा फिल्टर करें
  const filteredAuthors = favoriteAuthorsData.filter(
    (author) => author.category === type
  );

  return (
    <div className="container mt-5 pt-5">
      {/* हेडर सेक्शन - लाल रंग की बड़ी हेडिंग */}
      <div className="text-start mb-5">
        <h1 className="display-4 fw-bold" style={{ color: "#b32d2e", fontFamily: "serif" }}>
          {title}
        </h1>
        <p className="text-muted" style={{ fontSize: "1.1rem" }}>
          {subtitle}
        </p>
      </div>

      {/* सब-हेडिंग सेक्शन */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h3 className="fw-bold m-0" style={{ fontSize: "1.5rem", color: "#333" }}>
          {title}एँ
        </h3>
        <span className="text-primary fw-bold" style={{ cursor: "pointer" }}>समस्त</span>
      </div>

      <div className="row g-3">
        {/* 1. पहला कार्ड: 'संग्रह' (Rectangular) */}
        <div className="col-6 col-md-3 col-lg-2">
          <div className="custom-author-card">
            <div className="author-img-container collection-box">
              <h2 className="m-0">संग्रह</h2>
            </div>
            <p className="author-name-tag">{title} संग्रह</p>
          </div>
        </div>

        {/* 2. लेखकों के कार्ड्स (Rectangular) */}
        {filteredAuthors.map((author) => (
          <div key={author.id} className="col-6 col-md-3 col-lg-2">
            <div 
              className="custom-author-card" 
              onClick={() => navigate(`/author/${author.id}`)}
            >
              <div className="author-img-container">
                <img src={author.img} alt={author.name} />
              </div>
              <p className="author-name-tag">{author.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartContentPage;