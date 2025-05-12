const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all books
router.get('/', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


// POST new book
router.post('/', (req, res) => {
    const { title, author } = req.body;
    db.query('INSERT INTO books (title, author) VALUES (?, ?)' [title, author], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, title, author });
    });
});

module.exports = router;