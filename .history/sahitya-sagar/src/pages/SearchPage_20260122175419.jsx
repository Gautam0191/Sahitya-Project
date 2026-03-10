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

  return (
    <div className="container py-5 mt-5" style={{ minHeight: "80vh" }}>
      {/* हेडर */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#5a2a3a" }}>"{query}" के परिणाम</h2>
        <p className="text-muted">{allResults.length} रचनाएँ व लेखक मिले</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-wine" role="status"></div>
        </div>
      ) : (
        <div className="row g-4">
          {allResults.map((item) => {
            const aId = item.authorId || item.id || item._id;
            const wTitle = item.title || "";

            return (
              <div className="col-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={item._id || item.id}>
                {item.isAuthor ? (
                  /* ✅ लेखक कार्ड - Clean Look */
                  <Link to={`/author/${aId}`} className="text-decoration-none w-100">
                    <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
                      <div className="author-image-wrapper mb-3">
                        <img
                          src={item.img || item.image}
                          alt={item.name}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Author"; }}
                        />
                      </div>
                      <h6 className="text-dark fw-bold mb-1">{item.name}</h6>
                      <span className="small text-muted">{item.categoryLabel || "साहित्यकार"}</span>
                    </div>
                  </Link>
                ) : (
                  /* ✅ रचना कार्ड - Fixed Height */
                  <div className="card h-100 border-0 shadow-sm p-3 rounded-4 bg-white w-100 d-flex flex-column">
                    <div className="card-body d-flex flex-column text-center p-0">
                      <div className="mb-2">
                         <span className="badge bg-light text-wine fw-normal">{item.type}</span>
                      </div>
                      <h6 className="fw-bold text-dark mb-2 flex-grow-1">{wTitle}</h6>
                      <p className="text-muted small mb-3">{item.authorName}</p>
                      <div className="mt-auto">
                        <Link 
                          to={`/read/${aId}/${wTitle}`} 
                          className="fw-bold text-decoration-none small" 
                          style={{ color: "#5a2a3a" }}
                        >
                          पढ़ें
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* समस्त संग्रह बटन */}
      {!loading && allResults.length > 0 && (
        <div className="text-center mt-5">
          <button className="btn-global-sangrah" onClick={() => navigate("/")}>
            समस्त संग्रह
          </button>
        </div>
      )}

      {/* No Results */}
      {!loading && allResults.length === 0 && (
        <div className="text-center py-5">
          <h5 className="text-muted">कोई परिणाम नहीं मिला।</h5>
          <button className="btn-global-sangrah mt-3" onClick={() => navigate("/")}>वापस जाएं</button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;