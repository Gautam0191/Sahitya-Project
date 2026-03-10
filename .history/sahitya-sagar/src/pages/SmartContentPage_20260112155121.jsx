import { useNavigate } from "react-router-dom";
import "./SmartContentPage.css";

// 1. यहाँ props में 'type' को जोड़ दिया गया है
const ContentPage = ({ data, title, subtitle, type }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 pt-5">
      <div className="text-start mb-4">
        <h1
          className="display-5 fw-bold"
          style={{ color: "#5a2a3a", fontFamily: "serif" }}
        >
          {title}
        </h1>
        <p className="text-muted small">{subtitle}</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h4 className="fw-bold m-0" style={{ fontSize: "1.4rem" }}>
          {title}
        </h4>
        <span
          className="text-primary fw-bold"
          style={{ cursor: "pointer", fontSize: "0.9rem" }}
          // 2. यहाँ भी रास्ता सही कर दिया ताकि 'समस्त' पर क्लिक करते ही लिस्ट खुले
          onClick={() => navigate(`/sangrah/${type}`)}
        >
          समस्त
        </span>
      </div>

      <div className="row g-2">
        <div className="col-6 col-md-3 col-lg-2">
          <div
            className="square-card"
            onClick={() => navigate(`/sangrah/${type}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="square-img-box grey-box">
              <h3 className="m-0 text-muted" style={{ fontWeight: "300" }}>
                संग्रह
              </h3>
            </div>
            <p className="square-name">समस्त {title}</p>
          </div>
        </div>

        {data &&
          data.map((item) => (
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
                      e.target.src =
                        "https://via.placeholder.com/200?text=Sahitya+Sagar";
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
