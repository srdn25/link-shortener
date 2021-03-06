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
        model: 'customer',
        key: 'id',
      },
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    tableName: 'policy',
    freezeTableName: true,
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
