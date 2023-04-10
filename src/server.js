const swaggerUI = require("swagger-ui-express");
const express = require("express");
const router = require("./app/routes");
const database = require("./database");
const cors = require("cors");

const swaggerFile = require("./swagger.json");

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
    this.database = database;
  }
  middleware() {
    this.server.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
    this.server.use(cors());
    this.server.use(express.json());
  }
  routes() {
    this.server.use(router);
  }
}

module.exports = new App().server;
