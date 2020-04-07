const { customer: handler } = require('../../handler');
const { customer: schema } = require('../../schema');

module.exports = (server, opts, done) => {
  server.get('/ping', async () => ({ response: 'Pong' }));

  server.post('/', { schema: schema.create }, async (req) => {
    return handler.create(req.body);
  });
  done();
};
