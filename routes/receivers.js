const express = require("express");
const { Receiver } = require("../models/receiver");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("GETTING RECEIVERS");
  const receivers = await Receiver.find().sort("name");
  console.log(receivers);
  res.send(receivers);
});

module.exports = router;
