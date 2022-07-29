# Ubuntu20.04下搭建生产环境

## 创建用户
```sh
$ useradd -d /home/wade -m -g root -s /bin/bash wade
```

##  安装Docker

```sh
$ apt install docker.io
```

##  创建Docker网络

```sh
$ docker network create --subnet=172.16.0.0/24 web
```

## 安装指定版本nodejs

NodeSource 是一个公司，聚焦于提供企业级的 Node 支持。它维护了一个 APT 软件源，其中包含了很多 Node.js 版本。如果你的应用需要指定版本的Node.js 版本，使用这个软件源。

下载并执行 NodeSource 安装脚本：
```sh
$ curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```

NodeSource 源启用成功后，安装 Node.js 和 npm:
```sh
$ sudo apt install nodejs
```

验证 Node.js 和 npm 是否正确安装。打印它们的版本号：
```sh
$ node --version
```
```sh
$ npm --version
```

## Nginx

### 安装
```sh
apt-get install -y nginx
```

### 服务命令
```sh
/etc/init.d/nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}
```

### 自定义配置（使用octane）
vim /etc/nginx/nginx.conf
```sh
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
apt-get install -y software-properties-common \
add-apt-repository -y ppa:ondrej/php \
apt-get update \
apt-get install -y \
php8.1 \
php8.1-amqp \
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
php8.1-zip \
mv /tmp/php.ini /etc/php/8.1/cli/php.ini
```

## Composer
```sh
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');" \
php composer-setup.php --install-dir=/usr/bin --filename=composer;
```

## Supervisor
```sh
apt-get install -y supervisor
```

/etc/supervisor/conf.d

## Cron(定时任务)

```sh
crontab -l | { cat; echo "* * * * * /usr/bin/php /var/web/project/app/artisan schedule:run >> /dev/null 2>&1"; } | crontab -
```

## Entrypoint
entrypoint.sh
```sh
#!/bin/bash

/etc/init.d/cron start

# supervisor
supervisord -c /etc/supervisor/supervisord.conf --nodaemon --user root
# supervisorctl start app:*
```

## Redis

### 安装
```sh
apt-get install -y redis-server
```

### 服务命令
```sh
/etc/init.d/redis-server {start|stop|restart|force-reload|status}
```


## 小内存主机 Swap分区

1.首先先关闭Swap分区，将默认的Swap分区清空：
```sh
swapoff -a
```

2.创建要Swap分区文件
其中/var/swapfile是文件位置，bs*count是文件大下，例如以下命令就会创建一个4G的文件：
```sh
dd if=/dev/zero of=/var/swapfile bs=1M count=4096
```

3、格式化为Swap分区文件

```sh
mkswap /var/swapfile
```

4、启用Swap分区

```sh
swapon /var/swapfile
```

5、查看新的分区

```sh
free -m
```

6、设置开机启动

最后就是增加开机启动了，只需要在/etc/fstab这个文件里增加这一行代码即可（如果你不会在Linux上编辑文件，可以参考：《Linux下使用vim编辑以及新建文件》）：

```sh
echo '/etc/fstab' >> /var/swapfile swap swap defaults 0 0
```