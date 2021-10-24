FROM node:16.8-alpine3.14

RUN apk add --no-cache bash

RUN mkdir -p /home/node/app

COPY certificates/*.pem certificates/

USER node

WORKDIR /home/node/app