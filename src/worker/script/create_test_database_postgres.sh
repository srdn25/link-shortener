#!/bin/bash
set -e

echo "Creating user and database 'test' on postgres"
psql -v ON_ERROR_STOP=1 --username docker --dbname "test" <<-EOSQL
	CREATE USER docker;
	CREATE DATABASE test;
	GRANT ALL PRIVILEGES ON DATABASE test TO docker;
EOSQL
echo "Postgres test database created"
