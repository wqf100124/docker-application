# Java环境搭建

## 安装
apt-get install -y redis-server openjdk-8-jdk mysql-server
usermod -d /var/lib/mysql/ mysql

## 手动设置mysql
mysql -uroot
create DATABASE weixinrobot;
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
quit;

## 导入数据库
mysql -h127.0.0.1 -uroot -p weixinrobot < /tmp/weixinrobot.sql

## /run/entrypoint.sh
/etc/init.d/mysql start
/etc/init.d/redis-server start
java -Duser.timezone=GMT+8 -jar runscore-weixinrobot-0.0.1-SNAPSHOT.jar

## 创建容器
docker run -d --name weixinrobot --port 8000 i94m/java:20230428 /run/entrypoint.sh
