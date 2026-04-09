import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center mb-4">साहित्य सागर: एक परिचय</h2>
          <div className="card border-0 shadow-sm p-4">
            <p className="lead text-muted text-center">
              "साहित्य वह जादू की लकड़ी है जो पशुओं में, ईंट-पत्थरों में और पेड़-पौधों में भी विश्व की आत्मा का दर्शन करा देती है।"
            </p>
            <p className="text-center fw-bold mb-4">— मुंशी प्रेमचंद</p>
            
            <hr />
            
            <h4 className="mt-4">हमारा उद्देश्य</h4>
            <p>
              साहित्य सागर का निर्माण हिंदी साहित्य के उन अनमोल रत्नों को डिजिटल युग में सहेजने के लिए किया गया है। 
              हमारा लक्ष्य कविता, कहानी, दोहे और निबंधों के माध्यम से हिंदी भाषा की समृद्धि को नई पीढ़ी तक पहुँचाना है।
            </p>

            <h4 className="mt-4">हम क्या करते हैं?</h4>
            <ul>
              <li>हिंदी कविता और कहानियों का एक विशाल संग्रह।</li>
              <li>नए और उभरते हुए लेखकों को एक मंच देना।</li>
              <li>भक्ति काव्य से लेकर छायावाद तक की विविध विधाओं का समावेश।</li>
            </ul>

            <h4 className="mt-4">जुड़िए</h4>
            <p>
              यदि आप हमारे इस सफर में शामिल होना चाहते हैं, तो आप अपनी रचनाएँ हमें भेज सकते हैं। 
              साहित्य से प्रेम करने वाले हर व्यक्ति का यहाँ स्वागत है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;