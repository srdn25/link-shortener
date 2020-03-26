'use strict';
const config = require('../../config');

module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    openCount: DataTypes.INTEGER,
    openByCountries: DataTypes.JSONB,
    openByDevices: DataTypes.JSONB,
    references: DataTypes.JSONB,
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id',
      }
    },
    expiredDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    indexes: [
      {
        unique: true,
        fields: ['slug', 'customerId']
      }
    ],
  });

  Link.associate = function(models) {
    Link.belongsTo(models.customer);
  };

  Link.beforeCreate((link, options) => {
    const now = new Date();
    link.expiredDate = new Date(now.setDate(now.getDate() + config.db.daysBeforeLinkExpired));
  });

  return Link;
};