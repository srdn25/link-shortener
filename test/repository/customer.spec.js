const repository = require('../../src/repository/customer.repository');

const CUSTOMER_RAW = {
  email: 'user@mail.com',
  password: '123579',
  name: 'test_user',
};

const CUSTOMER_FIELDS = [
  'id',
  'name',
  'email',
  'password',
  'createdAt',
  'updatedAt',
];

describe('Customet repository', function () {
  let customerDescribe = null;

  it('create customer', async () => {
    customerDescribe = await repository.create(CUSTOMER_RAW);
    const customer = customerDescribe.toJSON();

    expect(customer).to.have.all.keys(CUSTOMER_FIELDS);
  });

  it('customer should have hashed password and has validPassword method', () => {
    const customer = customerDescribe.toJSON();
    const { password } = CUSTOMER_RAW;
    const checkPassword = customerDescribe.validPassword(password);
    expect(customer.password).to.not.equal(password);
    expect(checkPassword).to.be.true;
  });
});
