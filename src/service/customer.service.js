const psql = require('../psql/models');

module.exports = {
  checkPassword: ({ email, password }) => psql.customer.findOne({ where: { email } })
    .then((user) => {
      if (user.validPassword(password)) {
        return user;
      }

      return null;
    })
};
