import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // 1. Axios को इम्पोर्ट किया
import "./AuthorsListPage.css";

const AuthorsListPage = ({ title, subtitle, categoryFilter }) => {
  // 'data' हटा दिया क्योंकि अब हम API से लाएंगे
  const [authors, setAuthors] = useState([]); // डेटाबेस से आया डेटा यहाँ रहेगा
  const [loading, setLoading] = useState(true); // लोडिंग दिखाने के लिए
  const [selectedLetter, setSelectedLetter] = useState("सभी");

  // 2. डेटाबेस से डेटा लाने का लॉजिक
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/authors?category=${categoryFilter}`,
        );
        setAuthors(response.data);
        // अगर categoryFilter दिया है (जैसे 'kavi'), तो सिर्फ वही दिखाओ
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
        console.error("API से डेटा लाने में समस्या:", error);
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [categoryFilter]); // categoryFilter बदलने पर फिर से चलेगा

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

  // फिल्टर और सॉर्टिंग लॉजिक
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
      <div className="text-center py-5">
        <h3>साहित्यकारों की जानकारी जुटाई जा रही है... 📜</h3>
      </div>
    );
  }

  return (
    <div
      className="authors-list-page pt-5"
      style={{ background: "#fffaf5", minHeight: "100vh" }}
    >
      <div className="container pt-3">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold" style={{ color: "#5a2a3a" }}>
            {title}
          </h1>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#5a2a3a",
              margin: "10px auto",
            }}
          ></div>
          <p className="text-muted">{subtitle || "हमारी संस्कृति के गौरव"}</p>
        </div>

        {/* अक्षर फ़िल्टर */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 p-3 bg-white shadow-sm rounded-4">
          {hindiLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`btn btn-sm rounded-pill px-3 transition-all ${
                selectedLetter === letter
                  ? "btn-dark shadow"
                  : "btn-outline-secondary border-0"
              }`}
              style={{
                fontSize: "1.1rem",
                minWidth: "45px",
                backgroundColor: selectedLetter === letter ? "#5a2a3a" : "",
              }}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* लेखकों की लिस्ट */}
        <div className="row g-4 justify-content-center">
          {filteredAuthors.length > 0 ? (
            filteredAuthors.map((author) => (
              <div className="col-6 col-md-4 col-lg-3" key={author._id}>
                {" "}
                {/* author.id की जगह author._id */}
                <Link
                  to={`/author/${author.id}`}
                  className="text-decoration-none"
                >
                  <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100 border-0 transition-hover border-bottom border-4 border-transparent hover-border-wine">
                    <div
                      className="mx-auto mb-3 shadow-sm"
                      style={{
                        width: "130px",
                        height: "130px",
                        overflow: "hidden",
                        borderRadius: "50%",
                        border: "4px solid #fdf7f2",
                      }}
                    >
                      <img
                        src={author.img}
                        alt={author.name}
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/150?text=Sahitya+Sagar";
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
            <div className="text-center py-5 w-100">
              <div className="mb-3" style={{ fontSize: "3rem" }}>
                📜
              </div>
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
