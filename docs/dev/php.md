# PHP本地开发环境

包含软件
- nginx
- php
- composer
- npm

## 构建镜像

php8.2
```sh
$ docker build -t wangqifei/dev:php8.2 -t wangqifei/dev:latest --no-cache ./dev/php
```

php8.1
```sh
$ docker build -t wangqifei/dev:php8.1 --build-arg version=8.1 --no-cache ./dev/php
```

php8.0
```sh
$ docker build -t wangqifei/dev:php8.0 --build-arg version=8.0 --no-cache ./dev/php
```

php7.4
```sh
$ docker build -t wangqifei/dev:php7.4 --build-arg version=7.4 --no-cache ./dev/php
```

## 创建网络

```sh
$ docker network create --subnet=172.16.0.0/24 web
```

## 运行容器

```sh
$ docker run -d \
--name web \
--network web \
-p 80:80 \
-v /var/web/project:/var/web/project \
-v /var/web/service/nginx/conf.d:/etc/nginx/conf.d \
--restart always \
wangqifei/dev
```

### Nginx

站点配置
`/etc/nginx/conf.d`

可用模板
`/etc/nginx/sites-available`

基础命令
```sh
$ docker exec web nginx -s {stop|quit|reopen|reload}
```

## Laravel Octane

安装依赖
```sh
$ npm install --save-dev chokidar
```

代码热加载
```sh
$ php artisan octane:start --server=swoole --host=0.0.0.0 --port=8000 --watch
```

## Docker Compose
```yaml
version: "3"
services:
  web:
    image: wangqifei/dev:php8.2
    container_name: web
    volumes:
      - project:/var/web/project
      - nginx:/etc/nginx/conf.d
    networks:
      web:
        ipv4_address: 172.16.0.80
    ports:
      - "80:80"
    restart: always
    depends_on:
      - redis
  redis:
    image: redis:alpine
    container_name: redis
    networks:
      web:
        ipv4_address: 172.16.0.63
    ports:
      - "6379:6379"
    restart: always
  pgsql:
    image: postgres:13-alpine
    container_name: pgsql
    networks:
      web:
        ipv4_address: 172.16.0.54
    ports:
      - "5432:5432"
    volumes:
      - pgsql:/etc/postgresql
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=Ab123456
networks:
  web:
    name: web
    ipam:
      driver: default
      config:
        - subnet: 172.16.0.0/24
volumes:
  project:
    name: project
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/project
  nginx:
    name: nginx
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/service/nginx/conf.d
  pgsql:
    name: pgsql
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/service/pgsql
```