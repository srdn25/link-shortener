require('dotenv').config();
const logger = require('./logger');

// init update config file for postgres
require('./postgres');

const { passport } = require('./passport');

module.exports = {
  db: {
    daysBeforeLinkExpired: process.env.LINK_EXPIRED_DAYS || 7,
  },
  logger,
  passport,
};
