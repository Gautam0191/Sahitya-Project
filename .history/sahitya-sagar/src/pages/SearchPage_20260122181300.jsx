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

  // टाइप को हिंदी में बदलने के लिए
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
    return types[type.toLowerCase()] || "रचना";
  };

  useEffect(() => {
    const fetchGlobalData = async () => {
      if (!query) return;

      // ✅ सर्च हिस्ट्री सेव करने का लॉजिक
      const history = JSON.parse(localStorage.getItem("recentSearches") || "[]");
      if (!history.includes(query)) {
        const newHistory = [query, ...history].slice(0, 5); // सिर्फ टॉप 5 याद रखेगा
        localStorage.setItem("recentSearches", JSON.stringify(newHistory));
      }

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
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#5a2a3a" }}>"{query}" के परिणाम</h2>
        <div className="section-line mx-auto"></div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-wine"></div>
          <p className="mt-2 text-wine">मोती चुने जा रहे हैं...</p>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {allResults.map((item) => {
            const aId = item.authorId || item.id || item._id;
            const wTitle = item.title || "";

            return (
              <div className="col-6 col-md-4 col-lg-3 d-flex" key={item._id || item.id}>
                <div className="card border-0 shadow-sm rounded-4 bg-white w-100 d-flex flex-column p-3 text-center transition-card custom-search-card">
                  
                  {item.isAuthor ? (
                    <Link to={`/author/${aId}`} className="text-decoration-none h-100 d-flex flex-column align-items-center justify-content-between">
                      <div className="mb-2">
                        <img
                          src={item.img || item.image}
                          alt={item.name}
                          className="rounded-circle shadow-sm"
                          style={{ width: "70px", height: "70px", objectFit: "cover", border: "2px solid #5a2a3a" }}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Author"; }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold text-dark mb-1" style={{ fontSize: "1.4rem" }}>{item.name}</h5>
                        <p className="text-muted small">साहित्यकार</p>
                      </div>
                      <div className="mt-2 fw-bold theme-link">प्रोफाइल देखें</div>
                    </Link>
                  ) : (
                    <div className="h-100 d-flex flex-column justify-content-between">
                      <div>
                        <span className="theme-type-tag small mb-2 d-block">
                          {getHindiType(item.type)}
                        </span>
                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "1.4rem", lineHeight: "1.2" }}>
                          {wTitle}
                        </h5>
                        <p className="text-muted mb-3" style={{ fontSize: "1rem" }}>{item.authorName}</p>
                      </div>
                      <div className="mt-auto">
                        <Link to={`/read/${aId}/${wTitle}`} className="text-decoration-none fw-bold theme-link-btn">
                          पढ़ें
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && allResults.length > 0 && (
        <div className="text-center mt-5">
          <button className="btn-global-sangrah" onClick={() => navigate("/")}>
            समस्त संग्रह
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;