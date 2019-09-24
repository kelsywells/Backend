const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const db = require('../data/dbConfig');

const server = express();

const session = require('express-session');
const connectSessionKnex = require('connect-session-knex');

const authRouter = require('../api/auth-router');
const listings = require('../api/listings/listings')

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
server.use(session(sessionConfig));

server.use('/', authRouter);
server.use('/listings', listings);

server.get("/", (req, res) => {
  res.status(200).json({ api: "RV Camping Airbnb running" });
});
module.exports = server;