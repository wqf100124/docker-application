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
mv /tmp/php.ini /etc/php/${1}/cli/php.ini
# ---------- composer ----------
# apt-get purge composer
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
#composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
# ---------- supervisor ----------
apt-get install -y supervisor
mv /tmp/supervisor /etc/supervisor/example
touch /var/run/supervisor.sock
chmod 755 /var/run/supervisor.sock
# ---------- init ----------
mkdir -p /run/php && chmod -R 777 /run/php
touch /var/log/php-fpm.log && chmod 777 /var/log/php-fpm.log
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
sed -i "s/{VERSION}/$1/g" /run/entrypoint.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*
