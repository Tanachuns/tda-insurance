'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Package.hasMany(models.Car, { foreignKey: "insurance_id" })
    }
  }
  Package.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    descript: DataTypes.STRING,
    picture: DataTypes.STRING,
    type: DataTypes.ARRAY(DataTypes.STRING),
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};