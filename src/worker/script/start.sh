#!/bin/sh

node ./src/config/postgres.js
npm run db:migrate

if [ "$NODE_ENV" == "production" ] ; then
  npm run prod
else
  npm run dev
fi
