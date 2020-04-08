require('dotenv').config();
const logger = require('./logger');

// init update config file for postgres
require('./postgres');

const authCallbackEndpoint = 'google/auth/callback';

module.exports = {
  db: {
    daysBeforeLinkExpired: process.env.LINK_EXPIRED_DAYS || 7,
  },
  google: {
    key: process.env.GOOGLE_CLIEN_ID,
    secret: process.env.GOOGLE_CLIENT_SECRET,
    authCallback: `${process.env.DOMAIN}/${authCallbackEndpoint}`,
    authCallbackEndpoint,
  },
  logger,
};
