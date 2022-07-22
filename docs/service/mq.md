# MQ

## RabbitMQ

### 创建容器
```sh
$ docker run -d \
  --restart always \
  --name rabbitmq \
  --network web \
  --ip 172.16.0.56 \
  -p 5672:5672 \
  -p 15672:15672 \
  rabbitmq:3.9-management-alpine
```