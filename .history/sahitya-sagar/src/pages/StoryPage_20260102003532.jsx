import React from "react";
import { sliderStories } from "../data"; // आपका कहानियों वाला डेटा

const StoryPage = () => {
  return (
    <div className="story-page-wrapper py-5" style={{ background: "#fdf7f2", minHeight: "100vh" }}>
      <div className="container">
        {/* हेडर */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold section-title">कथा संसार</h1>
          <p className="text-muted">मनोरंजक और प्रेरणादायक कहानियों का संग्रह</p>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* कहानियों का ग्रिड */}
        <div className="row g-4">
          {sliderStories.map((story) => (
            <div className="col-md-4 col-lg-3" key={story.id}>
              <div className="card h-100 border-0 shadow-sm story-card">
                <img src={story.img} className="card-img-top" alt={story.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="fw-bold">{story.title}</h5>
                  <p className="text-muted small">{story.date}</p>
                  <p className="card-text text-secondary" style={{ fontSize: "0.9rem" }}>
                    {story.desc ? story.desc.substring(0, 80) + "..." : "कहानी पढ़ने के लिए क्लिक करें..."}
                  </p>
                  <button className="btn btn-link p-0 text-decoration-none" style={{ color: "#5a2a3a", fontWeight: "600" }}>
                    आगे पढ़ें →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryPage;