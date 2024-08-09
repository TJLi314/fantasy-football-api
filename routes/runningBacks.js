const express = require("express");
const { RunningBack } = require("../models/runningBack");
const router = express.Router();

router.get("/", async (req, res) => {
  const runningBacks = await RunningBack.find().sort("name");
  res.send(runningBacks);
});

module.exports = router;
