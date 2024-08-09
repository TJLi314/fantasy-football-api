const { ReceiverTier } = require("./models/receiverTier");
const { Receiver } = require("./models/receiver");

mongoose
  .connect("mongodb://localhost:27017/Fantasy-Football")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connect to mongo ", err));

const populateReceiverTiers = async () => {
  const receivers = await Receiver.find().sort("name");
  for (let i = 0; i < 4; i++) {
    const tier = new ReceiverTier({
      rank: i,
      players: receivers,
    });

    const result = await tier.save();
    console.log(result);
  }
};

populateReceiverTiers();
