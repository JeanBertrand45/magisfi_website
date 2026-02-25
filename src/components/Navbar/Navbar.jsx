import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import magisLogo from "../../assets/magisLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu after clicking a link (helps on mobile)
  const closeMenu = () => setIsOpen(false);

  /**
   * Scroll to a section by id and then close the mobile menu.
   * - Uses the same anchor ids you already have (#home, #services, #contact, etc.)
   * - Prevents layout issues because we aren't changing markup structure
   */
  const handleScroll = (id) => (e) => {
    e.preventDefault(); // stop default anchor jump
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LEFT: Logo (clicking it goes to home) */}
        <div className="navbar-logo">
          <a href="#home" onClick={handleScroll("home")} aria-label="Go to Home">
            <img
              src={magisLogo}
              alt="Magis Logo"
              className="navbar-logo-img"
            />
          </a>
        </div>

        {/* MOBILE ONLY: Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop: row layout | Mobile: full screen menu when active */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {/* CENTER: Nav links */}
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={handleScroll("home")}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#services"
                className="nav-link"
                onClick={handleScroll("services")}
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#industries"
                className="nav-link"
                onClick={handleScroll("industries")}
              >
                Industries
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={handleScroll("about")}
              >
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#testimonials"
                className="nav-link"
                onClick={handleScroll("testimonials")}
              >
                Testimonials
              </a>
            </li>
          </ul>

          {/* RIGHT: Button (scrolls to contact) */}
          <div className="nav-btn-container">
            <button
              type="button"
              className="get-touch-btn"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
