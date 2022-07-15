# Ubuntu

## 创建用户
```sh
useradd -d /home/wqf -m -g root -s /bin/bash -p Wqf123 wqf
```

##  jenkins

```sh
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

##  安装Docker

```sh
apt install docker.io
```

##  network

```sh
docker network create --subnet=172.16.0.0/24 web
```