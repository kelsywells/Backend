const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "RV Camping Airbnb running" });
});
module.exports = server;