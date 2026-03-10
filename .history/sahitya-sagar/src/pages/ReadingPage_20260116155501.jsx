import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReadingPage = () => {
  const { authorId, workTitle } = useParams();
  const navigate = useNavigate();
  const [workData, setWorkData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // पेज लोड होते ही ऊपर स्क्रॉल करें
    const fetchWork = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/authors/${authorId}/work/${workTitle}`);
        setWorkData(response.data);
      } catch (err) {
        console.error("रचना लोड करने में विफल:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWork();
  }, [authorId, workTitle]);

  if (loading) return <div className="text-center py-20 text-xl">साहित्य लोड हो रहा है...</div>;

  return (
    <div className="min-h-screen bg-[#fdf6e3] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-md rounded-sm border-t-8 border-[#8b4513]">
        <button 
          onClick={() => navigate(-1)} 
          className="text-[#8b4513] mb-6 hover:font-bold transition-all"
        >
          ← वापस जाएँ
        </button>
        
        <h1 className="text-4xl font-serif text-center text-gray-900 mb-2">{workTitle}</h1>
        <p className="text-center text-gray-500 italic mb-10">रचनाकार की कृति</p>
        
        <div className="text-xl leading-relaxed text-gray-800 font-serif whitespace-pre-wrap">
          {workData?.content || "क्षमा करें, इस रचना का पूर्ण पाठ अभी उपलब्ध नहीं है। इसे जल्द ही जोड़ा जाएगा।"}
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;