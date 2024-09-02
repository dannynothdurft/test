const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/tasks");
const testRoutes = require("./routes/test");

dotenv.config();

const app = express();

// Konfiguriere CORS, um nur Anfragen von http://localhost:3000 zuzulassen
const corsOptions = {
  origin: process.env.ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB-Verbindung
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routen
app.use("/api/tasks", taskRoutes);
app.use("/api/test", testRoutes);

// Startet den Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
