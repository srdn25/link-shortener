const psql = require('../psql/models');

module.exports = {
  create: (data) => {
    return psql.customer.create(data);
  },
};
