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
      {/* मुख्य हेडिंग */}
      <div className="text-start mb-4">
        <h1 className="display-5 fw-bold" style={{ color: "#5a2a3a", fontFamily: "serif" }}>
          {title}
        </h1>
        <p className="text-muted small">{subtitle}</p>
      </div>

      {/* टाइटल बार - यहाँ से नीला 'समस्त' बटन हटा दिया गया है */}
      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h4 className="fw-bold m-0" style={{ fontSize: "1.2rem", color: "#333" }}>{title}</h4>
        {/* नीला बटन यहाँ था, जिसे अब हटा दिया गया है */}
      </div>

      <div className="row g-2">
        {/* 1. पहला कार्ड: संग्रह (Grey Box) */}
        <div className="col-6 col-md-3 col-lg-2">
          <div
            className="square-card"
            onClick={() => navigate(`/sangrah/${finalType}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="square-img-box grey-box">
              <h3 className="m-0 text-muted" style={{ fontWeight: "300", fontSize: "1.2rem" }}>संग्रह</h3>
            </div>
            <p className="square-name">समस्त {title}</p>
          </div>
        </div>

        {/* 2. लेखकों/कवियों के कार्ड्स (Data से) */}
        {data && data.map((item) => (
          <div key={item.id} className="col-6 col-md-3 col-lg-2">
            <div
              className="square-card"
              onClick={() => navigate(`/author/${item.id}`)}
              title={item.name}
            >
              <div className="square-img-box">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200?text=Sahitya+Sagar";
                  }}
                />
              </div>
              <p className="square-name text-truncate">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;