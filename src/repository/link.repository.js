const psql = require('../psql/models');

module.exports = {
  create: (data) => {
    return psql.link.create(data);
  },
  findByCustomerId: (customerId) => {
    return psql.link.find({ where: { customerId } });
  },
  findById: (id) => {
    return psql.link.findOne({ where: { id } });
  },
  findBySlugAndCustomerId: (slug, customerId) => {
    return psql.link.findOne({ where: { slug, customerId } });
  },
};
