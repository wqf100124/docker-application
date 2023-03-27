# Docker 微信商城 生产环境
nginx/php/composer/supervisor


## 构建镜像
```shell
docker build -t i94m/shop:prod -t i94m/shop:latest --no-cache .
```

## 创建网络

```shell
docker network create --subnet=172.16.0.0/24 web
```

##  运行容器

```shell
docker run -d \
--name shop \
--network web \
-p 80:80 \
-p 443:443 \
-v ~/.ssh:/root/.ssh \
-v ~/web/apps/shop:/apps/shop \
-v ~/web/service/nginx/conf.d:/etc/nginx/conf.d \
--restart always \
i94m/web:shop
```

nginx

```shell
docker exec web nginx -s {stop|quit|reopen|reload}
```

Django 测试

```shell
python3 manage.py runserver 0:8000
```
