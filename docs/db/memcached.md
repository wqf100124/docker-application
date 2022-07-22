# Memcached

## 创建容器
```sh
$ docker run -d \
    --name memcached \
    --network web \
    --ip 172.16.0.11 \
    -p 11211:11211 \
    -m 64 \
    --restart always \
    memcached:alpine
```