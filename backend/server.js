const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({
    message: "STRIPESNYC Backend API is running",
    status: "ok",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    service: "STRIPESNYC API",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/officials", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Sample Official",
      role: "Referee",
      availability: "available",
    },
  ]);
});

app.get("/api/assignments", (req, res) => {
  res.json([
    {
      id: 1,
      game: "Home Team vs Away Team",
      date: "TBD",
      location: "TBD",
      crewStatus: "pending",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`STRIPESNYC backend running on port ${PORT}`);
});