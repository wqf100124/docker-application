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
# ---------- php.ini ----------
sed -i "s/;date.timezone =/date.timezone = Asia\/Shanghai/g" /etc/php/7.4/cli/php.ini
sed -i "s/;mbstring.internal_encoding =/mbstring.internal_encoding = \"UTF-8\"/g" /etc/php/7.4/cli/php.ini
sed -i "s/;mbstring.http_output =/mbstring.http_output = \"UTF-8\"/g" /etc/php/7.4/cli/php.ini
sed -i "s/short_open_tag = Off/short_open_tag = On/g" /etc/php/7.4/cli/php.ini
sed -i "s/variables_order = \"GPCS\"/variables_order = \"EGPCS\"/g" /etc/php/7.4/cli/php.ini
sed -i "s/request_order = \"GP\"/request_order = \"GPC\"/g" /etc/php/7.4/cli/php.ini
sed -i "s/max_execution_time = 30/max_execution_time = 1800/g" /etc/php/7.4/cli/php.ini
sed -i "s/error_reporting = E_ALL \& ~E_DEPRECATED \& ~E_STRICT/error_reporting = E_ALL/g" /etc/php/7.4/cli/php.ini
sed -i "s/register_argc_argv = Off/register_argc_argv = On/g" /etc/php/7.4/cli/php.ini
sed -i "s/post_max_size = 8M/post_max_size = 150M/g" /etc/php/7.4/cli/php.ini
sed -i "s/enable_dl = Off/enable_dl = On/g" /etc/php/7.4/cli/php.ini
sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 150M/g" /etc/php/7.4/cli/php.ini
cp -f /etc/php/7.4/cli/php.ini /etc/php/7.4/fpm/php.ini
sed -i "s/;clear_env = no/clear_env = no/g" /etc/php/7.4/fpm/pool.d/www.conf
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
