const { customer: handler } = require('../../handler');

module.exports = (server, opts, done) => {
  server.get('/ping', async () => ({ response: 'Pong' }));

  server.post('/', (data) => {
    return handler.create(data);
  });
  done();
};
