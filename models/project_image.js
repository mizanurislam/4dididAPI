'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  project_image.init({
    project_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'project_image',
  });
  return project_image;
};