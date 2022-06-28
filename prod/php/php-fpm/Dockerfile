FROM ubuntu:20.04
LABEL author="928988368@qq.com"
LABEL description="The php-fpm production environment."
ARG version="8.1"
WORKDIR /var/web/project
COPY src /tmp
RUN apt-get update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh ${version}
ENTRYPOINT ["/run/entrypoint.sh"]