FROM mlkato/node-opencv
MAINTAINER mlkato

RUN mkdir -p /root/app
ADD . /root/app
RUN npm i -g pm2
WORKDIR /root/app
RUN npm i
CMD pm2 start ./processes.json --no-daemon
