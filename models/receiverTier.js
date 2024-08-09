const mongoose = require("mongoose");
const receiverSchema = require("./receiver");

const ReceiverTier = mongoose.model(
  "ReceiverTier",
  new mongoose.Schema({
    rank: Number,
    players: [receiverSchema],
  })
);

exports.ReceiverTier = ReceiverTier;
