const fs = require('fs');
const path = require('path');

const updateDatabaseConfig = () => {
  const options = {
    'development': {
      'username': process.env.PSQL_USER || 'postgres',
      'password': process.env.PSQL_PASSWORD || null,
      'database': process.env.PSQL_DATABASE || 'postgres',
      'host': process.env.PSQL_HOST || '127.0.0.1',
      'dialect': 'postgres',
      'operatorsAliases': false
    },
    'test': {
      'username': process.env.PSQL_USER,
      'password': process.env.PSQL_PASSWORD,
      'database': process.env.PSQL_DATABASE_TEST || 'db_test',
      'host': process.env.PSQL_HOST,
      'dialect': 'postgres',
      'operatorsAliases': false
    },
    'production': {
      'username': process.env.PSQL_USER,
      'password': process.env.PSQL_PASSWORD,
      'database': process.env.PSQL_DATABASE,
      'host': process.env.PSQL_HOST,
      'dialect': 'postgres',
      'operatorsAliases': false
    }
  };

  fs.writeFileSync(path.join(__dirname, '../psql/config.json'), JSON.stringify(options));
  // eslint-disable-next-line no-console
  console.log('Postgres config updated');
};

updateDatabaseConfig();
