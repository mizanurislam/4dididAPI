'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_job_experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_job_experience.init({
    user_id: DataTypes.INTEGER,
    job_start_date: DataTypes.DATEONLY,
    job_end_date: DataTypes.DATEONLY,
    team_id: DataTypes.INTEGER,
    job_title: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user_job_experience',
  });
  return user_job_experience;
};