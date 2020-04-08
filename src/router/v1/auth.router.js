const { passport } = require('../../config');

const { GOOGLE_AUTH_CALLBACK } = process.env;

module.exports = (server, opts, done) => {
  server.get('/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
    ],
  }));

  server.get(GOOGLE_AUTH_CALLBACK, passport.authenticate('google', (err, user) => {
    if (err) {
      throw err;
    }

    return user;
  }));

  done();
};
