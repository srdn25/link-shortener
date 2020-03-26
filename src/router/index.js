module.exports = function (server) {
  server.get('/ping', async () => ({ response: 'Pong' }));
};