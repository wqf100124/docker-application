# Redis

## 创建容器
```sh
$ docker run -d \
    --name redis \
    --network web \
    --ip 172.16.0.63 \
    -p 6379:6379 \
    --restart always \
    redis:alpine
```

docker-compose.yml
```yml
version: "3"
services:
  redis:
    image: redis:alpine
    container_name: redis
    privileged: true
    networks:
      web:
        ipv4_address: 172.16.0.63
    ports:
      - "6379:6379"
```