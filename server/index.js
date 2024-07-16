const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./config/db.config")

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, async() => {
  await db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
    } else {
      console.log("Connected to the MySQL database.");
    }
  });
  console.log(`Server running on http://localhost:${port}`);
});
