const express = require("express");
const router = express.Router();

const players = [
  { name: "Ceedee Lamb", rank: -1 },
  { name: "Tyreek Hill", rank: -1 },
  { name: "Ja'Marr Chase", rank: -1 },
  { name: "Amon-Ra St. Brown", rank: -1 },
  { name: "AJ Brown", rank: -1 },
  { name: "Justin Jefferson", rank: -1 },
  { name: "Puka Nakua", rank: -1 },
  { name: "Garret Wilson", rank: -1 },
  { name: "Davante Adams", rank: -1 },
  { name: "Drake London", rank: -1 },
  { name: "Deebo Samuel", rank: -1 },
  { name: "Marvin Harrison Jr", rank: -1 },
];

router.get("/", (req, res) => {
  res.send(players);
});

module.exports = router;
