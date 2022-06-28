# Supervisor

## 配置文件

### Horizon
```ini
[program:horizon]
process_name=%(program_name)s_%(process_num)02d
command=php /var/web/project/app/artisan horizon
autostart=true
autorestart=true
user=root
numprocs=8
redirect_stderr=true
stdout_logfile=/var/web/project/app/storage/logs/horizon.log
stopwaitsecs=3600
```

### Queue

```ini
[program:queue]
process_name=%(program_name)s_%(process_num)02d
command=php /var/web/project/app/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
user=root
numprocs=8
redirect_stderr=true
stdout_logfile=/var/web/project/app/storage/logs/queue.log
stopwaitsecs=3600
```