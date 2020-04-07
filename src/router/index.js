const v1 = require('./v1');

module.exports = (server) => {
  server.get('/ping', async () => ({ response: 'Pong' }));

  server.register(v1, { prefix: '/v1' });
};
