import React from 'react';


const PoetryPage = () => {
  // 15 प्रसिद्ध कवियों का डेटा
  const poets = [
    { id: 1, name: "गजानन माधव मुक्तिबोध", img: "https://upload.wikimedia.org/wikipedia/hi/thumb/5/52/Gajanan_Madhav_Muktibodh.jpg/220px-Gajanan_Madhav_Muktibodh.jpg" },
    { id: 2, name: "अज्ञेय", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/S_H_Vatsyayan.jpg/220px-S_H_Vatsyayan.jpg" },
    { id: 3, name: "शमशेर बहादुर सिंह", img: "https://dummyimage.com/200x200/f0f0f0/666&text=शमशेर" },
    { id: 4, name: "रघुवीर सहाय", img: "https://dummyimage.com/200x200/f0f0f0/666&text=रघुवीर" },
    { id: 5, name: "केदारनाथ अग्रवाल", img: "https://dummyimage.com/200x200/f0f0f0/666&text=केदारनाथ" },
    { id: 6, name: "नागार्जुन", img: "https://dummyimage.com/200x200/f0f0f0/666&text=नागार्जुन" },
    { id: 7, name: "त्रिलोचन", img: "https://dummyimage.com/200x200/f0f0f0/666&text=त्रिलोचन" },
    { id: 8, name: "धूमिल", img: "https://dummyimage.com/200x200/f0f0f0/666&text=धूमिल" },
    { id: 9, name: "कुँवर नारायण", img: "https://dummyimage.com/200x200/f0f0f0/666&text=कुँवर" },
    { id: 10, name: "सर्वेश्वर दयाल", img: "https://dummyimage.com/200x200/f0f0f0/666&text=सर्वेश्वर" },
    { id: 11, name: "मुक्तिबोध", img: "https://dummyimage.com/200x200/f0f0f0/666&text=कवि" },
    { id: 12, name: "निराला", img: "https://dummyimage.com/200x200/f0f0f0/666&text=निराला" },
    { id: 13, name: "प्रसाद", img: "https://dummyimage.com/200x200/f0f0f0/666&text=प्रसाद" },
    { id: 14, name: "पंत", img: "https://dummyimage.com/200x200/f0f0f0/666&text=पंत" },
    { id: 15, name: "महादेवी", img: "https://dummyimage.com/200x200/f0f0f0/666&text=महादेवी" },
  ];

  return (
    <div className="container mt-4">
      <div className="poetry-header text-start mb-5">
        <h1 className="main-title-red">कविता</h1>
        <p className="sub-title-text text-muted">
          हिंदी की काव्य-परंपरा से विभिन्न काव्य-विधाओं की रचनाओं का विशाल-संग्रह
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="section-label">कविताएँ</h3>
        <a href="#" className="text-primary text-decoration-none">समस्त</a>
      </div>

      <div className="row g-4">
        {/* पहला 'संग्रह' कार्ड */}
        <div className="col-6 col-md-4 col-lg-2">
          <div className="poet-card-wrapper">
            <div className="poet-img-box collection-bg d-flex align-items-center justify-content-center">
              <span className="collection-label">संग्रह</span>
            </div>
            <p className="poet-name-label">कविता संग्रह</p>
          </div>
        </div>

        {/* बाकी 15 कवियों के कार्ड्स */}
        {poets.map((poet) => (
          <div key={poet.id} className="col-6 col-md-4 col-lg-2">
            <div className="poet-card-wrapper" onClick={() => alert(`${poet.name} के पेज पर जा रहे हैं...`)}>
              <div className="poet-img-box">
                <img src={poet.img} alt={poet.name} className="img-fluid poet-photo" />
              </div>
              <p className="poet-name-label">{poet.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoetryPage;