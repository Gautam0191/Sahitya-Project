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
  const [featuredPoem, setFeaturedPoem] = useState(null); // ✅ नई स्टेट कविता के लिए
  const [dbStories, setDbStories] = useState([]);
  const [sliderStories, setSliderStories] = useState([]);
  const [dbDrama, setDbDrama] = useState([]);
  const [favoriteAuthors, setFavoriteAuthors] = useState([]);
  const [featuredStory, setFeaturedStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [poetryRes, storyRes, dramaRes, favRes] = await Promise.all([
          axios.get("http://localhost:5000/api/home/poetry"),
          axios.get("http://localhost:5000/api/home/stories"),
          axios.get("http://localhost:5000/api/home/drama"),
          axios.get("http://localhost:5000/api/authors/favorites"),
        ]);

        // --- ✅ कहानी का लॉजिक ---
        let pickedStory = null;
        let filteredStories = [];
        if (storyRes.data && storyRes.data.length > 0) {
          pickedStory = storyRes.data.find((s) => s.isFeatured === true) || storyRes.data[0];
          filteredStories = storyRes.data.filter((s) => s._id !== pickedStory?._id).slice(0, 6);
        }

        // --- ✅ कविता का लॉजिक (कहानी की तरह) ---
        let pickedPoem = null;
        let otherPoetry = [];
        if (poetryRes.data && poetryRes.data.length > 0) {
          // जो isFeatured: true है उसे मुख्य बनाओ
          pickedPoem = poetryRes.data.find((p) => p.isFeatured === true) || poetryRes.data[0];
          // बाकी को लिस्ट में डालो
          otherPoetry = poetryRes.data.filter((p) => p._id !== pickedPoem?._id);
        }

        setDbPoetry(otherPoetry);
        setFeaturedPoem(pickedPoem);
        setDbStories(storyRes.data);
        setFeaturedStory(pickedStory);
        setSliderStories(filteredStories);
        setDbDrama(dramaRes.data);
        setFavoriteAuthors(favRes.data);

        setLoading(false);
      } catch (err) {
        console.error("डेटा लोड करने में समस्या आई:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && favoriteAuthors.length > 0 && typeof handleAuthorScroll === "function") {
      const timer = setTimeout(() => { handleAuthorScroll(); }, 800);
      return () => clearTimeout(timer);
    }
  }, [loading, favoriteAuthors.length]);

  if (loading) return <div className="text-center py-5">साहित्य लोड हो रहा है...</div>;

  return (
    <>
      {/* --- 1. HERO SLIDER --- */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {sliderData.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={slide.id}>
              <img
                src={slide.img}
                className="d-block w-100"
                alt="बैनर"
                style={{ height: isMobile ? "220px" : "450px", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- 2. कविता सेक्शन (कहानी वाले स्टाइल में) --- */}
      <section className="poetry-section container mt-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="section-heading">कविताएँ</h2>
          <p className="section-subheading">हिंदी साहित्य की चुनिंदा रचनाएं</p>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* ✅ प्रमुख कविता (Featured) - कहानी जैसा बड़ा कार्ड */}
        {featuredPoem && (
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-xl-11">
              <div
                className="main-kahani-card shadow-sm border-0"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/read/${featuredPoem.authorId}/${featuredPoem.title}`)}
              >
                <div className="row g-0">
                  <div className="col-md-6 overflow-hidden featured-img-box">
                    <img
                      src={featuredPoem.img ? `http://localhost:5000${featuredPoem.img}` : "/placeholder.jpg"}
                      className="img-fluid featured-img"
                      alt={featuredPoem.title}
                    />
                  </div>
                  <div className="col-md-6 d-flex align-items-center bg-white">
                    <div className="card-body p-4 p-md-5">
                      <span className="tag-label">प्रमुख कविता</span>
                      <h3 className="fw-bold my-3 main-title">{featuredPoem.title}</h3>
                      <p className="text-secondary leading-relaxed">
                        {featuredPoem.description || "काव्य जगत की एक कालजयी रचना।"}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <span className="fw-bold text-wine">
                          {featuredPoem.authorName || featuredPoem.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ✅ छोटी कविताओं की ग्रिड */}
        <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          {dbPoetry
            .slice(0, showAll ? dbPoetry.length : (isMobile ? 6 : 10))
            .map((item) => (
              <div
                key={item._id || item.id}
                className="col"
                onClick={() => navigate(`/read/${item.authorId}/${item.title}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="poetry-card-v2 shadow-sm h-100">
                  <div className="card-img-wrapper">
                    <img
                      src={item.img ? `http://localhost:5000${item.img}` : "/placeholder.jpg"}
                      alt={item.title}
                      className="img-fluid"
                      loading="lazy"
                      onError={(e) => { 
                        if (e.target.src !== window.location.origin + "/placeholder.jpg") {
                          e.target.src = "/placeholder.jpg"; 
                        }
                      }}
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="poetry-title">{item.title}</h5>
                    <p className="poet-name">
                      {item.authorName || item.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {dbPoetry.length > (isMobile ? 6 : 10) && (
          <div className="text-center mt-5">
            <button
              className="premium-btn"
              onClick={() => {
                setShowAll(!showAll);
                if(showAll) window.scrollTo({ behavior: 'smooth', top: 500 });
              }}
            >
              {showAll ? "कम देखें" : "सारे कार्ड्स देखें"}
            </button>
          </div>
        )}
      </section>

      {/* यहाँ से आगे आपका कहानी सेक्शन चालू होगा... */}

    
      {/* --- 3. कथा कलश --- */}
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
                        src={
                          featuredStory.img
                            ? featuredStory.img
                            : "/placeholder.jpg"
                        }
                        className="img-fluid featured-img"
                        alt={featuredStory.title}
                        // onError हटा दिया ताकि ब्लिंकिंग का खतरा खत्म हो जाए
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
                        src={story.img ? story.img : "/placeholder.jpg"}
                        className="card-img-top vishay-img"
                        alt={story.title}
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
