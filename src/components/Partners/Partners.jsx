import React from "react";
import "./Partners.css";

// Partner logos imported from src/assets
import partnerInyange from "../../assets/partnerInyange.png";
import partnerMahwi from "../../assets/partnerMahwi.png";
import partnerSonarwa from "../../assets/partnerSonarwa.jpeg";



const Partners = () => {
    return (
        <section className="partners">
            <div className="partners-container">
                {/* Section title */}
                <h3 className="partners-title">We’ve partnered with:</h3>

                {/* Logos row */}
                <div className="partners-logos">
                    <img
                        src={partnerInyange}
                        alt="Inyange Industries"
                        className="partner-logo"
                    />

                    <img
                        src={partnerSonarwa}
                        alt="Sonarwa Life"
                        className="partner-logo"
                    />

                    <img
                        src={partnerMahwi}
                        alt="Mahwi Grain Millers"
                        className="partner-logo"
                    />
                </div>
            </div>
        </section>
    );
};

export default Partners;
