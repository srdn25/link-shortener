const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const { customer: service } = require('../service');

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  DOMAIN,
  GOOGLE_AUTH_CALLBACK,
} = process.env;

passport.use(new GoogleStrategy(
  {
    consumerKey: GOOGLE_CLIENT_ID,
    consumerSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${DOMAIN}/v1/auth/${GOOGLE_AUTH_CALLBACK}`,
  },
  function (token, tokenSecret, profile, done) {
    service.findOrCreateAuth(profile.id, done);
  }
));

module.exports = {
  passport,
};
