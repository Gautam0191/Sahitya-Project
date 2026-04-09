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
      flexDirection: "column", // हेडिंग और सब-टेक्स्ट के लिए
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
      padding: "60px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      minHeight: "600px"
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
      {/* 1. हीरो सेक्शन: साहित्य सागर लिखा हुआ */}
      <div style={styles.heroSection}>
        <h1 style={{ fontWeight: "bold", fontSize: "3.5rem" }}>साहित्य सागर</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px", opacity: "0.9" }}>
          शब्दों के माध्यम से हिंदी साहित्य की एक नई यात्रा
        </p>
      </div>

      {/* 2. मुख्य कंटेंट */}
      <div className="container" style={styles.cardContainer}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={styles.card}>
              <h2 className="text-center" style={styles.title}>हमारा सफ़र</h2>
              
              <h4 style={{ color: "#5a2a3a", marginTop: "10px" }}>
                <i className="fas fa-bullseye" style={styles.icon}></i> हमारा उद्देश्य
              </h4>
              <p>साहित्य सागर का निर्माण हिंदी साहित्य के उन अनमोल रत्नों को डिजिटल युग में सहेजने के लिए किया गया है। हमारा लक्ष्य कविता, कहानी, दोहे और निबंधों के माध्यम से हिंदी भाषा की समृद्धि को नई पीढ़ी तक पहुँचाना है। हम चाहते हैं कि हिंदी का हर प्रेमी दुनिया के किसी भी कोने से इन रचनाओं का आनंद ले सके।</p>

              <h4 style={{ color: "#5a2a3a", marginTop: "30px" }}>
                <i className="fas fa-book-open" style={styles.icon}></i> हम क्या करते हैं?
              </h4>
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-check-circle" style={styles.icon}></i> **विशाल संग्रह:** प्राचीन और आधुनिक कवियों की रचनाओं का संगम।</li>
                <li className="mb-3"><i className="fas fa-check-circle" style={styles.icon}></i> **नया मंच:** उभरते हुए लेखकों को अपनी रचनाएँ दुनिया के सामने लाने का मौका।</li>
                <li className="mb-3"><i className="fas fa-check-circle" style={styles.icon}></i> **विविधता:** भक्ति काव्य से लेकर छायावाद और समकालीन विषयों पर चर्चा।</li>
              </ul>

              <h4 style={{ color: "#5a2a3a", marginTop: "30px" }}>
                <i className="fas fa-heart" style={styles.icon}></i> हमसे क्यों जुड़ें?
              </h4>
              <p>साहित्य सागर केवल एक वेबसाइट नहीं, यह एक समुदाय है। यहाँ हम हिंदी भाषा की जड़ों को मजबूती देते हैं। यदि आप भी मानते हैं कि साहित्य जीवन जीने का नज़रिया है, तो आप हमारे इस परिवार का हिस्सा ज़रूर बनें।</p>

              <h4 style={{ color: "#5a2a3a", marginTop: "30px" }}>
                <i className="fas fa-handshake" style={styles.icon}></i> जुड़िए
              </h4>
              <p>यदि आप हमारे इस सफर में शामिल होना चाहते हैं, तो आप अपनी रचनाएँ हमें भेज सकते हैं। साहित्य से प्रेम करने वाले हर व्यक्ति का यहाँ स्वागत है। आइए, मिलकर साहित्य के इस सागर को और गहरा बनाएं!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;