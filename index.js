// index.js
const express = require("express");
const userController = require("./controllers/userController");

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api", userController); // Mount the user controller under /api

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
