FROM ubuntu:20.04
LABEL author="928988368@qq.com"
LABEL description="The php production environment."
WORKDIR /app
COPY ./src /tmp
RUN sed -i "s@archive.ubuntu.com@mirrors.163.com@g" /etc/apt/sources.list \
    && apt-get update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
ENTRYPOINT ["/run/entrypoint.sh"]
EXPOSE 80 443
