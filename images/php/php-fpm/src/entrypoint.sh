#!/bin/bash

# supervisor
if [ "$(ls -A /etc/supervisor/conf.d)" ]; then
    supervisord -c /etc/supervisor/supervisord.conf
    # supervisorctl start laravel:*
fi

# php-fpm
php-fpm{VERSION}

chmod 777 /var/run/php/php{VERSION}-fpm.sock

# log
tail -f /var/log/php{VERSION}-fpm.log