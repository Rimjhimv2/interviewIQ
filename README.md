# InterviewIQ.AI

> AI-powered mock interview platform that simulates real interview experiences, generates role-specific questions, evaluates candidate responses, and provides actionable performance insights.

---

## 🚀 Live Demo

- **Live Application:** https://your-live-link.vercel.app
- **GitHub Repository:** https://github.com/Rimjhimv2/InterviewIQ.AI

---

## 🚀 Overview

**InterviewIQ.AI** is a full-stack AI-powered interview preparation platform designed to help candidates practice realistic technical and HR interviews.

Users can upload their resume, select their target role, experience level, and interview mode, and receive AI-generated interview questions tailored to their profile. Each response is evaluated using multiple performance metrics, followed by a detailed interview report.

The platform also includes a credit-based system with Razorpay integration for purchasing additional interview credits.

---

## 💡 Why I Built InterviewIQ.AI

Interview preparation is often limited to static question banks and lacks personalized, actionable feedback. I wanted to build something that could simulate a real interview while adapting to a candidate's resume, target role, and experience level.

This led me to build **InterviewIQ.AI** — a platform where candidates can practice HR and technical interviews, receive AI-generated questions, get their answers evaluated, and track their performance over time.

Beyond solving this problem, this project gave me hands-on experience in building a production-oriented SaaS application involving **AI integration, resume parsing, secure authentication, database management, payment processing, credit-based monetization, and cloud deployment**.

---

## ✨ Features

- 🤖 **AI-Powered Interviews** — Generate personalized interview questions using AI.
- 📄 **Resume Analysis** — Upload a PDF resume and extract relevant candidate information.
- 💼 **Role-Based Questions** — Generate questions according to the candidate's role and experience.
- 🎯 **HR & Technical Modes** — Practice both behavioral and technical interviews.
- ⏱️ **Timed Questions** — Practice interviews with question-specific time limits.
- 🧠 **AI Answer Evaluation** — Evaluate responses based on:
  - Confidence
  - Communication
  - Correctness
- 📊 **Performance Reports** — Get question-wise scores, feedback, and overall performance.
- 📚 **Interview History** — Access previous interviews and reports.
- 💳 **Credit-Based System** — AI interview sessions consume credits.
- 💰 **Razorpay Integration** — Purchase additional interview credits securely.
- 🔐 **Authentication** — Secure authentication using JWT and HTTP-only cookies.
- 📱 **Responsive UI** — Optimized for different screen sizes.
- 📄 **Report Export** — Generate downloadable interview reports.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Framer Motion
- Recharts
- Firebase Authentication
- jsPDF

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- PDF.js

### AI & Payments

- OpenRouter API
- GPT-4o-mini
- Razorpay

### Deployment

- Vercel
- Render
- MongoDB Atlas

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │      React UI       │
                    │   Vite + Tailwind   │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │    Express Server   │
                    │      Node.js        │
                    └───────┬─────┬───────┘
                            │     │
                ┌───────────┘     └────────────┐
                ▼                              ▼
       ┌─────────────────┐            ┌─────────────────┐
       │    MongoDB      │            │  OpenRouter AI  │
       │    Database     │            │   GPT-4o-mini   │
       └─────────────────┘            └─────────────────┘
                │
                │
                ▼
       ┌─────────────────┐
       │    Razorpay     │
       │    Payments     │
       └─────────────────┘


📦 Installation

Prerequisites
Make sure you have the following installed:
Node.js (v18 or higher recommended)
npm
MongoDB or a MongoDB Atlas cluster
Git
1. Clone the Repository
git clone https://github.com/Rimjhimv2/InterviewIQ.AI.git

cd InterviewIQ.AI

2. Install Server Dependencies
cd server
npm install

3. Install Client Dependencies
cd ../client
npm install

4. Configure Environment Variables
Create a .env file inside the server folder:

PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
Create a .env file inside the client folder:
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

🔑 Never commit your .env files or expose API keys and secret credentials publicly.

5. Get API Keys

MongoDB Atlas: https://cloud.mongodb.com
OpenRouter: https://openrouter.ai
Razorpay: https://dashboard.razorpay.com
Firebase: https://console.firebase.google.com

6. Run the Application
Open two terminals.
Terminal 1 — Backend
cd server
npm run dev
Terminal 2 — Frontend
cd client
npm run dev

7. Open the Application
Frontend → http://localhost:5173
Backend  → http://localhost:8000
📁 Project Structure

InterviewIQ.AI/
├── client/
│   ├── src/
│   ├── public/
│   └── .env
│
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middlewares/
    ├── services/
    ├── config/
    └── .env

🌐 Deployment
The application is deployed using:
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas

🤝 Contributing

Contributions, issues, and feature requests are welcome.
Feel free to fork the repository and submit a pull request.
🔗 Connect With Me
Rimjhim Verma
💻 GitHub: https://github.com/Rimjhimv2
