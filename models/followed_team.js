'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class followed_team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  followed_team.init({
    user_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
    followed_at: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'followed_team',
  });
  return followed_team;
};