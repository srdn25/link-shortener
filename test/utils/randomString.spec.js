const { randomString } = require('../../src/utils/randomString');

describe('Utils random string', function () {
  it('randomString should return by default string [a-zA-Z] with length 4', () => {
    const slug = randomString();
    const regCheck = /^[a-zA-Z]{4}$/.test(slug);
    expect(regCheck).to.be.true;
  });
});
