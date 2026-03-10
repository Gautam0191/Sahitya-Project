import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [allResults, setAllResults] = useState([]); // सारा डेटा
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  
  // URL से सर्च शब्द (q) निकालना
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q") || "";

  useEffect(() => {
    const fetchGlobalData = async () => {
      setLoading(true);
      try {
        // --- ✅ लॉजिक: हम बैकएंड से सारा कंटेंट एक साथ मांग रहे हैं ---
        // नोट: अगर आपकी ऐसी कोई API नहीं है, तो हम अलग-अलग कॉल भी कर सकते हैं
        const res = await axios.get(`http://localhost:5000/api/content/all/search?q=${query}`);
        setAllResults(res.data);
      } catch (err) {
        console.error("सर्च एरर:", err);
      }
      setLoading(false);
    };

    if (query) fetchGlobalData();
  }, [query]);

  // --- ✅ सर्च फिल्टरिंग ---
  const filteredResults = allResults.filter((item) => {
    const searchLower = query.toLowerCase();
    return (
      item.title?.toLowerCase().includes(searchLower) ||
      item.authorName?.toLowerCase().includes(searchLower) ||
      item.type?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <div className="search-header mb-5">
        <h2 className="fw-bold">खोज के परिणाम: <span className="text-wine">"{query}"</span></h2>
        <p className="text-muted">{filteredResults.length} रचनाएँ/लेखक मिले</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-wine" role="status"></div>
          <p className="mt-2">खोज जारी है...</p>
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="row g-4">
          {filteredResults.map((item) => (
            <div className="col-md-6 col-lg-4" key={item._id}>
              {/* सर्च कार्ड: यह हर तरह के कंटेंट के लिए काम करेगा */}
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-light text-dark text-uppercase">{item.type}</span>
                  </div>
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted mb-3">लेखक: {item.authorName}</p>
                  
                  {/* क्लिक करने पर सही रीडिंग पेज पर भेजने का लॉजिक */}
                  <Link 
                    to={`/read/${item.authorId}/${item.title}`} 
                    className="btn btn-outline-wine btn-sm"
                  >
                    पढ़ें
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="fas fa-search-minus fa-3x mb-3 text-muted"></i>
          <h4>क्षमा करें, कोई परिणाम नहीं मिला।</h4>
          <p>कृपया कुछ और खोजें या स्पेलिंग चेक करें।</p>
          <Link to="/" className="btn btn-wine mt-3">होम पेज पर जाएं</Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;