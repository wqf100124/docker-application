#!/bin/bash

# php-fpm
php-fpm8.0

# webhook
webhook -urlprefix '' -ip '0.0.0.0' -port 9000 -hooks=/var/web/hooks/hooks.yaml -nopanic &

#supervisor
supervisorctl start shop:*

# nginx
exec nginx -g 'daemon off;'