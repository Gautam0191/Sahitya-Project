import React from "react";

const About = () => {
  const styles = {
    heroSection: {
      height: "450px",
      width: "100%",
      backgroundImage: "linear-gradient(rgba(90, 42, 58, 0.8), rgba(90, 42, 58, 0.8)), url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center"
    },
    cardContainer: {
      marginTop: "-120px",
      paddingBottom: "80px"
    },
    card: {
      borderTop: "8px solid #5a2a3a",
      borderRadius: "20px",
      backgroundColor: "#ffffff",
      padding: "60px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    },
    title: {
      color: "#5a2a3a",
      fontWeight: "800",
      fontSize: "2.5rem",
      marginBottom: "40px",
      borderBottom: "2px solid #fdfbf7",
      paddingBottom: "10px"
    },
    heading: {
      color: "#5a2a3a",
      fontWeight: "700",
      marginTop: "40px",
      display: "flex",
      alignItems: "center"
    },
    text: {
      lineHeight: "1.9",
      fontSize: "1.15rem",
      color: "#444",
      marginTop: "15px"
    }
  };

  return (
    <div style={{ backgroundColor: "#fdfbf7" }}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", letterSpacing: "2px" }}>साहित्य सागर</h1>
        <p style={{ fontSize: "1.3rem", marginTop: "15px", fontStyle: "italic" }}>जहाँ शब्द और भावनाएं एक-दूसरे से मिलती हैं।</p>
      </div>

      {/* Main Content */}
      <div className="container" style={styles.cardContainer}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={styles.card}>
              <h2 className="text-center" style={styles.title}>हमारा सफ़र</h2>
              
              <p style={styles.text}>
                नमस्ते! 'साहित्य सागर' केवल एक वेबसाइट नहीं है, यह मेरा एक छोटा सा प्रयास है—उन पुरानी यादों और उन अनमोल शब्दों को डिजिटल दुनिया में सहेजने का, जो समय की धूल में खो रहे थे। बचपन में जब पहली बार प्रेमचंद जी की कहानियों को पढ़ा था, तो लगा था कि ये शब्द सिर्फ पन्नों पर नहीं, बल्कि मेरे अपने मन में लिखे गए हैं। 
              </p>

              <h4 style={styles.heading}>
                <i className="fas fa-bullseye" style={{ marginRight: "15px" }}></i> क्यों शुरू किया यह मंच?
              </h4>
              <p style={styles.text}>
                डिजिटल युग में लोग भागदौड़ में लगे हैं, लेकिन साहित्य आज भी वह सुकून है जो हमें खुद से जोड़ता है। मैं चाहता था कि हिंदी का हर वो प्रेमी, चाहे वो कहीं भी हो, अपनी मातृभाषा की मिठास को महसूस कर सके। यही मेरी प्रेरणा है—इस सागर में हिंदी साहित्य के हर एक रत्न को सुरक्षित रखना।
              </p>

              <h4 style={styles.heading}>
                <i className="fas fa-book-open" style={{ marginRight: "15px" }}></i> क्या खास है यहाँ?
              </h4>
              <ul className="list-unstyled" style={{ marginTop: "20px" }}>
                <li style={styles.text}><i className="fas fa-check-circle" style={{ color: "#5a2a3a", marginRight: "10px" }}></i> **प्राचीन से आधुनिक:** भक्ति के दोहों से लेकर आज की नई कहानियों तक का सफर।</li>
                <li style={styles.text}><i className="fas fa-check-circle" style={{ color: "#5a2a3a", marginRight: "10px" }}></i> **लेखकों का स्वागत:** यह मंच सिर्फ मेरा नहीं, आपका भी है—अगर आप लिखते हैं, तो यहाँ आपका दिल से स्वागत है।</li>
                <li style={styles.text}><i className="fas fa-check-circle" style={{ color: "#5a2a3a", marginRight: "10px" }}></i> **शुद्ध हिंदी प्रेम:** विज्ञापन और शोर-शराबे से दूर, सिर्फ और सिर्फ साहित्य की खुशबू।</li>
              </ul>

              <h4 style={styles.heading}>
                <i className="fas fa-heart" style={{ marginRight: "15px" }}></i> आप और मैं
              </h4>
              <p style={styles.text}>
                यह सफ़र अधूरा है आपके बिना। अगर आपको यहाँ की कोई रचना आपके दिल को छू जाए, तो समझिएगा कि मेरा प्रयास सफल हुआ। आप यहाँ पाठक बनकर आएं या लेखक बनकर, 'साहित्य सागर' का हर पन्ना आपकी भावनाओं का सम्मान करता है। आइए, मिलकर साहित्य के इस सागर को और गहरा और विशाल बनाते हैं।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;