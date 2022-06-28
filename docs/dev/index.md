# PHP开发环境

包含软件
- nginx
- php
- composer
- npm

## 构建镜像

php8.1
```shell
docker build -t wangqifei/dev:php8.1 -t wangqifei/dev:latest --no-cache ./dev
```

php8.0
```shell
docker build -t wangqifei/dev:php8.0 --build-arg version=8.0 --no-cache ./dev
```

php7.4
```shell
docker build -t wangqifei/dev:php7.4 --build-arg version=7.4 --no-cache ./dev
```

## 创建网络

```shell
docker network create --subnet=172.16.0.0/24 web
```

## 运行容器

```shell
docker run -d \
--name dev \
--network web \
-p 80:80 \
-v /var/web/project:/var/web/project \
-v /var/web/service/nginx/conf.d:/etc/nginx/conf.d \
--restart always \
wangqifei/dev
```

### nginx
```shell
docker exec web nginx -s {stop|quit|reopen|reload}
```

## Laravel Octane

安装依赖
```shell
npm install --save-dev chokidar
```

代码热加载
```shell
php artisan octane:start --server=swoole --host=0.0.0.0 --port=8000 --watch
```