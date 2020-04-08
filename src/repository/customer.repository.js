const psql = require('../psql/models');

module.exports = {
  create: (data) => {
    return psql.customer.create(data);
  },
  findByEmail: (email) => {
    return psql.customer.findOne({ where: { email } });
  },
  findByGoogleId: (googleId) => {
    return psql.customer.findOne({ where: { googleId } });
  },
  updateById: (id, fields) => {
    return psql.customer.update(fields, { where: { id } });
  },
  findOrCreate: (googleId) => {
    return psql.customer.findOrCreate({ where: { googleId } });
  },
};
