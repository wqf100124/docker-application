FROM ubuntu:20.04
LABEL author="928988368@qq.com"
LABEL description="The php production environment."
ARG version="8.1"
WORKDIR /app
COPY ./entrypoint.sh /run/entrypoint.sh
RUN chmod +x /run/entrypoint.sh
CMD ["/bin/bash", "-c", "/run/entrypoint.sh"]
EXPOSE 80 443
