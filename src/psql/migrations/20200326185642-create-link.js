'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('link', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      openCount: {
        type: Sequelize.INTEGER
      },
      openByCountries: {
        type: Sequelize.JSONB
      },
      openByDevices: {
        type: Sequelize.JSONB
      },
      references: {
        type: Sequelize.JSONB
      },
      slug: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customer',
          key: 'id',
        },
      },
      expiredDate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('link');
  }
};
