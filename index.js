const mysql = require('mysql2');

// Buat koneksi tanpa pilih database dulu
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'passwordmu', // ganti dengan password kamu
});

// Buat database (kalau belum ada)
connection.query('CREATE DATABASE IF NOT EXISTS my_simple_db', (err) => {
  if (err) throw err;
  console.log('Database created or already exists.');

  // Pilih database
  connection.changeUser({ database: 'my_simple_db' }, (err) => {
    if (err) throw err;

    // Buat tabel
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    connection.query(createTableSQL, (err) => {
      if (err) throw err;
      console.log('Table `users` created or already exists.');
      connection.end();
    });
  });
});
