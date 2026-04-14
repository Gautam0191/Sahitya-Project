import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isMenuOpen, setIsMenuOpen, isMobile }) => {
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
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "show" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav className="navbar navbar-expand-lg navbar-custom shadow-sm sticky-top">
        <div className="container-fluid">
          {/* मोबाइल/टैबलेट टॉगलर - me-3 जोड़ा ताकि लोगो से दूर रहे */}
          <button
            className="navbar-toggler d-lg-none me-3"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link className="navbar-brand logo-text me-auto me-lg-4" to="/">
            साहित्य सागर
          </Link>

          {/* --- ✅ टैबलेट के लिए नया सर्च बार (जो बाहर दिखेगा) --- */}
          <div className="d-none d-md-flex d-lg-none ms-auto me-3">
            <div className="search-container d-flex align-items-center">
              <input
                type="text"
                className="form-control search-input"
                placeholder="खोजिए"
                style={{ width: "150px" }} // टैबलेट पर छोटा बॉक्स
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="search-icon-btn" onClick={handleSearch}>
                <i className="fas fa-search"></i>
              </button>
            </div>
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

            {/* मोबाइल सर्च बार (सिर्फ छोटे फोन पर दिखेगा) */}
            <div className="mobile-search-container d-md-none mt-3">
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

          {/* डेस्कटॉप सर्च बार और सोशल लिंक्स */}
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
