const express = require("express");
const {
  createStartup,
  getAllStartups,
  getStartupById,
  updateStartup,
  deleteStartup,
  approveStartup,
} = require("../controllers/startupController");

const router = express.Router();

router.post("/", createStartup);
router.get("/", getAllStartups);
router.get("/:id", getStartupById);
router.put("/:id", updateStartup);
router.delete("/:id", deleteStartup);
router.patch("/:id/approve", approveStartup); // Route to approve a startup

module.exports = router;
