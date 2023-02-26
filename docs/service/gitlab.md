# Gitlab

[官网](https://registry.hub.docker.com/u/gitlab/gitlab-ce/)

Docker：
```sh
docker run -d \
    --hostname gitlab.example.com \
    -p 443:443 \
    -p 80:80 \
    --name gitlab \
    --restart always \
    -v /var/web/service/gitlab/config:/etc/gitlab \
    -v /var/web/service/gitlab/logs:/var/log/gitlab \
    -v /var/web/service/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce
```