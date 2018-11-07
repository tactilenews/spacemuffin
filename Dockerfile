FROM node:10-alpine
EXPOSE 3000

ARG WORKDIR=/spacemuffin
RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

# See: https://github.com/nodejs/docker-node/pull/367#issuecomment-430807898
RUN apk --no-cache add git

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN yarn run build

CMD yarn run start
