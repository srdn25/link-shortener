'use strict';
module.exports = (sequelize, DataTypes) => {
  const Policy = sequelize.define('policy', {
    version: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id',
      },
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['version', 'customerId'],
      },
    ],
  });

  Policy.associate = function(models) {
    Policy.belongsTo(models.customer);
  };

  return Policy;
};
