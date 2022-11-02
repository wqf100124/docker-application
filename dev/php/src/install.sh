#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
# ---------- depends ----------
apt-get install -y zip unzip
# ---------- timezone ----------
apt-get install -y tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- working directory ----------
mkdir -p /var/web/project /var/web/backup
# ---------- nginx ----------
apt-get install -y nginx
cp /tmp/nginx.conf /etc/nginx/nginx.conf
cp /tmp/sites/* /etc/nginx/sites-available
mv /tmp/htdocs /var/web/htdocs
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
php${1}-xml \
php${1}-xmlrpc \
php${1}-redis \
php${1}-mysql \
php${1}-pgsql \
php${1}-sqlite3 \
php${1}-gd \
php${1}-gmp \
php${1}-zip \
php${1}-swoole
# php${1}-opcache php${1}-memcache php${1}-memcached php${1}-mongodb
mv /tmp/php.ini /etc/php/${1}/cli/php.ini
# ---------- composer ----------
# apt-get purge composer
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
#composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
# ---------- npm ----------
apt-get install -y npm
npm config set registry=https://registry.npmmirror.com
# ---------- init ----------
mkdir -p /run/php
chmod -R 777 /run/php
mv /tmp/entrypoint.sh /run/entrypoint.sh
sed -i "s/{version}/${1}/g" /run/entrypoint.sh
sed -i "s/{version}/${1}/g" /etc/nginx/sites-available/default.conf
sed -i "s/{version}/${1}/g" /etc/nginx/sites-available/laravel.conf
sed -i "s/{version}/${1}/g" /etc/nginx/sites-available/php.conf
chmod +x /run/entrypoint.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*