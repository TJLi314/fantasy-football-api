const mongoose = require("mongoose");

const TightEnd = mongoose.model(
  "TightEnd",
  new mongoose.Schema({
    name: String,
    rank: Number,
  })
);

exports.TightEnd = TightEnd;
