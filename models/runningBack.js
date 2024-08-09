const mongoose = require("mongoose");

const runningBackSchema = new mongoose.Schema({
  name: String,
  rank: Number,
});

const RunningBack = mongoose.model("RunningBack", runningBackSchema);

exports.RunningBack = RunningBack;
exports.runningBackSchema = runningBackSchema;
