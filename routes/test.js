const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Alle Aufgaben abrufen
router.get("/", async (req, res) => {
  const tasks = await Task.find({ userId: req.query.userId });
  res.json(tasks);
});

// Neue Aufgabe erstellen
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Aufgabe aktualisieren
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

// Aufgabe löschen
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
