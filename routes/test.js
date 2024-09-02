const express = require("express");
const router = express.Router();

// Alle Aufgaben abrufen
router.get("/", (req, res) => {
  res.json("Was geht ab der Lachs");
});

module.exports = router;
