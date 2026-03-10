import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q") || "";

  useEffect(() => {
    const fetchGlobalData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/content/all/search?q=${query}`,
        );
        setAllResults(res.data);
      } catch (err) {
        console.error("सर्च एरर:", err);
      }
      setLoading(false);
    };

    if (query) fetchGlobalData();
  }, [query]);

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      {/* हेडर सेक्शन */}
      <div className="search-header mb-5 border-bottom pb-3">
        <h2 className="fw-bold">
          खोज के परिणाम: <span className="text-wine">"{query}"</span>
        </h2>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="text-muted mb-1">{allResults.length} परिणाम मिले</p>
          {/* हिंदी सर्च का छोटा हिंट */}
          <p className="text-muted small mb-1">
            <i className="fas fa-info-circle me-1 text-wine"></i> 
            बेहतर परिणाम के लिए कृपया <b>हिंदी</b> में खोजें
          </p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-wine" role="status"></div>
          <p className="mt-2 text-wine">साहित्य के सागर में खोज जारी है...</p>
        </div>
      ) : allResults.length > 0 ? (
        <div className="row g-4">
          {allResults.map((item) => (
            <div className="col-md-6 col-lg-4 mb-3" key={item._id || item.id}>
              {/* ✅ आपके होम पेज वाला कार्ड स्टाइल */}
              <div className="card h-100 border-0 shadow-sm story-card"> 
                <div className="card-body d-flex flex-column p-4">
                  
                  <div className="mb-2">
                    {/* कैटेगरी टैग */}
                    <span className="badge bg-light text-wine text-uppercase px-3 py-2 shadow-sm" style={{fontSize: '0.7rem', letterSpacing: '1px'}}>
                      {item.type || (item.isAuthor ? "लेखक" : "रचना")}
                    </span>
                  </div>

                  <h5 className="card-title fw-bold mt-2" style={{color: '#2c3e50'}}>{item.title}</h5>

                  {!item.isAuthor && (
                    <p className="card-text text-muted small mt-1">
                      <i className="fas fa-pen-nib me-2"></i>{item.authorName}
                    </p>
                  )}

                  <div className="mt-auto pt-4">
                    {/* ✅ होम पेज वाली btn-view-all क्लास */}
                    {item.isAuthor ? (
                      <Link
                        to={`/author/${item.id}`}
                        className="btn-view-all d-block text-center"
                      >
                        प्रोफाइल देखें
                      </Link>
                    ) : (
                      <Link
                        to={`/read/${item.authorId}/${item.title}`}
                        className="btn-view-all d-block text-center"
                      >
                        पढ़ें
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* कोई परिणाम न मिलने पर */
        <div className="text-center py-5">
          <i className="fas fa-search-minus fa-3x mb-3 text-muted"></i>
          <h4 className="fw-bold">क्षमा करें, कोई सटीक परिणाम नहीं मिला।</h4>
          <p className="text-muted">
            शायद शब्दों में कुछ कमी रह गई, एक बार फिर कोशिश करें?
          </p>
          <Link to="/" className="btn-view-all mt-3">
            होम पेज पर वापस जाएं
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;