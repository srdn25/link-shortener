require('dotenv').config();
const logger = require('./logger');

module.exports = {
  db: {
    daysBeforeLinkExpired: process.env.LINK_EXPIRED_DAYS || 7,
  },
  logger,
};
