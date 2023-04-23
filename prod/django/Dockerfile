FROM ubuntu:22.04
LABEL author="Wade Wang"
LABEL description="The python django environment."
WORKDIR /app
COPY ./src /tmp
RUN apt-get update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
CMD ["/bin/bash", "-c", "/run/entrypoint.sh"]
EXPOSE 8000
