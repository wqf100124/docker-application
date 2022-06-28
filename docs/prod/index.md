# 基础信息

包含软件
- php
- composer
- supervisor

## 创建网络

```shell
docker network create --subnet=172.16.0.0/24 web
```

## 运行方式

- [PHP-FPM](/prod/php-fpm)
- [Laravel Octane](/prod/octane)