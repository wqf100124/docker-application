# 使用文档

## 打包

1.命令行进入到项目根目录
2.运行 docker build --no-cache -t 你的镜像名称:版本 .
3.docker push 你的镜像名称:版本

## 测试

1.创建容器: docker run -d --name test -p 8000:80 -e MYSQL_HOST=172.16.0.33 -e MYSQL_USERNAME=test -e
MYSQL_PASSWORD=Ab123456 你的镜像名称:版本
2.访问 http://localhost:8000