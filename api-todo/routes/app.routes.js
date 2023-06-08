const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "data fetched successfully", status: 200 });
});

module.exports = router;
