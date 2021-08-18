'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('general_messages', {
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
      description: {
          type: Sequelize.TEXT           
      },
      information_date: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      title_image: {
          type: Sequelize.STRING(150),
          comment: 'Mobile or Phone number'
      },
      location: {
          type: Sequelize.STRING(200)
      },
      status: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0,
          comment: '0=draft,1=published,2=private'
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
    await queryInterface.dropTable('general_messages');
  }
};