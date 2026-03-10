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
    if (!query.trim()) return;

    const fetchGlobalData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/content/all/search?q=${query}`);
        console.log("🔍 Search API Response:", res.data); // पूरे रिस्पॉन्स को चेक करने के लिए
        setAllResults(res.data);
      } catch (err) {
        console.error("❌ सर्च एरर:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGlobalData();
  }, [query]);

  return (
    <div className="container py-5 mt-5" style={{ minHeight: "80vh" }}>
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
          <p className="mt-2 text-wine">मोती चुने जा रहे हैं...</p>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {allResults.map((item, index) => {
            // ✅ DEBUGGING LOG: यहाँ चेक होगा कि हर आइटम में क्या डेटा है
            const aId = item.authorId || item.id || item._id;
            const wTitle = item.title || item.workTitle || "";
            
            console.log(`Card ${index} Data -> ID: ${aId}, Title: ${wTitle}`);

            return (
              <div className="col-6 col-md-4 col-lg-3" key={item._id || item.id || index}>
                {item.isAuthor ? (
                  <Link to={`/author/${aId}`} className="text-decoration-none">
                    <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100">
                      <div className="author-image-wrapper shadow-sm mx-auto mb-3">
                        <img
                          src={item.img || item.image}
                          alt={item.name}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Author"; }}
                        />
                      </div>
                      <h5 className="text-dark fw-bold mb-1">{item.name || item.title}</h5>
                      <p className="text-muted small mb-2">{item.categoryLabel || "साहित्यकार"}</p>
                      <div className="fw-bold small" style={{ color: "#5a2a3a" }}>प्रोफाइल देखें</div>
                    </div>
                  </Link>
                ) : (
                  <div className="card h-100 border-0 shadow-sm story-card p-3 rounded-4 bg-white transition-hover">
                    <div className="card-body d-flex flex-column text-center">
                      <span className="badge bg-light text-wine mb-2 align-self-center px-3">{item.type}</span>
                      <h5 className="fw-bold text-dark">{wTitle}</h5>
                      <p className="text-muted small mb-3">लेखक: {item.authorName}</p>
                      <div className="mt-auto">
                        {/* ✅ यहाँ हमने encodeURIComponent जोड़ा है ताकि स्पेशल करैक्टर से URL न टूटे */}
                        <Link 
                          to={`/read/${aId}/${encodeURIComponent(wTitle)}`} 
                          className="fw-bold text-decoration-none" 
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

      {!loading && (
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