##  rabbitmq

latest

```sh
docker run -itd --privileged --tty --restart always --name rabbitmq --network web --ip 172.16.0.56 -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management-alpine
```

3.8版本
```sh
docker run -itd --privileged --tty --restart on-failure --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8-management-alpine
```