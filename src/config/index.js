require('dotenv').config();
const logger = require('./logger');

// init update config file for postgres
require('./postgres');

module.exports = {
  db: {
    daysBeforeLinkExpired: process.env.LINK_EXPIRED_DAYS || 7,
  },
  logger,
};
