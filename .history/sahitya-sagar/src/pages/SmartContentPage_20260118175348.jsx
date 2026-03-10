import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // या fetch इस्तेमाल करें
import "./SmartContentPage.css";

const ContentPage = ({ title, subtitle, type }) => {
  const navigate = useNavigate();
  const [backendData, setBackendData] = useState([]);

  // Backend से डेटा लाने का लॉजिक
  useEffect(() => {
    const fetchData = async () => {
      try {
        // यहाँ अपने Backend का URL डालें (जैसे http://localhost:5000/api/authors?category=type)
        const response = await axios.get(`YOUR_BACKEND_URL/authors?type=${type}`);
        // सिर्फ चुनिंदा 5-6 प्रोफाइल दिखाने के लिए slice कर सकते हैं
        setBackendData(response.data.slice(0, 10)); 
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    };
    fetchData();
  }, [type]);

  const getTargetRoute = () => {
    if (type === 'poetry') return 'kavita';
    if (type === 'story') return 'story';
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
        {/* 1. संग्रह कार्ड */}
        <div className="col-6 col-md-3 col-lg-2">
          <div className="square-card" onClick={() => navigate(`/sangrah/${finalType}`)} style={{ cursor: "pointer" }}>
            <div className="square-img-box grey-box">
              <h3 className="m-0 text-muted" style={{ fontWeight: "300", fontSize: "1.2rem" }}>संग्रह</h3>
            </div>
            <p className="square-name">समस्त {title}</p>
          </div>
        </div>

        {/* 2. Backend से आया हुआ लेखकों का डेटा */}
        {backendData && backendData.map((item) => (
          <div key={item._id} className="col-6 col-md-3 col-lg-2">
            <div className="square-card" onClick={() => navigate(`/author/${item._id}`)}>
              <div className="square-img-box">
                <img src={item.img} alt={item.name} onError={(e) => { e.target.src = "/placeholder-author.jpg"; }} />
              </div>
              <p className="square-name text-truncate">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;