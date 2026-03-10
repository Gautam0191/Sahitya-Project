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
            <div className="col-md-6 col-lg-4 mb-4" key={item._id || item.id}>
              <div className="search-card-premium">
                <div className="card-top-accent"></div>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className={`category-tag ${item.isAuthor ? "tag-author" : "tag-work"}`}
                    >
                      <i
                        className={
                          item.isAuthor ? "fas fa-user-nib" : "fas fa-book-open"
                        }
                      ></i>
                      {item.type || (item.isAuthor ? "लेखक" : "रचना")}
                    </span>
                  </div>

                  <h4 className="work-title mb-2">{item.title}</h4>

                  {!item.isAuthor && (
                    <p className="author-subtext">
                      <i className="fas fa-feather-alt me-2"></i>
                      {item.authorName}
                    </p>
                  )}

                  <div className="mt-4 pt-3 border-top">
                    {item.isAuthor ? (
                      <Link
                        to={`/author/${item.id}`}
                        className="btn-royal w-100"
                      >
                        प्रोफाइल देखें{" "}
                        <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    ) : (
                      <Link
                        to={`/read/${item.authorId}/${item.title}`}
                        className="btn-royal-outline w-100"
                      >
                        पढ़ना शुरू करें <i className="fas fa-glasses ms-2"></i>
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
