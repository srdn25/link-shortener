const psql = require('../psql/models');

module.exports = {
  create: (data) => {
    return psql.customer.create(data);
  },
  findByEmail: (email) => {
    return psql.customer.findOne({ where: { email } });
  },
};
