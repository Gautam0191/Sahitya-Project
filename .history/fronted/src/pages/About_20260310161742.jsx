import React from "react";

const About = () => {
  const styles = {
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
    cardContainer: {
      marginTop: "-100px",
      paddingBottom: "60px"
    },
    card: {
      borderTop: "6px solid #5a2a3a",
      borderRadius: "15px",
      backgroundColor: "#ffffff",
      padding: "60px", // थोड़ी और पैडिंग बढ़ाई ताकि अंदर जगह बढ़े
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      minHeight: "600px" // यहाँ से आप ऊंचाई कंट्रोल कर सकते हैं
    },
    title: {
      color: "#5a2a3a",
      fontWeight: "800",
      marginBottom: "40px"
    },
    icon: {
      color: "#5a2a3a",
      marginRight: "10px"
    }
  };

  return (
    <div style={{ backgroundColor: "#fdfbf7" }}>
      <div style={styles.heroSection}>
        <h1 style={{ fontWeight: "bold" }}>हमारा सफ़र</h1>
      </div>

      <div className="container" style={styles.cardContainer}>
        <div className="row justify-content-center">
          {/* col-lg-8 से बढ़ाकर col-lg-10 किया ताकि चौड़ाई बढ़ जाए */}
          <div className="col-lg-10"> 
            <div style={styles.card}>
              <h2 className="text-center" style={styles.title}>हमारा सफ़र</h2>
              
              <h4 style={{ color: "#5a2a3a", marginTop: "10px" }}>
                <i className="fas fa-bullseye" style={styles.icon}></i> हमारा उद्देश्य
              </h4>
              <p>साहित्य सागर का निर्माण हिंदी साहित्य के उन अनमोल रत्नों को डिजिटल युग में सहेजने के लिए किया गया है। हमारा लक्ष्य कविता, कहानी, दोहे और निबंधों के माध्यम से हिंदी भाषा की समृद्धि को नई पीढ़ी तक पहुँचाना है।</p>

              <h4 style={{ color: "#5a2a3a", marginTop: "30px" }}>
                <i className="fas fa-book-open" style={styles.icon}></i> हम क्या करते हैं?
              </h4>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-check-circle" style={styles.icon}></i> हिंदी कविता और कहानियों का एक विशाल संग्रह।</li>
                <li className="mb-2"><i className="fas fa-check-circle" style={styles.icon}></i> नए और उभरते हुए लेखकों को एक मंच देना।</li>
                <li className="mb-2"><i className="fas fa-check-circle" style={styles.icon}></i> भक्ति काव्य से लेकर छायावाद तक की विविध विधाओं का समावेश।</li>
              </ul>

              <h4 style={{ color: "#5a2a3a", marginTop: "30px" }}>
                <i className="fas fa-handshake" style={styles.icon}></i> जुड़िए
              </h4>
              <p>यदि आप हमारे इस सफर में शामिल होना चाहते हैं, तो आप अपनी रचनाएँ हमें भेज सकते हैं। साहित्य से प्रेम करने वाले हर व्यक्ति का यहाँ स्वागत है।</p>
              
              {/* यहाँ अब आपके पास और जानकारी जोड़ने के लिए काफी जगह है */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;