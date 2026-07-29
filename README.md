# 💳 MeshPay
<img width="1518" height="724" alt="image" src="https://github.com/user-attachments/assets/1808691e-9f22-47f8-ae7d-f5daa4a2f0e6" />


### Secure Peer-to-Peer Payment Platform

MeshPay is a **production-ready MERN Stack** digital wallet application that enables secure peer-to-peer money transfers through **JWT-based authentication**, **RESTful APIs**, and **MongoDB Atlas**. The application is deployed on the cloud using **Vercel** and **Render**, demonstrating modern full-stack development and deployment practices.

<p align="center">
  <img src="screenshots/dashboard.png" width="90%">
</p>

---

## 🚀 Live Demo

🌐 **Frontend:** https://mesh-pay-six.vercel.app/

⚙️ **Backend:** https://meshpay-hff9.onrender.com

📂 **GitHub:** https://github.com/ankitnish/MeshPay

---

## ✨ Features

- 🔐 JWT Authentication & Authorization
- 🔒 Secure Password Hashing using bcrypt
- 💸 Peer-to-Peer Money Transfer
- 💰 Wallet Balance Management
- 📜 Transaction History
- 📊 Dashboard Analytics
- 🛡 Protected Routes
- 📱 Responsive User Interface
- ☁️ Cloud Deployment
- 🗄 MongoDB Atlas Integration

---

# 🏗 System Architecture

```
                   React.js Frontend
                         │
                     Axios Client
                         │
                         ▼
                Express.js REST API
                         │
          JWT Authentication Middleware
                         │
                         ▼
                 MongoDB Atlas Database
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend

- Node.js
- Express.js
- JWT
- bcrypt
- RESTful APIs

## Database

- MongoDB Atlas
- Mongoose

## Deployment

- Vercel
- Render

---

# 📂 Folder Structure

```
MeshPay
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── utils
│
└── README.md
```

---

# 📡 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/payment/send` | Send Money |
| GET | `/api/payment/history/:userId` | Transaction History |

---

# ⚙ Environment Variables

### Backend

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET
CLIENT_URL=http://localhost:5173
```

### Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 💻 Local Installation

Clone the repository

```bash
git clone https://github.com/ankitnish/MeshPay
```

Install backend dependencies

```bash
cd server
npm install
npm run dev
```

Install frontend dependencies

```bash
cd client
npm install
npm run dev
```

---

# ⚡ Challenges

- Designed secure JWT authentication and authorization.
- Implemented protected API routes with middleware.
- Managed production deployment across Vercel and Render.
- Configured MongoDB Atlas connectivity and environment variables.
- Resolved production CORS and API integration issues.

---

# 📚 Key Learnings

- REST API Design
- JWT Authentication
- Express Middleware
- MongoDB Data Modeling
- Cloud Deployment
- Production Debugging
- Git & GitHub Workflow

---

# 🚀 Future Enhancements

- QR Code Payments
- Offline Transactions
- Push Notifications
- Payment Requests
- Email Verification
- Password Reset
- Transaction Search & Filters
- Admin Dashboard

---

# 👨‍💻 Author

**Ankit Nishad**

📧 ankitn575@gmail.com

💼 LinkedIn: https://www.linkedin.com/in/ankit-nishad-053296225/

🐙 GitHub: https://github.com/ankitnish

---

# ⭐ Show your support

If you found this project useful, please consider giving it a ⭐ on GitHub.
