import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AuthorsListPage.css";

const AuthorsListPage = ({ data, title, subtitle }) => {
  const [selectedLetter, setSelectedLetter] = useState("सभी");

  // पेज लोड होते ही टॉप पर पहुँचने के लिए
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // हिंदी वर्णमाला (फ़िल्टर के लिए)
  const hindiLetters = [
    "सभी", "अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", 
    "क", "ख", "ग", "घ", "च", "छ", "ज", "झ", "ट", "ठ", "ड", "ढ", 
    "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", 
    "ल", "व", "श", "ष", "स", "ह"
  ];

  // फ़िल्टर लॉजिक: नाम का पहला अक्षर मैच करना
  const displayAuthors = data || [];
  const filteredAuthors = selectedLetter === "सभी" 
    ? displayAuthors 
    : displayAuthors.filter(author => author.name.startsWith(selectedLetter));

  return (
    <div className="authors-list-page pt-5" style={{ background: "#fffaf5", minHeight: "100vh" }}>
      <div className="container pt-3">
        {/* पेज की हेडिंग */}
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold" style={{ color: "#5a2a3a" }}>{title}</h1>
          <div style={{ width: "80px", height: "4px", background: "#5a2a3a", margin: "10px auto" }}></div>
          <p className="text-muted">{subtitle || "हमारी संस्कृति के गौरव"}</p>
        </div>

        {/* --- अक्षर फ़िल्टर (Alphabet Filter) --- */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 p-3 bg-white shadow-sm rounded-4">
          {hindiLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`btn btn-sm rounded-pill px-3 transition-all ${
                selectedLetter === letter ? 'btn-dark shadow' : 'btn-outline-secondary border-0'
              }`}
              style={{ 
                fontSize: "1.1rem", 
                minWidth: "45px",
                backgroundColor: selectedLetter === letter ? "#5a2a3a" : "" 
              }}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* लेखकों की लिस्ट (Grid) */}
        <div className="row g-4 justify-content-center">
          {filteredAuthors.length > 0 ? (
            filteredAuthors.map((author) => (
              <div className="col-6 col-md-4 col-lg-3" key={author.id}>
                <Link to={`/author/${author.id}`} className="text-decoration-none">
                  <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100 border-0 transition-hover border-bottom border-4 border-transparent hover-border-wine">
                    <div 
                      className="mx-auto mb-3 shadow-sm" 
                      style={{ width: "130px", height: "130px", overflow: "hidden", borderRadius: "50%", border: "4px solid #fdf7f2" }}
                    >
                      <img 
                        src={author.img} 
                        alt={author.name} 
                        className="img-fluid w-100 h-100" 
                        style={{ objectFit: "cover" }} 
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150?text=Sahitya+Sagar";
                        }}
                      />
                    </div>
                    <h5 className="text-dark fw-bold mb-1">{author.name}</h5>
                    <p className="text-muted small mb-0">
                      {author.works ? `${author.works.length} रचनाएँ` : (author.books || "साहित्यकार")}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-5 w-100">
              <div className="mb-3" style={{ fontSize: "3rem" }}>📜</div>
              <h4 className="text-muted">अक्षर "{selectedLetter}" से अभी कोई कवि नहीं मिला।</h4>
              <button className="btn btn-link text-wine" onClick={() => setSelectedLetter("सभी")}>
                सभी लेखकों को देखें
              </button>
            </div>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default AuthorsListPage;