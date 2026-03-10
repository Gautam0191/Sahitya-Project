import { useParams, Link } from "react-router-dom";
import { allAuthorsData } from "../data";
import "./AuthorDetailPage.css";

const AuthorDetailPage = () => {
  const { id } = useParams();
  
  // URL से ID लेकर सही लेखक को खोजना (Type safety के साथ)
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
      {/* ऊपरी हिस्सा - लेखक की प्रोफाइल */}
      <div className="author-header py-5" style={{ background: "linear-gradient(to bottom, #5a2a3a, #3e1d28)" }}>
  <div className="container text-center">
    <div className="author-img-large mb-4 mx-auto shadow-lg">
      <img src={author.img} alt={author.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <h1 className="text-white fw-bold mb-2">{author.name}</h1>
    
    {/* डायनामिक लेबल जो हर कैटेगरी के लिए काम करेगा */}
    <span className="badge rounded-pill bg-light text-dark px-4 py-2 shadow-sm">
      {author.category === 'kavi' ? 'महान कवि' : 
       author.category === 'kahanikar' ? 'प्रसिद्ध कहानीकार' : 
       author.category === 'nibandhkar' ? 'प्रसिद्ध निबंधकार' :
       author.category === 'shayar' ? 'प्रसिद्ध शायर' :
       author.category === 'geetkar' ? 'प्रसिद्ध गीतकार' : 'प्रसिद्ध साहित्यकार'}
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
                {author.bio ? author.bio : "इनके जीवन और साहित्य के बारे में जानकारी जल्द ही साझा की जाएगी।"}
              </p>
            </div>
          </div>

          {/* रचनाएँ (Works) सेक्शन */}
          <div className="col-lg-5">
            <div className="works-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-wine">
              <h3 className="section-title mb-4">प्रमुख रचनाएँ</h3>
              <ul className="list-group list-group-flush">
                {/* Error handling for works array */}
                {author.works && author.works.length > 0 ? (
                  author.works.map((work, index) => (
                    <li key={index} className="list-group-item border-0 ps-0 d-flex align-items-center">
                      <span className="bullet-point me-3"></span>
                      <span className="fs-5">{work}</span>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item border-0 ps-0 text-muted italic">
                    रचनाओं की सूची जल्द ही अपडेट की जाएगी।
                  </li>
                )}
              </ul>
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