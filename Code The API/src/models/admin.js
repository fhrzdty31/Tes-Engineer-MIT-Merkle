'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  admin.init({
    username: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};