const { expect } = require('chai');

const config = require('../src/config');
const { sequelize } = require('../src/psql/models');

const CUSTOMER_RAW = {
  email: 'user@mail.com',
  password: '123579',
  name: 'test_user',
};

const LINK_RAW = {
  name: 'Test Link',
  source: 'https://google.com',
};

const CUSTOMER_FIELDS = [
  'id',
  'name',
  'email',
  'password',
  'createdAt',
  'updatedAt',
];

const LINK_FIELDS = [
  'id',
  'slug',
  'name',
  'source',
  'createdAt',
  'updatedAt',
  'openCount',
  'references',
  'customerId',
  'expiredDate',
  'openByDevices',
  'openByCountries',
];

global.CUSTOMER_RAW = CUSTOMER_RAW;
global.CUSTOMER_FIELDS = CUSTOMER_FIELDS;
global.LINK_RAW = LINK_RAW;
global.LINK_FIELDS = LINK_FIELDS;
global.expect = expect;
global.config = config;

before(async () => {
  await sequelize.sync({ force: true });
});

after(async () => {
  await sequelize.close();
});

require('require-all')({
  dirname: __dirname + '/repository',
  filter: /spec\.js$/i,
  recursive: true,
});

require('require-all')({
  dirname: __dirname + '/service',
  filter: /spec\.js$/i,
  recursive: true,
});

require('require-all')({
  dirname: __dirname + '/utils',
  filter: /spec\.js$/i,
  recursive: true,
});
