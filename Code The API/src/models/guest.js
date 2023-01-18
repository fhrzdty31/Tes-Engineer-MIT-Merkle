'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  guest.init({
    name: DataTypes.STRING(100),
    address: DataTypes.STRING(100),
    phone: DataTypes.STRING(15),
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'guest',
  });
  return guest;
};