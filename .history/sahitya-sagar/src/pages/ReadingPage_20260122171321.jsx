import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"; // useNavigate जोड़ा
import axios from "axios";
import "./AuthorsListPage.css"; 

const SearchPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const navigate = useNavigate(); // नेविगेट करने के लिए

  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q") || "";

  useEffect(() => {
    const fetchGlobalData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/content/all/search?q=${query}`);
        setAllResults(res.data);
      } catch (err) {
        console.error("सर्च एरर:", err);
      }
      setLoading(false);
    };
    if (query) fetchGlobalData();
  }, [query]);

  return (
    <div className="search-page-wrapper">
      <div className="container py-5 mt-5">
        {/* प्रीमियम हेडर */}
        <div className="text-center mb-5 search-header-section">
          <span className="search-label">साहित्यिक खोज</span>
          <h2 className="display-6 fw-bold mt-2" style={{ color: "#5a2a3a" }}>
            "{query}" के लिए परिणाम
          </h2>
          <div className="section-line mx-auto"></div>
          <p className="text-muted italic">{allResults.length} अनमोल रचनाएँ व लेखक मिले</p>
        </div>

        {loading ? (
          <div className="text-center py-5 loading-box">
            <div className="spinner-border text-wine" role="status"></div>
            <p className="mt-3 gold-text">अक्षरों के मोती पिरोए जा रहे हैं...</p>
          </div>
        ) : (
          <>
            <div className="row g-4 justify-content-center">
              {allResults.map((item) => (
                <div className="col-6 col-md-4 col-lg-3 d-flex" key={item._id || item.id}>
                  
                  {item.isAuthor ? (
                    /* ✅ लेखक कार्ड */
                    <Link to={`/author/${item.id}`} className="text-decoration-none w-100">
                      <div className="author-card-premium text-center h-100">
                        <div className="author-img-container">
                          <img
                            src={item.img} 
                            alt={item.name}
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Author"; }}
                          />
                        </div>
                        <div className="author-info">
                          <h5 className="fw-bold">{item.name}</h5>
                          <span className="category-badge">{item.categoryLabel || "साहित्यकार"}</span>
                        </div>
                        {/* नीला रंग हटाकर मैरून किया */}
                        <div className="mt-3 small fw-bold" style={{ color: "#5a2a3a" }}>
                          प्रोफाइल देखें <i className="fas fa-chevron-right ms-1" style={{fontSize: '0.7rem'}}></i>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    /* ✅ रचना कार्ड */
                    <div className="work-card-premium h-100 w-100">
                      <div className="card-accent-line"></div>
                      <div className="p-4 d-flex flex-column h-100">
                        <span className="work-type-tag">{item.type}</span>
                        <h5 className="work-title mt-2">{item.title}</h5>
                        <p className="work-author">
                          <i className="fas fa-feather-alt me-2"></i>{item.authorName}
                        </p>
                        <div className="mt-auto pt-3">
                          {/* यहाँ नीला रंग मैरून किया गया है */}
                          <Link to={`/read/${item.authorId}/${item.title}`} className="btn-read-premium" style={{ color: "#5a2a3a", textDecoration: "none" }}>
                            पढ़ें <i className="fas fa-chevron-right ms-1"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ✅ नीचे वाला "समस्त संग्रह" बटन (रिजल्ट्स होने पर भी दिखेगा) */}
            {allResults.length > 0 && (
              <div className="text-center mt-5 pt-4">
                <button
                  className="btn-global-sangrah"
                  onClick={() => navigate("/")}
                >
                  समस्त संग्रह
                </button>
              </div>
            )}
          </>
        )}

        {/* No Results Section */}
        {!loading && allResults.length === 0 && (
          <div className="text-center py-5 no-results-box">
            <div className="empty-scroll-icon">📜</div>
            <h4 className="fw-bold text-dark">क्षमा करें, यह शब्द हमारे पुस्तकालय में नहीं मिला</h4>
            <p className="text-muted mb-4">हो सकता है स्पेलिंग में कुछ कमी हो, या आप कुछ और खोजना चाहें?</p>
            <button
              className="btn-global-sangrah"
              onClick={() => navigate("/")}
            >
              मुख्य पृष्ठ पर जाएं
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;