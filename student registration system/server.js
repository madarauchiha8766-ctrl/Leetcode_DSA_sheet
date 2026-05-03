const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Insert student
app.post("/add-student", (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";
  db.query(sql, [name, email, course], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Student added successfully" });
  });
});

// Get all students
app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});