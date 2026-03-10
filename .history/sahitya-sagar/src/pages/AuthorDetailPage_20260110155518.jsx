
import { useParams, Link } from "react-router-dom";
import { allAuthorsData } from "../data";
import "./AuthorDetailPage.css";

const AuthorDetailPage = () => {
  const { id } = useParams();
  // URL से ID लेकर सही लेखक को खोजना
  const author = allAuthorsData.find((a) => a.id === parseInt(id));

  if (!author) {
    return <div className="container py-5 text-center"><h3>लेखक नहीं मिला!</h3></div>;
  }

  return (
    <div className="author-detail-page">
      {/* ऊपरी हिस्सा - लेखक की प्रोफाइल */}
      <div className="author-header py-5" style={{ background: "linear-gradient(to bottom, #5a2a3a, #3e1d28)" }}>
        <div className="container text-center">
          <div className="author-img-large mb-4 mx-auto shadow-lg">
            <img src={author.img} alt={author.name} />
          </div>
          <h1 className="text-white fw-bold mb-2">{author.name}</h1>
          <span className="badge rounded-pill bg-light text-dark px-4 py-2">
            {author.category === 'kavi' ? 'महान कवि' : 'प्रसिद्ध कहानीकार'}
          </span>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* बायोग्राफी सेक्शन */}
          <div className="col-lg-7">
            <div className="bio-card p-4 bg-white shadow-sm rounded-4 h-100">
              <h3 className="section-title mb-4">संक्षिप्त जीवनी</h3>
              <p className="author-bio-text text-secondary lh-lg fs-5">
                {author.bio}
              </p>
            </div>
          </div>

          {/* रचनाएँ (Works) सेक्शन */}
          <div className="col-lg-5">
            <div className="works-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-wine">
              <h3 className="section-title mb-4">प्रमुख रचनाएँ</h3>
              <ul className="list-group list-group-flush">
                {author.works.map((work, index) => (
                  <li key={index} className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="bullet-point me-3"></span>
                    <span className="fs-5">{work}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
            <Link to="/authors" className="btn btn-outline-dark px-5 py-2 rounded-pill">
               ← लेखकों की सूची पर वापस जाएँ
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailPage;