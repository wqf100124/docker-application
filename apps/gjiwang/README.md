# Docker 逛集网商城 生产环境

## 创建网络

```shell
# web
docker network create --subnet=172.16.0.0/24 web

# dev
docker network create --subnet=172.16.1.0/24 dev
```

## php-fpm

```sh
docker run -d \
--name php8.1-fpm \
--network web \
--restart always \
-v ~/web/service/php/8.1/run:/var/run/php \
i94m/php-fpm:8.1
```

## Nginx

```shell
docker run -d \
--name nginx \
--network web \
-p 80:80 \
-p 443:443 \
-v ~/web/service/php/8.1/run:/var/run/php \
-v ~/web/service/nginx/conf.d:/etc/nginx/conf.d \
-v ~/web/apps:/apps \
i94m/nginx:alpine
```

## app

```shell
docker run -d \
--name store-app \
-v ~/web/apps/store/prod/app:/app \
i94m/taro
```

## Api

```shell
# store-api
docker run -d \
--name store-api \
--network web \
--ip 172.16.0.101 \
--restart always \
-v ~/web/cert/pay/wechat:/opt/cert/pay/wechat \
-v ~/web/apps/store/prod/api:/app \
-v ~/web/service/supervisor/prod/api:/etc/supervisor/conf.d \
i94m/octane:php8.1

# store-merchant
docker run -d \
--name store-merchant \
--network web \
--ip 172.16.0.102 \
--restart always \
-v ~/web/cert/pay/wechat:/opt/cert/pay/wechat \
-v ~/web/apps/store/prod/merchant:/app \
-v ~/web/service/supervisor/prod/merchant:/etc/supervisor/conf.d \
i94m/octane:php8.1

#  dev-store-api
docker run -d \
--name dev-store-api \
--network web \
--ip 172.16.0.103 \
--restart always \
-v ~/web/cert/pay/wechat:/opt/cert/pay/wechat \
-v ~/web/apps/store/dev/api:/app \
-v ~/web/service/supervisor/dev/api:/etc/supervisor/conf.d \
i94m/octane:php8.1

# dev-store-merchant
docker run -d \
--name dev-store-merchant \
--network web \
--ip 172.16.0.104 \
--restart always \
-v ~/web/cert/pay/wechat:/opt/cert/pay/wechat \
-v ~/web/apps/store/dev/merchant:/app \
-v ~/web/service/supervisor/dev/merchant:/etc/supervisor/conf.d \
i94m/octane:php8.1
```

laravel-octane.ini for supervisor

```ini
[program:octane]
process_name=%(program_name)s_%(process_num)02d
command=/usr/bin/php /app/artisan octane:start --server=swoole --host=127.0.0.1 --port=8000
stdout_logfile=/app/storage/logs/octane.log
autostart=true
autorestart=true
user=root
numprocs=8
redirect_stderr=true
stopwaitsecs=3600
```

laravel-queue.ini for supervisor

```ini
[program:queue]
process_name=%(program_name)s_%(process_num)02d
command=php /app/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
user=root
numprocs=8
redirect_stderr=true
stdout_logfile=/app/storage/logs/queue.log
stopwaitsecs=3600
```

## 测试环境

### 数据库

```shell
docker run -d \
--name dev-pgsql \
--env POSTGRES_DB=postgres \
--env POSTGRES_USER=postgres \
--env POSTGRES_PASSWORD=hA2aR6iA1b \
--network web \
--ip 172.16.0.56 \
-v ~/web/service/pgsql/backup:/var/lib/postgresql/backup \
--restart always \
postgres:13-alpine
```

### Redis

```shell
docker run -d --name dev-redis --network web --ip 172.16.0.64 --restart always redis:alpine
```

### jenkins同步数据库

```shell
docker restart dev-pgsql 2>&1
docker exec pgsql pg_dump -h localhost -U postgres -d stores -Fc -f /var/lib/postgresql/backup/tmp-stores.bak 2>&1
docker exec dev-pgsql dropdb -h localhost -U postgres --if-exists stores 2>&1
docker exec dev-pgsql createdb -h localhost -U postgres stores 2>&1
docker exec dev-pgsql pg_restore -h localhost -U postgres -p 5432 -d stores /var/lib/postgresql/backup/tmp-stores.bak 2>&1
docker exec dev-pgsql rm /var/lib/postgresql/backup/tmp-stores.bak 2>&1
```

