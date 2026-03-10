import React from "react";
import { favoriteAuthorsData } from "../data";
import { Link } from "react-router-dom";

const AuthorsListPage = ({ type, title }) => {
  // ऊपर से आने वाले 'type' के आधार पर लेखकों को फ़िल्टर करें
  const filteredAuthors = favoriteAuthorsData.filter(author => author.category === type);

  return (
    <div className="authors-list-page py-5" style={{ background: "#fffaf5", minHeight: "100vh" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold section-title">{title}</h1>
          <div className="title-underline mx-auto"></div>
        </div>
        <div className="row g-4">
          {filteredAuthors.map((author) => (
            <div className="col-6 col-md-3 text-center mb-4" key={author.id}>
              <Link to={`/author/${author.id}`} className="text-decoration-none text-dark">
                <div className="author-card shadow-sm p-3 bg-white rounded-4">
                  <img src={author.img} alt={author.name} className="rounded-circle mb-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <h5 className="author-name-text">{author.name}</h5>
                  <p className="text-muted small">{author.books}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorsListPage;