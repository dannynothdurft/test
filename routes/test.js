const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// Pfad zur JSON-Datei
const dogsDataPath = path.join(__dirname, "../data/dogs.json");

// Alle Hunderassendaten abrufen
router.get("/", (req, res) => {
  // Die JSON-Datei asynchron lesen
  fs.readFile(dogsDataPath, "utf8", (err, data) => {
    if (err) {
      console.error("Fehler beim Lesen der Datei:", err);
      return res.status(500).json({ error: "Fehler beim Abrufen der Daten" });
    }

    // Die Daten an den Client zurücksenden
    try {
      const dogs = JSON.parse(data);
      res.json(dogs);
    } catch (parseError) {
      console.error("Fehler beim Parsen der JSON-Daten:", parseError);
      res.status(500).json({ error: "Fehler beim Verarbeiten der Daten" });
    }
  });
});

module.exports = router;

