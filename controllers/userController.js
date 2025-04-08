// controllers/userController.js
const express = require("express");
const userService = require("../services/userService");

const router = express.Router();

router.get("/users", (req, res) => {
  try {
    const users = userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/users/:id", (req, res) => {
  try {
    const user = userService.getUserById(parseInt(req.params.id));
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/users", (req, res) => {
  try {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/users/:id", (req, res) => {
  try {
    const user = userService.updateUser(parseInt(req.params.id), req.body);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete("/users/:id", (req, res) => {
  try {
    const user = userService.deleteUser(parseInt(req.params.id));
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
