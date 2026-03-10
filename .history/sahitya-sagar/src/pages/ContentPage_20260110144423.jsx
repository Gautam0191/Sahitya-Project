import React from "react";
import { poetryData, sliderStories, natakData } from "../data"; // Apna saara data import karein

const ContentPage = ({ type, title }) => {
  // Logic: Type ke hisaab se sahi data chunna
  let displayData = [];
  if (type === "poetry") displayData = poetryData;
  else if (type === "story") displayData = sliderStories;
  else if (type === "natak") displayData = natakData;
  else if (type === "geet") displayData = []; // Geet ka data agar data.js mein hai to yahan add karein

  return (
    <div className="content-page pt-5 mt-5" style={{ minHeight: "100vh", background: "#fdf7f2" }}>
      <div className="container pt-4">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ color: "#5a2a3a" }}>{title}</h1>
          <div style={{ width: "60px", height: "4px", background: "#5a2a3a", margin: "10px auto" }}></div>
        </div>

        <div className="row g-4">
          {displayData.length > 0 ? (
            displayData.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="card-img-top" 
                    style={{ height: "200px", objectFit: "cover" }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="text-muted small">
                      {item.poet || item.type || "साहित्य सागर"}
                    </p>
                    <button className="btn btn-sm text-white" style={{ background: "#5a2a3a" }}>
                      पूरा पढ़ें
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5 w-100">
              <h3 className="text-muted">जल्द आ रहा है...</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;