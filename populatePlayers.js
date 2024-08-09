const mongoose = require("mongoose");
const { Receiver } = require("./models/receiver");
const { TightEnd } = require("./models/tightEnd");
const { RunningBack } = require("./models/runningBack");
const { Quarterback } = require("./models/quarterback");
mongoose
  .connect("")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connect to mongo ", err));

const userAction = async () => {
  const response = await fetch(
    "https://api.sportsdata.io/v3/nfl/scores/json/PlayersByAvailable"
  );
  //   console.log(response);
  const myJson = await response.json(); //extract JSON from the http response
  const players = myJson.map((player) => {
    return {
      name: player.FirstName + " " + player.LastName,
      position: player.FantasyPosition,
      status: player.Status,
    };
  });

  const fantasyPlayers = players.filter(
    (player) =>
      (player.position == "QB" ||
        player.position == "RB" ||
        player.position == "WR" ||
        player.position == "TE") &&
      player.status == "Active"
  );

  console.log(fantasyPlayers);
};

const getQBs = async () => {
  const response = await fetch(
    "https://api.sportsdata.io/v3/nfl/scores/json/DepthCharts"
  );
  //   console.log(response);
  const myJson = await response.json(); //extract JSON from the http response
  const offenses = myJson.map((team) => {
    return { Offense: team.Offense };
  });

  const players = offenses.map((offense) => {
    const players = offense.Offense.filter(
      (player) => player.Position == "QB" && player.DepthOrder == 1
    );
    return players;
  });

  const qbs = [];
  players.forEach((player) => {
    const qb = player[0];
    qbs.push({ name: qb.Name, rank: -1 });
  });

  console.log(qbs);
  console.log(qbs.length);

  qbs.forEach(async (qb) => {
    const quarterback = new Quarterback({
      name: qb.name,
      rank: qb.rank,
    });

    const result = await quarterback.save();
    console.log(result);
  });
};

const getRBs = async () => {
  const response = await fetch(
    "https://api.sportsdata.io/v3/nfl/scores/json/DepthCharts"
  );

  const myJson = await response.json(); //extract JSON from the http response
  const offenses = myJson.map((team) => {
    return { Offense: team.Offense };
  });

  const players = offenses.map((offense) => {
    const players = offense.Offense.filter(
      (player) => player.Position == "RB" && player.DepthOrder <= 2
    );
    return players;
  });

  const rbs = [];
  players.forEach((player) => {
    player.forEach((rb) => {
      rbs.push({ name: rb.Name, rank: -1 });
    });
  });

  console.log(rbs);
  console.log(rbs.length);

  rbs.forEach(async (rb) => {
    const runningback = new RunningBack({
      name: rb.name,
      rank: rb.rank,
    });

    const result = await runningback.save();
    console.log(result);
  });
};

const getWRs = async () => {
  const response = await fetch(
    "https://api.sportsdata.io/v3/nfl/scores/json/DepthCharts"
  );

  const myJson = await response.json(); //extract JSON from the http response
  const offenses = myJson.map((team) => {
    return { Offense: team.Offense };
  });

  const players = offenses.map((offense) => {
    const players = offense.Offense.filter(
      (player) =>
        (player.Position == "LWR" ||
          player.Position == "SWR" ||
          player.Position == "RWR") &&
        player.DepthOrder == 1
    );
    return players;
  });

  const wrs = [];
  players.forEach((player) => {
    player.forEach((wr) => {
      wrs.push({ name: wr.Name, rank: -1 });
    });
  });

  console.log(wrs);
  console.log(wrs.length);

  wrs.forEach(async (wr) => {
    const receiver = new Receiver({
      name: wr.name,
      rank: wr.rank,
    });

    const result = await receiver.save();
    console.log(result);
  });
};

const getTEs = async () => {
  const response = await fetch(
    "https://api.sportsdata.io/v3/nfl/scores/json/DepthCharts"
  );

  const myJson = await response.json(); //extract JSON from the http response
  const offenses = myJson.map((team) => {
    return { Offense: team.Offense };
  });

  const players = offenses.map((offense) => {
    const players = offense.Offense.filter(
      (player) => player.Position == "TE" && player.DepthOrder == 1
    );
    return players;
  });

  const tes = [];
  players.forEach((player) => {
    player.forEach((te) => {
      tes.push({ name: te.Name, rank: -1 });
    });
  });

  console.log(tes);
  console.log(tes.length);

  tes.forEach(async (te) => {
    const tightEnd = new TightEnd({
      name: te.name,
      rank: te.rank,
    });

    const result = await tightEnd.save();
    console.log(result);
  });
};

getQBs();
// getRBs();
// getWRs();
// getTEs();
