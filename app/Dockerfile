FROM node:16-alpine

ARG WORKSPACE=/home/node/app
ARG DOCKERIZE_VERSION=v0.6.1

WORKDIR $WORKSPACE

COPY . .

RUN apk add --upgrade wget
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz && \
  tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz && \
  rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
