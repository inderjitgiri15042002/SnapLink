SnapLink API
A high-performance, minimalist URL shortener with built-in click tracking and analytics.

SnapLink allows users to transform long, cumbersome URLs into short, shareable links. Built with Node.js, Express, and MongoDB, it tracks every visit to provide real-time click data.

🚀 Features
Link Shortening: Generates unique 6-character IDs using nanoid.

Instant Redirection: High-speed redirection to original URLs.

Real-time Analytics: Tracks total visits and stores precise timestamps for every click.

Scalable Architecture: Clean MVC (Model-View-Controller) structure.

Reliable Data: Enforces unique constraints and validation using Mongoose.

🛠️ Tech Stack
Runtime: Node.js

Framework: Express.js

Database: MongoDB (via Mongoose)

ID Generation: Nanoid

📂 Project Structure
Bash
├── models
│   └── url.model.js     # Mongoose Schema & Database Logic
├── controllers
│   └── url.controller.js # Request handlers (Business Logic)
├── routes
│   └── url.router.js     # API Endpoints
├── app.js               # Express app configuration
└── server.js            # Entry point & DB Connection
📡 API Endpoints
1. Create Short URL
URL: /api/url

Method: POST

Body: { "url": "[https://example.com](https://example.com)" }

Response: Returns a unique shortID and link details.

2. Redirect to Original URL
URL: /api/:id

Method: GET

Action: Automatically updates the analytics array and redirects the browser.

3. Get Analytics
URL: /api/url/analytics/:shortId

Method: GET

Response: Returns the total click count and a detailed history of timestamps.

⚙️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/yourusername/snaplink-api.git
cd snaplink-api
Install dependencies:

Bash
npm install
Set up Environment Variables:
Create a .env file and add your MongoDB connection string:

Code snippet
    PORT=8001
    MONGODB_URL=mongodb://127.0.0.1:27017/short-url
    ```

4.  **Run the application:**
    
```bash
    npm start
    ```

---

## **📝 Note on the Implementation**
The project uses the `$push` operator in MongoDB to ensure that analytics tracking is **atomic**. This prevents data loss during high-traffic scenarios where multiple users might click the same link simultaneously.

---

### **Commit Message for this README:**
> **docs: create comprehensive README with API documentation**