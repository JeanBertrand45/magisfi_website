import React from "react";
import "./LocationMap.css";
import { FaMapMarkedAlt } from "react-icons/fa";


const LocationMap = () => {

    const mapsLink =
        "https://www.google.com/maps?q=Norrsken%20House%20Kigali&z=15&output=embed";


    return (
        <section className="location-map" aria-label="Location map">
            <div className="location-map-container">
                {/* Label */}
                <div className="location-map-label">
                    <span className="location-map-dot" />
                    <span className="location-map-label-text">OUR LOCATION</span>
                </div>

                {/* Title */}
                <h2 className="location-map-title">Visit Our Office in Kigali</h2>

                {/* Supporting text + directions link */}
                <div className="location-map-meta">
                    <p className="location-map-subtitle">
                        Find us at <strong>1 KN 78 St, Kigali, Norrsken House</strong>. We’re happy to welcome you.
                    </p>

                    <a
                        className="location-map-directions"
                        href={mapsLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaMapMarkedAlt className="location-map-icon" />
                        Get Directions
                    </a>
                </div>

                {/* Map Card */}
                <div className="location-map-card">
                    <iframe
                        title="Magis Fi Office Location"
                        className="location-map-iframe"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=Norrsken%20House%20Kigali&z=15&output=embed"

                    />
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
