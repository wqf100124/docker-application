##  redis

```sh
docker run -d --name redis --network web --ip 172.16.0.63 -p 6379:6379 --restart always redis:alpine
```