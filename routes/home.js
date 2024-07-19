const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("It's fantasy football bitches");
});

module.exports = router;
