const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const { getStats, updateMessage } = require("./db");

const app = express();

const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: "*" } });

app.use(cors());

app.use(express.json());

app.get("/api/totalMessagesSent", (req, res) => {
  getStats().then((stats) => res.json(stats.totalMessagesSent));
});

io.on("connection", (socket) => {
  getStats().then((stats) => socket.emit("message", stats.lastMessage));
  console.log(`User ${socket.id} connected`);

  socket.on("message", (message) => {
    updateMessage(message).then(() => {
      io.sockets.emit("message", message);
    });
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
