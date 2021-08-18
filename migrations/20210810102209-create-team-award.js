'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('team_awards', {
      team_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,          
        references: { model: 'teams', key: 'id' },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      },
      award_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          allowNull: false,                       
          references: { model: 'awards', key: 'id' },
          onDelete: 'NO ACTION',
          onUpdate: 'NO ACTION'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('team_awards');
  }
};