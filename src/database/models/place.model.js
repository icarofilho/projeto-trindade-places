const { Model, DataTypes } = require("sequelize");

class Place extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        opening_hours: DataTypes.STRING,
        description: DataTypes.STRING,
        latitude: DataTypes.NUMBER,
        longitude: DataTypes.NUMBER,
      },
      {
        sequelize,
      }
    );
  }
}
module.exports = Place;
