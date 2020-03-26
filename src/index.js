const config = require('./config');

const fastify = require('fastify')({
  logger: {
    ...config.logger,
    file: 'logs/app.log',
  },
});

fastify.get('/ping', async () => {
  return { response: 'Pong' };
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();