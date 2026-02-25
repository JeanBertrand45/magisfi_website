import { useMemo, useState } from "react";
import "./Consultation.css";
import { FaRegCalendarCheck } from "react-icons/fa";


const API_BASE = "http://localhost:8000";

const Consultation = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Marketing",
    preferredDate: "",
    budgetRange: "",
    message: "",
  });

  const [status, setStatus] = useState({
    state: "idle", // idle | loading | success | error
    text: "",
    ref: "",
  });

  // Nice formatted date for summary panel
  const preferredDateLabel = useMemo(() => {
    if (!form.preferredDate) return "Not selected";
    try {
      return new Date(form.preferredDate).toLocaleString();
    } catch {
      return form.preferredDate;
    }
  }, [form.preferredDate]);

  const isReady =
    form.fullName.trim() &&
    form.email.trim() &&
    form.serviceType.trim() &&
    form.preferredDate.trim() &&
    form.message.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ state: "loading", text: "Submitting your booking request...", ref: "" });

    try {
      const res = await fetch(`${API_BASE}/api/consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus({
        state: "success",
        text: "Booking received. We will contact you to confirm the consultation time.",
        ref: data.referenceId || "",
      });

      // Reset form after success
      setForm({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "Marketing",
        preferredDate: "",
        budgetRange: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        state: "error",
        text: err.message || "Failed to submit booking request.",
        ref: "",
      });
    }
  };

  return (
    <section className="consultation" id="consultation" aria-label="Consultation booking">
      <div className="consultation-container">
        {/* Label */}
        <div className="consultation-label">
          <span className="consultation-dot" />
          <span className="consultation-label-text">BOOK A CONSULTATION</span>
        </div>

        {/* Title */}
        <h2 className="consultation-title">Request a Service Consultation</h2>

      

        {/* Steps row (makes it look like a process, not a regular contact form) */}
        <div className="consultation-steps">
          <span className="step-pill">1. Select Service</span>
          <span className="step-sep">→</span>
          <span className="step-pill">2. Pick Time</span>
          <span className="step-sep">→</span>
          <span className="step-pill">3. Receive Reference ID</span>
        </div>

        {/* Main 2-column layout */}
        <div className="consultation-layout">
          {/* Left: Form Card */}
          <div className="consultation-card">
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="consultation-grid">
                <div className="field">
                  <label>Full Name *</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="field">
                  <label>Phone (optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+250 ..."
                  />
                </div>

                <div className="field">
                  <label>Service Type *</label>
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                    <option value="Digital Strategy">Digital Strategy</option>
                  </select>
                </div>

                <div className="field">
                  <label>Preferred Date *</label>
                  <input
                    type="datetime-local"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Budget Range (optional)</label>
                  <select name="budgetRange" value={form.budgetRange} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    <option value="Under $200">Under $200</option>
                    <option value="$200–$500">$200–$500</option>
                    <option value="$500–$1,000">$500–$1,000</option>
                    <option value="Above $1,000">Above $1,000</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe what you need..."
                  rows={5}
                  required
                />
              </div>

              <div className="consultation-actions">
                <button
                  className="consultation-btn"
                  type="submit"
                  disabled={status.state === "loading"}
                >
                  <FaRegCalendarCheck className="consultation-btn-icon" />
                  {status.state === "loading" ? "Booking..." : "Book Consultation"}
                </button>

                <p className="consultation-note">
                  Expected response time: within 24 hours (Mon–Fri, 9:00–18:00).
                </p>

                {status.state !== "idle" && (
                  <div className={`consultation-status ${status.state}`}>
                    <p className="status-title">
                      {status.state === "success" ? "✅ Booking Submitted" : "⚠️ Submission Failed"}
                    </p>
                    <p>{status.text}</p>
                    {status.ref && (
                      <p>
                        Reference ID: <strong>{status.ref}</strong>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right: Summary Card (live updates) */}
          <aside className="consultation-summary" aria-label="Request summary">
            <h3 className="summary-title">Your Request Summary</h3>

            <div className="summary-row">
              <span className="summary-label">Service</span>
              <span className="summary-value">{form.serviceType || "—"}</span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Preferred time</span>
              <span className="summary-value">{preferredDateLabel}</span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Budget</span>
              <span className="summary-value">{form.budgetRange || "Not specified"}</span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Name</span>
              <span className="summary-value">{form.fullName || "—"}</span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Email</span>
              <span className="summary-value">{form.email || "—"}</span>
            </div>

            <div className="summary-divider" />

            <div className={`summary-ready ${isReady ? "ok" : ""}`}>
              {isReady ? "Ready to submit ✅" : "Fill required fields to submit"}
            </div>

            <p className="summary-help">
              After submission, you will receive a reference ID that you can use for follow-up.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
