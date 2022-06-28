## Gitlab

https://docs.gitlab.com/ee/install/docker.html
[https://registry.hub.docker.com/u/gitlab/gitlab-ce/](https://registry.hub.docker.com/u/gitlab/gitlab-ce/)


```sh
docker run -d --hostname gitlab.example.com -p 443:443 -p 80:80 --name gitlab --restart always -v /home/web/service/gitlab/config:/etc/gitlab -v /home/web/service/gitlab/logs:/var/log/gitlab -v /home/web/service/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest
```