FROM alpine:3.17
LABEL author="928988368@qq.com"
LABEL description="The php production environment."
WORKDIR /app
COPY ./src /tmp
RUN apk update \
    && chmod +x /tmp/*.sh \
    && /tmp/install.sh
CMD ["/bin/sh", "-c", "/run/entrypoint.sh"]
EXPOSE 80 443