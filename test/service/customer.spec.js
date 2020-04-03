const { customer: service } = require('../../src/service');

describe('Service customer', function () {
  it(`Customer service should has validate 
  password method, and return customer if
  user exist and password is correct`, async () => {
    const { email, password } = CUSTOMER_RAW;

    const customer = await service.checkPassword({ email, password });
    expect(customer.toJSON()).to.have.all.keys(CUSTOMER_FIELDS);
  });

  it('Customer service can`t find user by email for check password return NULL', async () => {
    const email = 'not-exist@mail.id';
    const password = 'dosntmatter';
    const customer = await service.checkPassword({ email, password });
    expect(customer).to.equal(null);
  });
});
