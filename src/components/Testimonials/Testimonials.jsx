import { useEffect, useState } from "react";
import "./Testimonials.css";
import { FaStar, FaUserCircle } from "react-icons/fa";

const API_BASE = "http://localhost:8000";

const Testimonials = () => {
  const [company, setCompany] = useState("all");
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState({ state: "idle", text: "" }); // idle | loading | error

  const fetchTestimonials = async (selectedCompany) => {
    setStatus({ state: "loading", text: "Loading testimonials..." });

    try {
      const q =
        selectedCompany === "all"
          ? ""
          : `?company=${encodeURIComponent(selectedCompany)}`;

      const res = await fetch(`${API_BASE}/api/testimonials${q}`);
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to load testimonials.");
      }

      setItems(Array.isArray(data.data) ? data.data : []);
      setStatus({ state: "idle", text: "" });
    } catch (err) {
      setStatus({ state: "error", text: err.message || "Failed to load testimonials." });
    }
  };

  useEffect(() => {
    fetchTestimonials(company);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company]);





  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        {/* Label row */}
        <div className="testimonials-label">
          <span className="testimonials-dot" />
          <span className="testimonials-label-text">TESTIMONIALS</span>
        </div>

        {/* Title */}
        <h2 className="testimonials-title">What Our Clients Say About Us</h2>

        {/*  Backend filter controls */}
        <div className="testimonials-filters">
          <button
            className={`filter-btn ${company === "all" ? "active" : ""}`}
            onClick={() => setCompany("all")}
            type="button"
          >
            All
          </button>

          <button
            className={`filter-btn ${company === "Inyange Industries" ? "active" : ""}`}
            onClick={() => setCompany("Inyange Industries")}
            type="button"
          >
            Inyange Industries
          </button>

          <button
            className={`filter-btn ${company === "SONARWA Life Insurance" ? "active" : ""}`}
            onClick={() => setCompany("SONARWA Life Insurance")}
            type="button"
          >
            SONARWA Life
          </button>

          <button
            className={`filter-btn ${company === "Mahwi Grain Millers" ? "active" : ""}`}
            onClick={() => setCompany("Mahwi Grain Millers")}
            type="button"
          >
            Mahwi Grain Millers
          </button>
        </div>

        {/* Status */}
        {status.state === "error" && (
          <p style={{ color: "#b91c1c", marginTop: 12 }}>{status.text}</p>
        )}

        {/* Cards grid */}
        <div className="testimonials-grid">
          {status.state === "loading" &&
            Array.from({ length: 3 }).map((_, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">Loading...</p>
              </div>
            ))}

          {status.state !== "loading" &&
            items.map((t) => (
              <div className="testimonial-card" key={t.id}>
                {/* Stars */}
                <div className="testimonial-stars" aria-label={`${t.stars} star rating`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>

                {/* Text */}
                <p className="testimonial-text">“{t.text}”</p>

                {/* Footer */}
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">
                    <FaUserCircle />
                  </div>

                  <div className="testimonial-person">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">
                      {t.role} — <span className="testimonial-company">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Empty state */}
        {status.state !== "loading" && items.length === 0 && status.state !== "error" && (
          <p style={{ color: "#64748b", marginTop: 14 }}>
            No testimonials found for this company.
          </p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;