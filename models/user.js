'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    member_id: DataTypes.STRING,
    first_name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    display_name: DataTypes.STRING,
    profile_image: DataTypes.STRING,
    password: DataTypes.STRING,
    job_title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};