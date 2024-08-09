const mongoose = require("mongoose");

const receiverSchema = new mongoose.Schema({
  name: String,
  rank: Number,
});

const Receiver = mongoose.model("Receiver", receiverSchema);

exports.Receiver = Receiver;
exports.receiverSchema = receiverSchema;
