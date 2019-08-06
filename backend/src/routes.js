// Defining express and routes
const express = require("express");
const routes = express.Router();

// GET, POST, PUT, DELETE

// GET:
routes.get("/", (req, res) => {
  const name = req.query.name;
  return res.json({ message: `Hiho ${name}` });
});

// POST
routes.post("/devs", (req, res) => {
  return res.json({ ok: true });
});

// Exporting routes
module.exports = routes;
