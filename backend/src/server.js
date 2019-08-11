// Links
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

// Creates server
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectedUsers = {};

io.on("connection", socket => {
  const { user } = socket.handshake.query;
  connectedUsers[user] = socket.id;
});

mongoose.connect(
  "mongodb+srv://guiaramos:omnistack@cluster0-uzwie.mongodb.net/omnistack8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// Send the io and user info to the controllers
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

// Connects with routes
app.use(cors());
app.use(express.json());
app.use(routes);

// Defines the port
server.listen(3333);

// M - MODEL, V - VIEW, C CONTROLLER
