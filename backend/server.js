
// Magis Fi backend (Express):

// - Dynamic #1: Consultations -> save + read bookings (JSON file)
// - Dynamic #2: Contact form -> sends email (Nodemailer)
// - Dynamic 3: Testimonials -> backend filtering (JSON file)

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const app = express();

/* -----------------------------
   Middleware
--------------------------------*/

// Allow requests from your React dev server
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
  })
);

// Parse JSON request bodies
app.use(express.json());



/* -----------------------------
   Paths / Files (JSON storage)
--------------------------------*/

// ES Modules don't have __dirname by default, so we create it

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, "data");
const CONSULTATIONS_FILE = path.join(DATA_DIR, "consultations.json");
const TESTIMONIALS_FILE = path.join(DATA_DIR, "testimonials.json");



/* -----------------------------
   Small helpers for JSON files
--------------------------------*/

// Ensure folder + a JSON file exists (create with default content if missing)
function ensureJsonFile(filePath, defaultContent = "[]") {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, defaultContent, "utf-8");
}

// Read JSON safely (returns fallback if file is missing or corrupted)
function readJson(filePath, fallback = []) {
  try {
    ensureJsonFile(filePath, JSON.stringify(fallback));
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    // If corrupted, reset and return fallback
    fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2), "utf-8");
    return fallback;
  }
}

// Write JSON nicely formatted
function writeJson(filePath, data) {
  ensureJsonFile(filePath, "[]");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Basic email validator (simple + effective)
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* -----------------------------
   Routes
--------------------------------*/

// Health check (quick test that backend is running)
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend is running" });
});



/* -----------------------------
   Dynamic #1: Consultations (POST + GET)
--------------------------------*/

// Create a new consultation booking (stores in consultations.json)
app.post("/api/consultations", (req, res) => {
  const { fullName, email, phone, serviceType, preferredDate, budgetRange, message } = req.body;

  // Validate required fields
  if (!fullName || !email || !serviceType || !preferredDate || !message) {
    return res.status(400).json({
      ok: false,
      error: "Full Name, Email, Service Type, Preferred Date, and Message are required.",
    });
  }

  // Validate email
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email address." });
  }

  // Read existing bookings
  const consultations = readJson(CONSULTATIONS_FILE, []);

  // Create new booking object
  const newRequest = {
    id: uuidv4().slice(0, 8).toUpperCase(), // short reference ID
    fullName,
    email,
    phone: phone || "",
    serviceType,
    preferredDate,
    budgetRange: budgetRange || "",
    message,
    createdAt: new Date().toISOString(),
  };

  // Save newest first
  consultations.unshift(newRequest);
  writeJson(CONSULTATIONS_FILE, consultations);

  return res.json({
    ok: true,
    message: "Consultation request submitted successfully.",
    referenceId: newRequest.id,
  });
});

// Fetch stored bookings (used by demo/admin dashboard)
app.get("/api/consultations", (req, res) => {
  const consultations = readJson(CONSULTATIONS_FILE, []);

  // Optional limit (default 50, max 200)
  const limit = Math.min(parseInt(req.query.limit || "50", 10), 200);

  res.json({ ok: true, data: consultations.slice(0, limit) });
});

/* -----------------------------
   Dynamic #2: Contact form (Email)
--------------------------------*/

// Receives message and sends it to MAIL_TO
app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({
        ok: false,
        error: "Full Name, Email, Phone Number, and Message are required.",
      });
    }

    // Validate email
    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email address." });
    }

    // Setup email transporter (Gmail App Password recommended)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Magis Fi Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New message from ${fullName}`,
      text: `Full Name: ${fullName}
Email: ${email}
Phone: ${phone}

Message:
${message}`,
    });

    return res.json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error: "Failed to send message." });
  }
});



/* -----------------------------
   Dynamic 3: Testimonials (backend filtering)
--------------------------------*/

// Example: /api/testimonials?company=Inyange%20Industries
app.get("/api/testimonials", (req, res) => {
  try {
    const all = readJson(TESTIMONIALS_FILE, []);

    // company can be: "all" or exact company name
    const company = (req.query.company || "all").toString().trim().toLowerCase();

    const filtered =
      company === "all"
        ? all
        : all.filter((t) => (t.company || "").toLowerCase() === company);

    return res.json({ ok: true, data: filtered });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Failed to load testimonials." });
  }
});

/* -----------------------------
   Start server
--------------------------------*/

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});