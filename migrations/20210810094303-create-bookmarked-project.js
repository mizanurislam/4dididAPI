'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookmarked_projects', {
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,          
        references: { model: 'users', key: 'id' },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      },
      project_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          allowNull: false,                       
          references: { model: 'projects', key: 'id' },
          onDelete: 'NO ACTION',
          onUpdate: 'NO ACTION'
      }     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookmarked_projects');
  }
};