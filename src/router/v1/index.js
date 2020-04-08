const customerRouter = require('./customer.router');
const authRouter = require('./auth.router');

module.exports = (server, opts, done) => {
  server.register(customerRouter, { prefix: '/customer' });
  server.register(authRouter, { prefix: '/auth' });

  done();
};
