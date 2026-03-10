import { useNavigate } from "react-router-dom";
import "./SmartContentPage.css";

const ContentPage = ({ data, title, subtitle, type }) => {
  const navigate = useNavigate();

  const getTargetRoute = () => {
    if (type === 'poetry') return 'kavita';
    if (type === 'story') return 'kahani';
    return type; 
  };

  const finalType = getTargetRoute();

  return (
    <div className="container mt-5 pt-5">
      {/* हेडर सेक्शन */}
      <div className="text-start mb-4">
        <h1 className="display-5 fw-bold" style={{ color: "#5a2a3a", fontFamily: "serif" }}>
          {title}
        </h1>
        <p className="text-muted small">{subtitle}</p>
      </div>

      {/* टाइटल बार */}
      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h4 className="fw-bold m-0" style={{ fontSize: "1.4rem" }}>{title}</h4>
        <span
          className="text-primary fw-bold"
          style={{ cursor: "pointer", fontSize: "0.9rem" }}
          onClick={() => navigate(`/sangrah/${finalType}`)}
        >
          समस्त
        </span>
      </div>

      {/* कार्ड्स ग्रिड - यहाँ "संग्रह" और "लेखक" एक साथ दिखेंगे */}
      <div className="row g-3"> 
        {/* 1. पहला कार्ड: समस्त संग्रह */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div
            className="square-card h-100"
            onClick={() => navigate(`/sangrah/${finalType}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="square-img-box grey-box d-flex align-items-center justify-content-center">
              <h3 className="m-0 text-muted" style={{ fontWeight: "300" }}>संग्रह</h3>
            </div>
            <p className="square-name mt-2 fw-bold text-center">समस्त {title}</p>
          </div>
        </div>

        {/* 2. बाकी कार्ड्स: लेखक/कवि (AuthorsData से) */}
        {data && data.map((item) => (
          <div key={item.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div
              className="square-card h-100"
              onClick={() => navigate(`/author/${item.id}`)}
              title={item.name}
            >
              <div className="square-img-box">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid rounded shadow-sm"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200?text=Author";
                  }}
                />
              </div>
              <p className="square-name mt-2 text-center text-truncate px-1">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;