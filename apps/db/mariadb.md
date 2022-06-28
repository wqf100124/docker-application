##  mariadb

```sh
docker run -d --name mariadb --env MYSQL_ROOT_HOST=% --env MYSQL_ROOT_PASSWORD=Ab123456 --network web --ip 172.16.0.33 -p 3306:3306 -v /var/web/service/mariadb:/var/lib/mysql --restart always mariadb:10.2
```