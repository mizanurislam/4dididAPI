'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  team_image.init({
    team_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'team_image',
  });
  return team_image;
};