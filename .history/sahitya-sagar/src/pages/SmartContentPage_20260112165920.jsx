import { useNavigate } from "react-router-dom";
import "./SmartContentPage.css";

const ContentPage = ({ data, title, subtitle, type }) => {
  const navigate = useNavigate();

  // एक हेल्पर फंक्शन ताकि बार-बार चेक न करना पड़े
  const getTargetRoute = () => {
    if (type === 'poetry') return 'kavita';
    if (type === 'story') return 'kahani';
    // अगर type 'sher', 'dohe' या 'nibandh' है, तो वह वैसा ही रहेगा
    return type; 
  };

  const finalType = getTargetRoute();

  return (
    <div className="container mt-5 pt-5">
      <div className="text-start mb-4">
        <h1 className="display-5 fw-bold" style={{ color: "#5a2a3a", fontFamily: "serif" }}>
          {title}
        </h1>
        <p className="text-muted small">{subtitle}</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h4 className="fw-bold m-0" style={{ fontSize: "1.4rem" }}>{title}</h4>
        <span
          className="text-primary fw-bold"
          style={{ cursor: "pointer", fontSize: "0.9rem" }}
          // सुधार 1: यहाँ finalType का इस्तेमाल किया
          onClick={() => navigate(`/sangrah/${finalType}`)}
        >
          समस्त
        </span>
      </div>

      <div className="row g-2">
        <div className="col-6 col-md-3 col-lg-2">
          <div
            className="square-card"
            // सुधार 2: यहाँ भी finalType लगाया ताकि कार्ड क्लिक पर भी सही डेटा खुले
            onClick={() => navigate(`/sangrah/${finalType}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="square-img-box grey-box">
              <h3 className="m-0 text-muted" style={{ fontWeight: "300" }}>संग्रह</h3>
            </div>
            <p className="square-name">समस्त {title}</p>
          </div>
        </div>

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