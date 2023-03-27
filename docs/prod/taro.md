# Taro部署环境

- taro
- nodejs
- yarn

官方文档:[https://taro-docs.jd.com/taro/docs/GETTING-STARTED](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)

## 构建镜像

taro3
```sh
$ docker build -t i94m/taro:3 -t i94m/taro:latest --no-cache ./build
```

## 创建容器

```sh
$ docker run -d \
--name taro \
-v ~/web/apps/app:/app \
i94m/taro
```
