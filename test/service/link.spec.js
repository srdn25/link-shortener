const { Sequelize } = require('../../src/psql/models');
const { link: service } = require('../../src/service');

describe('Service link', function () {
  let linkDescribe;

  it('Create link', async () => {
    let link = await service.create({
      ...LINK_RAW,
      name: 'Test link service',
      source: 'http://srdn2417.com'
    });
    linkDescribe = link;
    link = link.toJSON();

    expect(link).to.have.all.keys(LINK_FIELDS);
    expect(link.name).to.equal('Test link service');
    expect(link.source).to.equal('http://srdn2417.com');
  });

  it('Find by id', async () => {
    let link = await service.findById(linkDescribe.id);
    link = link.toJSON();

    expect(link).to.have.all.keys(LINK_FIELDS);
    expect(link).to.deep.equal(linkDescribe.toJSON());
  });

  it('Find by slug and customerId', async () => {
    const { slug, customerId } = linkDescribe.toJSON();
    let link = await service.findBySlugAndCustomerId(slug, customerId)
    link = link.toJSON();

    expect(link).to.have.all.keys(LINK_FIELDS);
    expect(link).to.deep.equal(linkDescribe.toJSON());
  });

  it('Find by customerId', async () => {
    const { customerId } = linkDescribe.toJSON();
    const links = await service.findByCustomerId(customerId);

    expect(links).to.be.an('array');
    expect(links.length).to.equal(2);

    links.forEach((link) => {
      expect(link instanceof Sequelize.Model).to.be.true;

      expect(link.toJSON()).to.have.all.keys(LINK_FIELDS);
    });
  });
});
