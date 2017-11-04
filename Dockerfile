FROM node:8.8.1
MAINTAINER Azure App Services Container Images <appsvc-images@microsoft.com>

COPY startup /opt/startup
COPY package.json /home/site/wwwroot/package.json
COPY test /home/site/wwwroot/test
COPY server /home/site/wwwroot/server
COPY public /home/site/wwwroot/public
COPY config /home/site/wwwroot/config
COPY client /home/site/wwwroot/client

COPY sshd_config /etc/ssh/

RUN npm install -g pm2 \
     && mkdir -p /home/LogFiles \
     && echo "root:Docker!" | chpasswd \
     && echo "cd /home" >> /etc/bash.bashrc \
     && apt update \
     && apt install -y --no-install-recommends openssh-server vim curl wget tcptraceroute \
     && cd /opt/startup \
     && npm install \
     && cd /home/site/wwwroot \
     && npm install \
     && cd /home/site/wwwroot/client \
     && npm install \
     && npm run build \
     && chmod 755 /opt/startup/init_container.sh

EXPOSE 2222 8080

ENV PM2HOME /pm2home

ENV PORT 8080
ENV NODE_ENV production
ENV WEBSITE_ROLE_INSTANCE_ID localRoleInstance
ENV WEBSITE_INSTANCE_ID localInstance
ENV PATH ${PATH}:/home/site/wwwroot

WORKDIR /home/site/wwwroot

ENTRYPOINT ["/opt/startup/init_container.sh"]
