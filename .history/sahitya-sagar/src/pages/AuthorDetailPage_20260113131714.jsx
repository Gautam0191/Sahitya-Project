import { useParams, Link } from "react-router-dom";
import { allAuthorsData } from "../data";
import "./AuthorDetailPage.css";

const AuthorDetailPage = () => {
  const { id } = useParams();
  const author = allAuthorsData.find((a) => String(a.id) === String(id));

  if (!author) {
    return (
      <div className="container py-5 text-center mt-5">
        <h3 className="text-danger">लेखक की जानकारी नहीं मिली!</h3>
        <Link to="/" className="btn btn-dark mt-3">होमपेज पर वापस जाएँ</Link>
      </div>
    );
  }

  return (
    <div className="author-detail-page">
      {/* ऊपरी हिस्सा - आधुनिक विजुअल हेडर */}
      <div className="author-header py-5">
        <div className="container text-center">
          <div className="author-img-large mb-4 mx-auto shadow-lg border border-4 border-white">
            <img src={author.img} alt={author.name} />
          </div>
          <h1 className="text-white fw-bold mb-2 serif-font">{author.name}</h1>
          <div className="mb-3">
            <span className="badge rounded-pill bg-light text-dark px-4 py-2 shadow-sm">
              {author.categoryLabel || "प्रसिद्ध साहित्यकार"}
            </span>
          </div>

          {/* व्यक्तिगत जानकारी ग्रिड */}
          <div className="row justify-content-center mt-4">
            <div className="col-auto text-white px-4 border-end border-white-50">
              <small className="d-block opacity-75">जन्म</small>
              <strong>{author.birthDate || "---"}</strong>
            </div>
            <div className="col-auto text-white px-4 border-end border-white-50">
              <small className="d-block opacity-75">निधन</small>
              <strong>{author.deathDate || "---"}</strong>
            </div>
            <div className="col-auto text-white px-4">
              <small className="d-block opacity-75">स्थान</small>
              <strong>{author.birthPlace || "---"}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* पूर्ण जीवन परिचय सेक्शन */}
          <div className="col-lg-7">
            <div className="bio-card p-4 bg-white shadow-sm rounded-4">
              <h3 className="section-title mb-4">जीवन परिचय</h3>
              <p className="author-bio-text text-secondary lh-lg fs-5">
                {author.longBio ? author.longBio : author.bio}
              </p>
            </div>
          </div>

          {/* नेस्टेड प्रमुख रचनाएँ */}
          <div className="col-lg-5">
            <div className="works-card p-4 bg-white shadow-sm rounded-4 border-start border-4 border-wine">
              <h3 className="section-title mb-4">प्रमुख रचनाएँ</h3>
              
              {/* नेस्टेड लिस्ट लॉजिक */}
              {author.structuredWorks ? (
                Object.entries(author.structuredWorks).map(([category, titles]) => (
                  <div key={category} className="mb-4">
                    <h6 className="text-uppercase fw-bold text-wine small mb-2">{category}</h6>
                    <ul className="list-unstyled ps-2">
                      {titles.map((title, idx) => (
                        <li key={idx} className="mb-1 d-flex align-items-baseline">
                          <span className="bullet-dot me-2"></span>
                          <span className="fs-5">{title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-muted italic">रचनाओं की सूची जल्द अपडेट होगी।</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
            <Link to="/" className="btn btn-outline-dark px-5 py-2 rounded-pill">
                ← होमपेज पर वापस जाएँ
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailPage;