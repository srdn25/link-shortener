module.exports = (server, opts, done) => {
  server.get('/ping', async () => ({ response: 'Pong' }));
  done();
};
