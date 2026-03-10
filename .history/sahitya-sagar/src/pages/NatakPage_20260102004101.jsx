import React from "react";
import { natakData } from "../data"; // आपका नाटक वाला डेटा

const NatakPage = () => {
  return (
    <div className="natak-page-wrapper py-5" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <div className="container">
        {/* हेडर */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold section-title">रंगमंच और नाटक</h1>
          <p className="text-muted">साहित्य के जीवंत दृश्य और संवाद</p>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* नाटकों का ग्रिड */}
        <div className="row g-4">
          {natakData && natakData.map((natak) => (
            <div className="col-md-6 col-lg-4" key={natak.id}>
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                <div className="position-relative">
                   <img src={natak.img} className="card-img-top" alt={natak.title} style={{ height: "250px", objectFit: "cover" }} />
                   <span className="badge bg-danger position-absolute top-0 end-0 m-3">नाटक</span>
                </div>
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-2">{natak.title}</h4>
                  <p className="text-muted mb-3">{natak.writer || "प्रसिद्ध रचनाकार"}</p>
                  <p className="card-text text-secondary">
                    {natak.desc ? natak.desc.substring(0, 100) + "..." : "इस नाटक की विस्तृत जानकारी के लिए पढ़ें..."}
                  </p>
                  <button className="btn-global-sangrah py-2 px-4 mt-3" style={{ fontSize: '0.9rem' }}>
                    पूरा पढ़ें
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

export default NatakPage;