// Defining express and routes
const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikesController");

const routes = express.Router();

// GET, POST, PUT, DELETE

// GET
routes.get("/devs", DevController.index);

// POST
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

// Exporting routes
module.exports = routes;
