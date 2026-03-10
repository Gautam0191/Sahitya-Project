import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SmartContentPage.css";

const ContentPage = ({ title, subtitle, type }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        setData([]); // Naya data aane se pehle purana saaf karein

        // Backend ko call (type ki value yahan dynamic jayegi)
        const response = await axios.get(
          `http://localhost:5000/api/featured-authors-by-type?category=${type}`,
        );

        console.log(`Backend Data for ${type}:`, response.data);
        setData(response.data);
      } catch (error) {
        console.error("Backend se data lane mein galti hui:", error);
      } finally {
        setLoading(false);
      }
    };

    if (type) fetchAuthors();
  }, [type]);

  // Routing ke liye mapping
  const getTargetRoute = () => {
    const mapping = {
      poetry: "kavita",
      story: "kahani",
      nibandh: "nibandh",
      sher: "shayar", // Card click par 'shayar' route par jayega
      shayari: "shayar", // Dono cases handle kar liye
      dohe: "sant", // Card click par 'sant' route par jayega
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
        {/* 1. संग्रह कार्ड */}
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

        {/* 2. पसंदीदा लेखकों के कार्ड्स */}
        {!loading && data.length > 0
          ? data.map((item) => (
              <div key={item._id} className="col-6 col-md-3 col-lg-2">
                <div
                  className="square-card"
                  onClick={() => navigate(`/author/${item.id}`)} // item.id (जैसे 1, 2, 3) का उपयोग करें
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
