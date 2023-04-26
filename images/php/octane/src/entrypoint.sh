#!/bin/bash

# supervisor
if [ ! -f /etc/supervisor/conf.d/app.conf ]; then
    cp /etc/supervisor/example/* /etc/supervisor/conf.d
fi

/etc/init.d/cron start

supervisord -c /etc/supervisor/supervisord.conf --nodaemon --user root
# supervisorctl start app:*