import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"; // useNavigate जोड़ा
import axios from "axios";
import "./AuthorsListPage.css"; 

const SearchPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const navigate = useNavigate(); // नेविगेशन के लिए

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
    <div className="container py-5 mt-5" style={{ minHeight: "80vh" }}>
      {/* हेडर सेक्शन */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#5a2a3a" }}>
          खोज के परिणाम: "{query}"
        </h2>
        <div className="section-line"></div>
        <p className="text-muted">{allResults.length} परिणाम मिले</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-wine" role="status"></div>
          <p className="mt-2 text-wine">खोज जारी है...</p>
        </div>
      ) : (
        <>
          <div className="row g-4 justify-content-center">
            {allResults.map((item) => (
              <div className="col-6 col-md-4 col-lg-3" key={item._id || item.id}>
                
                {item.isAuthor ? (
                  /* ✅ लेखक कार्ड (आपका ओरिजिनल स्ट्रक्चर) */
                  <Link to={`/author/${item.id}`} className="text-decoration-none">
                    <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100">
                      <div className="author-image-wrapper shadow-sm">
                        <img
                          src={item.img || item.image}
                          alt={item.name}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Sahitya+Sagar"; }}
                        />
                      </div>
                      <h5 className="text-dark fw-bold mb-1">{item.name || item.title}</h5>
                      <p className="text-muted small mb-2">{item.categoryLabel || "साहित्यकार"}</p>
                      {/* नीला लिंक हटाने के लिए यहाँ मैरून टेक्स्ट जोड़ा */}
                      <div className="fw-bold small" style={{ color: "#5a2a3a" }}>
                        प्रोफाइल देखें
                      </div>
                    </div>
                  </Link>
                ) : (
                  /* ✅ रचना कार्ड (आपका ओरिजिनल स्ट्रक्चर) */
                  <div className="card h-100 border-0 shadow-sm story-card p-3 rounded-4 bg-white transition-hover">
                    <div className="card-body d-flex flex-column text-center">
                      <span className="badge bg-light text-wine mb-2 align-self-center px-3">{item.type}</span>
                      <h5 className="fw-bold text-dark">{item.title}</h5>
                      <p className="text-muted small mb-3">लेखक: {item.authorName}</p>
                      <div className="mt-auto">
                        {/* नीला रंग हटाकर सीधा मैरून स्टाइल दिया */}
                        <Link to={`/read/${item.authorId}/${item.title}`} className="fw-bold text-decoration-none" style={{ color: "#5a2a3a" }}>
                          पढ़ें
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* ✅ समस्त संग्रह बटन (App.css वाली क्लास के साथ) */}
          {allResults.length > 0 && (
            <div className="text-center mt-5">
              <button
                className="btn-global-sangrah"
                onClick={() => navigate("/")}
              >
                मुख्य पृष्ठ पर वापस जाएं
              </button>
            </div>
          )}
        </>
      )}

      {!loading && allResults.length === 0 && (
        <div className="text-center py-5">
          <div className="no-data-icon">📜</div>
          <h4 className="text-muted">अफ़सोस, कोई परिणाम नहीं मिला।</h4>
          <button className="btn-global-sangrah mt-3" onClick={() => navigate("/")}>
             मुख्य पृष्ठ पर वापस जाएं
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;