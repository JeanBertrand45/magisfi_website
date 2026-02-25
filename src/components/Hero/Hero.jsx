import React from "react";
import "./Hero.css";
import heroImageKigaliCity2 from "../../assets/heroImageKigaliCity2.jpeg";

/**
 * Hero with:
 * - Full background image
 * - Bottom black gradient for readability
 * - Text centered horizontally and positioned lower
 */
const Hero = () => {
    return (
        <section
            id="home"
            className="hero-full"
            style={{ backgroundImage: `url(${heroImageKigaliCity2})` }}
        >
            {/* Bottom gradient overlay */}
            <div className="hero-gradient" />

            {/* Hero content (lower center) */}
            <div className="hero-content hero-content-bottom">
                <h1 className="hero-title-full">
                    Scale Your Business with Expert Digital Solutions
                </h1>

                <p className="hero-subtitle-full">
                    Your local partner in Kigali for marketing, sales, finance, and HR
                    management.
                </p>

                <div className="hero-buttons-full">
                    <a href="#services" className="hero-btn-full hero-btn-primary-full">
                        Our Services
                    </a>

                    <a href="#contact" className="hero-btn-full hero-btn-secondary-full">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
