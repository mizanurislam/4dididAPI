'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_teams', {
      project_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,          
        references: { model: 'projects', key: 'id' },
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_teams');
  }
};