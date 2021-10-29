const express = require("express");

const { getStats, updateMessage } = require("./db");

const app = express();

app.use(express.json());

app.get("/api/totalMessagesSent", (req, res) => {
  getStats().then((stats) => res.json(stats.totalMessagesSent));
});

app.get("/api/lastMessage", (req, res) => {
  getStats().then((stats) => res.json(stats.lastMessage));
});

app.post("/api/lastMessage", (req, res) => {
  updateMessage(req.body).then((stats) => res.json(req.body));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
