import React from "react";
import "./CTA.css";
import { FaPaperPlane } from "react-icons/fa";

const CTA = () => {
    return (
        <section className="cta" aria-label="Call to action">
            <div className="cta-container">
                <h2 className="cta-title">Ready to Transform Your Business?</h2>

                <p className="cta-subtitle">
                    Join Rwanda&apos;s leading businesses and start your digital transformation journey today.
                </p>

                {/* Button links to contact section (you'll add it later) */}
                <a href="#consultation" className="cta-btn">
                    Book Consultation <FaPaperPlane className="cta-btn-icon" />
                </a>
            </div>
        </section>
    );
};

export default CTA;
