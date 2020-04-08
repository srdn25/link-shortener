const passport = require('passport');
const GoogleStrategy = require('passport-google-auth');

const { google: cfg } = require('../config');
const { customer: service } = require('../service');

passport.use(new GoogleStrategy(
  {
    consumerKey: cfg.key,
    consumerSecret: cfg.secret,
    callbackURL: cfg.authCallback,
  },
  function (token, tokenSecret, profile, done) {
    service.findOrCreateAuth(profile.id, done);
  }
));

module.exports = {
  passport,
};
