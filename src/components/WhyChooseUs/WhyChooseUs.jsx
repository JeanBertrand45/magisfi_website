import React from "react";
import "./WhyChooseUs.css";

// Icons in green (no circles)
import {
    FaGlobeAfrica,
    FaLayerGroup,
    FaChartLine,
    FaHandshake,
} from "react-icons/fa";

/**
 * WhyChooseUs section
 * - Outer gradient frame with subtle gray border
 * - Inner white panel contains ONLY 2 notes
 * - Right side has 2 notes aligned with left panel rows (top aligns with top, bottom aligns with bottom)
 * - Icons are plain green (no circle)
 */
const WhyChooseUs = () => {
    return (
        <section className="why" id="why-choose-us">
            <div className="why-container">
                {/* Label row with green dot + all caps */}
                <div className="why-label">
                    <span className="why-dot" />
                    <span className="why-label-text">WHY PARTNER WITH MAGIS FI?</span>
                </div>

                {/* Supporting headline */}
                <h2 className="why-title">
                    Here’s how we deliver measurable <br />
                    results for Rwandan businesses.
                </h2>

                {/* Big frame with subtle gray border */}
                <div className="why-frame">
                    {/* LEFT SIDE: Inner white panel with 2 notes */}
                    <div className="why-inner-panel">
                        <div className="why-item">
                            <FaGlobeAfrica className="why-icon" />
                            <div className="why-text">
                                <h3 className="why-item-title">
                                    Local Expertise, Global Standards
                                </h3>
                                <p className="why-item-desc">
                                    We understand the Rwandan market intimately while delivering
                                    world-class digital solutions from our office in Kigali.
                                </p>
                            </div>
                        </div>

                        <div className="why-item">
                            <FaLayerGroup className="why-icon" />
                            <div className="why-text">
                                <h3 className="why-item-title">The Complete Solution</h3>
                                <p className="why-item-desc">
                                    From sales force management to accounting, HR, and insurance—get
                                    all your digital tools from one reliable partner.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: aligned rows (top note lines up with top-left, bottom note lines up with bottom-left) */}
                    <div className="why-right-notes">
                        <div className="why-right-top">
                            <div className="why-item">
                                <FaChartLine className="why-icon" />
                                <div className="why-text">
                                    <h3 className="why-item-title">Driven by Your Sales Growth</h3>
                                    <p className="why-item-desc">
                                        Every solution we provide is designed with one clear goal: to
                                        directly increase your sales volume and business efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="why-right-bottom">
                            <div className="why-item">
                                <FaHandshake className="why-icon" />
                                <div className="why-text">
                                    <h3 className="why-item-title">Dedicated Partnership</h3>
                                    <p className="why-item-desc">
                                        We assign a dedicated team to understand your business, ensuring
                                        our solutions deliver tangible, long-term results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
