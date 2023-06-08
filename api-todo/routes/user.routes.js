const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "user fetched successfully",
    status: 200,
    data: {
      firstName: "Rohan Rana Magar",
      Address: "Kathmandu",
    },
  });
});

module.exports = router;
