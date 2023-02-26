# Scrapy(爬虫)

## 构建镜像
```sh
$ docker build -t wangqifei/scrapy --no-cache .
```

## 运行容器

```sh
$ docker run -d --name scrapy --network web -v /var/web/scrapy:/var/web/scrapy --restart always wangqifei/scrapy
```

## 创建爬虫项目

```sh
$ scrapy startproject <project_name> [project_dir]
$ crapy startproject media scrapy
```

## 创建爬虫

```sh
# basic
$ scrapy genspider example example.com
# crawl
$ scrapy genspider -t crawl example example.com
```

## 抓取数据

```sh
# 项目内
$ scrapy crawl example -O example.json --nolog

# 全局(有些问题)
$ scrapy runspider /var/web/project/spider/example/spider/spiders/sites.py --nolog
```

```sh
$ docker exec scrapy scrapy crawl sites --nolog
```

```sh
$ docker exec scrapy scrapy crawl threads --nolog
```

```sh
$ docker exec scrapy scrapy crawl reads --nolog
```

## 存入数据库

待完善...