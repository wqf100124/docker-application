# Django
python/pip/django

## 构建镜像

```sh
$ docker build -t i94m/django --no-cache ./dev/django
```

##  运行容器

```sh
$ docker run -d --name django --network web -p 8000:8000 -v ~/web/project/django:/app --restart always i94m/django
```

##  开发模式

```sh
$ python3 manage.py runserver 0.0.0.0:8000
```
