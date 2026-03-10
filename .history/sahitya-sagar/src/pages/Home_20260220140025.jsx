import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = ({
  isMobile,
  sliderData,
  showAll,
  setShowAll,
  vishayKavitaData,
  authorScrollRef,
  handleAuthorScroll,
  showPrevAuthor,
  showNextAuthor,
  scrollAuthor,
}) => {
  const navigate = useNavigate();

  // --- डेटाबेस स्टेट्स ---
  const [dbPoetry, setDbPoetry] = useState([]);
  const [dbStories, setDbStories] = useState([]);
  const [sliderStories, setSliderStories] = useState([]);
  const [dbDrama, setDbDrama] = useState([]);
  const [favoriteAuthors, setFavoriteAuthors] = useState([]); // ✅ API के लिए स्टेट
  const [featuredStory, setFeaturedStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const poetryRes = await axios.get(
          "http://localhost:5000/api/home/poetry",
        );
        setDbPoetry(poetryRes.data);

        const storyRes = await axios.get(
          "http://localhost:5000/api/home/stories",
        );
        if (storyRes.data && storyRes.data.length > 0) {
          setDbStories(storyRes.data);

          // Featured Story चुनें
          const picked =
            storyRes.data.find((s) => s.isFeatured === true) ||
            storyRes.data[0];
          setFeaturedStory(picked);

          // ✅ स्लाइडर के लिए कहानियाँ यहीं सेट करें (ताकि लूप न बने)
          const filtered = storyRes.data
            .filter((story) => story._id !== picked?._id)
            .slice(0, 6);
          setSliderStories(filtered);
        }

        const dramaRes = await axios.get(
          "http://localhost:5000/api/home/drama",
        );
        setDbDrama(dramaRes.data);

        const favRes = await axios.get(
          "http://localhost:5000/api/authors/favorites",
        );
        setFavoriteAuthors(favRes.data);

        setLoading(false);
      } catch (err) {
        console.error("डेटा लोड करने में समस्या आई:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  // ✅ 2. यहाँ जोड़ें नया useEffect (बटन्स और स्क्रॉल इफ़ेक्ट के लिए)
  // ✅ 2. स्क्रॉल इफ़ेक्ट वाला useEffect (इसमें से dbStories हटा दिया ताकि ब्लिंक न हो)
  useEffect(() => {
    if (
      favoriteAuthors.length > 0 &&
      typeof handleAuthorScroll === "function"
    ) {
      const timer = setTimeout(() => {
        handleAuthorScroll();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [favoriteAuthors]); // 👈 सिर्फ favoriteAuthors के आने पर चले

  if (loading)
    return <div className="text-center py-5">साहित्य लोड हो रहा है...</div>;

  return (
    <>
      {/* --- 1. HERO SLIDER (Same as original) --- */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {sliderData.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={slide.id}
            >
              <img
                src={slide.img}
                className="d-block w-100"
                alt="बैनर"
                style={{
                  height: isMobile ? "220px" : "450px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- 2. कविता सेक्शन (Real DB Data) --- */}
      <section className="poetry-section container mt-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="section-heading">कविताएँ</h2>
          <p className="section-subheading">हिंदी साहित्य की चुनिंदा रचनाएं</p>
        </div>
        <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          {dbPoetry
            .slice(0, showAll ? dbPoetry.length : 10)
            .map((item, index) => (
              <div
                key={item._id || item.id}
                className={`col ${
                  isMobile && index === 4 && !showAll ? "mx-auto" : ""
                }`}
                onClick={() => navigate(`/read/${item.authorId}/${item.title}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="poetry-card-v2 shadow-sm h-100">
                  <div className="card-img-wrapper">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="poetry-title">{item.title}</h5>
                    <p className="poet-name">
                      कवि: {item.authorName || item.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {isMobile && (
          <div className="text-center mt-5">
            <button
              className="premium-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "कम देखें" : "सारे कार्ड्स देखें"}
            </button>
          </div>
        )}
      </section>

      {/* --- 3. कथा कलश (1 Featured + 6 Slider) --- */}
      <section className="kahani-section py-5">
        <div className="container px-md-5 px-3">
          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold section-title">कथा कलश</h2>
            <p className="text-muted">साहित्य और संस्कृति की धड़कन</p>
            <div className="title-underline mx-auto"></div>
          </div>

          {/* ✅ बड़ी कहानी वाला हिस्सा (Featured) */}
          {featuredStory && (
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-xl-11">
                <div
                  className="main-kahani-card shadow-sm border-0"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(
                      `/read/${featuredStory.authorId}/${featuredStory.title}`,
                    )
                  }
                >
                  <div className="row g-0">
                    <div className="col-md-6 overflow-hidden featured-img-box">
                      <img
  // चूँकि डेटाबेस में 'covers/name.jpg' है, इसलिए सीधा localhost के बाद जोड़ो
  src={story.img ? `http://localhost:5000/${story.img}` : "/placeholder.jpg"}
  className="card-img-top vishay-img"
  alt={story.title}
  onError={(e) => { 
    e.target.onerror = null; 
    e.target.src = "/placeholder.jpg"; 
  }}
/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center bg-white">
                      <div className="card-body p-4 p-md-5">
                        <span className="tag-label">कहानी</span>
                        <h3 className="fw-bold my-3 main-title">
                          {featuredStory.title}
                        </h3>
                        <p className="text-secondary leading-relaxed">
                          {featuredStory.description || featuredStory.desc}
                        </p>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <span className="fw-bold text-wine">
                            {featuredStory.authorName || featuredStory.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ✅ स्लाइडर वाला हिस्सा (6 कहानियाँ) */}
          <div className="slider-wrapper position-relative">
            {/* 👈 Left Button (Updated Classes) */}
            <button
              className="s-prev d-none d-md-flex"
              onClick={() =>
                document
                  .getElementById("kahaniSlider")
                  .scrollBy({ left: -400, behavior: "smooth" })
              }
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div
              className="row flex-nowrap overflow-auto kahani-slider pb-4 custom-scrollbar mx-0"
              id="kahaniSlider"
              style={{ scrollBehavior: "smooth" }}
            >
              {sliderStories.map((story) => (
                <div
                  className="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0"
                  key={story._id || story.id}
                >
                  <div
                    className="kahani-small-card border-0 shadow-sm h-100 bg-white"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/read/${story.authorId}/${story.title}`)
                    }
                  >
                    <div className="small-card-img">
                      <img
                        src={
                          story.img
                            ? `http://localhost:5000/${story.img}`
                            : "/placeholder.jpg"
                        }
                        className="card-img-top vishay-img"
                        alt={story.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder.jpg";
                        }}
                      />
                    </div>
                    <div className="card-body p-3 text-center">
                      <h6 className="fw-bold mb-1">{story.title}</h6>
                      <p className="small text-wine mb-1">
                        {story.authorName || story.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 👉 Right Button (Updated Classes) */}
            <button
              className="s-next d-none d-md-flex"
              onClick={() =>
                document
                  .getElementById("kahaniSlider")
                  .scrollBy({ left: 400, behavior: "smooth" })
              }
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn-global-sangrah"
              onClick={() => navigate("/stories")}
            >
              समस्त संग्रह
            </button>
          </div>
        </div>
      </section>

      {/* --- 4. नाट्य मंच (Natak Section) --- */}
      <section className="natak-section-wrapper">
        {/* Banner code same as original */}
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: "#5a2a3a" }}>
              नाट्य मंच
            </h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="row g-4 justify-content-center">
            {dbDrama.slice(0, 5).map((natak, index) => (
              <div
                className={`col-lg-2-4 col-md-4 col-6 ${
                  index === 4 ? "mobile-hide-5th" : ""
                }`}
                key={natak._id || natak.id}
              >
                <Link
                  to={`/read/${natak.authorId}/${natak.title}`}
                  className="text-decoration-none"
                >
                  <div className="natak-square-card text-center border-0">
                    <div className="square-frame shadow-sm mb-3">
                      <img
                        src={natak.img}
                        alt={natak.title}
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h6 className="natak-title-v2 text-truncate px-1 text-dark">
                      {natak.title}
                    </h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/sahitya-sangrah/natak">
              <button className="btn-global-sangrah">समस्त संग्रह</button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 5. विषयानुसार कविता (Updated) --- */}
      <section className="kavita-section py-5 bg-white">
        <div className="container">
          {/* हेडिंग और सब-हेडिंग पूरी तरह सेंटर में */}
          <div className="text-center mb-5 d-flex flex-column align-items-center">
            <h2 className="display-6 fw-bold section-title">
              दुनिया रोज़ बनती है
            </h2>
            <p className="text-muted w-100 text-center">विषयानुसार कविता</p>
            <div className="title-underline mx-auto"></div>
          </div>

          {/* स्लाइडर रैपर */}
          <div className="slider-wrapper position-relative">
            <div
              className="d-flex flex-nowrap overflow-auto kavita-slider pb-4 custom-scrollbar"
              id="kavitaSlider"
              style={{ scrollBehavior: "smooth" }}
            >
              {vishayKavitaData &&
                vishayKavitaData.map((item) => (
                  /* col-lg-2-4 का उपयोग 5 कार्ड्स दिखाने के लिए */
                  <div
                    className="col-10 col-sm-6 col-md-4 col-lg-2-4 flex-shrink-0 kavita-card-wrapper"
                    key={item.id}
                  >
                    <div className="canva-card-frame shadow-sm border-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="img-fluid vishay-img"
                      />
                      <div className="corner-arrow">
                        <i className="fa-solid fa-arrow-right simple-corner-arrow"></i>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* डेस्कटॉप बटन्स */}
            <button
              className="s-prev d-none d-md-flex"
              onClick={() =>
                document
                  .getElementById("kavitaSlider")
                  .scrollBy({ left: -400, behavior: "smooth" })
              }
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
              className="s-next d-none d-md-flex"
              onClick={() =>
                document
                  .getElementById("kavitaSlider")
                  .scrollBy({ left: 400, behavior: "smooth" })
              }
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      {/* --- 6. पसंदीदा लेखक (Updated) --- */}
      <section className="authors-section py-5">
        <div className="container">
          {/* हेडिंग और सब-हेडिंग को सेंटर करने के लिए */}
          <div className="text-center mb-5">
            <h2
              className="display-6 fw-bold section-title"
              style={{ color: "#5a2a3a" }}
            >
              पसंदीदा लेखक
            </h2>
            <p className="text-muted small w-100 text-center">
              साहित्य जगत के कालजयी रचनाकार
            </p>
            <div className="title-underline mx-auto"></div>
          </div>

          <div className="slider-wrapper position-relative">
            <div
              className="d-flex flex-nowrap overflow-auto authors-slider pb-4 custom-scrollbar"
              ref={authorScrollRef}
              onScroll={handleAuthorScroll}
              style={{ scrollBehavior: "smooth" }}
            >
              {favoriteAuthors &&
                favoriteAuthors.map((author) => (
                  /* col-lg-2-4 का मतलब है 100/5 = 20% विड्थ, जिससे 5 लेखक दिखेंगे */
                  <div
                    className="col-10 col-sm-6 col-md-4 col-lg-2-4 flex-shrink-0 author-card-wrapper"
                    key={author._id || author.id}
                  >
                    <Link
                      to={`/author/${author.id}`}
                      className="text-decoration-none"
                    >
                      <div className="author-item text-center">
                        <div className="author-circle shadow-sm mx-auto mb-3">
                          <img
                            src={author.img}
                            alt={author.name}
                            className="img-fluid"
                          />
                        </div>
                        <h6 className="author-name-text mb-1 text-dark">
                          {author.name}
                        </h6>
                        <p className="text-muted small mb-0">
                          {author.categoryLabel}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>

            {showPrevAuthor && (
              <button
                className="s-prev d-none d-md-flex"
                onClick={() => scrollAuthor("left")}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}
            {showNextAuthor && (
              <button
                className="s-next d-none d-md-flex"
                onClick={() => scrollAuthor("right")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
