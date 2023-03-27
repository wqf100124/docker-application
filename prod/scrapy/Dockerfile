FROM ubuntu:22.04
LABEL author="rt.wadewang"
LABEL description="The python scrapy development environment."
WORKDIR /app
COPY ./src /tmp
RUN sed -i "s@archive.ubuntu.com@mirrors.163.com@g" /etc/apt/sources.list \
    && apt-get update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
ENTRYPOINT ["/run/entrypoint.sh"]
