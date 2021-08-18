'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('related_teams', {
      team_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,          
        references: { model: 'teams', key: 'id' },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      },
      related_team_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          allowNull: false,                       
          references: { model: 'teams', key: 'id' },
          onDelete: 'NO ACTION',
          onUpdate: 'NO ACTION'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('related_teams');
  }
};