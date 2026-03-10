import React from 'react';

// यह आपका अलग 'कविता' पेज है
const PoetryPage = () => {
  const poets = [
    { id: 1, name: "गजानन माधव मुक्तिबोध", img: "image_url" },
    { id: 2, name: "अज्ञेय", img: "image_url" },
    // यहाँ आप 15 कवियों की लिस्ट डाल सकते हैं
  ];

  return (
    <div className="poetry-section">
      <h1 className="main-title">कविता</h1>
      <p className="sub-title">हिंदी की काव्य-परंपरा से विभिन्न काव्य-विधाओं की रचनाओं का विशाल-संग्रह</p>
      
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <h2 className="section-name">कविताएँ</h2>
        <a href="#" className="view-all">समस्त</a>
      </div>

      <div className="row g-3">
        {/* पहला कार्ड: संग्रह */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="poet-card">
            <div className="card-image-box collection-box">
              <span className="collection-text">संग्रह</span>
            </div>
            <p className="card-footer-text">कविता संग्रह</p>
          </div>
        </div>

        {/* बाकी कवियों के कार्ड्स का लूप */}
        {poets.map((poet) => (
          <div key={poet.id} className="col-6 col-md-4 col-lg-2">
            <div className="poet-card">
              <div className="card-image-box">
                <img src={poet.img} alt={poet.name} className="poet-img" />
              </div>
              <p className="card-footer-text">{poet.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoetryPage;