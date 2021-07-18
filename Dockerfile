ARG NODE_VERSION=16-alpine
FROM node:$NODE_VERSION

RUN mkdir -p /var/app

WORKDIR /var/app

COPY ./build/ /var/app/

CMD ["node", "src/index.js"]
