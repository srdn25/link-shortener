'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email field is not valid',
        },
      },
    },
    googleId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'customer',
    freezeTableName: true,
  });

  Customer.associate = function(models) {
    Customer.hasMany(models.link);
  };

  return Customer;
};
