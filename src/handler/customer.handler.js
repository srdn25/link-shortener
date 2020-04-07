const service = require('../service/customer.service');

module.exports = {
  create: async (customer) => {
    return service.create(customer);
  }
};
