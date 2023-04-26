#!/bin/sh
export DEBIAN_FRONTEND=noninteractive
# ---------- setting timezone ----------
apk add --no-cache tzdata
cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# ---------- nginx ----------
apk add --no-cache nginx
mv -f /tmp/nginx.conf /etc/nginx/nginx.conf
# ---------- php ----------
apk add --no-cache \
    php81 \
    php81-fpm \
    php81-pecl-amqp \
    php81-pecl-ast \
    php81-bcmath \
    php81-bz2 \
    php81-calendar \
    php81-ctype \
    php81-curl \
    php81-dom \
    php81-exif \
    php81-fileinfo \
    php81-ftp \
    php81-gd \
    php81-gettext \
    php81-gmp \
    php81-iconv \
    php81-imap \
    php81-json \
    php81-ldap \
    php81-mbstring \
    php81-pecl-memcache \
    php81-pecl-memcached \
    php81-pecl-mongodb \
    php81-pecl-msgpack \
    php81-mysqli \
    php81-openssl \
    php81-pcntl \
    php81-pdo_mysql \
    php81-pdo_sqlite \
    php81-phar \
    php81-posix \
    php81-session \
    php81-shmop \
    php81-simplexml \
    php81-sockets \
    php81-sodium \
    php81-sysvmsg \
    php81-xml \
    php81-xmlreader \
    php81-xmlwriter \
    php81-xsl \
    php81-pecl-redis \
    php81-soap \
    php81-sqlite3 \
    php81-sysvsem \
    php81-tokenizer \
    php81-zip \
    php81-opcache
# ---------- php.ini ----------
mv -f /tmp/php.ini /etc/php81/php.ini
# ---------- php-fpm ----------
mv -f /tmp/php-fpm-www.conf /etc/php81/php-fpm.d/www.conf
mkdir -p /var/run/php
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- project directory ----------
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
chmod -R 777 /var/log
# ---------- clear works ----------
rm -rf /var/cache/apk/* /root/.cache /tmp/*