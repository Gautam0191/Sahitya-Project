import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ReadingPage = () => {
  const { authorId, workTitle } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchContent = async () => {
      try {
        // बैकएंड से रचना का डेटा लाना
        const res = await axios.get(`http://localhost:5000/api/authors/${authorId}/work/${workTitle}`);
        setContent(res.data.content);
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
              
              <h1 className="display-5 text-center mb-2" style={{ fontFamily: 'serif' }}>{workTitle}</h1>
              <hr className="w-25 mx-auto mb-5" style={{ borderTop: "2px solid #8b4513" }} />
              
              {/* असली टेक्स्ट यहाँ दिखेगा */}
              <div className="reading-content lh-lg" style={{ fontSize: "1.2rem", textAlign: "justify", whiteSpace: "pre-wrap" }}>
                {content || "इस रचना का पूर्ण विवरण जल्द ही अपडेट किया जाएगा।"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;