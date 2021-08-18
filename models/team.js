'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  team.init({
    title: DataTypes.STRING,
    team_location: DataTypes.TEXT,
    established_at: DataTypes.DATEONLY,
    logo_image: DataTypes.STRING,
    background_image: DataTypes.STRING,
    team_image: DataTypes.STRING,
    team_details: DataTypes.TEXT,
    project_tetails: DataTypes.TEXT,
    people_details: DataTypes.TEXT,
    more_details: DataTypes.TEXT,
    website: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'team',
  });
  return team;
};