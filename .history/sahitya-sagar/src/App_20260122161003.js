import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// स्टाइल और कंपोनेंट्स
import "./App.css";
import "./components/Navbar.css";
import "./pages/Home.css";
import "./Responsive.css";
import "swiper/css";
import "swiper/css/navigation";

// Components & Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AuthorsListPage from "./pages/AuthorsListPage";
import AuthorDetailPage from "./pages/AuthorDetailPage";
import ContentPage from "./pages/SmartContentPage";
import SahityaSangrah from "./pages/SahityaSangrah";
import ReadingPage from "./pages/ReadingPage";

// --- ✅ लोकल डेटा (चूंकि अब हम DB का इस्तेमाल कर रहे हैं, इसलिए सिर्फ ज़रूरी चीजें यहाँ रखी हैं) ---
const sliderData = [
  { id: 1, img: "/sahity-sagar-heroSection.jpg" },
  { id: 2, img: "/sahity-sagar-heroSection.jpg" },
  { id: 3, img: "/sahity-sagar-heroSection.jpg" }
];

const vishayKavitaData = [
  { id: 1, title: "प्रकृति", img: "/authors/nature.jpg" },
  { id: 2, title: "बेटियाँ", img: "/authors/beti.jpg" },      
  { id: 3, title: "इतिहास", img: "/authors/history.jpg" },   
  { id: 4, title: "नारी शक्ति", img: "/authors/woman.jpg" },
  { id: 5, title: "प्रेम", img: "/authors/love.jpg" }
];
function App() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("home");

  // लेखक सेक्शन स्क्रॉल लॉजिक
  const authorScrollRef = useRef(null);
  const [showPrevAuthor, setShowPrevAuthor] = useState(false);
  const [showNextAuthor, setShowNextAuthor] = useState(true);

  const handleAuthorScroll = () => {
    if (authorScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = authorScrollRef.current;
      setShowPrevAuthor(scrollLeft > 10);
      setShowNextAuthor(scrollLeft < scrollWidth - clientWidth - 25);
    }
  };

  const scrollAuthor = (direction) => {
    const distance = direction === "left" ? -350 : 350;
    if (authorScrollRef.current) {
      authorScrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isMobile={isMobile}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isMobile={isMobile}
                  sliderData={sliderData}
                  showAll={showAll}
                  setShowAll={setShowAll}
                  vishayKavitaData={vishayKavitaData}
                  authorScrollRef={authorScrollRef}
                  handleAuthorScroll={handleAuthorScroll}
                  showPrevAuthor={showPrevAuthor}
                  showNextAuthor={showNextAuthor}
                  scrollAuthor={scrollAuthor}
                />
              }
            />

            {/* --- कविता संग्रह --- */}
            <Route
              path="/poems"
              element={
                <ContentPage
                  type="poetry"
                  title="कविता संग्रह"
                  subtitle="हिंदी की काव्य-परंपरा से विभिन्न काव्य-विधाओं की रचनाओं का विशाल-संग्रह"
                />
              }
            />

            {/* --- कहानी संग्रह --- */}
            <Route
              path="/stories"
              element={
                <ContentPage
                  type="story"
                  title="कहानी संग्रह"
                  subtitle="कालजयी कहानियों और कथाकारों का संसार"
                />
              }
            />

            {/* --- समस्त कहानी सूची --- */}
            <Route
              path="/all-stories-list"
              element={
                <ContentPage
                  type="story"
                  title="समस्त कहानी संग्रह"
                  subtitle="हिंदी साहित्य की सभी कालजयी कहानियाँ"
                />
              }
            />

            <Route
              path="/kavi"
              element={
                <AuthorsListPage
                  title="हिन्दी के महान कवि"
                  subtitle="हमारी संस्कृति के गौरव और शब्दों के जादूगर"
                  categoryFilter="kavi"
                />
              }
            />

            <Route
              path="/nibandh"
              element={
                <ContentPage
                  type="nibandh"
                  title="निबंध"
                  subtitle="साहितियक एवं सामाजिक वैचारिक संग्रह"
                />
              }
            />

            <Route
              path="/sher"
              element={
                <ContentPage
                  type="sher"
                  title="शेर"
                  subtitle="ग़ज़ल और जज़्बात का संगम"
                />
              }
            />

            <Route
              path="/dohe"
              element={
                <ContentPage
                  type="dohe"
                  title="दोहे"
                  subtitle="गागर में सागर: प्राचीन एवं नवीन दोहे"
                />
              }
            />

            <Route
              path="/kahanikar"
              element={
                <AuthorsListPage
                  title="हिन्दी के महान कहानीकार"
                  subtitle="कलम के जादूगर"
                  categoryFilter="kahanikar"
                />
              }
            />

            <Route path="/sangrah/:type" element={<SahityaSangrah />} />
            
            <Route
              path="/read/:authorId/:workTitle"
              element={<ReadingPage />}
            />

            <Route path="/author/:id" element={<AuthorDetailPage />} />
            {/* --- ✅ ग्लोबल सर्च पेज यहाँ जोड़ें --- */}
            <Route path="/search" element={<SearchPage />}
          </Routes>
        </main>

        <Footer setView={setView} />
      </div>
    </Router>
  );
}

export default App;