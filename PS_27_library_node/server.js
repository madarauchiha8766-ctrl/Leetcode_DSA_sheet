const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database Initialization
const db = new sqlite3.Database('./library.db', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create Book table
        db.run(`CREATE TABLE IF NOT EXISTS Book (
            book_id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            year INTEGER
        )`, (err) => {
            if (err) {
                console.error('Error creating table', err.message);
            } else {
                console.log('Book table initialized.');
            }
        });
    }
});

// API Endpoints

// 1. Add a new book
app.post('/api/books', (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }

    const sql = `INSERT INTO Book (title, author, year) VALUES (?, ?, ?)`;
    db.run(sql, [title, author, year], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: 'Book added successfully',
            book: {
                book_id: this.lastID,
                title,
                author,
                year
            }
        });
    });
});

// 2. Get all books
app.get('/api/books', (req, res) => {
    const sql = `SELECT * FROM Book`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Success',
            books: rows
        });
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
