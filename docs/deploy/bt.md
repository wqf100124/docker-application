# 使用宝塔部署项目

[宝塔面板](https://www.bt.cn) - 简单好用的Linux/Windows服务器运维管理面板

## 安装宝塔
https://www.bt.cn/new/download.html

## 查看默认入口和账号密码

```sh
$ bt default
```

## 关闭SSL
```sh
$ rm -f /www/server/panel/data/ssl.pl && /etc/init.d/bt restart
```

## 修改端口号

编辑
```sh
$ vim /www/server/panel/data/port.pl
```

重启
```sh
$ /etc/init.d/bt restart
```

## 查看所有命令

```sh
bt
```

* (0) 取消
* (1) 重启面板服务           
* (2) 停止面板服务           
* (3) 启动面板服务           
* (4) 重载面板服务           
* (5) 修改面板密码           
* (6) 修改面板用户名         
* (7) 强制修改MySQL密码
* (8) 改面板端口
* (9) 清除面板缓存
* (10) 清除登录限制
* (11) 设置是否开启IP + User-Agent验证
* (12) 取消域名绑定限制
* (13) 取消IP访问限制
* (14) 查看面板默认信息
* (15) 清理系统垃圾
* (16) 修复面板(检查错误并更新面板文件到最新版)
* (17) 设置日志切割是否压缩
* (18) 设置是否自动备份面板
* (22) 显示面板错误日志      
* (23) 关闭BasicAuth认证     
* (24) 关闭动态口令认证          
* (25) 设置是否保存文件历史副本  
* (29) 取消访问设备验证

## Nginx

1.在【软件商店】中搜索并安装 `nginx`

## Mysql

1.在【软件商店】中搜索并安装 `mysql`

## PHP

1.在【软件商店】中搜索并安装 `php`

2.在【已安装】软件中找到并打开php的设置

3.点击【禁用函数】，删除以下方法：
```ini
putenv, proc_open
```

4.点击【安装扩展】，安装所需要的扩展如 `phpinfo`、`redis` 等

## 部署站点

以 Laravel 项目为例：

### 1.添加站点

点击 【网站】 -> 【添加站点】，填写项目根目录如：/www/wwwroot/example

### 2.防跨站攻击

- 第一种方案：打开【网站目录】，去掉勾选【防跨站攻击(open_basedir)】
- 第二种方案：打开项目目录，修改 public 目录下的 `.user.ini` 例如：
```ini
open_basedir=/www/wwwroot/example/:/www/wwwroot/example/public/:/tmp/
```

### 3.URL重写

打开 【站点设置】，在【伪静态】选项中选择 laravel5模板 或 手动添加如下代码：
```ini
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### 4.修改 storage 目录权限
```sh
chmod -R 777 /www/wwwroot/example/storage
```

## Webhook

> 可设置回调脚本，通常用于第三方回调通知!

1.在【软件商店】中搜索并安装 `宝塔WebHook`

2.点击【添加Hook】，填写名称和执行脚本

以 git 自动部署为例：

```sh
cd /www/wwwroot/example
git fetch --all
git reset --hard origin/main
git pull origin main
echo $(date "+%Y-%m-%d %H:%M:%S")
```

点击【查看密钥】查看使用方法

## PHP版本

查看当前 php 版本的信息
```sh
$ ls -l /usr/bin/php
```

查看服务器上有多少个 php版本
```sh
$ ls /www/server/php
```

设置默认php版本
```sh
$ ln -sf /www/server/php/81/bin/php /usr/bin/php
```

验证
```sh
$ php -v
```

使用指定的php版本安装composer依赖
```sh
$ /www/server/php/74/bin/php /usr/bin/composer install
$ /www/server/php/81/bin/php /usr/bin/composer install
```

