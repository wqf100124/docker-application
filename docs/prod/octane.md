# Laravel Octane

## 构建镜像

### php8.2/latest
```sh
$ yarn octane:php8.2
```

### php8.1
```sh
$ yarn octane:php8.1
```

### php8.0
```sh
$ yarn octane:php8.0
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
    listen                      80;
    listen                      443 ssl http2;
    server_name                 example.com;
    ssl_certificate             /etc/nginx/conf.d/ssl/example.com.pem;
    ssl_certificate_key         /etc/nginx/conf.d/ssl/example.com.key;
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
    
    server_tokens off;
    root /var/web/project/example/public;
 
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
    error_log  /var/log/nginx/example.com-error.log error;
 
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