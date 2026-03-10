import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { favoriteAuthorsData } from "../data"; 
import "./SmartContentPage.css";

const SmartContentPage = ({ type, title, subtitle }) => {
  const navigate = useNavigate();

  // 'type' के आधार पर लेखकों को फिल्टर करें
  const filteredAuthors = favoriteAuthorsData.filter(
    (author) => author.category === type
  );

  // Debugging के लिए: इसे ब्राउज़र के Inspect > Console में देखें
  useEffect(() => {
    console.log("Current Type:", type);
    console.log("Found Authors:", filteredAuthors);
  }, [type, filteredAuthors]);

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
        {/* यहाँ "संग्रह" शब्द को डायनामिक रखा है */}
        <h3 className="section-label" style={{ borderLeft: "4px solid #b32d2e", paddingLeft: "10px", fontWeight: "bold" }}>
          {title} संग्रह
        </h3>
        <span className="text-primary cursor-pointer" style={{ cursor: "pointer" }}>समस्त</span>
      </div>

      <div className="row g-4">
        {/* संग्रह कार्ड (Fixed First Card) */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="poet-card-wrapper text-center">
            <div className="poet-img-box d-flex align-items-center justify-content-center mx-auto shadow-sm" 
                 style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "0 auto 10px", background: "#5a2a3a", color: "white" }}>
              <span className="fw-bold">संग्रह</span>
            </div>
            <p className="fw-medium">{title} संग्रह</p>
          </div>
        </div>

        {/* डायनामिक लेखक कार्ड्स */}
        {filteredAuthors.length > 0 ? (
          filteredAuthors.map((author) => (
            <div key={author.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="poet-card-wrapper text-center"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/author/${author.id}`)}
              >
                <div className="poet-img-box shadow-sm mx-auto" style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 10px", border: "1px solid #ddd" }}>
                  <img
                    src={author.img}
                    alt={author.name}
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p className="poet-name-label fw-medium text-dark">{author.name}</p>
              </div>
            </div>
          ))
        ) : (
          /* अगर डेटा नहीं मिलता तो यह मैसेज दिखेगा */
          <div className="col-12 mt-3">
             <p className="text-muted italic">इस श्रेणी में अभी कोई लेखक मौजूद नहीं हैं।</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartContentPage;