# Supervisor

## 配置文件

### Horizon
```ini
[program:horizon]
process_name=%(program_name)s_%(process_num)02d
command=php /app/artisan horizon
autostart=true
autorestart=true
user=root
numprocs=8
redirect_stderr=true
stdout_logfile=/app/storage/logs/horizon.log
stopwaitsecs=3600
```

### Queue

```ini
[program:queue]
process_name=%(program_name)s_%(process_num)02d
command=php /app/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
user=root
numprocs=8
redirect_stderr=true
stdout_logfile=/app/storage/logs/queue.log
stopwaitsecs=3600
```
