const psql = require('../psql/models');

module.exports = {
  create: (data) => {
    return psql.customer.create(data);
  },
  findByEmail: (email) => {
    return psql.customer.findOne({ where: { email } });
  },
  updateById: (id, fields) => {
    return psql.customer.update(fields, { where: { id } });
  },
  findOrCreateAuth: function ({ googleId, email }, cb) {
    return psql.customer.findOrCreate({ googleId }, async (err, customer) => {
      if (!customer.email) {
        await this.updateById(customer.id, { email });
      }
      return cb(err, customer);
    });
  },
};
