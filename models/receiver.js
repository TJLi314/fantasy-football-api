const mongoose = require("mongoose");

const Receiver = mongoose.model(
  "Receiver",
  new mongoose.Schema({
    name: String,
    rank: Number,
  })
);

exports.Receiver = Receiver;
