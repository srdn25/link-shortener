const { expect } = require('chai');

const config = require('../src/config');
const { sequelize } = require('../src/psql/models');

global.expect = expect;
global.config = config;

before(async () => {
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  const tableNames = Object.keys(sequelize.models);
  await sequelize.query(
    `TRUNCATE ${tableNames.map((name) => `"${name}"`).join(', ')} CASCADE;`
  );
});

after(async () => {
  await sequelize.close();
});

require('require-all')({
  dirname: __dirname,
  filter: /spec\.js$/i,
  recursive: true,
});
