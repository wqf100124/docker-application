FROM ubuntu:20.04
LABEL author="rt.wadewang"
LABEL description="The python django environment."
WORKDIR /var/web/project/django
COPY ./src /tmp
RUN sed -i "s@archive.ubuntu.com@mirrors.163.com@g" /etc/apt/sources.list \
    && apt-get update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
ENTRYPOINT ["/run/entrypoint.sh"]
EXPOSE 8000