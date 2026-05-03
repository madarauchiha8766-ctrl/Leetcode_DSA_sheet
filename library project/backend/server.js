const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DEBUG =================
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ================= API ROUTES =================

// ✅ Add Book
app.post("/add-book", (req, res) => {
  console.log("Incoming Data:", req.body); // DEBUG

  const { title, author, year } = req.body;

  // ❌ Validation
  if (!title || !author || !year) {
    return res.status(400).send("All fields are required");
  }

  const sql = "INSERT INTO books (title, author, year) VALUES (?, ?, ?)";

  db.query(sql, [title, author, year], (err, result) => {
    if (err) {
      console.error("SQL ERROR:", err); // 🔥 shows real problem
      return res.status(500).send("Database Error");
    }

    console.log("Inserted ID:", result.insertId);
    res.send("Book added successfully");
  });
});

// ✅ Get All Books
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Fetch Error:", err);
      return res.status(500).send("Error fetching books");
    }

    res.json(result);
  });
});

// ================= FRONTEND =================

// Serve frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Default route → open index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ================= SERVER =================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});