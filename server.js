const express = require('express');
const booksRoutes = require('./routes/books');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/books, booksRoutes');

const port = process.removeListener.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});