# Magis Fi Web Application

A full-stack web application developed for the **Project: Java and Web Development** course.

This project combines a **React frontend** with a **Node.js/Express backend**, featuring REST API integration and practical functionalities for a financial services website.

---

## 🚀 Features

- 💬 **Testimonials System**  
  Server-side filtering for dynamic testimonial display  

- 📅 **Consultation Booking**  
  Persistent data storage for scheduled consultations  

- 📧 **Contact Form**  
  Email integration using Nodemailer  

- 📱 **Responsive Design**  
  Optimized for both mobile and desktop devices  

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|------------|---------------------|
| Frontend   | React               |
| Backend    | Node.js, Express    |
| Data       | JSON file storage   |
| Email      | Nodemailer          |

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/JeanBertrand45/magisfi_website.git
cd magisfi_website
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Run the Application

Open **two separate terminals**:

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
npm run dev
```

**Terminal 2 - Start Frontend Application:**
```bash
npm start
npm run dev
```

The React app will open at `http://localhost:5173` and the backend will run at `http://localhost:8000`.

---

## 📂 Project Structure

```
magisfi_website/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── data/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   └── assets/
├── public/
├── package.json
└── README.md
```

