import React from "react";
import "./Services.css";

// Using simple, modern icons (same library you already use)
import { FaBolt, FaCalculator, FaUsers, FaLightbulb } from "react-icons/fa";

/**
 * Services section
 * - Gray background (#F5F5F5)
 * - Green dot + label (OUR SERVICES)
 * - 4 curved service cards with icons
 */
const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services-container">
                {/* Label row (dot + green text) */}
                <div className="services-label">
                    <span className="services-dot" />
                    <span className="services-label-text">OUR SERVICES</span>
                </div>

                {/* Main title */}
                <h2 className="services-title">
                    End-to-end solutions to increase efficiency, drive sales, and power
                    sustainable growth.
                </h2>

                {/* Cards grid */}
                <div className="services-grid">
                    {/* Card 1 */}
                    <div className="service-card">
                        <div className="service-icon">
                            <FaBolt />
                        </div>
                        <h3 className="service-card-title">Marketing &amp; Sales Management</h3>
                        <p className="service-card-desc">
                            Boost revenue with structured sales processes, performance tracking,
                            and targeted marketing support.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="service-card">
                        <div className="service-icon">
                            <FaCalculator />
                        </div>
                        <h3 className="service-card-title">Accounting &amp; Finance Solutions</h3>
                        <p className="service-card-desc">
                            Improve financial visibility with reporting, budgeting tools, and
                            streamlined workflows.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="service-card">
                        <div className="service-icon">
                            <FaUsers />
                        </div>
                        <h3 className="service-card-title">Human Resources Management</h3>
                        <p className="service-card-desc">
                            Simplify payroll, compliance, and team management with practical HR
                            systems and guidance.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="service-card">
                        <div className="service-icon">
                            <FaLightbulb />
                        </div>
                        <h3 className="service-card-title">Digital Business Strategy</h3>
                        <p className="service-card-desc">
                            Plan and execute digital transformation with clear roadmaps and
                            expert support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
