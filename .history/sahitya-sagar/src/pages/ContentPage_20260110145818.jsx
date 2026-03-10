import React from "react";
import { useNavigate } from "react-router-dom";
import { favoriteAuthorsData } from "../data"; 
import "./SmartContentPage.css";

const SmartContentPage = ({ type, title, subtitle }) => {
  const navigate = useNavigate();

  // 'type' के आधार पर लेखकों को फिल्टर करें (जैसे: 'kavi', 'kahanikar', आदि)
  const filteredAuthors = favoriteAuthorsData.filter(
    (author) => author.category === type
  );

  return (
    <div className="container mt-5 pt-5">
      {/* हेडर सेक्शन */}
      <div className="poetry-header text-start mb-5">
        <h1 className="main-title-red" style={{ color: "#b32d2e", fontWeight: "bold" }}>
          {title}
        </h1>
        <p className="sub-title-text text-muted">
          {subtitle}
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="section-label" style={{ borderLeft: "4px solid #b32d2e", paddingLeft: "10px", fontWeight: "bold" }}>
          {title} संग्रह
        </h3>
        <span className="text-primary cursor-pointer" style={{ cursor: "pointer" }}>समस्त</span>
      </div>

      <div className="row g-4">
        {/* संग्रह कार्ड */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="poet-card-wrapper text-center">
            <div className="poet-img-box d-flex align-items-center justify-content-center" 
                 style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "0 auto 10px", background: "#5a2a3a", color: "white" }}>
              <span className="fw-bold">संग्रह</span>
            </div>
            <p className="fw-medium">{title} संग्रह</p>
          </div>
        </div>

        {/* डायनामिक लेखक कार्ड्स */}
        {filteredAuthors.map((author) => (
          <div key={author.id} className="col-6 col-md-4 col-lg-2">
            <div
              className="poet-card-wrapper text-center"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/author/${author.id}`)}
            >
              <div className="poet-img-box shadow-sm" style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 10px", border: "1px solid #ddd" }}>
                <img
                  src={author.img}
                  alt={author.name}
                  className="img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="poet-name-label fw-medium">{author.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartContentPage;