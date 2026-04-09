import React from "react";

const About = () => {
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
      padding: "50px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    },
    title: {
      color: "#5a2a3a",
      fontWeight: "700",
      marginBottom: "30px",
      fontSize: "2.5rem"
    },
    text: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "#444"
    }
  };

  return (
    <div style={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div style={styles.card}>
              <h2 className="text-center" style={styles.title}>साहित्य सागर: मेरी कलम से</h2>
              
              <p style={styles.text}>
                नमस्ते! मैं 'साहित्य सागर' का निर्माता हूँ और यह मंच मेरे लिए सिर्फ एक वेबसाइट नहीं, बल्कि हिंदी साहित्य के प्रति मेरे प्रेम का एक छोटा सा प्रयास है।
              </p>

              <p style={styles.text}>
                बचपन से ही जब मैंने पहली बार मुंशी प्रेमचंद और निराला जी की पंक्तियाँ पढ़ीं, तो मुझे अहसास हुआ कि साहित्य सिर्फ शब्द नहीं, बल्कि जीने का एक नज़रिया है। मैं हमेशा से चाहता था कि हिंदी की वह खुशबू जो किताबों के पुराने पन्नों में कहीं खो सी गई है, उसे डिजिटल दुनिया में फिर से जीवित कर सकूँ।
              </p>

              <p style={styles.text}>
                यहीं से जन्म हुआ 'साहित्य सागर' का। यहाँ मैं केवल साहित्य जमा नहीं कर रहा, बल्कि अपनी भावनाओं को सहेज रहा हूँ। चाहे वह भक्ति की शांति हो, वीर रस का जोश हो, या छायावाद की कोमलता—मैंने उन सभी को यहाँ एक घर देने की कोशिश की है।
              </p>

              <h4 style={{ color: "#5a2a3a", marginTop: "40px", marginBottom: "20px" }}>
                क्या आप साथ चलेंगे?
              </h4>
              <p style={styles.text}>
                यह सफ़र अधूरा है आपके बिना। यदि आप भी हिंदी से उतना ही प्रेम करते हैं, या आपके पास अपनी कोई रचना है जिसे आप दुनिया से साझा करना चाहते हैं, तो बेझिझक आइए। यह मंच आप सभी साहित्य-प्रेमियों का है।
              </p>

              <p style={styles.text} className="mt-4 fw-bold">
                धन्यवाद, <br />
                साहित्य सागर टीम
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;