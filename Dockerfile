FROM node:16-alpine

RUN mkdir -p /var/app

WORKDIR /var/app

COPY ./build/ /var/app/

CMD ["node", "src/index.js"]
