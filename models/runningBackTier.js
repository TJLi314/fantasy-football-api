const mongoose = require("mongoose");
const runningBackSchema = require("./runningBack");

const RunningBackTier = mongoose.model(
  "RunningBackTier",
  new mongoose.Schema({
    rank: Number,
    players: [runningBackSchema],
  })
);

exports.RunningBackTier = RunningBackTier;
