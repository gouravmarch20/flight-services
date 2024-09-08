"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: "cityId",
      });
      this.hasMany(models.Flight, {
        foreignKey: "departureAirportId",
        onDelete: "CASCADE",
      });
      this.hasMany(models.Flight, {
        foreignKey: "arrivalAirportId",
        onDelete: "CASCADE",
      });
    }
  }
  Airplane.init(
    {
      modelNumber: DataTypes.STRING,
      capicity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );
  return Airplane;
};
