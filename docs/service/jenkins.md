# Jenkins自动化部署

:::warning 注意：
如果服务器内存太小，千万不要装，使用简单的webhook即可！
:::

## 安装

```sh
docker run -d \
    -u root \
    --name jenkins \
    --network web \
    --ip 172.16.0.201 \
    -v ~/web/service/jenkins:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v ~/.ssh:/root/.ssh \
    -v ~/web/apps:/apps \
    jenkinsci/blueocean
```

如果需要对外开放接口请添加：`-p 8080:8080`、`-p 50000:50000`

## 初始化密码

```sh
$ docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

## 设置时区

```sh
docker exec -it jenkins bash
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
echo Asia/Shanghai > /etc/timezone
```
