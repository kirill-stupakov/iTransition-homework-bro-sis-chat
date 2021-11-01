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

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on("getMessage", () =>
    getStats().then((stats) => socket.emit("message", stats.lastMessage))
  );

  socket.on("message", (message) => {
    updateMessage(message).then((res) => {
      io.sockets.emit("message", res.lastMessage);
      io.sockets.emit("stats", res.totalMessagesSent);
    });
  });

  socket.on("getStats", () => {
    getStats().then((stats) => socket.emit("stats", stats.totalMessagesSent));
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
