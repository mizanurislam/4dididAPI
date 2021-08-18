'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  project_team.init({
    project_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'project_team',
  });
  return project_team;
};