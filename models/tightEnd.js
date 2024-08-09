const mongoose = require("mongoose");

const tightEndSchema = new mongoose.Schema({
  name: String,
  rank: Number,
});

const TightEnd = mongoose.model("TightEnd", tightEndSchema);

exports.TightEnd = TightEnd;
exports.tightEndSchema = tightEndSchema;
