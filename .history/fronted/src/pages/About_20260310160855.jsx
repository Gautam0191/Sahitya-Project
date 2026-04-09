import React from "react";

const About = () => {
  const styles = {
    // बैकग्राउंड इमेज सेक्शन
    heroSection: {
      height: "400px",
      width: "100%",
      backgroundImage: "linear-gradient(rgba(90, 42, 58, 0.7), rgba(90, 42, 58, 0.7)), url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    },
    // कंटेंट कार्ड जो ऊपर उठेगा
    cardContainer: {
      marginTop: "-100px", // यही वह मैजिक है जो कार्ड को इमेज पर चढ़ाएगा
      paddingBottom: "60px"
    },
    card: {
      borderTop: "6px solid #5a2a3a",
      borderRadius: "15px",
      backgroundColor: "#ffffff",
      padding: "50px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
    },
    title: {
      color: "#5a2a3a",
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "2rem"
    },
    icon: {
      color: "#5a2a3a",
      marginRight: "10px"
    }
  };

  return (
    <div style={{ backgroundColor: "#fdfbf7" }}>
      {/* 1. बैकग्राउंड हीरो सेक्शन */}
      <div style={styles.heroSection}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>हमारे बारे में</h1>
      </div>

      {/* 2. कंटेंट कार्ड सेक्शन */}
      <div className="container" style={styles.cardContainer}>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div style={styles.card}>
              <h2 className="text-center" style={styles.title}>साहित्य सागर: मेरी कलम से</h2>
              
              <p className="text-center mb-5" style={{ fontSize: "1.1rem", color: "#666" }}>
                नमस्ते! साहित्य सागर सिर्फ एक वेबसाइट नहीं, बल्कि हिंदी के प्रति मेरे प्रेम का एक छोटा सा प्रयास है।
              </p>

              <h4 style={{ color: "#5a2a3a", marginTop: "10px" }}>
                <i className="fas fa-bullseye" style={styles.icon}></i> हमारा उद्देश्य
              </h4>
              <p>साहित्य सागर का निर्माण हिंदी साहित्य के उन अनमोल रत्नों को डिजिटल युग में सहेजने के लिए किया गया है। मेरा लक्ष्य कविता, कहानी, दोहे और निबंधों के माध्यम से हिंदी भाषा की समृद्धि को नई पीढ़ी तक पहुँचाना है।</p>

              <h4 style={{ color: "#5a2a3a", marginTop: "30px" }}>
                <i className="fas fa-book-open" style={styles.icon}></i> हम क्या करते हैं?
              </h4>
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-check-circle" style={styles.icon}></i> हिंदी साहित्य का एक ऐसा संग्रह जिसे पढ़कर रूह खुश हो जाए।</li>
                <li className="mb-3"><i className="fas fa-check-circle" style={styles.icon}></i> नए और उभरते हुए लेखकों को अपनी बात रखने का मंच।</li>
                <li className="mb-3"><i className="fas fa-check-circle" style={styles.icon}></i> भक्ति से लेकर छायावाद तक का एक डिजिटल सफर।</li>
              </ul>

              <h4 style={{ color: "#5a2a3a", marginTop: "30px" }}>
                <i className="fas fa-handshake" style={styles.icon}></i> जुड़िए
              </h4>
              <p>यह सफ़र अधूरा है आपके बिना। यदि आप भी हिंदी से उतना ही प्रेम करते हैं, तो आपका इस मंच पर स्वागत है। आइए, मिलकर साहित्य के इस सागर को और गहरा बनाएं!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;