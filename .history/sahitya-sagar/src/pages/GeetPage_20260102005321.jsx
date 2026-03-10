

import React from "react";
import "./GeetPage.css"; // अपनी नई CSS फाइल को यहाँ लिंक करें

const GeetPage = () => {
  // साहित्य के महान गीतकार की लिस्ट (Proper Hindi & Images)
  const geetkarList = [
    { 
      id: 1, 
      name: "अमीर खुसरो", 
      title: "सूफी संगीत के जनक", 
      img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      name: "कबीर दास", 
      title: "निर्गुण भजन सम्राट", 
      img: "https://images.unsplash.com/photo-1582730147924-d92f4da00252?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      name: "मीरा बाई", 
      title: "भक्ति रस की स्वामिनी", 
      img: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      name: "जयशंकर प्रसाद", 
      title: "छायावादी काव्य के स्तंभ", 
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      id: 5, 
      name: "महादेवी वर्मा", 
      title: "आधुनिक मीरा", 
      img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=200&auto=format&fit=crop" 
    },
  ];

  return (
    <div className="geet-page" style={{ background: "#fffaf5", minHeight: "100vh" }}>
      {/* Hero Banner - यहाँ एक सुंदर साहित्य-प्रेरित इमेज बैकग्राउंड है */}
      <div className="geet-hero py-5 text-center" style={{ 
        background: "linear-gradient(rgba(90, 42, 58, 0.85), rgba(90, 42, 58, 0.85)), url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1500&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1 className="display-3 text-white fw-bold section-title">गीत और गूँज</h1>
        <p className="text-light fs-5 font-italic">"जहाँ शब्द संगीत की गोद में विश्राम करते हैं..."</p>
      </div>

      <div className="container py-5">
        {/* महान गीतकार सेक्शन */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title">कालजयी गीतकार</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row justify-content-center mb-5">
          {geetkarList.map((g) => (
            <div className="col-6 col-md-4 col-lg-2 text-center mb-4" key={g.id}>
              <div className="geetkar-avatar shadow-sm mb-3 mx-auto">
                <img src={g.img} alt={g.name} className="img-fluid rounded-circle p-1 border border-wine" style={{ width: '110px', height: '110px', objectFit: 'cover' }} />
              </div>
              <h6 className="fw-bold mb-0 author-name-text">{g.name}</h6>
              <small className="text-muted">{g.title}</small>
            </div>
          ))}
        </div>

        {/* प्रसिद्ध गीत ग्रिड */}
        <div className="section-header text-center mb-5">
          <h3 className="fw-bold">लोकप्रिय रचनाएँ</h3>
        </div>

        <div className="row g-4 mt-2">
           <div className="col-md-6">
              <div className="geet-card p-4 bg-white shadow-sm border-start border-4 border-wine h-100">
                 <h4 className="fw-bold text-wine">छाप तिलक सब छीनी</h4>
                 <p className="text-muted mb-3">— अमीर खुसरो</p>
                 <p className="font-italic text-secondary lh-lg">
                    "छाप तिलक सब छीनी रे मोसे नैना मिलाइके, <br/>
                    प्रेम भटी का मदवा पिलाइके, मतवाली कर लीनी रे मोसे नैना मिलाइके।"
                 </p>
                 <button className="btn-global-sangrah py-2 px-4 mt-3">पूरा पढ़ें</button>
              </div>
           </div>

           <div className="col-md-6">
              <div className="geet-card p-4 bg-white shadow-sm border-start border-4 border-wine h-100">
                 <h4 className="fw-bold text-wine">मन रे तू काहे ना धीर धरे</h4>
                 <p className="text-muted mb-3">— साहिर लुधियानवी / पारंपरिक</p>
                 <p className="font-italic text-secondary lh-lg">
                    "मन रे तू काहे ना धीर धरे, <br/>
                    वो निरमोहिया मोह ना जाने, जिनका मोह करे।"
                 </p>
                 <button className="btn-global-sangrah py-2 px-4 mt-3">पूरा पढ़ें</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GeetPage;