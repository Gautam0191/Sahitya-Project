import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthorsListPage.css"; 

const SearchPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();

  // URL से सर्च क्वेरी निकालना
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q") || "";

  useEffect(() => {
    const fetchGlobalData = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/content/all/search?q=${query}`);
        setAllResults(res.data);
      } catch (err) {
        console.error("सर्च एरर:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGlobalData();
  }, [query]);

  return (
    <div className="container py-5 mt-5" style={{ minHeight: "80vh" }}>
      {/* --- हेडर सेक्शन --- */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#5a2a3a" }}>
          खोज के परिणाम: "{query}"
        </h2>
        <div className="section-line mx-auto"></div>
        <p className="text-muted italic">{allResults.length} अनमोल रचनाएँ व लेखक मिले</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-wine" role="status"></div>
          <p className="mt-3 text-wine">अक्षरों के मोती पिरोए जा रहे हैं...</p>
        </div>
      ) : (
        <>
          <div className="row g-4 justify-content-center">
            {allResults.map((item) => {
              // ID और Title को सुरक्षित तरीके से हैंडल करना
              const authorId = item.authorId || item.id || item._id;
              const workTitle = item.title || "";

              return (
                <div className="col-6 col-md-4 col-lg-3 d-flex" key={item._id || item.id}>
                  
                  {item.isAuthor ? (
                    /* ✅ लेखक कार्ड */
                    <Link to={`/author/${authorId}`} className="text-decoration-none w-100">
                      <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100 transition-hover">
                        <div className="author-image-wrapper shadow-sm mx-auto mb-3">
                          <img
                            src={item.img || item.image}
                            alt={item.name}
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Author"; }}
                          />
                        </div>
                        <h5 className="text-dark fw-bold mb-1">{item.name}</h5>
                        <p className="text-muted small mb-2">{item.categoryLabel || "साहित्यकार"}</p>
                        <div className="fw-bold small" style={{ color: "#5a2a3a" }}>
                          प्रोफाइल देखें <i className="fas fa-arrow-right ms-1" style={{fontSize: '0.7rem'}}></i>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    /* ✅ रचना कार्ड (कहानी/कविता) */
                    <div className="card h-100 border-0 shadow-sm story-card p-3 rounded-4 bg-white transition-hover w-100">
                      <div className="card-body d-flex flex-column text-center">
                        <span className="badge bg-light text-wine mb-2 align-self-center px-3">
                          {item.type}
                        </span>
                        <h5 className="fw-bold text-dark mb-2">{workTitle}</h5>
                        <p className="text-muted small mb-3">
                          <i className="fas fa-feather-alt me-1"></i> {item.authorName}
                        </p>
                        <div className="mt-auto pt-2">
                          <Link 
                            to={`/read/${authorId}/${workTitle}`} 
                            className="fw-bold text-decoration-none" 
                            style={{ color: "#5a2a3a" }}
                          >
                            पढ़ें <i className="fas fa-book-open ms-1"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* --- समस्त संग्रह बटन (सिर्फ रिज़ल्ट होने पर) --- */}
          {allResults.length > 0 && (
            <div className="text-center mt-5 pt-4">
              <button className="btn-global-sangrah" onClick={() => navigate("/stories")}>
                समस्त संग्रह
              </button>
            </div>
          )}
        </>
      )}

      {/* --- नो रिज़ल्ट सेक्शन --- */}
      {!loading && allResults.length === 0 && (
        <div className="text-center py-5">
          <div className="mb-3" style={{ fontSize: "3rem" }}>📜</div>
          <h4 className="text-muted fw-bold">क्षमा करें, कोई परिणाम नहीं मिला</h4>
          <p className="text-muted">शायद कुछ और खोजने से बात बन जाए?</p>
          <button className="btn-global-sangrah mt-3" onClick={() => navigate("/")}>
            मुख्य पृष्ठ पर जाएं
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;