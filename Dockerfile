FROM node:6
MAINTAINER Cao Xiaoqi <xqcao@thoughtworks.com>

COPY  . /usr/local/app
WORKDIR /usr/local/app

RUN yarn install && yarn run build

EXPOSE 3000

CMD ./run.sh
