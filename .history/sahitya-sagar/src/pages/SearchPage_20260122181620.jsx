import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthorsListPage.css"; 

const SearchPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q") || "";

  // टाइप को हिंदी में बदलने के लिए फंक्शन
  const getHindiType = (type) => {
    const types = {
      poetry: "कविता",
      story: "कहानी",
      nibandh: "निबंध",
      sher: "शेर",
      dohe: "दोहे",
      kavi: "कवि",
      kahanikar: "कहानीकार"
    };
    return types[type.toLowerCase()] || type;
  };

  useEffect(() => {
    const fetchGlobalData = async () => {
      if (!query) return;
      
      // ✅ सर्च हिस्ट्री (Suggestion) में जोड़ने के लिए
      const history = JSON.parse(localStorage.getItem("recentSearches") || "[]");
      if (!history.includes(query)) {
        const newHistory = [query, ...history].slice(0, 5); 
        localStorage.setItem("recentSearches", JSON.stringify(newHistory));
      }

      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/content/all/search?q=${query}`);
        setAllResults(res.data);
      } catch (err) {
        console.error("सर्च एरर:", err);
      }
      setLoading(false);
    };
    fetchGlobalData();
  }, [query]);

  return (
    <div className="container py-5 mt-5" style={{ minHeight: "80vh" }}>
      {/* हेडर सेक्शन */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#5a2a3a" }}>
          खोज के परिणाम: "{query}"
        </h2>
        <div className="section-line mx-auto"></div>
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
                  /* ✅ लेखक कार्ड */
                  <Link to={`/author/${item.id || item.authorId}`} className="text-decoration-none">
                    <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100" style={{ border: "1px solid rgba(90,42,58,0.1)" }}>
                      <div className="author-image-wrapper shadow-sm mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                        <img
                          src={item.img || item.image}
                          alt={item.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Author"; }}
                        />
                      </div>
                      <h5 className="text-dark fw-bold mb-1" style={{ fontSize: "1.3rem" }}>{item.name || item.title}</h5>
                      <p className="text-muted small mb-2">{item.categoryLabel || "साहित्यकार"}</p>
                      <div className="fw-bold small mt-auto" style={{ color: "#5a2a3a" }}>
                        प्रोफ़ाइल देखें
                      </div>
                    </div>
                  </Link>
                ) : (
                  /* ✅ रचना कार्ड */
                  <div className="card h-100 border-0 shadow-sm story-card p-3 rounded-4 bg-white transition-hover" style={{ border: "1px solid rgba(90,42,58,0.1)" }}>
                    <div className="card-body d-flex flex-column text-center p-0">
                      <span className="badge bg-light text-wine mb-2 align-self-center px-3" style={{ fontWeight: "600" }}>
                        {getHindiType(item.type)}
                      </span>
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "1.4rem", lineHeight: "1.2" }}>
                        {item.title}
                      </h5>
                      <p className="text-muted small mb-3">लेखक: {item.authorName}</p>
                      <div className="mt-auto">
                        <Link to={`/read/${item.authorId}/${item.title}`} className="fw-bold text-decoration-none" style={{ color: "#5a2a3a", fontSize: "1.1rem" }}>
                          पढ़ें
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* समस्त संग्रह बटन */}
          {allResults.length > 0 && (
            <div className="text-center mt-5">
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

      {!loading && allResults.length === 0 && (
        <div className="text-center py-5">
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📜</div>
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