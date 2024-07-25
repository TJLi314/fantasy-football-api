const mongoose = require("mongoose");

const RunningBack = mongoose.model(
  "RunningBack",
  new mongoose.Schema({
    name: String,
    rank: Number,
  })
);

exports.RunningBack = RunningBack;
