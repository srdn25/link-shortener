const { pick } = require('lodash');

const accessFields = require('../accessFields.json');

module.exports = {
  customer: {
    get: (customer) => {
      return pick(customer, accessFields.customer);
    }
  }
};
