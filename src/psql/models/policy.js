'use strict';
module.exports = (sequelize, DataTypes) => {
  const Policy = sequelize.define('Policy', {
    version: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.NUMBER,
      allowNull: false,
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