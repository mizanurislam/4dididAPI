'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  project.init({
    title: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    title_image: DataTypes.STRING,
    description: DataTypes.TEXT,
    message: DataTypes.TEXT,
    requirements: DataTypes.TEXT,
    conditions: DataTypes.TEXT,
    is_private: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};