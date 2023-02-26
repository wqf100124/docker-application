# Jenkins自动化部署

:::warning 注意：
如果服务器内存太小，千万不要装，使用简单的webhook即可！
:::

## 安装

Ubuntu:
```sh
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

## 初始化密码

```sh
$ cat /var/jenkins_home/secrets/initialAdminPassword
```

## 设置时区

```sh
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
echo Asia/Shanghai > /etc/timezone
```

## 配置域名

Http
```ini
# jenkins
server {
    listen       80;
    server_name  jenkins.example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}
```

Https
```ini
# jenkins
server {
    listen                      80;
    listen                      443 ssl http2;
    server_name                 jenkins.example.com;
    ssl_certificate             /etc/nginx/conf.d/ssl/jenkins.example.com.pem;
    ssl_certificate_key         /etc/nginx/conf.d/ssl/jenkins.example.com.key;
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
        proxy_pass http://127.0.0.1:8080;
    }
}
```