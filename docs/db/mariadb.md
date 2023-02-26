# Mariadb

## 创建容器
```sh
$ docker run -d \
    --name mariadb \
    --env MYSQL_ROOT_HOST=% \
    --env MYSQL_ROOT_PASSWORD=Ab123456 \
    --network web \
    --ip 172.16.0.33 \
    -p 3306:3306 \
    -v ~/web/service/mariadb:/var/lib/mysql \
    --restart always \
    mariadb:10.2
```

docker-compose.yml
```yml
version: "3"
services:
  mariadb:
    image: mariadb:10.2
    container_name: mariadb
    privileged: true
    networks:
      web:
        ipv4_address: 172.16.0.33
    ports:
      - "3306:3306"
    volumes:
      - mariadb:/var/lib/mysql
    environment:
      - MYSQL_ROOT_HOST=%
      - MYSQL_ROOT_PASSWORD=Ab123456
volumes:
  mariadb:
    name: mariadb
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/service/mariadb
```