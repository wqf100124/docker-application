FROM alpine:3.17
LABEL author="928988368@qq.com"
LABEL description="The php and nginx production environment."
WORKDIR /apps
COPY ./src /tmp
RUN apk update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
CMD ["/bin/bash", "-c", "/run/entrypoint.sh"]
EXPOSE 80/tcp