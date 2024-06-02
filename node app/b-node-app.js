const express = require("express");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3010;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the MySQL database");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving users from database");
      return;
    }
    console.log(results);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Node app is running on port ${port}`);
});
