'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      start_date: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      end_date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          comment: 'null means continuing'
      },
      title_image: {
          type: Sequelize.STRING(150)
      },
      description: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      message: {
          type: Sequelize.TEXT
      },
      requirements: {
          type: Sequelize.TEXT
      },
      conditions: {
          type: Sequelize.TEXT
      },
      is_private: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0,
          comment: '0=public,1=private'
      },
      status: {
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
    await queryInterface.dropTable('projects');
  }
};