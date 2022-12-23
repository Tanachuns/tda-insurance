'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    user_id: DataTypes.INTEGER,
    plate_number: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    insurance_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};