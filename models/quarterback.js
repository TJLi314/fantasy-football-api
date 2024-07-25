const mongoose = require("mongoose");

const Quarterback = mongoose.model(
  "Quarterback",
  new mongoose.Schema({
    name: String,
    rank: Number,
  })
);

exports.Quarterback = Quarterback;
