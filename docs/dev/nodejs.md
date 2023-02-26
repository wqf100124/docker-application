# NodeJs项目

## 运行容器

以 nodejs16 为例：
```sh
$ docker run -it \
  --name app \
  -p 8080:8080 \
  -v /var/web/app:/var/web/app \
  node:16-alpine sh
```

记得修改 host 为 `0.0.0.0`
