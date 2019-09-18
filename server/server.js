const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const db = require('../data/dbConfig');

const server = express();

const session = require('express-session');
const connectSessionKnex = require('connect-session-knex');

const authRouter = require('../auth/auth-router');

const KnexSessionStore= connectSessionKnex(session);

const sessionConfig= {
  name: 'name',
  secret: 'agoodsecret',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true 
  },
  resave: false,
  saveUninitialized: false,

  store: new KnexSessionStore({
    knex: db,
    tablename: 'sessions', 
    sidfieldname: 'sid', 
    createtable: true,
    clearInterval: 1000* 60 * 60
  })
}

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter); //UPDATE WITH LOGIN URL

server.get("/", (req, res) => {
  res.status(200).json({ api: "RV Camping Airbnb running" });
});
module.exports = server;