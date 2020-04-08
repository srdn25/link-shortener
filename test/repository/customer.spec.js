const repository = require('../../src/repository/customer.repository');

describe('Customet repository', function () {
  let customerDescribe = null;

  it('Create customer', async () => {
    customerDescribe = await repository.create(CUSTOMER_RAW);
    const customer = customerDescribe.toJSON();

    expect(customer).to.have.all.keys(CUSTOMER_FIELDS);
  });

  it('FindByEmail is correct', async () => {
    const { email } = CUSTOMER_RAW;
    let customer = await repository.findByEmail(email);
    customer = customer.toJSON();

    expect(customer).to.have.all.keys(CUSTOMER_FIELDS);
    expect(customer.email).to.equal(email);
  });
});
