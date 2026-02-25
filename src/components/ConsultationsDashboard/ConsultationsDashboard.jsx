import { useEffect, useState } from "react";
import "./ConsultationsDashboard.css";
import { FaSyncAlt, FaClipboardList } from "react-icons/fa";

const API_BASE = "http://localhost:8000";

function formatDate(value) {
  if (!value) return "—";
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

const ConsultationsDashboard = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState({
    state: "idle", // idle | loading | error
    text: "",
  });
  

  const fetchRequests = async () => {
    setStatus({ state: "loading", text: "Loading requests..." });
    try {
      const res = await fetch(`${API_BASE}/api/consultations?limit=50`);
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to load requests.");
      }

      setItems(Array.isArray(data.data) ? data.data : []);
      setStatus({ state: "idle", text: "" });
    } catch (err) {
      setStatus({ state: "error", text: err.message || "Failed to load requests." });
    }
  };

  useEffect(() => {
    fetchRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="requests" id="requests" aria-label="Consultation requests dashboard">
      <div className="requests-container">
        {/* Label */}
        <div className="requests-label">
          <span className="requests-dot" />
          <span className="requests-label-text">REQUESTS DASHBOARD (DEMO)</span>
        </div>

        {/* Title */}
        <div className="requests-header">
          <div>
            <h2 className="requests-title">
              <FaClipboardList className="requests-title-icon" />
              Consultation Requests
            </h2>
            <p className="requests-subtitle">
              This view retrieves stored consultation requests from the backend (GET{" "}
              <code>/api/consultations</code>) to demonstrate dynamic data exchange.
            </p>
          </div>

          <button
            className="requests-refresh"
            onClick={fetchRequests}
            disabled={status.state === "loading"}
            type="button"
          >
            <FaSyncAlt className="requests-refresh-icon" />
            {status.state === "loading" ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* Content card */}
        <div className="requests-card">
          {status.state === "error" && (
            <div className="requests-status error">
              <strong>⚠️ Error:</strong> {status.text}
            </div>
          )}

          {status.state === "loading" && (
            <div className="requests-status loading">Loading requests...</div>
          )}

          {status.state !== "loading" && items.length === 0 && status.state !== "error" && (
            <div className="requests-empty">
              No consultation requests yet. Submit one above, then click “Refresh”.
            </div>
          )}

          {items.length > 0 && (
            <div className="requests-table-wrap">
              <table className="requests-table">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Preferred Time</th>
                    <th>Budget</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((r) => (
                    <tr key={r.id}>
                      <td className="mono">{r.id || "—"}</td>
                      <td>{r.fullName || "—"}</td>
                      <td>{r.serviceType || "—"}</td>
                      <td>{formatDate(r.preferredDate)}</td>
                      <td>{r.budgetRange || "Not specified"}</td>
                      <td>{formatDate(r.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="requests-footnote">
                Note: This dashboard is for demonstration purposes in the course project (prototype admin view).
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultationsDashboard;
