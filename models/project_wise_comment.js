'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_wise_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  project_wise_comment.init({
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'project_wise_comment',
  });
  return project_wise_comment;
};