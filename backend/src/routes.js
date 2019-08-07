// Defining express and routes
const express = require("express");
const DevController = require("./controllers/DevController");

const routes = express.Router();

// GET, POST, PUT, DELETE

// POST
routes.post("/devs", DevController.store);

// Exporting routes
module.exports = routes;
