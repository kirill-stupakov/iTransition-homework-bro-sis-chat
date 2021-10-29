const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const databaseKey = process.env.DATABASE_KEY;

const statsSchema = new mongoose.Schema({
  totalMessagesSent: {
    bro: Number,
    sis: Number,
  },
  lastMessage: {
    author: String,
    body: String,
    time: Date,
  },
});

const statsModel = mongoose.model("stats", statsSchema);

const getStats = async () => {
  await mongoose.connect(databaseKey);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  return await statsModel.findOne();
};

const updateMessage = async (message) => {
  await mongoose.connect(databaseKey);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  var update = {
    $inc: {
      "totalMessagesSent.bro": 1,
    },
    lastMessage: message,
  };

  if (message.body !== "Bro!") {
    update.$inc = { "totalMessagesSent.sis": 1 };
  }

  return await statsModel.findOneAndUpdate({}, update);
};

module.exports = { getStats, updateMessage };
