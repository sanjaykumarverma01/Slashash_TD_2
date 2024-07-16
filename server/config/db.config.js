const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Msna196@sql", // Update with your MySQL root password
  database: "quotes_db",
});

module.exports = db;

// module.exports = {
//   HOST: process.env.HOST || "localhost",
//   USER: process.env.USER || "root",
//   PASSWORD: process.env.PASSWORD || "root",
//   DB: process.env.DB || "earnest",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };