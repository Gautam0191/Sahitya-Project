import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // ✅ useNavigate जोड़ा
import axios from "axios";
import "./AuthorDetailPage.css";

const AuthorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ नेविगेशन के लिए हुक
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAuthorDetail = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/authors');
        const foundAuthor = response.data.find((a) => String(a.id) === String(id));
        setAuthor(foundAuthor);
        setLoading(false);
      } catch (error) {
        console.error("विवरण लाने में त्रुटि:", error);
        setLoading(false);
      }
    };
    fetchAuthorDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center mt-5">
        <div className="spinner-border text-wine" role="status"></div>
        <p className="mt-3">साहित्यकार का जीवन परिचय लोड हो रहा है...</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="container py-5 text-center mt-5">
        <h3 className="text-danger">लेखक की जानकारी नहीं मिली!</h3>
        <Link to="/" className="btn btn-dark mt-3">होमपेज पर वापस जाएँ</Link>
      </div>
    );
  }

  return (
    <div className="author-detail-page">
      <div className="author-header py-5">
        <div className="container text-center text-white">
          <div className="author-img-large mb-4 mx-auto shadow-lg">
            <img src={author.img} alt={author.name} />
          </div>
          <h1 className="fw-bold mb-2 display-5" style={{fontFamily: 'serif'}}>{author.name}</h1>
          <span className="badge rounded-pill bg-light text-dark px-4 py-2 mb-4 shadow-sm">
            {author.categoryLabel || "प्रसिद्ध साहित्यकार"}
          </span>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
            {/* जन्म, निधन, उपनाम के डिब्बे यहाँ रहेंगे... */}
            <div className="info-box"><span className="info-label">जन्म</span><span className="fw-bold">{author.birthDate || "अज्ञात"}</span></div>
            <div className="info-box"><span className="info-label">निधन</span><span className="fw-bold">{author.deathDate || "---"}</span></div>
            <div className="info-box"><span className="info-label">उपनाम</span><span className="fw-bold">{author.nickName || author.name}</span></div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="bio-card p-4 p-md-5 bg-white shadow-sm rounded-4 h-100">
              <h3 className="section-title mb-4">संपूर्ण जीवन परिचय</h3>
              <p className="author-bio-text text-secondary lh-lg fs-5" style={{textAlign: 'justify'}}>
                {author.longBio || author.bio || "जानकारी जल्द उपलब्ध होगी।"}
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="works-card p-4 p-md-5 bg-white shadow-sm rounded-4 h-100 border-start border-5 border-wine">
              <h3 className="section-title mb-4">प्रमुख रचनाएँ</h3>
              
              {author.structuredWorks && Object.keys(author.structuredWorks).length > 0 ? (
                Object.entries(author.structuredWorks).map(([catName, items]) => (
                  <div key={catName} className="mb-4">
                    <p className="work-category-title text-uppercase mb-2 text-muted fw-bold">{catName}</p>
                    <div className="ps-2">
                      {items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="nested-work-item py-1" 
                          style={{ cursor: 'pointer' }}
                          // ✅ यहाँ से नेविगेशन होगा
                          onClick={() => navigate(`/read/${author.id}/${item}`)}
                        >
                          <span className="bullet-dot"></span>
                          <span className="work-item-text text-primary text-decoration-underline-hover">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-muted italic">रचनाओं की सूची जल्द ही अपडेट की जाएगी।</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailPage;