require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const startupData = [];

// Read CSV and store data
fs.createReadStream("data/startup_data.csv")
  .pipe(csv())
  .on("data", (row) => {
    startupData.push(row);
  })
  .on("end", () => {
    console.log("CSV data loaded!");
  });

// API to fetch best startup locations based on user input
app.get("/best-locations", (req, res) => {
  try {
    const idea = req.query.idea?.toLowerCase();
    if (!idea) {
      return res.status(400).json({ error: "Startup idea is required" });
    }

    console.log("Received request for idea:", idea);

    // Check if CSV data is loaded
    if (startupData.length === 0) {
      return res.status(500).json({ error: "CSV data not loaded" });
    }

    const filteredData = startupData.filter((row) =>
      row.Category?.toLowerCase().includes(idea) // Check if "category" exists
    );

    if (filteredData.length === 0) {
      return res.json({ message: "No matching locations found", locations: [] });
    }

    res.json({ message: `Top locations for '${idea}' startups`, locations: filteredData });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
