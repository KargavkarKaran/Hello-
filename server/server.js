// server/server.js

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// route
app.post("/hello", (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res.json({ message: "Please enter your name" });
  }

  res.json({ message: `Hello ${name}! 👋 Welcome to Node.js` });
});

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
