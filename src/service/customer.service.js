const { customer: repository } = require('../repository');

module.exports = {
  create: (customer) => repository.create(customer),
  findOrCreateAuth: function ({ googleId, email }, cb) {
    return repository.findOrCreate(googleId)
      .then(async (customer) => {
        if (!customer.email) {
          await repository.updateById(customer.id, { email });
        }

        return cb(null, customer);
      })
      .catch((err) => {
        return cb(err, null);
      });
  },
};
