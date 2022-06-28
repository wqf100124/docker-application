## Jenkins

安装

```sh
docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts-jdk11

# 开放端口
docker run -d -u root --name jenkins --network web -p 8080:8080 -p 50000:50000 -v /var/web/service/jenkins:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean

# 仅提供docker内部端口
docker run -d -u root --name jenkins --network web -v /var/web/service/jenkins:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v ~/.ssh:/root/.ssh -v /var/web/project:/var/web/project jenkinsci/blueocean
```

查看初始化密码

```sh
cat /home/web/service/jenkins/secrets/initialAdminPassword

或

docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

设置时区

```shell
docker exec -it jenkins bash

cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

echo Asia/Shanghai > /etc/timezone
```


配置域名
```conf
# http
server {
    listen       80;
    server_name  jenkins.wangqifei.com;

    location / {
        proxy_pass http://172.16.0.3:8080;
    }
}
# https
server {
    listen                      80;
    listen                      443 ssl http2;
    server_name                 jenkins.wangqifei.com;
    ssl_certificate             /etc/nginx/conf.d/ssl/jenkins.wangqifei.com.pem;
    ssl_certificate_key         /etc/nginx/conf.d/ssl/jenkins.wangqifei.com.key;
    ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers                 EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers   on;
    ssl_session_timeout         10m;
    ssl_session_cache           builtin:1000 shared:SSL:10m;
    ssl_buffer_size             1400;
    add_header                  Strict-Transport-Security max-age=15768000;
    ssl_stapling                on;
    ssl_stapling_verify         on;
    access_log                  off;

    if ($ssl_protocol = "") {
        return 301 https://$host$request_uri;
    }

    location / {
        proxy_pass http://172.16.0.3:8080;
    }
}
```