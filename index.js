const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const home = require("./routes/home");
const receivers = require("./routes/receivers");
const runningBacks = require("./routes/runningBacks");
const quarterbacks = require("./routes/quarterbacks");
const tightEnds = require("./routes/tightEnds");

mongoose
  .connect("mongodb://localhost:27017/Fantasy-Football")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connect to mongo ", err));

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", home);
app.use("/api/receivers", receivers);
app.use("/api/runningBacks", runningBacks);
app.use("/api/quarterbacks", quarterbacks);
app.use("/api/tightEnds", tightEnds);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
