# Docker Web 微信商城 开发环境
nginx/php/composer

## 构建镜像
```shell
docker build -t wangqifei/shop:dev --no-cache .
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
-v ~/.ssh:/root/.ssh \
-v /var/web/project/shop:/var/web/project/shop \
--restart always \
wangqifei/shop:dev
```

nginx

```shell
docker exec web nginx -s {stop|quit|reopen|reload}
```

host配置
```ini
127.0.0.1       api.shop.test
127.0.0.1       merchant.shop.test
```
