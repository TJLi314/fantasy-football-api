const mongoose = require("mongoose");
const tightEndSchema = require("./tightEnd");

const TightEndTier = mongoose.model(
  "TightEndTier",
  new mongoose.Schema({
    rank: Number,
    players: [tightEndSchema],
  })
);

exports.TightEndTier = TightEndTier;
