# Nginx的配置

## 构建镜像

```shell
docker build -t wangqifei/nginx:alpine --no-cache ./prod/nginx
```

## 创建容器

```shell
docker run -d \
--name nginx \
--network web \
-p 80:80 \
-p 443:443 \
-v /var/web/service/php/8.1/run/php8.1-fpm.sock:/var/run/php/php8.1-fpm.sock:ro \
-v /var/web/service/nginx/conf.d:/etc/nginx/conf.d \
-v /var/web/project:/var/web/project \
--restart always \
wangqifei/nginx:alpine
```

### Https Proxy
```ini
server {
    listen 80;
    listen 443 ssl http2;
    server_name  api.guangji.wang;
    ssl_certificate /etc/nginx/conf.d/ssl/api.guangji.wang.pem;
    ssl_certificate_key /etc/nginx/conf.d/ssl/api.guangji.wang.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_timeout 10m;
    ssl_session_cache builtin:1000 shared:SSL:10m;
    ssl_buffer_size 1400;
    add_header Strict-Transport-Security max-age=15768000;
    ssl_stapling on;
    ssl_stapling_verify on;
    access_log off;

    if ($ssl_protocol = "") {
        return 301 https://$host$request_uri;
    }
    
    server_tokens off;
    root /var/web/project/shop/api/public;
 
    index index.php;
 
    charset utf-8;
 
    location /index.php {
        try_files /not_exists @octane;
    }
 
    location / {
        try_files $uri $uri/ @octane;
    }
 
    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }
 
    access_log off;
    error_log  /var/log/nginx/api.guangji.wang-error.log error;
 
    error_page 404 /index.php;
 
    location @octane {
        set $suffix "";
 
        if ($uri = /index.php) {
            set $suffix ?$query_string;
        }
 
        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header SERVER_PORT $server_port;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
 
        proxy_pass http://172.16.0.2:8000$suffix;
    }
}
```