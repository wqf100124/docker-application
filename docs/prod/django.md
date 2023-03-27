# Django

python/pip/django

## 构建镜像

```sh
$ docker build -t i94m/django --no-cache ./prod/django
```

## 运行容器

```sh
$ docker run -d \
  --name django  \
  --network web  \
  -p 80:80  \
  -p 8000:8000  \
  -v ~/web/apps/django:/apps/django  \
  --restart always  \
  i94m/django
```

## 开发模式

```sh
$ python3 manage.py runserver 0.0.0.0:8000
$ nohup python3 manage.py runserver 0.0.0.0:80 &
```

```sh
python -m django --version
```

安装依赖

```sh
$ pip install -r requerments.txt
$ pip install numpy joblib xlrd -i https://mirrors.aliyun.com/pypi/simple
```

nginx配置

```ini
location /static {
    # static静态文件目录
    root /www/wwwroot/43.139.215.50/zcxt/static;
}
```

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

## 部署

### uWSGI

> uWSGI 文档提供了一个覆盖 Django，nginx，和 uWSGI（一个配置，多种适配）。以下文档专注于如何用 uWSGI 集成 Django。

安装

```sh
$ python -m pip install uwsgi
```

项目配置

```ini
uwsgi --chdir=/www/wwwroot/43.139.215.50/zcxt \
    --module=zcxt.wsgi:application \
    --env DJANGO_SETTINGS_MODULE=zcxt.settings \
    --master --pidfile=/tmp/project-zcxt.pid \
    --socket=127.0.0.1:8008 \
    --processes=5 \
    --uid=1000 --gid=2000 \
    --harakiri=20 \
    --max-requests=5000 \
    --vacuum \
    --daemonize=/var/log/uwsgi/zcxt.log
```

uwsgi.ini

```ini
[uwsgi]
socket = /tmp/example.sock
chdir=/www/wwwroot/example
module=example.wsgi:application
master=True
pidfile=/tmp/project-example.pid
vacuum=True
max-requests=5000
daemonize=/var/log/uwsgi/example.log
```

运行

```sh
$ uwsgi --ini /www/wwwroot/example/uwsgi.ini
```

停止服务

```sh
uwsgi --stop /tmp/project-example.pid
```

重启服务

```sh
uwsgi --reload /tmp/project-example.pid
```

nginx

```ini
server {
    listen       80;
    server_name  localhost;
    
    location / {            
        include  uwsgi_params;
        uwsgi_pass unix:/tmp/example.sock;
        uwsgi_param UWSGI_SCRIPT example.wsgi;
        uwsgi_param UWSGI_CHDIR /www/wwwroot/example;
        index index.html index.htm;
        client_max_body_size 35m;
    }
    
    location /static/ {
        # 静态资源路径，js、css、图片、字体等
        alias /www/wwwroot/example/static/; 
    }
}
```
