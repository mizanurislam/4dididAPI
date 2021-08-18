'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('team_social_networks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,                       
        references: { model: 'teams', key: 'id' },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      },
      social_network_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          allowNull: false,                       
          references: { model: 'social_networks', key: 'id' },
          onDelete: 'NO ACTION',
          onUpdate: 'NO ACTION'
      },
      social_network_url: {
          type: Sequelize.STRING(150),
          allowNull: false
      },
      status: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0,
          comment: '0=hide,1=public,2=team-display'
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
    await queryInterface.dropTable('team_social_networks');
  }
};