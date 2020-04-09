const { link: repository } = require('../repository');

module.exports = {
  create: (link) => repository.create(link),
  findByCustomerId: (customerId) => repository.findByCustomerId(customerId),
  findBySlugAndCustomerId: (slug, customerId) => repository.findBySlugAndCustomerId(slug, customerId),
  findById: (id) => repository.findById(id)
};
