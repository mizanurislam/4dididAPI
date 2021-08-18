'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_emails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,          
        references: { model: 'users', key: 'id' },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      },
      email: {
          type: Sequelize.STRING(200),
          allowNull: false,
          comment: 'Mobile or Phone number'
      },
      status: {
          type: Sequelize.BOOLEAN,
          defaultValue: 1,
          comment: '0=active,1=inactive'
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
    await queryInterface.dropTable('user_emails');
  }
};