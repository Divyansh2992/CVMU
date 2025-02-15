const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true, unique: true, index: true },
    location: { type: String, required: true },
    maxInvestment: { type: Number, required: true }, // Maximum investment amount
    specialDomain: [{ type: String }], // Array of sectors they prefer
    fundingType: {
      type: String,
      enum: ["Equity", "Convertible Notes", "Grant"],
      required: true,
      default: "Equity",
    },
    startups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup",
      },
    ], // Reference to startups they have invested in
  },
  { timestamps: true }
);

const Investor = mongoose.model("Investor", investorSchema);

module.exports = Investor;
