import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthorsListPage.css"; 

const SearchPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search).get("q") || "";

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

  // कार्ड की ऊंचाई यहाँ से कंट्रोल होगी (210px एक आइडियल साइज है)
  const commonCardStyle = {
    minHeight: "210px",
    maxHeight: "210px"
  };

  return (
    <div className="container py-5 mt-5" style={{ minHeight: "80vh" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#5a2a3a" }}>"{query}" के परिणाम</h2>
      </div>

      {loading ? (
        <div className="text-center py-5"><div className="spinner-border text-wine"></div></div>
      ) : (
        <div className="row g-4">
          {allResults.map((item) => {
            const aId = item.authorId || item.id || item._id;
            const wTitle = item.title || "";

            return (
              <div className="col-6 col-md-4 col-lg-3 d-flex" key={item._id || item.id}>
                {item.isAuthor ? (
                  /* ✅ प्रोफाइल कार्ड - अब ये रचना कार्ड के साइज का ही है */
                  <Link to={`/author/${aId}`} className="text-decoration-none w-100">
                    <div className="card border-0 shadow-sm p-3 rounded-4 bg-white w-100 d-flex flex-column text-center" 
                         style={commonCardStyle}>
                      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                        <div className="author-image-wrapper mb-2" style={{ width: "65px", height: "65px" }}>
                          <img
                            src={item.img || item.image}
                            alt={item.name}
                            className="rounded-circle shadow-sm"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Author"; }}
                          />
                        </div>
                        <h6 className="text-dark fw-bold mb-1">{item.name}</h6>
                        <span className="small text-muted">{item.categoryLabel || "साहित्यकार"}</span>
                      </div>
                      <div className="mt-auto">
                        <span className="fw-bold small" style={{ color: "#5a2a3a" }}>प्रोफाइल देखें</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  /* ✅ रचना कार्ड - पहले जैसा ही क्लीन */
                  <div className="card border-0 shadow-sm p-3 rounded-4 bg-white w-100 d-flex flex-column text-center" 
                       style={commonCardStyle}>
                    <div className="mb-2">
                       <span className="badge bg-light text-wine fw-normal" style={{fontSize: "10px"}}>{item.type}</span>
                    </div>
                    
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                      <h6 className="fw-bold text-dark mb-0" 
                          style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: "1.4" }}>
                        {wTitle}
                      </h6>
                    </div>

                    <p className="text-muted mb-2" style={{ fontSize: "11px" }}>{item.authorName}</p>
                    
                    <div className="mt-auto">
                      <Link to={`/read/${aId}/${wTitle}`} className="fw-bold text-decoration-none small" style={{ color: "#5a2a3a" }}>
                        पढ़ें
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {!loading && allResults.length > 0 && (
        <div className="text-center mt-5">
          <button className="btn-global-sangrah" onClick={() => navigate("/")}>समस्त संग्रह</button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;