#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
# ---------- depends ----------
apt-get install -y zip unzip
# ---------- timezone ----------
apt-get install -y tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- working directory ----------
mkdir /apps
# ---------- nginx ----------
apt-get install -y nginx
mv /tmp/nginx.conf /etc/nginx/nginx.conf
mv /tmp/site.conf /etc/nginx/conf.d/
# ---------- php ----------
apt-get install -y software-properties-common
add-apt-repository -y ppa:ondrej/php
apt-get update
apt-get install -y \
php7.4 \
php7.4-fpm \
php7.4-amqp \
php7.4-bcmath \
php7.4-curl \
php7.4-mbstring \
php7.4-xml \
php7.4-xmlrpc \
php7.4-redis \
php7.4-mysql \
php7.4-pgsql \
php7.4-sqlite3 \
php7.4-gd \
php7.4-gmp \
php7.4-zip \
php7.4-opcache
#php7.4-memcache \
#php7.4-memcached
mv /tmp/php.ini /etc/php/7.4/cli/php.ini
# ---------- composer ----------
# apt-get purge composer
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- init ----------
mkdir -p /run/php
chmod -R 777 /run/php
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*
