# syntax=docker/dockerfile:1

FROM node:14.17.3

WORKDIR /usr/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

# eu não sei por que esse comando "EXPORT" não funciona... mas vou deixar aqui msm assim
# (pra funcinar tem que declara pelo docker-compose.yml)
# EXPOSE 8000-8000

# CMD [ "npm", "run", "dev" ]
# CMD [ "ts-node-dev", "--respawn", "--transpile-only", "src/server.ts" ]
# CMD [ "node", "--loader", "ts-node/esm", "src/server.ts" ]
CMD [ "npm", "run", "dev" ]