# SnapLink API 🚀

A high-performance, minimalist URL shortener with built-in click tracking and analytics.

SnapLink transforms long URLs into short, shareable links while tracking every visit in real time. Built using Node.js, Express, and MongoDB.

---

## 🚀 Features

- 🔗 **Link Shortening** – Generates unique 6-character IDs using Nanoid  
- ⚡ **Instant Redirection** – Fast redirect to original URLs  
- 📊 **Real-time Analytics** – Tracks clicks with timestamps  
- 🏗️ **Scalable Architecture** – Clean MVC structure  
- 🛡️ **Reliable Data** – Mongoose validation & unique constraints  

---

## 🛠️ Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB (Mongoose)  
- **ID Generator:** Nanoid  

---

## 📂 Project Structure

```bash id="structure1"
├── models
│   └── url.model.js        # Mongoose Schema
├── controllers
│   └── url.controller.js   # Business logic
├── routes
│   └── url.router.js       # API routes
├── app.js                  # Express configuration
└── server.js               # Entry point

📡 API Endpoints
1. Create Short URL
URL: /api/url
Method: POST
Body:
{
  "url": "https://example.com"
}
Response:
{
  "success": true,
  "shortId": "abc123",
  "originalUrl": "https://example.com"
}
2. Redirect to Original URL
URL: /api/:id
Method: GET
Action: Redirects user and stores analytics (click timestamp)
3. Get Analytics
URL: /api/url/analytics/:shortId
Method: GET
Response:
{
  "success": true,
  "totalVisits": 10,
  "analytics": [
    {
      "clickedAt": "2026-05-13T10:00:00.000Z"
    }
  ]
}
⚙️ Installation & Setup
1. Clone repository
git clone https://github.com/yourusername/snaplink-api.git
cd snaplink-api
2. Install dependencies
npm install
3. Setup environment variables

Create a .env file:

PORT=8001
MONGODB_URL=mongodb://127.0.0.1:27017/short-url
4. Run server
npm start
📝 Note

Analytics are stored using MongoDB’s atomic $push operation to ensure safe updates during high traffic.

📌 Commit Message
docs: add complete README with API documentation

---

If you want next upgrade, I can help you:
👉 add **Swagger API docs**
👉 or make this README GitHub-ready with badges + screenshots  
👉 or design a **frontend UI for SnapLink**
