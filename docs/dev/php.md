# PHP本地开发环境

包含软件
- nginx
- php
- composer

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
    -v ~/web/apps:/apps \
    -v ~/web/service/nginx/conf.d:/etc/nginx/conf.d \
    --restart always \
    i94m/lnp:php8.2-dev
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
    image: i94m/lnp:php8.2-dev
    container_name: web
    privileged: true
    volumes:
      - project:/apps
      - nginx:/etc/nginx/conf.d
    networks:
      web:
        ipv4_address: 172.16.0.80
    ports:
      - "80:80"
    restart: always
  pgsql:
    image: postgres:13-alpine
    container_name: pgsql
    privileged: true
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

## TablePlus/DBngin

I got able to make it work by doing the following:
Create my.cnf file wherever you want with the following content:

my.cnf
```ini
[mysqld]
sql_mode = "STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"
default_authentication_plugin = mysql_native_password
port = 3306
```

Then go to DBngin and set that configuration file in the connection settings. Once I did this, it got fixed but then I got another error regarding the authentication driver once connected. What I needed to do is the following:
Go to the terminal and then type the following:

```sh
$ mysql --socket=/tmp/mysql_3306.sock -u root
```

Once you're connected, you need to execute the following commands:
```sh
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Ab123456';
FLUSH PRIVILEGES;
```

Then try connecting again using the above command and it should work.
