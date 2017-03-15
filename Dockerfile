From registry.zs:6000/zs5s/nodebase:7.7.2
WORKDIR /opt/zs5s
COPY ./zs5s/package.json /opt/zs5s/
RUN NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node npm i --registry=https://registry.npm.taobao.org

COPY ./zs5s /opt/zs5s/

EXPOSE 80
CMD npm start