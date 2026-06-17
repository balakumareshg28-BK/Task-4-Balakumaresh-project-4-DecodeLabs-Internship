const express = require('express');
const cors = require('cors'); 
const sqlite3 = require('sqlite3').verbose(); // 1. Import our new database driver module
const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

// 2. INITIALIZE DATABASE: Connect to a local storage file named 'taskmanager.db'
// If this file doesn't exist yet, SQLite will automatically create it instantly!
const db = new sqlite3.Database('./taskmanager.db', (err) => {
    if (err) {
        console.error("Database connection failed ❌:", err.message);
    } else {
        console.log("Database vault connected successfully! 📁");
    }
});

// 3. CREATE THE TABLE SCHEMA: Design our permanent table layout with unique columns
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            completed BOOLEAN DEFAULT 0
        )
    `);
});

// --- ENDPOINT 1: GET Request (Read from Database) ---
app.get('/tasks', (req, res) => {
    // Query our permanent database table instead of a temporary variable array
    db.all("SELECT * FROM tasks", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Failed to retrieve tasks from database." });
        }
        res.status(200).json(rows);
    });
});

// --- ENDPOINT 2: POST Request (Create & Save inside Database) ---
app.post('/tasks', (req, res) => {
    const { title } = req.body; 

    // Server-Side Data Validation Block
    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Validation Failed: Task title is required." });
    }

    const cleanTitle = title.trim();

    // Insert the data into our permanent table structure using SQL statements
    const query = `INSERT INTO tasks (title, completed) VALUES (?, 0)`;
    
    db.run(query, [cleanTitle], function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to save task into database." });
        }

        // Output: Respond back with the data record that was safely stored
        res.status(201).json({
            message: "Task created successfully!",
            task: {
                id: this.lastID, // The unique database auto-incremented ID record primary key
                title: cleanTitle,
                completed: false
            }
        });
    });
}); 

// Start your server
app.listen(PORT, () => {
    console.log(`Backend server is successfully running on port ${PORT}`);
});