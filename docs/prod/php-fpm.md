# PHP-FPM

## 构建镜像

### php8.2/latest
```sh
$ yarn php-fpm:8.2
```

### php8.1
```sh
$ yarn php-fpm:8.1
```

### php8.0
```sh
$ yarn php-fpm:8.0
$ docker build -t i94m/php-fpm:8.0 --build-arg version=8.0 --no-cache ./prod/php/php-fpm
```

### php7.4
```sh
$ yarn php-fpm:7.4
$ docker build -t i94m/php-fpm:7.4 --build-arg version=7.4 --no-cache ./prod/php/php-fpm
```

## 创建容器

```sh
$ docker run -d \
--name php8.1-fpm \
--network web \
--restart always \
-v ~/web/service/php/8.1/run:/var/run/php \
-v ~/web/apps:/apps \
i94m/php-fpm:8.1
```

### 赋予权限
```sh
$ chmod -R 777 ~/web/service/php/8.1/run
```

## Nginx配置

### HTTP
```ini
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /apps/example.com/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```
