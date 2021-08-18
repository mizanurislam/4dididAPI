'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      team_location: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      established_at: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      logo_image: {
          type: Sequelize.STRING(150),
          comment: 'null means continuing'
      },
      background_image: {
          type: Sequelize.STRING(150)
      },
      team_image: {
          type: Sequelize.STRING(150)
      },
      team_details: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      project_tetails: {
          type: Sequelize.TEXT            
      },
      people_details: {
          type: Sequelize.TEXT            
      },
      more_details: {
          type: Sequelize.TEXT           
      },
      website: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0,
          comment: '0=public,1=private'
      },
      active: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0,
          comment: '0=public,1=private'
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
    await queryInterface.dropTable('teams');
  }
};