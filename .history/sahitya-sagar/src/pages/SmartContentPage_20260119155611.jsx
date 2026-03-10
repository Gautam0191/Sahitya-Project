import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SmartContentPage.css";

const ContentPage = ({ title, subtitle, type }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 1. Category Filter Logic ---
  // Agar type 'sher' hai to DB mein 'shayar' dhundna hai
  // Agar type 'dohe' hai to DB mein 'sant' dhundna hai
  const getBackendCategory = (rawType) => {
    const map = {
      sher: "shayar",
      shayari: "shayar",
      dohe: "sant",
    };
    return map[rawType] || rawType;
  };

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        setData([]);

        const searchCategory = getBackendCategory(type);

        // Backend call with correct category name
        const response = await axios.get(
          `http://localhost:5000/api/featured-authors-by-type?category=${searchCategory}`,
        );

        console.log(`Backend Data for ${searchCategory}:`, response.data);
        setData(response.data);
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (type) fetchAuthors();
  }, [type]);

  // --- 2. Sangrah Route Mapping ---
  const getTargetRoute = () => {
    const mapping = {
      poetry: "poetry", // DB mein 'poetry' hai
      story: "story", // DB mein 'story' hai
      nibandh: "essay", // DB mein 'essay' hai
      sher: "shayari", // DB mein 'shayari' hai
      shayari: "shayari",
      dohe: "doha", // DB mein 'doha' hai
    };
    return mapping[type] || type;
  };

  const finalType = getTargetRoute();

  return (
    <div className="container mt-5 pt-5">
      <div className="text-start mb-4">
        <h1
          className="display-5 fw-bold"
          style={{ color: "#5a2a3a", fontFamily: "serif" }}
        >
          {title}
        </h1>
        <p className="text-muted small">{subtitle}</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h4 className="fw-bold m-0" style={{ fontSize: "1.2rem" }}>
          {title}
        </h4>
      </div>

      <div className="row g-2">
        {/* संग्रह कार्ड - Sangrah page par bhejta hai */}
        <div className="col-6 col-md-3 col-lg-2">
          <div
            className="square-card"
            onClick={() => navigate(`/sangrah/${finalType}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="square-img-box grey-box">
              <h3
                className="m-0 text-muted"
                style={{ fontWeight: "300", fontSize: "1.2rem" }}
              >
                संग्रह
              </h3>
            </div>
            <p className="square-name">समस्त {title}</p>
          </div>
        </div>

        {/* लेखकों के कार्ड्स */}
        {!loading && data.length > 0
          ? data.map((item) => (
              <div key={item._id} className="col-6 col-md-3 col-lg-2">
                <div
                  className="square-card"
                  onClick={() => navigate(`/author/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="square-img-box">
                    <img
                      src={
                        item.img ||
                        "https://via.placeholder.com/200?text=Author"
                      }
                      alt={item.name}
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/200?text=Author";
                      }}
                    />
                  </div>
                  <p className="square-name text-truncate">{item.name}</p>
                </div>
              </div>
            ))
          : !loading && (
              <p className="ps-3 text-muted">
                इस श्रेणी में कोई पसंदीदा लेखक नहीं मिला।
              </p>
            )}
      </div>
    </div>
  );
};

export default ContentPage;
