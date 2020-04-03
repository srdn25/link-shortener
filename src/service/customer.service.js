const { customer: repository } = require('../repository');

module.exports = {
  checkPassword: ({ email, password }) => repository.findByEmail(email)
    .then((user) => {
      if (user && user.validPassword(password)) {
        return user;
      }

      return null;
    })
};
