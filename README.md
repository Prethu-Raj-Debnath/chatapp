# ChatApp 💬

A modern, full-stack real-time chat platform built with React, Node.js, Socket.IO, and MongoDB. Features secure JWT authentication, peer-to-peer messaging, and image sharing.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://chatapp-b25x.onrender.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20.x-brightgreen)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-%3E%3D10.x-orange)](https://pnpm.io/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo & Screenshots](#-demo--screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Author](#-author)

---

## ✨ Features

- 🔐 **Secure Authentication** — Signup/login with JWT cookie-based tokens
- ⚡ **Real-Time Messaging** — Instant peer-to-peer chat powered by Socket.IO
- 🖼️ **Image Sharing** — Send images in chat via Cloudinary integration
- 🛡️ **Rate Limiting & Bot Protection** — Powered by Arcjet
- 📧 **Email Notifications** — Transactional emails via Resend
- 📱 **Responsive Design** — Mobile-first UI that works on all screen sizes
- 👤 **Profile Management** — Update your avatar and profile info

---

## 🎬 Demo & Screenshots

**🌐 Live Application**: [https://chatapp-b25x.onrender.com/](https://chatapp-b25x.onrender.com/)

<details>
<summary>📸 Click to view screenshots</summary>

### Authentication
| Login | Signup |
|-------|--------|
| ![Login](screenshots/login.png) | ![Signup](screenshots/signup.png) |

### Chat Interface
| Chat | Chat with Image |
|------|-----------------|
| ![Chat](screenshots/chat.png) | ![ChatWithImage](screenshots/imageuploadchat.png) |

</details>

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Tailwind CSS | Styling |
| Zustand | State Management |
| Axios | HTTP Client |
| Vite | Build Tool |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js + Express.js | Server & API |
| MongoDB + Mongoose | Database & ODM |
| Socket.IO | Real-time Communication |
| JWT | Authentication |
| Cloudinary | Image Storage |
| Resend | Email Service |
| Arcjet | Security & Rate Limiting |

### DevOps & Tools
- **Deployment**: Render
- **Version Control**: Git & GitHub
- **API Testing**: Postman
- **Package Manager**: pnpm

---

## 📂 Project Structure

```
chatapp/
├── Backend/
│   └── src/
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   └── message.controller.js
│       ├── emails/
│       │   ├── emailHandler.js
│       │   └── emailTemplates.js
│       ├── lib/
│       │   ├── arcjet.js
│       │   ├── cloudinary.js
│       │   ├── db.js
│       │   ├── env.js
│       │   ├── socket.js
│       │   ├── resend.js
│       │   └── utils.js
│       ├── middleware/
│       │   ├── arcjet.middleware.js
│       │   ├── auth.middleware.js
│       │   └── socket.middleware.js
│       ├── model/
│       │   ├── Message.js
│       │   └── User.js
│       ├── routes/
│       │   ├── auth.route.js
│       │   └── message.route.js
│       ├── .env
│       ├── index.js
│       └── package.json
├── Frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── hooks/
│       ├── store/
│       ├── lib/
│       ├── pages/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── screenshots/
├── README.md
├── LICENSE
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** >= 20.x — [Download](https://nodejs.org/)
- **pnpm** >= 10.x — `npm install -g pnpm`
- **MongoDB** — [Local install](https://www.mongodb.com/try/download/community) or [Atlas (free cloud)](https://www.mongodb.com/atlas)
- **Cloudinary account** — [Sign up free](https://cloudinary.com/)
- **Resend account** — [Sign up free](https://resend.com/) (for email)
- **Arcjet account** — [Sign up free](https://arcjet.com/) (for security)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Prethu-Raj-Debnath/chatapp.git
cd chatapp
```

2. **Install all dependencies**

```bash
pnpm install -C frontend
pnpm install -C backend
```

### Environment Variables

Create a `.env` file inside the `Backend/` directory:

```env
# Server
PORT=3000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Auth
JWT_SECRET=your_strong_jwt_secret_here

# Database
MONGO_URI=mongodb://localhost:27017/chatapp

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=Prethu Raj

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name

# Security (Arcjet)
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

> ⚠️ **Important**: Never commit your `.env` file. It's already listed in `.gitignore`.

### Running Locally

#### Development Mode (Recommended)

Open two terminals:

**Terminal 1 — Backend:**
```bash
cd Backend
pnpm dev
```
> Runs on `http://localhost:3000`

**Terminal 2 — Frontend:**
```bash
cd Frontend
pnpm dev
```
> Runs on `http://localhost:5173`

#### Production Mode (Single Port)

```bash
# Build frontend & backend
pnpm -C frontend build
pnpm -C backend build

# Start production server
pnpm -C backend start
```

> Access at `http://localhost:3000`

---

## 📡 API Documentation

### Base URL

```
Development:  http://localhost:3000/api
Production:   https://chatapp-b25x.onrender.com/api
```

### Authentication

This API uses **JWT cookie-based authentication**. Cookies are sent automatically when using Axios with `withCredentials: true`.

```javascript
// src/lib/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : "/api",
  withCredentials: true,
});

export default axiosInstance;
```

### Auth Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/signup` | Register a new user |
| `POST` | `/auth/login` | Login with email & password |
| `POST` | `/auth/logout` | Logout and clear session |
| `PUT` | `/auth/update-profile` | Update user profile/avatar |

**Example:**
```javascript
// Signup
await axios.post('/auth/signup', { fullname, email, password });

// Login
await axios.post('/auth/login', { email, password });

// Logout
await axios.post('/auth/logout');

// Update profile
await axios.put('/auth/update-profile', { profilePic });
```

### Message Endpoints

All routes are prefixed with `/message`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/message/contacts` | Get all users (contacts list) |
| `GET` | `/message/chats` | Get users you've chatted with |
| `GET` | `/message/:id` | Get messages with a specific user |
| `POST` | `/message/send/:id` | Send a message to a user |

---

## 🚢 Deployment

### Deploy to Render

1. **Make sure your root `package.json` has these scripts:**

```json
{
  "scripts": {
    "build": "pnpm -C frontend build && pnpm -C backend build",
    "start": "pnpm -C backend start"
  }
}
```

2. **Push to GitHub:**

```bash
git add .
git commit -m "ready for deployment"
git push origin main
```

3. **Create a new Web Service on [Render](https://render.com):**
   - Connect your GitHub repository
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `pnpm start`

4. **Add all environment variables** from your `.env` file in the Render dashboard.

5. **Deploy** 🎉

---

## 🔮 Future Enhancements

- [ ] **Read Receipts** — Show when a message has been read
- [ ] **Typing Indicator** — Show when the other user is typing
- [ ] **Group Chats** — Create and manage group conversations
- [ ] **Message Reactions** — React to messages with emojis
- [ ] **Message Search** — Search through chat history
- [ ] **Push Notifications** — Browser notifications for new messages

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Prethu Raj Debnath**

- GitHub: [@Prethu-Raj-Debnath](https://github.com/Prethu-Raj-Debnath)
- Project Link: [https://github.com/Prethu-Raj-Debnath/chatapp](https://github.com/Prethu-Raj-Debnath/chatapp)

---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Express.js](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudinary](https://cloudinary.com/)
- [Arcjet](https://arcjet.com/)
- [Resend](https://resend.com/)

---

<div align="center">

**If you found this project helpful, please give it a ⭐!**

Made with ❤️ by Prethu Raj Debnath

</div>