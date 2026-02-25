import React from "react";
import "./Industries.css";

import industriesManufacturing from "../../assets/industriesManufacturing.jpg";
import industriesServiceDelivery from "../../assets/industriesServiceDelivery.jpg";
import industriesTrading from "../../assets/industriesTrading.jpg";
import industriesInsurance from "../../assets/industriesInsurance.jpg";

/**
 * Industries section (Template-aligned)
 * - 4-row grid: each row aligns to its number (1-4)
 * - Each row: left side OR right side content (opposite side stays empty)
 * - Divider is a visible gray line with bottom fade
 */
const Industries = () => {
    return (
        <section className="industries" id="industries">
            <div className="industries-container">
                {/* Label row */}
                <div className="industries-label">
                    <span className="industries-dot" />
                    <span className="industries-label-text">INDUSTRIES WE EMPOWER</span>
                </div>

                {/* Title */}
                <h2 className="industries-title">
                    We tailor our digital solutions to meet the unique challenges of key
                    sectors in Rwanda.
                </h2>

                {/* 4 ROWS: each row matches a number icon */}
                <div className="industries-rows">
                    {/* ROW 1: Service Delivery Operators (LEFT) */}
                    <div className="industries-row">
                        <div className="industries-cell industries-left">
                            <div className="industry-split">
                                <img
                                    src={industriesServiceDelivery}
                                    alt="Service Delivery Operators"
                                    className="industry-image"
                                />
                                <div className="industry-text">
                                    <h3 className="industry-name">Service Delivery Operators</h3>
                                    <p className="industry-desc">
                                        Enhance customer engagement, service scheduling, and field team
                                        coordination.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="industries-cell industries-divider">
                            <span className="divider-badge">1</span>
                            <span className="divider-line" />
                        </div>

                        <div className="industries-cell industries-right" />
                    </div>

                    {/* ROW 2: Manufacturing Companies (RIGHT) */}
                    <div className="industries-row">
                        <div className="industries-cell industries-left" />

                        <div className="industries-cell industries-divider">
                            <span className="divider-badge">2</span>
                            <span className="divider-line" />
                        </div>

                        <div className="industries-cell industries-right">
                            <div className="industry-split industry-split-reverse">
                                <div className="industry-text">
                                    <h3 className="industry-name">Manufacturing Companies</h3>
                                    <p className="industry-desc">
                                        Optimize production, supply chain logistics, and sales force
                                        management from a single dashboard.
                                    </p>
                                </div>
                                <img
                                    src={industriesManufacturing}
                                    alt="Manufacturing Companies"
                                    className="industry-image"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ROW 3: Insurance Providers (LEFT) */}
                    <div className="industries-row">
                        <div className="industries-cell industries-left">
                            <div className="industry-split">
                                <img
                                    src={industriesInsurance}
                                    alt="Insurance Providers"
                                    className="industry-image"
                                />
                                <div className="industry-text">
                                    <h3 className="industry-name">Insurance Providers</h3>
                                    <p className="industry-desc">
                                        Digitize policy management, claims processing, and agent
                                        performance tracking.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="industries-cell industries-divider">
                            <span className="divider-badge">3</span>
                            <span className="divider-line" />
                        </div>

                        <div className="industries-cell industries-right" />
                    </div>

                    {/* ROW 4: Trading Companies (RIGHT) */}
                    <div className="industries-row">
                        <div className="industries-cell industries-left" />

                        <div className="industries-cell industries-divider industries-divider-last">
                            <span className="divider-badge">4</span>
                            <span className="divider-line divider-line-fade" />
                        </div>

                        <div className="industries-cell industries-right">
                            <div className="industry-split industry-split-reverse">
                                <div className="industry-text">
                                    <h3 className="industry-name">Trading Companies</h3>
                                    <p className="industry-desc">
                                        Manage inventory, distributor networks, and real-time sales data
                                        to boost market agility.
                                    </p>
                                </div>
                                <img
                                    src={industriesTrading}
                                    alt="Trading Companies"
                                    className="industry-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
