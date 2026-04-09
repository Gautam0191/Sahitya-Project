import React, { useState, useEffect } from "react";
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

  // --- बेस URL (Backend Address) ---
  const API_BASE_URL = "http://localhost:5000";

  // --- डेटाबेस स्टेट्स ---
  const [dbPoetry, setDbPoetry] = useState([]);
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
          axios.get(`${API_BASE_URL}/api/home/poetry`),
          axios.get(`${API_BASE_URL}/api/home/stories`),
          axios.get(`${API_BASE_URL}/api/home/drama`),
          axios.get(`${API_BASE_URL}/api/authors/favorites`),
        ]);

        // 1. कहानी का लॉजिक
        let picked = null;
        let filtered = [];
        if (storyRes.data && storyRes.data.length > 0) {
          picked =
            storyRes.data.find((s) => s.isFeatured === true) ||
            storyRes.data[0];
          filtered = storyRes.data
            .filter((s) => s._id !== picked?._id)
            .slice(0, 6);
        }

        // 2. कविता का सॉर्टिंग लॉजिक
        let sortedPoetry = [];
        if (poetryRes.data) {
          sortedPoetry = [...poetryRes.data].sort((a, b) =>
            b.isFeatured === true ? 1 : -1,
          );
        }

        // 3. नाट्य मंच (Drama) का सॉर्टिंग लॉजिक
        let sortedDrama = [];
        if (dramaRes.data) {
          sortedDrama = [...dramaRes.data].sort((a, b) =>
            b.isFeatured === true ? 1 : -1,
          );
        }

        setDbPoetry(sortedPoetry);
        setDbStories(storyRes.data);
        setFeaturedStory(picked);
        setSliderStories(filtered);
        setDbDrama(sortedDrama);
        setFavoriteAuthors(favRes.data);
        setLoading(false);

        // Bootstrap Carousel Logic
        setTimeout(() => {
          if (window.bootstrap && document.getElementById("heroCarousel")) {
            const carouselElement = document.getElementById("heroCarousel");
            const carousel = new window.bootstrap.Carousel(carouselElement, {
              interval: 3000,
              ride: "carousel",
              pause: "hover",
            });
            carousel.cycle();
          }
        }, 500);
      } catch (err) {
        console.error("डेटा लोड करने में समस्या आई:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return <div className="text-center py-5">साहित्य लोड हो रहा है...</div>;

  return (
    <>
      {/* --- 1. HERO SLIDER --- */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {sliderData && sliderData.length > 0 && (
            <div className="carousel-item active">
              <img
                src={sliderData[0].img}
                className="d-block w-100"
                alt="बैनर 1"
                style={{ height: isMobile ? "220px" : "450px", objectFit: "cover" }}
              />
            </div>
          )}
          {/* अन्य स्टैटिक बैनर यहाँ जोड़ सकते हैं */}
        </div>
      </div>

      {/* --- 2. कविता सेक्शन --- */}
      <section className="poetry-section container mt-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="section-heading">कविताओं</h2>
          <p className="section-subheading">हिंदी साहित्य की चुनिंदा रचनाएं</p>
        </div>

        <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          {dbPoetry
            .slice(0, showAll ? dbPoetry.length : isMobile ? 6 : 10)
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
                      src={item.img ? `${API_BASE_URL}/authors/${item.img}` : "/placeholder.jpg"}
                      alt={item.title}
                      className="img-fluid"
                      onError={(e) => { e.target.src = "/placeholder.jpg"; }}
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="poetry-title">{item.title}</h5>
                    <p className="poet-name">कवि: {item.authorName || item.author}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* --- 3. कथा कलश --- */}
      <section className="kahani-section py-5">
        <div className="container px-md-5 px-3">
          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold section-title">कथा कलश</h2>
            <div className="title-underline mx-auto"></div>
          </div>

          {featuredStory && (
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-xl-11">
                <div
                  className="main-kahani-card shadow-sm border-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/read/${featuredStory.authorId}/${featuredStory.title}`)}
                >
                  <div className="row g-0">
                    <div className="col-md-6 featured-img-box">
                      <img
                        src={featuredStory.img ? `${API_BASE_URL}/authors/${featuredStory.img}` : "/placeholder.jpg"}
                        className="img-fluid featured-img"
                        alt={featuredStory.title}
                      />
                    </div>
                    <div className="col-md-6 bg-white d-flex align-items-center">
                      <div className="card-body p-4 p-md-5">
                        <span className="tag-label">कहानी</span>
                        <h3 className="fw-bold my-3">{featuredStory.title}</h3>
                        <p className="text-secondary">{featuredStory.description || featuredStory.desc}</p>
                        <span className="fw-bold text-wine">{featuredStory.authorName || featuredStory.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="slider-wrapper position-relative">
            <div className="row flex-nowrap overflow-auto kahani-slider pb-4 mx-0" id="kahaniSlider">
              {sliderStories.map((story) => (
                <div className="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0" key={story._id || story.id}>
                  <div className="kahani-small-card shadow-sm h-100 bg-white" onClick={() => navigate(`/read/${story.authorId}/${story.title}`)}>
                    <div className="small-card-img">
                      <img
                        src={story.img ? `${API_BASE_URL}/authors/${story.img}` : "/placeholder.jpg"}
                        className="card-img-top"
                        alt={story.title}
                      />
                    </div>
                    <div className="card-body p-3 text-center">
                      <h6 className="fw-bold mb-1">{story.title}</h6>
                      <p className="small text-wine">{story.authorName || story.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. नाट्य मंच --- */}
      <section className="natak-section-wrapper py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: "#5a2a3a" }}>नात्य मंच</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="row g-4 justify-content-center">
            {dbDrama.map((natak) => (
              <div className="col-lg-2-4 col-md-4 col-6" key={natak._id || natak.id}>
                <Link to={`/read/${natak.authorId}/${natak.title}`} className="text-decoration-none">
                  <div className="natak-square-card text-center border-0">
                    <div className="square-frame shadow-sm mb-3">
                      <img
                        src={natak.img ? `${API_BASE_URL}/authors/${natak.img}` : "/placeholder.jpg"}
                        alt={natak.title}
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h6 className="natak-title-v2 text-dark">{natak.title}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. विषयानुसार कविता --- */}
      <section className="kavita-section py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold section-title">दुनिया रोज़ बनती है</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="d-flex flex-nowrap overflow-auto kavita-slider pb-4" id="kavitaSlider">
            {vishayKavitaData && vishayKavitaData.map((item) => (
              <div className="col-10 col-sm-6 col-md-4 col-lg-2-4 flex-shrink-0" key={item.id}>
                <div className="canva-card-frame shadow-sm">
                  <img src={item.img} alt={item.title} className="img-fluid vishay-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. पसंदीदा लेखक --- */}
      <section className="authors-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{ color: "#5a2a3a" }}>पसंदीदा लेखक</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="d-flex flex-nowrap overflow-auto authors-slider pb-4" ref={authorScrollRef} onScroll={handleAuthorScroll}>
            {favoriteAuthors.map((author) => (
              <div className="col-10 col-sm-6 col-md-4 col-lg-2-4 flex-shrink-0" key={author._id || author.id}>
                <Link to={`/author/${author.id}`} className="text-decoration-none">
                  <div className="author-item text-center">
                    <div className="author-circle shadow-sm mx-auto mb-3">
                      <img
                        src={author.img ? `${API_BASE_URL}/authors/${author.img}` : "/placeholder.jpg"}
                        alt={author.name}
                        className="img-fluid"
                      />
                    </div>
                    <h6 className="author-name-text text-dark">{author.name}</h6>
                    <p className="text-muted small">{author.categoryLabel}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;