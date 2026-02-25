import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/magisLogo.png"; // ✅ change if your logo file name differs

/**
 * Footer
 * - Black background, white text
 * - Hover on links turns green
 * - Anchor links scroll to sections using ids (#home, #services, #industries, #about, #testimonials, #contact)
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* LEFT: Logo + short text */}
                <div className="footer-brand">
                    <img className="footer-logo" src={footerLogo} alt="Magis Fi" />
                    <p className="footer-tagline">Your trusted digital solutions partner in Kigali.</p>
                </div>

                {/* MIDDLE: Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-title">Quick Links</h4>

                    {/* Using anchor links so it jumps/scrolls to sections */}
                    <a className="footer-link" href="#home">Home</a>
                    <a className="footer-link" href="#services">Services</a>
                    <a className="footer-link" href="#industries">Industries</a>
                    <a className="footer-link" href="#about">About Us</a>
                    <a className="footer-link" href="#testimonials">Testimonials</a>
                </div>

                {/* RIGHT-MIDDLE: Services list */}
                <div className="footer-col">
                    <h4 className="footer-title">Services</h4>
                    <p className="footer-text">Marketing &amp; Sales</p>
                    <p className="footer-text">Accounting &amp; Finance</p>
                    <p className="footer-text">Human Resources</p>
                    <p className="footer-text">Digital Strategy</p>
                </div>

                {/* RIGHT: Contact */}
                <div className="footer-col">
                    <h4 className="footer-title">Contact</h4>
                    <p className="footer-text">1 KN 78 St, Kigali, Norrsken House</p>
                    <p className="footer-text">+250 788 000 000</p>
                    <p className="footer-text">info@magisfi.rw</p>
                </div>
            </div>

            {/* Divider line */}
            <div className="footer-divider" />

            {/* Bottom copyright */}
            <p className="footer-bottom">
                © 2026 Magis Fi. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
