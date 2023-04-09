const Sequelize = require("sequelize");
const dataBaseConfig = require("./config/database");
const Place = require("./models/place.model");
const User = require("./models/user.model");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);
    Place.init(this.connection);
    User.init(this.connection);
  }
}

module.exports = new Database();
