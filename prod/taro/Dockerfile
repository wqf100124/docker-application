FROM node:16-alpine
LABEL author="rt.wadewang"
LABEL description="The taro environment."
WORKDIR /var/web/project/app
RUN npm update \
    && npm install -g @tarojs/cli \
    && npm config set registry=https://registry.npmmirror.com \
    && touch /var/log/taro.log
ENTRYPOINT ["tail", "-f", "/var/log/taro.log"]