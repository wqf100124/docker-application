# Java环境搭建

## 安装
apt-get install -y redis-server openjdk-8-jdk mysql-server
usermod -d /var/lib/mysql/ mysql


1.例如你的 root用户现在没有密码，你希望的密码修改为123456，那么命令是：
```
mysqladmin -u root password 123456
```
2.如果你的root现在有密码了（888888），那么修改密码为123456的命令是：
```
mysqladmin -u root -p password 123456
mysqladmin -u root -p password Qw1234567890!
```

## 手动设置mysql
mysql -uroot
create DATABASE weixinrobot;
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Qw1234567890!';
flush privileges;
quit;

## 导入数据库
mysql -h127.0.0.1 -uroot -p weixinrobot < /app/weixinrobot.sql

## /run/entrypoint.sh
chmod +x /run/entrypoint.sh

## 创建容器
docker run -d --name weixinrobot --port 8000 i94m/java:20230428 /run/entrypoint.sh

## 创建镜像
docker commit c weixinrobot:1.0

Qw1234567890!
