##  mysql

```sh
docker run -d --name mysql --env MYSQL_ROOT_HOST=% --env MYSQL_ROOT_PASSWORD=Ab123456 --network web --ip 172.16.0.33 -p 3306:3306 -v /var/web/service/mysql:/var/lib/mysql --restart always mysql:5.7
```

```sh
docker exec mysql echo "sql_mode=STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION" >> /etc/mysql/conf.d/mysql.cnf
```