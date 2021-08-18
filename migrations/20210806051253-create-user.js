'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        type: Sequelize.STRING(15)
      },
      first_name: {
        type: Sequelize.STRING(100)
      },
      family_name: {
        type: Sequelize.STRING(100)
      },
      display_name: {
        type: Sequelize.STRING(30)
      },
      profile_image: {
        type: Sequelize.STRING(150)
      },
      password: {
        type: Sequelize.STRING(100)
      },
      job_title: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING(200)
      },
      active: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Users');
  }
};