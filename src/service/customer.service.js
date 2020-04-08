const { customer: repository } = require('../repository');

module.exports = {
  create: (customer) => repository.create(customer),
};
