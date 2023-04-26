#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
# ---------- depends ----------
apt-get install -y zip unzip wget
# ---------- timezone ----------
apt-get install -y tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- working directory ----------
mkdir /apps
# ---------- nginx ----------
# 安装最新版
cd /tmp
apt-get install -y curl gnupg2 ca-certificates lsb-release debian-archive-keyring
echo "deb http://nginx.org/packages/mainline/ubuntu/ jammy nginx" >> /etc/apt/sources.list
echo "deb-src http://nginx.org/packages/mainline/ubuntu/ jammy nginx" >> /etc/apt/sources.list
wget http://nginx.org/keys/nginx_signing.key
apt-key add nginx_signing.key
apt-get update
apt-get install -y nginx
cp /tmp/nginx.conf /etc/nginx/nginx.conf
mv /tmp/sites /etc/nginx/sites-available
mv -f /etc/nginx/sites-available/default.conf /etc/nginx/conf.d/default.conf
mkdir /var/www
mv /tmp/htdocs /var/www
sed -i "s/{version}/${1}/g" /etc/nginx/sites-available/laravel.conf
sed -i "s/{version}/${1}/g" /etc/nginx/sites-available/php.conf
sed -i "s/{version}/${1}/g" /etc/nginx/conf.d/default.conf
# ---------- php ----------
apt-get install -y software-properties-common
add-apt-repository -y ppa:ondrej/php
apt-get update
apt-get install -y \
php${1} \
php${1}-fpm \
php${1}-amqp \
php${1}-bcmath \
php${1}-curl \
php${1}-mbstring \
php${1}-memcache \
php${1}-memcached \
php${1}-xml \
php${1}-xmlrpc \
php${1}-redis \
php${1}-mysql \
php${1}-pgsql \
php${1}-sqlite3 \
php${1}-gd \
php${1}-gmp \
php${1}-zip
# php${1}-opcache php${1}-mongodb
if [ ! $1 = 7.1 ] && [ ! $1 = 7.0 ] && [ ! $1 = 5.6 ]; then
    apt-get install -y php${1}-swoole
fi
mv /tmp/php.ini /etc/php/${1}/cli/php.ini
cp -f /etc/php/${1}/cli/php.ini /etc/php/${1}/fpm/php.ini
sed -i "s/;clear_env = no/clear_env = no/g" /etc/php/${1}/fpm/pool.d/www.conf
sed -i "s/listen.owner = www-data/listen.owner = nginx/g" /etc/php/${1}/fpm/pool.d/www.conf
sed -i "s/listen.group = www-data/listen.group = nginx/g" /etc/php/${1}/fpm/pool.d/www.conf
sed -i "s/user = www-data/user = nginx/g" /etc/php/${1}/fpm/pool.d/www.conf
sed -i "s/group = www-data/group = nginx/g" /etc/php/${1}/fpm/pool.d/www.conf
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- memcached ----------
apt-get install -y memcached
# ---------- redis ----------
apt-get install -y redis-server
# ---------- init ----------
mkdir -p /run/php
chmod -R 777 /run/php
mv /tmp/entrypoint.sh /run/entrypoint.sh
sed -i "s/{version}/${1}/g" /run/entrypoint.sh
chmod +x /run/entrypoint.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*
