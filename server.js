// index.js

// Importieren der benötigten Module
const express = require('express');
const cors = require('cors');
const testRoutes = require("./routes/test");
require('dotenv').config(); // Zum Laden von Umgebungsvariablen aus der .env-Datei

// Erstellen einer neuen Express-Anwendung
const app = express();

// Aktivieren von CORS für alle Anfragen
app.use(cors());

// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());

// Definieren des Ports, auf dem der Server laufen soll
const PORT = process.env.PORT || 3000;

// Beispielroute für GET-Anfragen
app.get('/', (req, res) => {
  res.send('Hello World from Express server!');
});

app.use("/api/test", testRoutes);

// Starten des Servers und Abhören auf dem angegebenen Port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
