# Ubuntu原生方式搭建环境

> 测试系统：Ubuntu:20.04/Ubuntu:22.04

## 用户

创建新用户
```sh
$ useradd -d /home/wade -m -g root -s /usr/bin/bash wade
```

## Docker

安装
```sh
$ apt install docker.io
```

卸载
```sh
$ dpkg -l | grep docker
```
```sh
$ apt remove --purge docker.io
```

创建网络
```sh
$ docker network create --subnet=172.16.0.0/24 web
```

## Nodejs

> NodeSource 是一个公司，聚焦于提供企业级的 Node 支持。它维护了一个 APT 软件源，其中包含了很多 Node.js 版本。

[https://downloads.nodesource.com/](https://downloads.nodesource.com/)

添加源
```sh
$ curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```

安装
```sh
$ sudo apt install nodejs
```

验证
```sh
$ node --version
```
```sh
$ npm --version
```

## Nginx

> nginx [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server

[https://nginx.org/en/download.html](https://nginx.org/en/download.html)

安装
```sh
$ apt-get install -y nginx
```

命令
```sh
$ /etc/init.d/nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}
```

自定义配置（使用octane）

vim /etc/nginx/nginx.conf
```ini
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    map $http_upgrade $connection_upgrade {
        default upgrade;
        ''      close;
    }

    include /etc/nginx/conf.d/*.conf;
}
```

## PHP
```sh
$ apt-get install -y software-properties-common \
&& add-apt-repository -y ppa:ondrej/php \
&& apt-get update \
&& apt-get install -y \
php8.1 \
php8.1-bcmath \
php8.1-curl \
php8.1-mbstring \
php8.1-xml \
php8.1-xmlrpc \
php8.1-redis \
php8.1-mysql \
php8.1-pgsql \
php8.1-sqlite3 \
php8.1-swoole \
php8.1-gd \
php8.1-gmp \
php8.1-zip
```

### php-fpm

安装
```sh
$ apt-get install -y php8.1-fpm
```

命令
```sh
$ /etc/init.d/php-fpm8.1 {start|stop|status|restart|reload|force-reload}
```

### amqp

安装
```sh
$ apt-get install -y php8.1-amqp
```

### Composer
```sh
$ php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');" \
&& php composer-setup.php --install-dir=/usr/bin --filename=composer;
```

阿里云镜像源：[https://developer.aliyun.com/composer](https://developer.aliyun.com/composer)

## Supervisor

安装
```sh
$ apt-get install -y supervisor
```

命令
```sh
$ /etc/init.d/supervisord {start|stop|restart|force-reload|status}
```

### Laravel octane

配置文件: /etc/supervisor/conf.d/example.conf

#### swoole
```ini
[program:example]
process_name=%(program_name)s_%(process_num)02d
command=/usr/bin/php /var/web/project/example/artisan octane:start --server=swoole --workers=1 --task-workers=2 --max-requests=200 --host=0.0.0.0 --port=8000
stdout_logfile=/var/web/project/example/storage/logs/octane.log
autostart=true
autorestart=true
user=root
numprocs=1
redirect_stderr=true
stopwaitsecs=3600
```

#### roadrunner
```ini
[program:example]
process_name=%(program_name)s_%(process_num)02d
command=/usr/bin/php /var/web/project/example/artisan octane:start --server=roadrunner --host=0.0.0.0 --port=8000
stdout_logfile=/var/web/project/example/storage/logs/octane.log
autostart=true
autorestart=true
user=root
numprocs=1
redirect_stderr=true
stopwaitsecs=3600
```

## Cron(定时任务)

```sh
$ crontab -l | { cat; echo "* * * * * /usr/bin/php /var/web/project/example/artisan schedule:run >> /dev/null 2>&1"; } | crontab -
```

## Redis

安装
```sh
$ apt-get install -y redis-server
```

命令
```sh
$ /etc/init.d/redis-server {start|stop|restart|force-reload|status}
```

## PostgreSQL

安装

```sh
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql
```

命令

```sh
/etc/init.d/postgresql {start|stop|restart|reload|force-reload|status}
```

配置
/etc/postgresql/14/main

### 设置时区

/etc/postgresql/14/main/postgresql.conf
```
timezone = 'Asia/Shanghai'
log_timezone = 'Asia/Shanghai'
```

### 远程连接

1.添加允许访问的IP和验证方式    
/etc/postgresql/14/main/pg_hba.conf
```ini
host    all     all     0.0.0.0/0       md5
```

2.修改监听地址    
/etc/postgresql/14/main/postgresql.conf
```ini
#listen_addresses = 'localhost'
#修改为
listen_addresses = '*'
```

3.重启服务
```sh
$ /etc/init.d/postgresql restart
```

### 修改端口号/最大连接数
/etc/postgresql/14/main/postgresql.conf
```ini
port = 54321                            # (change requires restart)
max_connections = 100
```

### 基础操作

切换postgres用户登录
```sh
$ su postgres
```

连接数据库
```sh
$ psql
```

修改默认用户密码
```sh
\password postgres
```

创建新用户
```sh
CREATE USER test_user WITH PASSWORD '123456';
```

创建数据库并分配用户
```sh
CREATE DATABASE test_db OWNER test_user;
```

授权
```sh
#将数据库 test_db 权限授权于 test_user
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
#将数据库所有表的所有权限都授权于 testUser
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO test_user;
#并且不要忘记序列(如果有的话)：
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO test_user;
#只读权限
GRANT SELECT ON TABLE test_db TO test_user;
```

## Swap分区(小内存主机)

1.首先先关闭Swap分区，将默认的Swap分区清空：
```sh
$ swapoff -a
```

2.创建要Swap分区文件
其中/var/swapfile是文件位置，bs*count是文件大下，例如以下命令就会创建一个4G的文件：
```sh
$ dd if=/dev/zero of=/var/swapfile bs=1M count=4096
```

3、格式化为Swap分区文件

```sh
$ mkswap /var/swapfile
```

4、启用Swap分区

```sh
$ swapon /var/swapfile
```

5、查看新的分区

```sh
$ free -m
```

6、设置开机启动

最后就是增加开机启动了，只需要在/etc/fstab这个文件里增加这一行代码即可（如果你不会在Linux上编辑文件，可以参考：《Linux下使用vim编辑以及新建文件》）：

```sh
$ echo '/etc/fstab' >> /var/swapfile swap swap defaults 0 0
```