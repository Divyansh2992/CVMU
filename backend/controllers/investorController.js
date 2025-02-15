const Investor = require("../models/investor");

// Create a new Investor
exports.createInvestor = async (req, res) => {
  try {
    const investor = new Investor(req.body);
    await investor.save();
    res.status(201).json(investor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Investors
exports.getAllInvestors = async (req, res) => {
  try {
    const investors = await Investor.find().populate("startups");
    res.json(investors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Investor by ID
exports.getInvestorById = async (req, res) => {
  try {
    const investor = await Investor.findById(req.params.id).populate("startups");
    if (!investor) return res.status(404).json({ error: "Investor not found" });
    res.json(investor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Investor
exports.updateInvestor = async (req, res) => {
  try {
    const investor = await Investor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!investor) return res.status(404).json({ error: "Investor not found" });
    res.json(investor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Investor
exports.deleteInvestor = async (req, res) => {
  try {
    const investor = await Investor.findByIdAndDelete(req.params.id);
    if (!investor) return res.status(404).json({ error: "Investor not found" });
    res.json({ message: "Investor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
