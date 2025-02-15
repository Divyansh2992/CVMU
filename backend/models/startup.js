const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
  {
    startupName: { type: String, required: true },
    founderName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    location: { type: String, required: true },
    industry: { type: String, required: true }, // e.g., Fintech, HealthTech, EdTech
    stage: {
      type: String,
      enum: ["Idea", "Early-stage", "Growth", "Scaling"],
      required: true,
    },
    fundingRequired: { type: Number, required: true }, // Amount required
    businessModel: {
      type: String,
      enum: ["B2B", "B2C", "SaaS", "Marketplace"],
      required: true,
    },
    partners: [{ type: String }], // Now an array of partner names
    investorId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investor",
      },
    ], // Array of investors
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;
