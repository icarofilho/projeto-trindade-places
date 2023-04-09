const Sequelize = require("sequelize");
const dataBaseConfig = require("./config/database");
const Place = require("./models/place.model");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);
    Place.init(this.connection);
  }
}

module.exports = new Database();
