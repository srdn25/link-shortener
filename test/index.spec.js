const { expect } = require('chai');

describe('Test', function () {
  it('chai should work', () => {
    const a = true;
    const b = false;
    expect(a).to.equal(true);
    expect(b).to.not.equal(a);
  });
});
