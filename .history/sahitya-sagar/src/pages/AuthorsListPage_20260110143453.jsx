import React from "react";
import { Link } from "react-router-dom";
import { favoriteAuthorsData } from "../data"; // आपका डेटा

const AuthorsListPage = ({ type, title }) => {
  // ✅ यहाँ फिल्टर का जादू है: यह सिर्फ उसी कैटेगरी के लेखकों को चुनेगा
  const filteredAuthors = favoriteAuthorsData.filter(
    (author) => author.category === type
  );

  return (
    <div className="authors-list-page pt-5 mt-5" style={{ background: "#fffaf5", minHeight: "100vh" }}>
      <div className="container pt-1">
        {/* पेज की हेडिंग (जो App.js से आ रही है) */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold" style={{ color: "#5a2a3a" }}>{title}</h1>
          <div style={{ width: "80px", height: "4px", background: "#5a2a3a", margin: "10px auto" }}></div>
          <p className="text-muted">हमारी संस्कृति के गौरव और शब्दों के जादूगर</p>
        </div>

        <div className="row g-4 justify-content-center">
          {filteredAuthors.length > 0 ? (
            filteredAuthors.map((author) => (
              <div className="col-6 col-md-4 col-lg-3" key={author.id}>
                <Link to={`/author/${author.id}`} className="text-decoration-none">
                  <div className="author-card text-center p-3 bg-white shadow-sm rounded-4 h-100 border-0 transition-hover">
                    <div 
                      className="mx-auto mb-3" 
                      style={{ width: "140px", height: "140px", overflow: "hidden", borderRadius: "50%", border: "4px solid #fdf7f2" }}
                    >
                      <img 
                        src={author.img} 
                        alt={author.name} 
                        className="img-fluid w-100 h-100" 
                        style={{ objectFit: "cover" }} 
                      />
                    </div>
                    <h5 className="text-dark fw-bold mb-1">{author.name}</h5>
                    <p className="text-muted small mb-0">{author.books}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <h4 className="text-muted">अभी इस श्रेणी में कोई लेखक मौजूद नहीं है।</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorsListPage;