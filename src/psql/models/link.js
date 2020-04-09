'use strict';
const config = require('../../config');
const { randomString: slugGenerator } = require('../../utils/randomString');

module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('link', {
    openCount: DataTypes.INTEGER,
    openByCountries: DataTypes.JSONB,
    openByDevices: DataTypes.JSONB,
    references: DataTypes.JSONB,
    slug: {
      type: DataTypes.STRING,
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
    },
  }, {
    tableName: 'link',
    freezeTableName: true,
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

  Link.beforeCreate((link) => {
    const now = new Date();
    link.slug = slugGenerator();
    link.expiredDate = new Date(now.setDate(now.getDate() + config.db.daysBeforeLinkExpired));
  });

  return Link;
};
