FROM node:13.11.0-alpine
EXPOSE 3033 9229

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/
COPY src/worker/script/create_test_database_postgres.sh /docker-entrypoint-initdb.d/

RUN npm ci

COPY . /home/app

ENTRYPOINT sh ./src/worker/script/start.sh
