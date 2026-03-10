import React from "react";
import { useNavigate } from "react-router-dom";
import "./SmartContentPage.css";

const ContentPage = ({ data, title, subtitle }) => {
  const navigate = useNavigate();

  // 🔍 यह चेक करने के लिए कि डेटा इस पेज तक पहुँच रहा है या नहीं
  console.log(`Rendering ${title} Page with data:`, data);

  return (
    <div className="container mt-5 pt-5">
      {/* मुख्य हेडिंग */}
      <div className="text-start mb-4">
        <h1
          className="display-5 fw-bold"
          style={{ color: "#5a2a3a", fontFamily: "serif" }}
        >
          {title}
        </h1>
        <p className="text-muted small">{subtitle}</p>
      </div>

      {/* सेक्शन लेबल */}
      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h4 className="fw-bold m-0" style={{ fontSize: "1.4rem" }}>
          {title}
        </h4>
        <span
          className="text-primary fw-bold"
          style={{ cursor: "pointer", fontSize: "0.9rem" }}
        >
          समस्त
        </span>
      </div>

      <div className="row g-2">
        {/* 1. पहला कार्ड: 'समस्त संग्रह' */}
        <div className="col-6 col-md-3 col-lg-2">
          <div className="square-card">
            <div className="square-img-box grey-box">
              <h3 className="m-0 text-muted" style={{ fontWeight: "300" }}>
                संग्रह
              </h3>
            </div>
            <p className="square-name">समस्त {title}</p>
          </div>
        </div>

        {/* 2. डायनामिक कार्ड्स */}
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="col-6 col-md-3 col-lg-2">
              <div
                className="square-card"
                onClick={() => navigate(`/author/${item.id}`)}
                title={item.name}
                style={{ cursor: "pointer" }}
              >
                <div className="square-img-box">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/200?text=No+Image";
                    }}
                  />
                </div>
                <p className="square-name text-truncate">{item.name}</p>
              </div>
            </div>
          ))
        ) : (
          /* ❌ अगर डेटा खाली है, तो यह हिस्सा दिखेगा */
          <div className="col-12 text-center py-5">
            <h5 className="text-muted">
              क्षमा करें, इस श्रेणी में अभी कोई लेखक उपलब्ध नहीं है।
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;