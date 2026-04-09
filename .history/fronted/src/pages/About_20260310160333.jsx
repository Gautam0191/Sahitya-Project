import React from "react";

const About = () => {
  // कस्टम स्टाइल ऑब्जेक्ट
  const styles = {
    section: {
      backgroundColor: "#fdfbf7",
      padding: "60px 0",
      minHeight: "80vh"
    },
    card: {
      borderLeft: "6px solid #5a2a3a",
      borderRadius: "12px",
      backgroundColor: "#ffffff",
      padding: "40px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    },
    title: {
      color: "#5a2a3a",
      fontWeight: "700",
      marginBottom: "30px"
    },
    icon: {
      color: "#5a2a3a",
      marginRight: "10px"
    }
  };

  return (
    <div style={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div style={styles.card}>
              <h2 className="text-center" style={styles.title}>साहित्य सागर: हमारा सफ़र</h2>
              
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;