#!/bin/bash

if [ ! "$(ls -A /etc/nginx/conf.d)" ]; then
    cp /etc/nginx/sites-available/default.conf /etc/nginx/conf.d
fi

# php-fpm
php-fpm{version}
# memcached
/etc/init.d/memcached start
# redis
/etc/init.d/redis-server start
# nginx
exec nginx -g 'daemon off;'