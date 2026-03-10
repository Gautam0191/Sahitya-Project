import React from "react";

const Footer = ({ setView }) => {
  return (
    <footer className="footer-section">
      {/* ऊपरी हिस्सा - साहित्यिक विचार */}
      <div className="newsletter-bar py-5">
        <div className="container text-center">
          <div className="quote-container">
            <i
              className="fa-solid fa-quote-left mb-3 opacity-50"
              style={{ fontSize: "2rem" }}
            ></i>
            <h3 className="newsletter-text mb-2">
              "साहित्य वह जादू की लकड़ी है जो पशुओं में ईंट-पत्थरों में और
              पेड़-पौधों में भी विश्व की आत्मा का दर्शन करा देती है।"
            </h3>
            <p className="mb-0 small-text">— मुंशी प्रेमचंद</p>
          </div>
        </div>
      </div>

      {/* मुख्य फुटर */}
      <div className="main-footer py-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-title">रचना-निधि</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#!">कवि</a></li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (setView) setView("poems");
                    }}
                  >
                    कविता
                  </a>
                </li>
                <li><a href="#!">कहानी</a></li>
                <li><a href="#!">दोहा</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-title">जानकारी</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#!">साइट परिचय</a></li>
                <li><a href="#!">संपर्क कीजिए</a></li>
                <li><a href="#!">गोपनीयता नीति</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-title">लोकप्रिय</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#!">भक्ति काव्य</a></li>
                <li><a href="#!">वीर रस</a></li>
                <li><a href="#!">छायावाद</a></li>
              </ul>
            </div>

            {/* संपर्क फॉर्म */}
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
              <h5 className="footer-title">जुड़िए और संदेश भेजें</h5>
              <div className="footer-contact-form">
                <div className="row g-2">
                  <div className="col-12 col-sm-6">
                    <input type="text" placeholder="नाम" className="form-control custom-input" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" placeholder="ई-मेल" className="form-control custom-input" />
                  </div>
                  <div className="col-12">
                    <textarea
                      placeholder="आपका संदेश या रचना यहाँ लिखें..."
                      className="form-control custom-input"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <button className="btn contact-submit-btn w-100 mt-2">
                  संदेश भेजें
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom mt-5 pt-4 border-top">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h6 className="mb-3">साहित्य सागर सोशल मीडिया</h6>
                <div className="social-icons d-flex gap-2">
                  <a href="#!"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#!"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#!"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div className="col-md-6 text-md-end mt-4 mt-md-0">
                <p className="mb-0 copyright-text">
                  © 2025 साहित्य सागर | सर्वाधिकार सुरक्षित
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;