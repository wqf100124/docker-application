# Django
python/pip/django

## 构建镜像

```shell
docker build -t wangqifei/django --no-cache ./prod/django
```

##  运行容器

```shell
docker run -d --name django --network web -p 8000:8000 -v /var/web/project/django:/var/web/project/django --restart always wangqifei/django
```

##  开发模式

```shell
python3 manage.py runserver 0.0.0.0:8000
```