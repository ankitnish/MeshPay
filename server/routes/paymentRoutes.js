const express = require("express");
const router = express.Router();

const {
  sendMoney,
  transactionHistory,
} = require("../controllers/paymentController");

const protect = require("../middleware/authMiddleware");

router.post("/send", protect, sendMoney);
router.get("/history/:userId", protect, transactionHistory);

module.exports = router;