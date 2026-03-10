import React, { useEffect, useState } from "react"; // 1. useState जोड़ा
import { Link, useLocation, useNavigate } from "react-router-dom"; // 2. useNavigate जोड़ा
import "./Navbar.css";

const Navbar = ({ isMenuOpen, setIsMenuOpen, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate(); // नेविगेशन के लिए

  // --- ✅ SEARCH LOGIC START ---
  const [searchInput, setSearchInput] = useState(""); 

  // जब URL में सर्च शब्द हो, तो उसे बॉक्स में वापस दिखाओ (ताकि गायब न लगे)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get("q");
    if (q) setSearchInput(q);
  }, [location.search]);

  // सर्च फंक्शन
  const handleSearch = (e) => {
    if (e) e.preventDefault(); // ✅ रिफ्रेश होने से रोकेगा

    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      
      // ✅ setSearchInput("");  <-- इसे मैंने हटा दिया (COMMENT कर दिया) 
      // ताकि सर्च करने के बाद बॉक्स में नाम लिखा रहे और गायब न हो।
      
      setIsMenuOpen(false); 
    }
  };

  // एंटर की (Enter Key) दबाने पर सर्च चले
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e); // ✅ यहाँ 'e' पास करना बहुत ज़रूरी है
    }
  };
  // --- ✅ SEARCH LOGIC END ---

  // जब भी रास्ता (Route) बदलेगा, मोबाइल मेनू बंद हो जाएगा
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "show" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
        <div className="container-fluid">
          {/* मोबाइल टॉगलर */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link className="navbar-brand logo-text me-auto me-lg-4" to="/">
            साहित्य सागर
          </Link>

          <div className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            {/* क्लोज बटन */}
            <button
              className="close-sidebar-btn d-lg-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/poems">
                  कविता
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/stories">
                  कहानी
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/Kavi">
                  कवि
                </Link>
              </li>

              {/* मोबाइल के एक्स्ट्रा लिंक्स */}
              <li className="nav-item d-lg-none">
                <Link className="nav-link nav-link-custom" to="/kahanikar">
                  कहानीकार
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link nav-link-custom" to="/nibandh">
                  निबंध
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link nav-link-custom" to="/dohe">
                  दोहे
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link nav-link-custom" to="/sher">
                  शेर
                </Link>
              </li>

              {/* डेस्कटॉप ड्रॉपडाउन */}
              <li className="nav-item dropdown d-none d-lg-block">
                <a
                  className="nav-link nav-link-custom dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  अन्य
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <Link className="dropdown-item" to="/nibandh">
                      निबंध
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sher">
                      शेर
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dohe">
                      दोहे
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/kahanikar">
                      कहानीकार
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* --- ✅ मोबाइल सर्च बार अपडेटेड --- */}
            <div className="mobile-search-container d-lg-none mt-3">
              <div className="mobile-search-box">
                <i
                  className="fas fa-search"
                  style={{ color: "#5a2a3a" }}
                  onClick={handleSearch}
                ></i>
                <input
                  type="text"
                  placeholder="खोजिए"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>

          {/* --- ✅ डेस्कटॉप सर्च बार अपडेटेड --- */}
          <div className="search-and-icons-wrapper d-none d-lg-flex align-items-center">
            <div className="search-container d-flex align-items-center me-3">
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
            {/* सोशल लिंक्स (No Change) */}
            <a href="#" className="nav-link nav-link-custom me-3">
              लॉग-इन
            </a>
            <div className="d-flex align-items-center">
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
