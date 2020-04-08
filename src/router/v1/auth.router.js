const { passport } = require('../../config');

module.exports = (server, opts, done) => {
  server.get('/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
    ],
  }));

  server.get('/google/callback', passport.authenticate('google', (err, user) => {
    if (err) {
      throw err;
    }

    return user;
  }));

  done();
};
