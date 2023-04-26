#!/bin/sh
export DEBIAN_FRONTEND=noninteractive
# ---------- timezone ----------
apk add --no-cache tzdata
cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# ---------- apache2 ----------
apk add --no-cache nginx
mv /tmp/sites /etc/apache2/conf.d
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
    php81-pecl-mcrypt \
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
    php81-xmlrpc \
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
sed -i "s/;date.timezone =/date.timezone = Asia\/Shanghai/g" /etc/php81/php.ini
sed -i "s/display_errors = Off/display_errors = On/g" /etc/php81/php.ini
sed -i "s/;mbstring.internal_encoding =/mbstring.internal_encoding = \"UTF-8\"/g" /etc/php81/php.ini
sed -i "s/;mbstring.http_output =/mbstring.http_output = \"UTF-8\"/g" /etc/php81/php.ini
sed -i "s/short_open_tag = Off/short_open_tag = On/g" /etc/php81/php.ini
sed -i "s/variables_order = \"GPCS\"/variables_order = \"EGPCS\"/g" /etc/php81/php.ini
sed -i "s/request_order = \"GP\"/request_order = \"GPC\"/g" /etc/php81/php.ini
sed -i "s/max_execution_time = 30/max_execution_time = 1800/g" /etc/php81/php.ini
sed -i "s/error_reporting = E_ALL \& ~E_DEPRECATED \& ~E_STRICT/error_reporting = E_ALL/g" /etc/php81/php.ini
sed -i "s/register_argc_argv = Off/register_argc_argv = On/g" /etc/php81/php.ini
sed -i "s/post_max_size = 8M/post_max_size = 150M/g" /etc/php81/php.ini
sed -i "s/enable_dl = Off/enable_dl = On/g" /etc/php81/php.ini
sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 150M/g" /etc/php81/php.ini
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- project directory ----------
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
chmod -R 777 /var/log
# ---------- init ----------
mv /tmp/init /run/init
mv /tmp/init.sh /run/init.sh
chmod +x /run/init.sh
# ---------- clear works ----------
rm -rf /var/cache/apk/* /root/.cache /tmp/*