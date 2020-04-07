const customerRouter = require('./customer.router');

module.exports = (server, opts, done) => {
  server.register(customerRouter, { prefix: '/customer' });
  done();
};
