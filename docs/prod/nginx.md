# Nginx的配置

## 构建镜像

```sh
$ docker build -t i94m/nginx:alpine --no-cache ./prod/nginx
```

## 创建容器

```sh
$ docker run -d \
--name nginx \
--network web \
-p 80:80 \
-p 443:443 \
-v ~/web/service/php/8.1/run/php8.1-fpm.sock:/var/run/php/php8.1-fpm.sock:ro \
-v ~/web/service/nginx/conf.d:/etc/nginx/conf.d \
-v ~/web/apps:/apps \
--restart always \
i94m/nginx:alpine
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
    root /apps/shop/api/public;
 
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

## 负载均衡

### 1.轮询

轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除。

配置示例：
```ini
upstream web-server {
    server   192.168.0.1;
    server   192.168.0.2;
}
```

### 2.权重

指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能，如下配置后192.168.0.2服务的访问比率会是192.168.0.1服务的二倍。

配置示例：
```ini
upstream web-server {
    server   192.168.0.1 weight=1;
    server   192.168.0.2 weight=2;
}
```

### 3.ip hash

每个请求都根据访问ip的hash结果分配，经过这样的处理，每个访客固定访问一个后端服务，如下配置（ip_hash可以和weight配合使用）。

配置示例：
```ini
upstream web-server {
    ip_hash;
    server   192.168.0.1 weight=1;
    server   192.168.0.2 weight=2;
}
```

### 4.最少连接

将请求分配到连接数最少的服务上。

配置示例：
```ini
upstream web-server {
    least_conn;
    server   192.168.0.1 weight=1;
    server   192.168.0.2 weight=2;
}
```

### 5.fair

按后端服务器的响应时间来分配请求，响应时间短的优先分配。

配置示例：
```ini
upstream web-server {
    least_conn;
    server   192.168.0.1 weight=1;
    server   192.168.0.2 weight=2;
}
```

### 应用

```ini
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    upstream web-server {
        server   192.168.0.1 weight=1;
        server   192.168.0.2 weight=2;
    }

    server {
       listen       80;
       server_name  localhost;
    
       location / {
        proxy_pass http://web-server;
        proxy_redirect default;
      }
    }
}
```
