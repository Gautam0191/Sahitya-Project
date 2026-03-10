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
        // बैकएंड की नई 'Global Search' API को कॉल कर रहे हैं
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
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      {/* हेडर सेक्शन */}
      <div className="search-header mb-5 border-bottom pb-3">
        <h2 className="fw-bold">खोज के परिणाम: <span className="text-wine">"{query}"</span></h2>
        <p className="text-muted">{allResults.length} परिणाम मिले</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-wine" role="status"></div>
          <p className="mt-2 text-wine">साहित्य के सागर में खोज जारी है...</p>
        </div>
      ) : allResults.length > 0 ? (
        <div className="row g-4">
          {allResults.map((item) => (
            <div className="col-md-6 col-lg-4" key={item._id || item.id}>
              <div className="card h-100 shadow-sm border-0 search-result-card">
                <div className="card-body">
                  {/* टाइप टैग (लेखक के लिए अलग रंग, रचना के लिए अलग) */}
                  <div className="d-flex justify-content-between mb-2">
                    <span className={`badge ${item.isAuthor ? "bg-primary" : "bg-wine-light text-wine"}`}>
                      {item.type}
                    </span>
                  </div>
                  
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  
                  {/* अगर लेखक नहीं है, तो लेखक का नाम दिखाओ */}
                  {!item.isAuthor && (
                    <p className="card-text text-muted mb-3">
                      <i className="fas fa-pen-nib me-2"></i>{item.authorName}
                    </p>
                  )}
                  
                  <div className="mt-auto">
                    {/* ✅ क्लिक लॉजिक: लेखक के लिए अलग पेज, रचना के लिए अलग */}
                    {item.isAuthor ? (
                      <Link to={`/author/${item.id}`} className="btn btn-wine btn-sm w-100">
                        प्रोफाइल देखें
                      </Link>
                    ) : (
                      <Link 
                        to={`/read/${item.authorId}/${item.title}`} 
                        className="btn btn-outline-wine btn-sm w-100"
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
          <p className="text-muted">शायद शब्दों में कुछ कमी रह गई, एक बार फिर कोशिश करें?</p>
          <Link to="/" className="btn btn-wine mt-3 px-4">होम पेज पर वापस जाएं</Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;