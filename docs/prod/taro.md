# Taro部署环境

- taro
- nodejs
- yarn

官方文档:[https://taro-docs.jd.com/taro/docs/GETTING-STARTED](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)**

## 构建镜像

```shell
# taro3
docker build -t wangqifei/taro:3 -t wangqifei/taro:latest --no-cache ./build
```

## 创建容器

```shell
docker run -d \
--name taro \
-v /var/web/project/app:/var/web/project/app \
wangqifei/taro
```