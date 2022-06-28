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
cp /tmp/sites/* /etc/nginx/conf.d
mv /tmp/htdocs /var/web/htdocs
# ---------- php ----------
apt-get install -y software-properties-common
add-apt-repository -y ppa:ondrej/php
apt-get update
apt-get install -y \
php8.0 \
php8.0-fpm \
php8.0-amqp \
php8.0-bcmath \
php8.0-curl \
php8.0-mbstring \
php8.0-xml \
php8.0-xmlrpc \
php8.0-redis \
php8.0-mysql \
php8.0-pgsql \
php8.0-sqlite3 \
php8.0-gd \
php8.0-gmp \
php8.0-zip
# php8.0-opcache php8.0-memcache php8.0-memcached php8.0-mongodb
sed -i "s/listen = \/run\/php\/php8.0-fpm.sock/listen = \/run\/php\/php-fpm.sock/g" /etc/php/8.0/fpm/pool.d/www.conf
mv /tmp/php.ini /etc/php/8.0/cli/php.ini
# ---------- composer ----------
# apt-get purge composer
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
# ---------- git  ----------
apt-get install -y git
# ---------- openssh ----------
apt-get install -y openssh
# ---------- supervisor ----------
apt-get install -y supervisor
mv /tmp/supervisor/*.conf /etc/supervisor/conf.d
# ---------- webhook ----------
apt-get install -y webhook
mv /tmp/webhook/* /var/web/hooks
chmod +x /var/web/hooks/deploy/*.sh
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