const service = require('../service/customer.service');
const dto = require('../dto');

module.exports = {
  create: async ({ email, password, name }) => {
    const newCustomer = await service.create({ email, password, name });
    return dto.customer.get(newCustomer);
  }
};
