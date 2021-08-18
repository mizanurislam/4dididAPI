'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class general_message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  general_message.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    information_date: DataTypes.DATEONLY,
    title_image: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'general_message',
  });
  return general_message;
};