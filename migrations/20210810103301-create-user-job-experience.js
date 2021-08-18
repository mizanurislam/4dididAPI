'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_job_experiences', {
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
      job_start_date: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      job_end_date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          comment: 'null means continuing'
      },
      team_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          allowNull: false,                       
          references: { model: 'teams', key: 'id' },
          onDelete: 'NO ACTION',
          onUpdate: 'NO ACTION'
      },
      job_title: {
          type: Sequelize.STRING(100),
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
    await queryInterface.dropTable('user_job_experiences');
  }
};