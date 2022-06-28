#!/bin/bash
# nginx.conf /etc/nginx/nginx.conf
# sites /etc/nginx/sites-enabled/*
# php.ini /etc/php/7.4/cli/php.ini
# http://mirrors.163.com/ubuntu/
# ---------- replace aliyun source ----------
cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
sed -i "s@http://.*archive.ubuntu.com@http://mirrors.163.com/ubuntu@g" /etc/apt/sources.list
apt-get update
apt-get -y upgrade
export DEBIAN_FRONTEND=noninteractive
# ---------- depends ----------
apt-get install -y curl wget unzip vim
# ---------- nginx ----------
apt-get install -y nginx
# ---------- php none sodium ----------
apt-get install -y \
php7.4 \
php7.4-fpm \
php7.4-bcmath \
php7.4-bz2 \
php7.4-curl \
php7.4-gd \
php7.4-gmp \
php7.4-imap \
php7.4-intl \
php7.4-json \
php7.4-mbstring \
php7.4-mysql \
php7.4-opcache \
php7.4-pgsql \
php7.4-xml \
php7.4-xmlrpc \
php7.4-xsl \
php7.4-zip \
php-redis \
php-amqp \
php-memcached \
php-imagick
# ---------- composer ----------
apt-get install -y composer
composer config -g repos.packagist composer https://mirrors.cloud.tencent.com/composer/
# ---------- redis ----------
apt-get install -y redis-server
# ---------- nodejs ----------
apt-get install -y nodejs npm
npm config set registry https://registry.npm.taobao.org
# ---------- git ----------
apt-get install -y git
# ---------- mysql ----------
apt-get install -y mysql-server
# ---------- timezone ----------
cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- set default ----------
mkdir -p /home/web/hooks /home/web/project /home/web/backup
apt-get clean
apt-get autoremove
# ---------- success ----------
nginx -v
php -v
composer --version
node -v
npm -v
git --version
# ---------- start ----------
/etc/init.d/nginx start
/etc/init.d/php7.4-fpm start
/etc/init.d/redis-server start
/etc/init.d/mysql start