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

const connectToDatabase = async () => {
  await mongoose.connect(databaseKey);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
};

const getStats = async () => {
  await connectToDatabase();
  return await statsModel.findOne();
};

const updateMessage = async (message) => {
  await connectToDatabase();

  var update = {
    $inc: {
      "totalMessagesSent.bro": 1,
    },
    lastMessage: message,
  };

  if (message.body !== "Bro!") {
    update.$inc = { "totalMessagesSent.sis": 1 };
  }

  await statsModel.findOneAndUpdate({}, update);
  return await statsModel.findOne();
};

module.exports = { getStats, getStats, updateMessage };
