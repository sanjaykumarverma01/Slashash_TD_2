const express = require("express");
const db = require("../config/db.config.js");

const router = express.Router();

// Add a favorite quote
router.post("/favorites", (req, res) => {
  const { content, author } = req.body;

  const query =
    "INSERT INTO favorites (quote_id, content, author) VALUES (?, ?, ?)";
  db.query(query, [quote_id, content, author], (err, result) => {
    if (err) {
      console.error("Error inserting favorite:", err);
      res.status(500).send("Error inserting favorite");
    } else {
      res.status(201).send("Favorite added successfully");
    }
  });
});

// Get all favorite quotes
router.get("/favorites", (req, res) => {
  const query = "SELECT * FROM favorites";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error retrieving favorites:", err);
      res.status(500).send("Error retrieving favorites");
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
