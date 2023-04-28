#!/bin/bash
/etc/init.d/mysql start
/etc/init.d/redis-server start
java -Duser.timezone=GMT+8 -jar runscore-weixinrobot-0.0.1-SNAPSHOT.jar