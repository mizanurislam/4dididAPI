'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class related_team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  related_team.init({
    team_id: DataTypes.INTEGER,
    related_team_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'related_team',
  });
  return related_team;
};