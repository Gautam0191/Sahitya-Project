import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthorDetailPage.css";

const AuthorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // नेविगेशन के लिए
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAuthorDetail = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/authors");
        const foundAuthor = response.data.find(
          (a) => String(a.id) === String(id)
        );
        setAuthor(foundAuthor);
        setLoading(false);
      } catch (error) {
        console.error("विवरण लाने में त्रुटि:", error);
        setLoading(false);
      }
    };
    fetchAuthorDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center mt-5">
        <div className="spinner-border text-wine" role="status"></div>
        <p className="mt-3">साहित्यकार का जीवन परिचय लोड हो रहा है...</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="container py-5 text-center mt-5">
        <h3 className="text-danger">लेखक की जानकारी नहीं मिली!</h3>
        <Link to="/" className="btn btn-dark mt-3">
          होमपेज पर वापस जाएँ
        </Link>
      </div>
    );
  }

  return (
    <div className="author-detail-page">
      {/* Header Section */}
      <div className="author-header py-5 bg-dark text-white text-center">
        <div className="container">
          <div
            className="author-img-large mb-4 mx-auto shadow-lg"
            style={{
              width: "200px",
              height: "200px",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <img
              src={author.img}
              alt={author.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h1 className="fw-bold mb-2 display-5 font-serif">{author.name}</h1>
          <span className="badge rounded-pill bg-light text-dark px-4 py-2 mb-4">
            {author.categoryLabel || "साहित्यकार"}
          </span>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <div className="bg-secondary p-2 rounded">
              जन्म: {author.birthDate || "अज्ञात"}
            </div>
            <div className="bg-secondary p-2 rounded">
              स्थान: {author.birthPlace || "भारत"}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Biography */}
          <div className="col-lg-7">
            <div className="bio-card p-4 bg-white shadow-sm rounded-4 border">
              <h3 className="mb-4 border-bottom pb-2">संपूर्ण जीवन परिचय</h3>
              <p
                className="lh-lg fs-5 text-secondary"
                style={{ textAlign: "justify" }}
              >
                {author.longBio || author.bio || "जानकारी जल्द उपलब्ध होगी।"}
              </p>
            </div>
          </div>

          {/* Works Section - यहाँ सबसे बड़ा बदलाव है */}
          <div className="col-lg-5">
            <div className="works-card p-4 bg-white shadow-sm rounded-4 border-start border-5 border-danger">
              <h3 className="mb-4">प्रमुख रचनाएँ</h3>
              {author.structuredWorks ? (
                Object.entries(author.structuredWorks).map(
                  ([catName, items]) => (
                    <div key={catName} className="mb-4">
                      <h5 className="text-uppercase text-danger fw-bold">
                        {catName}
                      </h5>
                      <div className="list-group list-group-flush">
                        {items.map((item, idx) => (
                          <button
                            key={idx}
                            // ✅ यह बटन की तरह काम करेगा और नेविगेट करेगा
                            onClick={() =>
                              navigate(`/read/${author.id}/${item}`)
                            }
                            className="list-group-item list-group-item-action border-0 ps-0 d-flex align-items-center"
                            style={{
                              cursor: "pointer",
                              background: "transparent",
                            }}
                          >
                            <span className="me-2">📜</span>
                            <span className="text-primary text-decoration-underline-hover">
                              {item}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                )
              ) : (
                <p>रचनाएँ लोड हो रही हैं...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailPage;
