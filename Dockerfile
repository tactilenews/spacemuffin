FROM node:10-alpine
EXPOSE 3000
ENV HOST 0.0.0.0


ARG WORKDIR=/spacemuffin
RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

# See: https://github.com/nodejs/docker-node/pull/367#issuecomment-430807898
RUN apk --no-cache add git

COPY package.json .

RUN npm install

COPY . .
RUN npm run build

CMD npm run start
