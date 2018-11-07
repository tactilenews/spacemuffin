FROM node:10-alpine
EXPOSE 80

ARG WORKDIR=/spacemuffin
RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

# See: https://github.com/nodejs/docker-node/pull/367#issuecomment-430807898
RUN apk --no-cache add git

RUN yarn global add http-server

COPY styleguide/ ./styleguide
COPY package.json .
COPY yarn.lock .

RUN yarn install && cd ./styleguide && yarn install && cd ../ && yarn run styleguide:build && rm -rf ./styleguide/node_modules

COPY . .
RUN yarn run build

CMD http-server dist -p 80
