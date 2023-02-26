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

docker-compose.yml
```yml
version: "3"
services:
  memcached:
    image: memcached:alpine
    container_name: memcached
    privileged: true
    networks:
      web:
        ipv4_address: 172.16.0.11
    ports:
      - "11211:11211"
```