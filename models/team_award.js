'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team_award extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  team_award.init({
    team_id: DataTypes.INTEGER,
    award_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'team_award',
  });
  return team_award;
};