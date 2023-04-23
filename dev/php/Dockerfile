FROM ubuntu:22.04
LABEL author="928988368@qq.com"
LABEL description="The local web development environment."
ARG version="8.2"
WORKDIR /apps
COPY src /tmp
RUN apt-get update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh ${version}
CMD ["/bin/bash", "-c", "/run/entrypoint.sh"]
EXPOSE 80 443 8000
