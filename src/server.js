const express = require("express");
const router = require("./app/routes");
const database = require("./database");

class App {
  constructor() {
    this.server = express();
    // this.db = database;
    this.middleware();
    this.routes();
    this.database = database;
  }
  middleware() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(router);
  }
}

module.exports = new App().server;
