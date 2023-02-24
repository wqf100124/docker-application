#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
# ---------- depends ----------
apt-get install -y zip unzip
# ---------- timezone ----------
apt-get install -y tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- working directory ----------
mkdir -p /var/web/project
# ---------- php ----------
apt-get install -y software-properties-common
add-apt-repository -y ppa:ondrej/php
apt-get update
apt-get install -y \
php${1} \
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
php${1}-swoole \
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
# ---------- cron ----------
apt-get install -y cron
crontab -l | { cat; echo "* * * * * /usr/bin/php /var/web/project/app/artisan schedule:run >> /dev/null 2>&1"; } | crontab -
# ---------- init ----------
mkdir -p /run/php && chmod -R 777 /run/php
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*