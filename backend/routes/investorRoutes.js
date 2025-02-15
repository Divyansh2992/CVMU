const express = require("express");
const {
  createInvestor,
  getAllInvestors,
  getInvestorById,
  updateInvestor,
  deleteInvestor,
} = require("../controllers/investorController");

const router = express.Router();

router.post("/", createInvestor);
router.get("/", getAllInvestors);
router.get("/:id", getInvestorById);
router.put("/:id", updateInvestor);
router.delete("/:id", deleteInvestor);

module.exports = router;
