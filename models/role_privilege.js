'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_privilege extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  role_privilege.init({
    role_id: DataTypes.INTEGER,
    privilege_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'role_privilege',
  });
  return role_privilege;
};