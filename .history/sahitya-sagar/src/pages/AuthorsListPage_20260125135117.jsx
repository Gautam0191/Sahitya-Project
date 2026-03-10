import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AuthorsListPage.css";

const AuthorsListPage = ({ title, subtitle, categoryFilter }) => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState("सभी");

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/authors?category=${categoryFilter}`,
        );

        if (categoryFilter) {
          const filtered = response.data.filter(
            (auth) => auth.category === categoryFilter,
          );
          setAuthors(filtered);
        } else {
          setAuthors(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("API Error:", error);
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [categoryFilter]);

  const hindiLetters = [
    "सभी",
    "अ",
    "आ",
    "इ",
    "ई",
    "उ",
    "ऊ",
    "ए",
    "ऐ",
    "ओ",
    "औ",
    "क",
    "ख",
    "ग",
    "घ",
    "च",
    "छ",
    "ज",
    "झ",
    "ट",
    "ठ",
    "ड",
    "ढ",
    "त",
    "थ",
    "द",
    "ध",
    "न",
    "प",
    "फ",
    "ब",
    "भ",
    "म",
    "य",
    "र",
    "ल",
    "व",
    "श",
    "ष",
    "स",
    "ह",
  ];

  const displayAuthors = [...authors].sort((a, b) =>
    a.name.localeCompare(b.name, "hi"),
  );

  const filteredAuthors =
    selectedLetter === "सभी"
      ? displayAuthors
      : displayAuthors.filter((author) =>
          author.name.startsWith(selectedLetter),
        );

  if (loading) {
    return (
      <div className="loading-state">
        <h3>साहित्यकारों की जानकारी जुटाई जा रही है... 📜</h3>
      </div>
    );
  }

  return (
    <div className="authors-list-page pt-5">
      <div className="container pt-3">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold page-title">{title}</h1>
          <div className="section-line"></div>
          <p className="text-muted">{subtitle || "हमारी संस्कृति के गौरव"}</p>
        </div>

        {/* अक्षर फ़िल्टर */}
        <div className="filter-container d-flex flex-wrap justify-content-center gap-2 mb-5 shadow-sm">
          {hindiLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`letter-btn transition-all ${
                selectedLetter === letter ? "active" : ""
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* लेखकों की लिस्ट */}
        <div className="row g-4 justify-content-center">
          {filteredAuthors.length > 0 ? (
            filteredAuthors.map((author) => (
              <div
                className="col-6 col-md-4 col-lg-3"
                key={author.id || author._id}
              >
                <Link
                  to={`/author/${author.id}`}
                  className="text-decoration-none"
                >
                  <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100">
                    <div className="author-image-wrapper mx-auto mb-3 shadow-sm">
                      <img
                        /* बस सीधा पाथ दें, रिएक्ट इसे 'public' फोल्डर में ही ढूंढेगा */
                        src={author.img}
                        alt={author.name}
                        onError={(e) => {
                          console.log("Image fail on path:", author.img);
                          // बैकअप के लिए कोई ऐसी इमेज जो आपके पास लोकल हो या ये लिंक:
                          e.target.src =
                            "https://placehold.co/200x200?text=No+Image";
                        }}
                      />
                    </div>
                    <h5 className="text-dark fw-bold mb-1">{author.name}</h5>
                    <p className="text-muted small mb-0">
                      {author.categoryLabel || "साहित्यकार"}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-5 w-100 no-data-wrapper">
              <div className="no-data-icon">📜</div>
              <h4 className="text-muted">
                अक्षर "{selectedLetter}" से अभी कोई साहित्यकार नहीं मिला।
              </h4>
              <button
                className="btn btn-link text-wine"
                onClick={() => setSelectedLetter("सभी")}
              >
                सभी को देखें
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorsListPage;
