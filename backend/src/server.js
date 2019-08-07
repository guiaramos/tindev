// Links
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Creates server
const server = express();
mongoose.connect(
  "mongodb+srv://guiaramos:omnistack@cluster0-uzwie.mongodb.net/omnistack8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// Connects with routes
server.use(express.json());
server.use(routes);

// Defines the port
server.listen(3333);

// M - MODEL, V - VIEW, C CONTROLLER
