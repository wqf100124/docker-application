# Cron 定时任务

通过crontab 命令，我们可以在固定的间隔时间执行指定的系统指令或 shell script脚本。时间间隔的单位可以是分钟、小时、日、月、周及以上的任意组合。这个命令非常适合周期性的日志分析或数据备份等工作。
> 

命令格式
```
crontab [-u user] file crontab [-u user] [ -e | -l | -r ]
```

命令参数
- -u user：用来设定某个用户的crontab服务；
- file：file是命令文件的名字,表示将file做为crontab的任务列表文件并载入crontab。如果在命令行中没有指定这个文件，crontab命令将接受标准输入（键盘）上键入的命令，并将它们载入crontab。
- -e：编辑某个用户的crontab文件内容。如果不指定用户，则表示编辑当前用户的crontab文件。
- -l：显示某个用户的crontab文件内容，如果不指定用户，则表示显示当前用户的crontab文件内容。
- -r：从/var/spool/cron目录中删除某个用户的crontab文件，如果不指定用户，则默认删除当前用户的crontab文件。
- -i：在删除用户的crontab文件时给确认提示。

crontab的文件格式

- 第1列分钟0～59
- 第2列小时0～23（0表示子夜）
- 第3列日1～31
- 第4列月1～12
- 第5列星期0～7（0和7表示星期天）
- 第6列要运行的命令

## 添加
```sh
$ crontab -l | { cat; echo "* * * * * /usr/bin/php /var/web/project/example/artisan schedule:run >> /dev/null 2>&1"; } | crontab -
```


## 编辑
```sh
$ crontab -e
```

ubuntu下启动、停止与重启cron:
```
$ sudo /etc/init.d/cron start
$ sudo /etc/init.d/cron stop
$ sudo /etc/init.d/cron restart
$ sudo /etc/init.d/cron reload
```
要把cron设为在开机的时候自动启动，在 /etc/rc.d/rc.local 脚本中加入

每1分钟执行一次myCommand
```
* * * * * myCommand
```

每小时的第3和第15分钟执行
```
3,15 * * * * myCommand
```

在上午8点到11点的第3和第15分钟执行
```
3,15 8-11 * * * myCommand
```

每隔两天的上午8点到11点的第3和第15分钟执行
```
3,15 8-11 */2  *  * myCommand
```

每周一上午8点到11点的第3和第15分钟执行
```
3,15 8-11 * * 1 myCommand
```

每月1、10、22日的4 : 45重启smb
```
45 4 1,10,22 * * /etc/init.d/smb restart
```

每周六、周日的1 : 10重启smb
```
10 1 * * 6,0 /etc/init.d/smb restart
```

每天18 : 00至23 : 00之间每隔30分钟重启smb
```
0,30 18-23 * * * /etc/init.d/smb restart
```

每星期六的晚上11 : 00 pm重启smb
```
0 23 * * 6 /etc/init.d/smb restart
```

每一小时重启smb
```
* */1 * * * /etc/init.d/smb restart
```

晚上11点到早上7点之间，每隔一小时重启smb
```
0 23-7 * * * /etc/init.d/smb restart
```

使用注意事项

有时我们创建了一个crontab，但是这个任务却无法自动执行，而手动执行这个任务却没有问题，这种情况一般是由于在crontab文件中没有配置环境变量引起的。

在crontab文件中定义多个调度任务时，需要特别注环境变量的设置，因为我们手动执行某个任务时，是在当前shell环境下进行的，程序当然能找到环境变量，而系统自动执行任务调度时，是不会加载任何环境变量的，因此，就需要在crontab文件中指定任务运行所需的所有环境变量，这样，系统执行任务调度时就没有问题了。

不要假定cron知道所需要的特殊环境，它其实并不知道。所以你要保证在shelll脚本中提供所有必要的路径和环境变量，除了一些自动设置的全局变量。所以注意如下3点：

脚本中涉及文件路径时写全局路径；

脚本执行要用到java或其他环境变量时，通过source命令引入环境变量，如:
```
0 * * * * . /usr/local/php/bin/php -m
```

注意清理系统用户的邮件日志

每条任务调度执行完毕，系统都会将任务输出信息通过电子邮件的形式发送给当前系统用户，这样日积月累，日志信息会非常大，可能会影响系统的正常运行，因此，将每条任务进行重定向处理非常重要。 例如，可以在crontab文件中设置如下形式，忽略日志输出:
```
0 */3 * * * /usr/local/apache2/apachectl restart >/dev/null 2>&1
```

```
// 注意php在没有加到环境变量中时要填写全部路径
* * * * * /usr/local/php/bin/php  /data/wwwroot/i9kk/default/artisan schedule:run >> /dev/null 2>&1
```

## 查看执行记录

``` 
tail -f /var/log/cron
```