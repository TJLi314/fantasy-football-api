const mongoose = require("mongoose");

const quarterbackSchema = new mongoose.Schema({
  name: String,
  rank: Number,
});

const Quarterback = mongoose.model("Quarterback", quarterbackSchema);

exports.Quarterback = Quarterback;
exports.quarterbackSchema = quarterbackSchema;
