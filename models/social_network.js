'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class social_network extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  social_network.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'social_network',
  });
  return social_network;
};