# Django
python/pip/django

## 构建镜像

```sh
docker build -t wangqifei/django --no-cache ./prod/django
```

##  运行容器

```sh
docker run -d --name django --network web -p 8000:8000 -v /var/web/project/django:/var/web/project/django --restart always wangqifei/django
```

##  开发模式

```sh
python3 manage.py runserver 0.0.0.0:8000
```