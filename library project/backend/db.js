const mysql = require("mysql2");

// ✅ Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library_db",
});

// ✅ Connect to DB
db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection Failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

module.exports = db;