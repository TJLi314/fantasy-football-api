const express = require("express");
const { TightEnd } = require("../models/tightEnd");
const router = express.Router();

router.get("/", async (req, res) => {
  const tightEnds = await TightEnd.find().sort("name");
  res.send(tightEnds);
});

module.exports = router;
