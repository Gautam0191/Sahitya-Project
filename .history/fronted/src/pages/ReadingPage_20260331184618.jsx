import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ReadingPage = () => {
  const { authorId, workTitle } = useParams(); 
  const navigate = useNavigate();
  const [workData, setWorkData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchContent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/content/${authorId}/${workTitle}`);
        setWorkData(res.data);
      } catch (err) {
        console.error("Error fetching work:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [authorId, workTitle]);

  if (loading) return <div className="text-center py-5 mt-5">साहित्य लोड हो रहा है...</div>;

  return (
    <div className="reading-page py-5" style={{ backgroundColor: "#f4f1ea", minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="p-4 p-md-5 shadow-sm bg-white rounded-1 border">
              <button onClick={() => navigate(-1)} className="btn btn-link text-dark p-0 mb-4 text-decoration-none">
                ← पीछे जाएँ
              </button>
              
              {/* शीर्षक */}
              <h1 className="display-5 text-center mb-2" style={{ fontFamily: 'serif' }}>
                {workData ? workData.title : workTitle}
              </h1>
              
              <hr className="w-25 mx-auto mb-5" style={{ borderTop: "2px solid #8b4513" }} />
              
              {/* ✅ रचना की कवर इमेज - यहाँ पाथ फिक्स किया गया है */}
              {workData?.img && (
                <div className="mb-5 text-center">
                   <img 
                    /* /covers/ फोल्डर का सही पाथ */
                    src={`/covers/${workData.img.trim()}`} 
                    alt={workData.title} 
                    style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none'; // अगर फोटो न मिले तो खाली जगह न दिखे
                    }}
                   />
                </div>
              )}

              {/* रचना का पाठ (Content) */}
              <div className="reading-content lh-lg" style={{ fontSize: "1.2rem", textAlign: "justify", whiteSpace: "pre-wrap" }}>
                {workData?.content ? (
                  workData.content
                ) : (
                  <div className="text-center text-muted">
                    इस रचना का पूर्ण विवरण जल्द ही अपडेट किया जाएगा।
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;