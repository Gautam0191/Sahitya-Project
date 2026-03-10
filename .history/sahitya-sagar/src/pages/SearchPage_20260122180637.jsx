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

  // टाइप को हिंदी में बदलने के लिए हेल्पर
  const getHindiType = (type) => {
    const types = {
      poetry: "कविता",
      story: "कहानी",
      nibandh: "निबंध",
      sher: "शेर",
      dohe: "दोहे"
    };
    return types[type.toLowerCase()] || type;
  };

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
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: "#5a2a3a" }}>"{query}" के परिणाम</h2>
      </div>

      {loading ? (
        <div className="text-center py-5"><div className="spinner-border text-wine"></div></div>
      ) : (
        <div className="row g-3 justify-content-center">
          {allResults.map((item) => {
            const aId = item.authorId || item.id || item._id;
            const wTitle = item.title || "";

            return (
              <div className="col-6 col-md-4 col-lg-3 d-flex" key={item._id || item.id}>
                <div className="card border-0 shadow-sm rounded-4 bg-white w-100 d-flex flex-column text-center p-3" 
                     style={{ minHeight: "180px", maxHeight: "180px", transition: "0.3s" }}>
                  
                  {item.isAuthor ? (
                    /* ✅ प्रोफाइल कार्ड */
                    <Link to={`/author/${aId}`} className="text-decoration-none h-100 d-flex flex-column">
                      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                        <img
                          src={item.img || item.image}
                          alt={item.name}
                          className="rounded-circle mb-2 shadow-sm"
                          style={{ width: "55px", height: "55px", objectFit: "cover" }}
                        />
                        <h5 className="text-dark fw-bold mb-0" style={{ fontSize: "1.2rem" }}>{item.name}</h5>
                        <span className="text-muted small">साहित्यकार</span>
                      </div>
                      <div className="mt-2">
                        <span className="hover-link fw-bold">प्रोफ़ाइल देखें</span>
                      </div>
                    </Link>
                  ) : (
                    /* ✅ रचना कार्ड */
                    <div className="d-flex flex-column h-100">
                      <div className="mb-1">
                         <span className="text-wine small fw-bold" style={{ opacity: "0.7" }}>
                           {getHindiType(item.type)}
                         </span>
                      </div>
                      
                      <div className="flex-grow-1 d-flex align-items-center justify-content-center px-1">
                        <h5 className="fw-bold text-dark mb-0" 
                            style={{ fontSize: "1.3rem", lineHeight: "1.2", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {wTitle}
                        </h5>
                      </div>

                      <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>{item.authorName}</p>
                      
                      <div className="mt-auto">
                        <Link to={`/read/${aId}/${wTitle}`} className="text-decoration-none hover-link fw-bold">
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
    </div>
  );
};

export default SearchPage;