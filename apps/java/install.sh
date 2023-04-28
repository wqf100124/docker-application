#!/bin/bash
apt update
apt-get install -y redis-server openjdk-8-jdk mysql-server
usermod -d /var/lib/mysql/ mysql

mysqladmin -u root -p create weixinrobot
mysqladmin -u root password 123456