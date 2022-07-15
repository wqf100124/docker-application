# Postgresql

## 创建容器

```sh
$ docker run -d \
    --name pgsql \
    --env POSTGRES_DB=postgres \
    --env POSTGRES_USER=postgres \
    --env POSTGRES_PASSWORD=Ab123456 \
    --network web \
    --ip 172.16.0.54 \
    -p 5432:5432 \
    -v /var/web/service/pgsql/conf:/etc/postgresql \
    -v /var/web/service/pgsql/log:/var/log/postgresql \
    -v /var/web/service/pgsql/data:/var/lib/postgresql/data \
    -v /var/web/service/pgsql/backup:/var/lib/postgresql/backup \
    --restart always \
    postgres:13-alpine
```

## 基础操作

命令窗口
```sh
$ psql -U postgres
```

创建数据库
```sh
$ CREATE DATABASE dbname;
```

```sh
$ docker exec pgsql createdb -h localhost -U postgres
```

删除数据库
```sh
$ DROP DATABASE [表名];
```

```sh
$ docker exec pgsql dropdb -h localhost -U postgres --if-exists dbname
```

重命名一个表
```sh
$ alter table [表名A] rename to [表名B];
```

删除一个表
```sh
$ drop table [表名];
```

在已有的表里添加字段
```sh
$ alter table [表名] add column [字段名] [类型];
```

删除表中的字段
```sh
$ alter table [表名] drop column [字段名];
```

重命名一个字段
```sh
$ alter table [表名] alter column [字段名] set default [新的默认值];
```

去除缺省值
```sh
$ alter table [表名] alter column [字段名] drop default;
```


## 数据库备份

backup.sh dbname

```sh
#!/bin/bash

# Database name
database=${1}
path=/var/lib/postgresql/backup
# Backup file name
filename=${database}_$(date "+%Y%m%d-%H%M%S").bak

# Backing up
docker exec pgsql pg_dump -h localhost -U postgres -d ${database} -Fc -f ${path}/${filename}
echo "The ${database} database backup success to ${path}/${filename}"
```

## 数据库还原

restore.sh dbname filepath

```sh
#!/bin/bash

database=${1}
filepath=${2}
# restore
docker exec pgsql pg_restore -h localhost -U postgres -p 5432 -d ${database} ${filepath}
```

## 数据库同步

sync.sh fromDatabase toDatabase

```sh
#!/bin/bash

fromDatabase=${1}
toDatabase=${2}
filepath=/tmp/${fromDatabase}.bak
# backup db
docker exec pgsql pg_dump -h localhost -U postgres -d ${fromDatabase} -Fc -f ${filepath}
# drop db
docker exec pgsql dropdb -h localhost -U postgres --if-exists ${toDatabase}
# create db
docker exec pgsql createdb -h localhost -U postgres ${toDatabase}
# restore db
docker exec pgsql pg_restore -h localhost -U postgres -p 5432 -d ${toDatabase} ${filepath}
# delete tmp file
rm -f ${filepath}
```

```sh
$ docker run -d \
    --name pgadmin \
    --network web \
    --ip 172.16.0.200 \
    -e 'PGADMIN_DEFAULT_EMAIL=928988368@qq.com' \
    -e 'PGADMIN_DEFAULT_PASSWORD=sK3qV6fO3nU7gJ1o' \
    -e 'PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION=True' \
    -e 'PGADMIN_CONFIG_LOGIN_BANNER="Authorised users only!"' \
    -e 'PGADMIN_CONFIG_CONSOLE_LOG_LEVEL=10' \
    dpage/pgadmin4
```