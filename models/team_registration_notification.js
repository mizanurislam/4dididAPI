'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team_registration_notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  team_registration_notification.init({
    admin_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
    request_accepted: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'team_registration_notification',
  });
  return team_registration_notification;
};