# Docker 微信商城 生产环境
nginx/php/composer/supervisor


## 构建镜像
```shell
docker build -t wangqifei/shop:prod -t wangqifei/shop:latest --no-cache .
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
-v /var/web/project/shop:/var/web/project/shop \
-v /var/web/service/nginx/conf.d:/etc/nginx/conf.d \
--restart always \
wangqifei/web:shop
```

nginx

```shell
docker exec web nginx -s {stop|quit|reopen|reload}
```

Django 测试

```shell
python3 manage.py runserver 0:8000
```