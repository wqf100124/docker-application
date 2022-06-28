#!/bin/bash
# database
database=${1}
backup_path=/var/web/backup/database
# 文件名称
file=$backup_path/${database}_$(date "+%Y_%m_%d_%H_%M_%S").sql
# 备份
docker exec mysql mysqldump -u root -paiguangjii $database > $file
# 打包
tar -czf $file.tar.gz $file
# 删除旧文件
rm $file
echo "数据库\"${database}\"备份成功"

#!/bin/bash

# Database name
database=${1}
path=/var/lib/postgresql/backup
# Backup file name
filename=${database}_$(date "+%Y%m%d-%H%M%S").bak

# Backing up
docker exec mysql mysqldump -u root -paiguangjii $database > ${path}/$file
echo "The ${database} database backup was successful!"