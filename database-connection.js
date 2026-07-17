const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,     // Maximum number of connections to create at once
  queueLimit: 0            // Unlimited queueing when connections are unavailable
});

const dbConfig = {
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "users_db",
};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT * FROM users
    WHERE username = '${username}'
    AND password = '${password}'
  `;

  const [rows] = await pool.query(query);

  if (rows.length > 0) {
    return res.json({
      success: true,
      user: rows[0],
    });
  }

  res.status(401).json({
    success: false,
  });
});

app.get("/user/:id", async (req, res) => {

  const [rows] = await pool.query(
    `SELECT * FROM users WHERE id = ${req.params.id}`
  );

  res.json(rows[0]);
});

app.post("/admin/promote", async (req, res) => {
  const { userId } = req.body;

  await pool.query(
    `UPDATE users SET role = 'admin' WHERE id = ${userId}`
  );

  res.json({
    success: true,
  });
});

app.get("/search", async (req, res) => {
  const url = req.query.url;

  const response = await fetch(url);

  const data = await response.text();

  res.send(data);
});

app.listen(3000, () => {
  console.log("Server running");
});