import React, { useState } from "react";
import "./Contact.css";

// Left card icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Social icons (X + Instagram + LinkedIn)
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

// Button icon
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    // Backend URL (change after deploy)
    const API_BASE_URL = "http://localhost:8000";

    // Controlled inputs
    const [form, setForm] = useState({
        fullName: "",
        email: "", 
        phone: "",
        company: "",
        message: "",
    });

    // UI states
    const [isSending, setIsSending] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // Handle typing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Send to backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous banners
        setSuccessMsg("");
        setErrorMsg("");

        // Quick front-end validation (matches backend requirement)
        if (
            !form.fullName.trim() ||
            !form.email.trim() ||
            !form.phone.trim() ||
            !form.message.trim()
        ) {
            setErrorMsg("Please fill in Full Name, Email Address, Phone Number, and Message.");
            return;
        }

        setIsSending(true);

        try {
            const res = await fetch(`${API_BASE_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form), // send all fields (backend can ignore what it doesn't use)
            });

            // Your backend returns: { ok: false, error: "..." } on errors
            const data = await res.json().catch(() => ({}));

            if (!res.ok || data?.ok === false) {
                throw new Error(data?.error || "Failed to send message. Try again.");
            }

            // Success UI
            setSuccessMsg("Message sent successfully! We'll get back to you soon.");

            // Reset form
            setForm({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });
        } catch (err) {
            setErrorMsg(err?.message || "Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                {/* Label row */}
                <div className="contact-label">
                    <span className="contact-dot" />
                    <span className="contact-label-text">GET IN TOUCH</span>
                </div>

                {/* Title */}
                <h2 className="contact-title">Let&apos;s Discuss Your Digital Needs</h2>

                {/* Two-column layout */}
                <div className="contact-grid">
                    {/* LEFT: Contact info card */}
                    <div className="contact-card">
                        <div className="contact-card-head">
                            <h3 className="contact-card-title">Contact Information</h3>
                            <p className="contact-card-subtitle">
                                Say something to start a live chat!
                            </p>
                        </div>

                        <div className="contact-card-list">
                            <div className="contact-card-item">
                                <FaPhoneAlt className="contact-card-icon" />
                                <span className="contact-card-text">+250 780 000 000</span>
                            </div>

                            <div className="contact-card-item">
                                <FaEnvelope className="contact-card-icon" />
                                <span className="contact-card-text">info@magisfi.rw</span>
                            </div>

                            <div className="contact-card-item">
                                <FaMapMarkerAlt className="contact-card-icon" />
                                <span className="contact-card-text">
                                    1 KN 78 St, Kigali, Norrsken House
                                </span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="contact-socials">
                            {/* X */}
                            <a className="social-btn" href="#" aria-label="X">
                                <FaXTwitter />
                            </a>

                            {/* Instagram */}
                            <a className="social-btn social-ig" href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            {/* LinkedIn */}
                            <a className="social-btn" href="#" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>

                        {/* Decorative circles */}
                        <span className="contact-deco contact-deco-1" aria-hidden="true" />
                        <span className="contact-deco contact-deco-2" aria-hidden="true" />
                    </div>

                    {/* RIGHT: Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Success/Error messages */}
                        {successMsg && (
                            <div
                                style={{
                                    marginBottom: 8,
                                    fontSize: 12,
                                    color: "#1db954",
                                    fontWeight: 600,
                                }}
                            >
                                {successMsg}
                            </div>
                        )}

                        {errorMsg && (
                            <div
                                style={{
                                    marginBottom: 8,
                                    fontSize: 12,
                                    color: "#E53E3E",
                                    fontWeight: 600,
                                }}
                            >
                                {errorMsg}
                            </div>
                        )}

                        {/* Full name (required) */}
                        <div className="field">
                            <label className="field-label" htmlFor="fullName">
                                Full Name <span className="req">*</span>
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                className="field-input"
                                type="text"
                                value={form.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email (required) */}
                        <div className="field">
                            <label className="field-label" htmlFor="email">
                                Email Address <span className="req">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                className="field-input"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Phone (required) */}
                        <div className="field">
                            <label className="field-label" htmlFor="phone">
                                Phone Number <span className="req">*</span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                className="field-input"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Company (optional) */}
                        <div className="field">
                            <label className="field-label" htmlFor="company">
                                Company Name
                            </label>
                            <input
                                id="company"
                                name="company"
                                className="field-input"
                                type="text"
                                value={form.company}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Message (required) */}
                        <div className="field">
                            <label className="field-label" htmlFor="message">
                                Message <span className="req">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="field-input field-textarea"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="contact-submit" disabled={isSending}>
                            {isSending ? "Sending..." : "Send Message"}
                            <FaPaperPlane className="contact-submit-icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
