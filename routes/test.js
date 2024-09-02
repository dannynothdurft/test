const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Alle Aufgaben abrufen
router.get("/", (req, res) => {
  res.json("Was geht ab der Lachs");
});

module.exports = router;
