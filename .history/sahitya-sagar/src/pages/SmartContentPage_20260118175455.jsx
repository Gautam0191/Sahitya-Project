import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // पक्का करें कि axios install है (npm install axios)
import "./SmartContentPage.css";

const ContentPage = ({ title, subtitle, type }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // यहाँ डेटा स्टोर होगा
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        // यहाँ अपने असली API URL को डालें
        // उदाहरण: 'http://localhost:5000/api/authors?category=' + type
        const response = await axios.get(`http://localhost:5000/api/authors?category=${type}`);
        
        // हम सिर्फ पहले 11 लेखक दिखाएंगे ताकि "संग्रह" कार्ड के साथ कुल 12 बॉक्स हों
        setData(response.data.slice(0, 11)); 
      } catch (error) {
        console.error("Backend से डेटा लाने में गलती हुई:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [type]); // जब भी type (poetry/story) बदलेगा, डेटा फिर से लोड होगा

  const getTargetRoute = () => {
    if (type === 'poetry') return 'kavita';
    if (type === 'story') return 'kahani';
    return type; 
  };

  const finalType = getTargetRoute();

  return (
    <div className="container mt-5 pt-5">
      <div className="text-start mb-4">
        <h1 className="display-5 fw-bold" style={{ color: "#5a2a3a", fontFamily: "serif" }}>{title}</h1>
        <p className="text-muted small">{subtitle}</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h4 className="fw-bold m-0" style={{ fontSize: "1.2rem" }}>{title}</h4>
      </div>

      <div className="row g-2">
        {/* 1. पहला कार्ड हमेशा 'संग्रह' रहेगा */}
        <div className="col-6 col-md-3 col-lg-2">
          <div className="square-card" onClick={() => navigate(`/sangrah/${finalType}`)} style={{ cursor: "pointer" }}>
            <div className="square-img-box grey-box">
              <h3 className="m-0 text-muted" style={{ fontWeight: "300", fontSize: "1.2rem" }}>संग्रह</h3>
            </div>
            <p className="square-name">समस्त {title}</p>
          </div>
        </div>

        {/* 2. बगल में Backend से आए लेखक */}
        {loading ? (
          <p className="ps-3 text-muted">डेटा आ रहा है...</p>
        ) : (
          data.map((item) => (
            <div key={item._id} className="col-6 col-md-3 col-lg-2">
              <div
                className="square-card"
                onClick={() => navigate(`/author/${item._id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="square-img-box">
                  <img
                    src={item.img || "https://via.placeholder.com/200?text=Author"}
                    alt={item.name}
                    onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Author"; }}
                  />
                </div>
                <p className="square-name text-truncate">{item.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContentPage;