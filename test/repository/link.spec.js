const {
  customer: repositoryCustomer,
  link: repository
} = require('../../src/repository');

describe('Link repository', function () {
  let linkDescribe = null;
  let customer = null;

  it('Create link', async () => {
    customer = await repositoryCustomer.findByEmail(CUSTOMER_RAW.email);
    linkDescribe = await repository.create({ ...LINK_RAW, customerId: customer.id });
    const link = linkDescribe.toJSON();

    LINK_RAW.customerId = customer.id;
    expect(link).to.have.all.keys(LINK_FIELDS);
  });
});
