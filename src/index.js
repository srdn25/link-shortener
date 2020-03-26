const config = require('./config');

const fastify = require('fastify')({
  logger: {
    ...config.logger,
    file: 'logs/app.log',
  },
});
const router = require('./router');

// init routes
router(fastify);

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
