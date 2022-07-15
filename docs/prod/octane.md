# Laravel Octane

## 构建镜像

### php8.1
```sh
$ docker build -t wangqifei/octane:php8.1 -t wangqifei/octane:latest --no-cache ./prod/php/octane
```

### php8.0
```sh
$ docker build -t wangqifei/octane:php8.0 --build-arg version=8.0 --no-cache ./prod/php/octane
```

## 安装依赖

```sh
$ composer require laravel/octane

$ php artisan octane:install
```

默认使用swoole，如果要使用roadrunner，替换supervisor命令

```ini
command=/usr/bin/php -d variables_order=EGPCS /var/web/project/app/artisan octane:start --server=roadrunner --host=0.0.0.0 --rpc-port=6001 --port=8000
```

## 创建容器

```sh
$ docker run -d \
--name app \
--network web \
--restart always \
-v /var/web/project/app:/var/web/project/app \
-v /var/web/service/supervisor:/etc/supervisor/conf.d \
wangqifei/octane
```

## Nginx配置

### HTTP
```ini
server {
    listen 80;
    listen [::]:80;
    server_name app.com;
    server_tokens off;
    root /var/web/project/app/public;
 
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
    error_log  /var/log/nginx/app.com-error.log error;
 
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