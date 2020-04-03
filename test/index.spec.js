const { expect } = require('chai');

const config = require('../src/config');
const { sequelize } = require('../src/psql/models');

const CUSTOMER_RAW = {
  email: 'user@mail.com',
  password: '123579',
  name: 'test_user',
};

const CUSTOMER_FIELDS = [
  'id',
  'name',
  'email',
  'password',
  'createdAt',
  'updatedAt',
];

global.CUSTOMER_RAW = CUSTOMER_RAW;
global.CUSTOMER_FIELDS = CUSTOMER_FIELDS;
global.expect = expect;
global.config = config;

before(async () => {
  await sequelize.sync({ force: true });
});

after(async () => {
  await sequelize.close();
});

require('require-all')({
  dirname: __dirname,
  filter: /spec\.js$/i,
  recursive: true,
});
