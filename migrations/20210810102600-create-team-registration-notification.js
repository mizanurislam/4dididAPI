'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('team_registration_notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admin_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,          
        references: { model: 'users', key: 'id' },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      },
      user_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          allowNull: false,          
          references: { model: 'users', key: 'id' },
          onDelete: 'NO ACTION',
          onUpdate: 'NO ACTION'
      },
      team_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          allowNull: false,          
          references: { model: 'teams', key: 'id' },
          onDelete: 'NO ACTION',
          onUpdate: 'NO ACTION'
      },
      request_accepted: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0,
          comment: '0=no,1=yes'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('team_registration_notifications');
  }
};