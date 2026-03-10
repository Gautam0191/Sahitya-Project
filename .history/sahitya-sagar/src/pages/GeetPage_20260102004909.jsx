import React from "react";
import "./Geet.css";


const GeetPage = () => {
  // Sahitya ke mahan geetkar ki list
  const geetkarList = [
    { id: 1, name: "Ameer Khusro", title: "Sufi Sangeet ke Janak", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Kabir Das", title: "Nirgun Bhajan", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Meera Bai", title: "Bhakti Pad", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Jaishankar Prasad", title: "Chhayavadi Geet", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Mahadevi Varma", title: "Geet-Goshthi", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="geet-page" style={{ background: "#fffaf5", minHeight: "100vh" }}>
      {/* Hero Banner */}
      <div className="geet-hero py-5 text-center" style={{ background: "linear-gradient(rgba(90, 42, 58, 0.8), rgba(90, 42, 58, 0.8)), url('your-bg-image.jpg')" }}>
        <h1 className="display-3 text-white fw-bold section-title">गीत और गूँज</h1>
        <p className="text-light fs-5 italic">"शब्द जहाँ संगीत बन जाते हैं..."</p>
      </div>

      <div className="container py-5">
        {/* Mahan Geetkar Section */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title">महान गीतकार</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row justify-content-center mb-5">
          {geetkarList.map((g) => (
            <div className="col-6 col-md-4 col-lg-2 text-center mb-4" key={g.id}>
              <div className="geetkar-avatar shadow-sm mb-3 mx-auto">
                <img src={g.img} alt={g.name} className="img-fluid rounded-circle p-1 border border-wine" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              </div>
              <h6 className="fw-bold mb-0 author-name-text">{g.name}</h6>
              <small className="text-muted">{g.title}</small>
            </div>
          ))}
        </div>

        {/* Famous Geet Grid */}
        <div className="row g-4 mt-4">
           {/* Yahan aap apna geet data map kar sakte hain */}
           <div className="col-md-6">
              <div className="geet-card p-4 bg-white shadow-sm border-start border-4 border-wine">
                 <h4 className="fw-bold">छाप तिलक सब छीनी</h4>
                 <p className="text-muted">- अमीर खुसरो</p>
                 <p className="font-italic text-secondary">"छाप तिलक सब छीनी रे मोसे नैना मिलाइके..."</p>
                 <button className="btn-global-sangrah py-2 px-4 mt-2">पूरा पढ़ें</button>
              </div>
           </div>
           {/* Doosra geet */}
           <div className="col-md-6">
              <div className="geet-card p-4 bg-white shadow-sm border-start border-4 border-wine">
                 <h4 className="fw-bold">दुखिया दास कबीर है</h4>
                 <p className="text-muted">- कबीर दास</p>
                 <p className="font-italic text-secondary">"सुखिया सब संसार है, खावै और सोवै..."</p>
                 <button className="btn-global-sangrah py-2 px-4 mt-2">पूरा पढ़ें</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GeetPage;