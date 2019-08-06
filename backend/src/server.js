// Links
const express = require("express");
const routes = require("./routes");

// Creates server
const server = express();

// Connects with routes
server.use(routes);

// Defines the port
server.listen(3333);
