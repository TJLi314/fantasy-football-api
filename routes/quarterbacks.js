const express = require("express");
const { Quarterback } = require("../models/quarterback");
const router = express.Router();

router.get("/", async (req, res) => {
  const quarterbacks = await Quarterback.find().sort("name");
  res.send(quarterbacks);
});

module.exports = router;
