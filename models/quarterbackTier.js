const mongoose = require("mongoose");
const quarterbackSchema = require("./quarterback");

const QuarterbackTier = mongoose.model(
  "QuarterbackTier",
  new mongoose.Schema({
    rank: Number,
    players: [quarterbackSchema],
  })
);

exports.QuarterbackTier = QuarterbackTier;
