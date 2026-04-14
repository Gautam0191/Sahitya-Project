import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get("q");
    if (q) setSearchInput(q);
  }, [location.search]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  // सर्च बॉक्स का एक कॉमन फंक्शन ताकि कोड बार-बार न लिखना पड़े
  const SearchBox = ({ customClass }) => (
    <div className={`search-container d-flex align-items-center ${customClass}`}>
      <input
        type="text"
        className="form-control search-input"
        placeholder="खोजिए"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-icon-btn" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "show" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav className="navbar navbar-expand-lg navbar-custom shadow-sm sticky-top">
        <div className="container-fluid d-flex align-items-center">
          
          {/* 1. मोबाइल/टैबलेट टॉगलर - यहाँ margin-right दी है ताकि लोगो से दूर रहे */}
          <button
            className="navbar-toggler d-lg-none me-2"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* 2. लोगो - me-auto हटाकर ms-2 जोड़ा ताकि टॉगलर के पास न चिपके */}
          <Link className="navbar-brand logo-text ms-2 ms-lg-0" to="/">
            साहित्य सागर
          </Link>

          {/* 3. टैबलेट/डेस्कटॉप सर्च - यह 768px (md) से ऊपर बाहर दिखेगा */}
          <div className="d-none d-md-flex ms-auto me-3 align-items-center">
             <SearchBox customClass="tablet-desktop-search" />
          </div>

          <div className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <button
              className="close-sidebar-btn d-lg-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/poems">कविता</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/stories">कहानी</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/Kavi">कवि</Link>
              </li>

              {/* मोबाइल के एक्स्ट्रा लिंक्स */}
              <li className="nav-item d-lg-none"><Link className="nav-link nav-link-custom" to="/kahanikar">कहानीकार</Link></li>
              <li className="nav-item d-lg-none"><Link className="nav-link nav-link-custom" to="/nibandh">निबंध</Link></li>
              
              {/* केवल मोबाइल (768px से कम) पर दिखने वाला सर्च बॉक्स */}
              <li className="nav-item d-md-none mt-3 px-3">
                 <SearchBox customClass="mobile-only-search" />
              </li>
            </ul>
          </div>

          {/* 4. सोशल लिंक्स और लॉगिन - टैबलेट/डेस्कटॉप के लिए */}
          <div className="search-and-icons-wrapper d-none d-lg-flex align-items-center">
            <a href="#" className="nav-link nav-link-custom me-3">लॉग-इन</a>
            <div className="d-flex align-items-center">
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;