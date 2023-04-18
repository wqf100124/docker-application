# 基于 Docker 搭建 Laravel5 生产环境

## Docker Compose 方式

```sh
$ docker-compose up -d
```

## Docker Run 方式

1.打包镜像
```sh
$ docker build -t i94m/prod:20230417 ./build
```

2.创建网络
```sh
$ docker network create --subnet=172.16.0.0/24 web
```

3.创建 web 容器
```sh
$ docker run -d \
    --restart always \
    --name web \
    --network web \
    --ip 172.16.0.80 \
    -p 80:80 \
    -v ~/app:/app \
    i94m/prod:20230417
```

4.创建 mysql 容器
```sh
$ docker run -d \
    --restart always \
    --name mysql5.7 \
    --network web \
    --ip 172.16.0.33 \
    -p 3306:3306 \
    --env MYSQL_ROOT_HOST=% \
    --env MYSQL_ROOT_PASSWORD=Ab123456 \
    -v ~/web/service/mysql8.0:/var/lib/mysql \
    mysql:5.7
```

5.创建 redis 容器
```sh
$ docker run -d \
    --name redis \
    --network web \
    --ip 172.16.0.63 \
    -p 6379:6379 \
    --restart always \
    redis:alpine
```
