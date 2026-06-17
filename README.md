# Full-Stack Task Manager (Full-Stack Integration Phase)

A robust, production-ready Task Management application built as the final capstone milestone of the **DecodeLabs Industrial Training Track (Project 4)**. This milestone marks the ultimate convergence of all standalone phases—connecting the dynamic front-end user interface directly to a permanent SQLite relational database via a secure Express.js API gateway.

---

## 📷 Application Preview & Interface Walkthrough

<p align="center">
    <img src="./images/preview1.jpeg" width="45%" alt="Dashboard Overview" />
    <img src="./images/preview2.jpeg" width="45%" alt="Task Creation" />
</p>
<p align="center">
    <img src="./images/preview3.jpeg" width="45%" alt="Database Persistence" />
    <img src="./images/preview4.jpeg" width="45%" alt="Validation Controls" />
</p>

---

## 🚀 Architectural Overview & Network Flow

This milestone completes the end-to-end full-stack pipeline, establishing seamless data communication across entirely separate runtime environments:

1. **Client / UI Layer (Frontend):** Built with semantic HTML5, modern CSS3 layout structures, and Vanilla JavaScript (ES6+). It utilizes the native `Fetch API` to asynchronously dispatch HTTP Requests across network origins and updates the DOM in real-time based on backend payload states.
2. **Gateway / Logic Layer (Backend):** Powered by Node.js and Express.js. This layer intercepts incoming client payloads, implements mandatory middleware for Cross-Origin Resource Sharing (CORS) security, validates client inputs, and routes standardized JSON strings down to the database interface.
3. **Storage / Persistence Layer (Database):** Driven by an integrated SQLite3 engine. It securely commits records to local disk storage using optimized tables and schema structures, ensuring data outlives engine reboots and page refreshes.

---

## ✨ Features & Core Competencies Verified (Project 4 Integration)

- **Cross-Origin Resource Sharing (CORS) Management:** Handled cross-origin resource permissions successfully, allowing the frontend client (running on port `5500`) to safely read and write to the backend server (running on port `3000`).
- **Complete End-to-End CRUD Integration:** Established seamless connection bridges using modern `async/await` syntax. Creating a task on the browser UI dispatches a `POST` network request that instantly persists to the database file.
- **Asynchronous App Synchronization:** On page load, a `GET` fetch request automatically pulls all recorded rows directly out of the database array and renders them gracefully into the interface layout.
- **Permanent Data Longevity:** Tasks remain completely persistent. Web browser cache wipes, tab closures, or backend application restarts will not degrade or erase the saved tasks.

---

## 🛠️ Tech Stack Employed

- **Frontend Environment:** HTML5, CSS3, Vanilla JavaScript (Fetch API / Async Web Services)
- **Backend Architecture:** Node.js, Express.js Middleware
- **Database Engine:** SQLite3 (Relational Database Management System)
- **Version Control:** Git & GitHub Platform (Production Workflows)

---

## 📂 Project Structure

```text
TaskManager-FullStack-Tack4-project4/
├── images/                 # Walkthrough Asset Folder (README Previews)
│   ├── preview1.jpeg
│   ├── preview2.jpeg
│   ├── preview3.jpeg
│   └── preview4.jpeg
│
├── Frontend/               # Client-Side Application Layout
│   ├── index.html          # Web Structural Framework
│   ├── style.css           # Custom Presentation Stylesheet
│   └── script.js           # Client-Side Network Fetch Requests
│
└── Backend/                # Server-Side Web API Infrastructure
    ├── server.js           # Express API Routing & SQL Constraints
    ├── package.json        # Node Environments & App Dependencies
    ├── .gitignore          # Deployment Filter (Excludes node_modules & Local DBs)
    └── taskmanager.db      # Permanent Relational Database File
⚙️ How to Setup and Run Locally
Prerequisites
Make sure you have Node.js installed on your machine.

1. Fire Up the Server Engine
Open your command terminal, navigate directly into the Backend directory, install the required node packages, and launch the server:

Bash
cd Backend
npm install
node server.js
You will immediately receive confirmation: Backend server is successfully running on port 3000 followed by Database vault connected successfully!

2. Launch the Client View
Open the Frontend/index.html file inside your web browser (or right-click and use the Live Server extension in VS Code running on port 5500) to experience a fully functional, integrated full-stack application!

🎯 Project Completion Status:
This project completely fulfills the final, rigorous evaluation parameters of the DecodeLabs Full-Stack Developer Internship Program. It proves absolute mastery over multi-tier system integration, network handshakes, backend server routing, and structural database persistence.