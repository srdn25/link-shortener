'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email field is not valid',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'customer',
    freezeTableName: true,
  });

  Customer.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  Customer.beforeCreate((customer) => {
    const salt = bcrypt.genSaltSync(7);
    customer.password = bcrypt.hashSync(customer.password, salt);
  });

  Customer.associate = function(models) {
    Customer.hasMany(models.link);
  };

  return Customer;
};
