import React from "react";
import "./About.css";

import aboutUsImage from "../../assets/aboutUs.jpg";


// About Section

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                {/* Label row: green dot + text */}
                <div className="about-label">
                    <span className="about-dot" />
                    <span className="about-label-text">ABOUT MAGIS FI</span>
                </div>

                {/* Title */}
                <h2 className="about-title">
                    Magis Fi: The Digital Advantage for <br />
                    Rwandan Business
                </h2>

                {/* Two-column layout */}
                <div className="about-content">
                    {/* LEFT: Image */}
                    <div className="about-image-wrap">
                        <img src={aboutUsImage} alt="About Magis Fi" className="about-image" />
                    </div>

                    {/* RIGHT: Text */}
                    <div className="about-text">
                        <p>
                           Magis Fi is a Kigali-based digital business solutions company dedicated to supporting Rwandan businesses in 
                           achieving sustainable growth and operational excellence. We work with organizations across industries to provide 
                           structured, practical, and technology-driven solutions that enhance performance and improve efficiency.
                        </p>

                        <p>
                           Our expertise spans marketing, sales enablement, financial advisory, and human resource support, allowing us to 
                           deliver integrated services tailored to the unique needs of each client. We focus on clarity, measurable results,
                            and long-term value creation.
                        </p>

                        <p>
                           By combining strong local market understanding with modern digital tools and data-informed strategies, Magis Fi 
                           serves as a trusted partner for businesses seeking smarter, more effective ways to scale and compete in today’s evolving market.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
