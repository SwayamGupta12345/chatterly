![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)


# ChatterlyAI — Full Multi-Service Open Source AI Chat Platform

ChatterlyAI is a full-stack AI chat system built with a **Next.js frontend** and **three independent backend services**, deployed separately due to platform constraints (Vercel + Render free tiers).

This repository contains:
- The **official frontend**
- All **system documentation**
- Links to all backend microservices
- Setup guides for contributors

Live App → https://Chatterlyai.vercel.app

---

## 📌 System Architecture
ChatterlyAI consists of **4 repositories working together**:

| Service | Repo Link | Tech | Deploy |
|--------|-----------|------|--------|
| Frontend (Main) | https://github.com/SwayamGupta12345/ChatterlyAI | Next.js | Vercel |
| Backend API | https://github.com/SwayamGupta12345/ChatterlyAI-backend | Node.js | Render |
| Secondary Backend | https://github.com/SwayamGupta12345/ChatterlyAI-backend-2 | Node.js | Render |
| Agentic Backend | https://github.com/SwayamGupta12345/ChatterlyAI-agentic | Python/CrewAI | Render |

Full architecture → [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)

---

## 🚀 Local Development

If you want to run everything locally:

### 1. Start Backend 1  
Follow instructions here: https://github.com/SwayamGupta12345/ChatterlyAI-backend

### 2. Start Backend 2  
Follow instructions here: https://github.com/SwayamGupta12345/ChatterlyAI-backend-2

### 3. Start Agentic Service 
Follow instructions here: https://github.com/SwayamGupta12345/ChatterlyAI-agentic

### 4. Start Frontend  

## Environment Variables
Rename `environment-variables.txt` to `.env.local ` and fill values for local development:
```
NEXTAUTH_URL=<localhost_url>
NEXTAUTH_SECRET=<your_nextauth_secret>
MONGODB_URI=<your_mongodb_connection_string>
MONGODB_DB=<your_database_name>
JWT_SECRET=<your_jwt_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>

HF_API_KEY=<your_huggingface_api_key>

CLOUDINARY_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_URL=cloudinary://<your_cloudinary_api_key>:<your_cloudinary_api_secret>@<your_cloudinary_cloud_name>

NEXT_PUBLIC_AGENTIC_BACKEND_URL=<your_agentic_backend_url> #https://github.com/SwayamGupta12345/ChatterlyAI-agentic
NEXT_PUBLIC_AI_SOCKET_BACKEND_URL=<your_ai_socket_backend_url> # https://github.com/SwayamGupta12345/ChatterlyAI-backend-2
NEXT_PUBLIC_CHAT_SOCKET_BACKEND_URL=<your_chat_socket_backend_url> #https://github.com/SwayamGupta12345/ChatterlyAI-backend
```

Clone the repository and install dependencies:

```bash
git clone https://github.com/SwayamGupta12345/ChatterlyAI.git
cd ChatterlyAI
npm install    
```

### Development

```bash
npm run dev
```

---

## 🧩 Contributing
Contributions are welcome!  
Start here → [`CONTRIBUTING.md`](./CONTRIBUTING.md)

If you're new:
- Check `good-first-issues`
- Open small PRs
- Ask questions in Issues

---
## 🗺 Roadmap
See → [`docs/ROADMAP.md`](./docs/ROADMAP.md)

---

## 📜 License
This project is licensed under the CC BY-NC 4.0 License.  
You may use, modify, and share it for non-commercial purposes with attribution.

