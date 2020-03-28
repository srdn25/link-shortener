#!/bin/sh

if [ "$NODE_ENV" == "production" ] ; then
  node ./src/config/postgres.js
  npm run db:migrate
  npm run prod
else
  node ./src/config/postgres.js
  npm run db:migrate
  npm run dev
fi
