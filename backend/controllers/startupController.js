const Startup = require("../models/startup");

// Create a new Startup
exports.createStartup = async (req, res) => {
  try {
    const startup = new Startup(req.body);
    await startup.save();
    res.status(201).json(startup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Startups
exports.getAllStartups = async (req, res) => {
  try {
    const startups = await Startup.find().populate("investorId");
    res.json(startups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Startup by ID
exports.getStartupById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id).populate("investorId");
    if (!startup) return res.status(404).json({ error: "Startup not found" });
    res.json(startup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Startup
exports.updateStartup = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!startup) return res.status(404).json({ error: "Startup not found" });
    res.json(startup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Startup
exports.deleteStartup = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndDelete(req.params.id);
    if (!startup) return res.status(404).json({ error: "Startup not found" });
    res.json({ message: "Startup deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve a Startup
exports.approveStartup = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndUpdate(req.params.id, { isApproved: true }, { new: true });
    if (!startup) return res.status(404).json({ error: "Startup not found" });
    res.json({ message: "Startup approved successfully", startup });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
