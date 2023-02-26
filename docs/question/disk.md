# Linux 挂载数据盘

## 1.显示当前分区情况：

```sh
$ fdisk -l
```
- /dev/vdb - 数据盘，有两个分区vdb1,vdb2
- /dev/vda - 系统盘，有一个分区vda1


## 2.磁盘分区

```sh
$ fdisk /dev/vdb
```
根据提示，依次输入 n、p、1，然后两次回车，然后 wq 保存并开始分区，这里根据实际情况，如果需要分区，则需要继续输入 n、p、* 的操作，其中 * 可以直接回车，无需手动输入

分区大小输入M、G等即可

## 3.格式化
```
mkfs.ext4 /dev/vdb1 或 mkfs -t ext4 /dev/vdb1
mkfs.ext4 /dev/vdb2
...
其它分区
# 注意：/dev/vda为系统盘，千万别输入错了
```
按照界面的提示，依次输入“n”(新建分区)、“p”(新建扩展分区)、“1”(使用第1个主分区)，两次回车(使用默认配置)，输入“w”(保存分区表)，开始分区。

Last cylinder or +size or +sizeM or +sizeK (1-20805, default 20805):此处是设置分区结束柱面，+3G表示从起始柱面开始向后3G结束，也是是设置分区大小为3G

## 4.磁盘挂载与卸载

```
# 创建目录
mkdir /mnt/software
# 挂载
mount /dev/vdb1 /mnt/software
# 查看
df -h

# 卸载 
# umount [-fn] 装置文件名或挂载点
umount /dev/vdb1
```

> -f ：强制卸除！可用在类似网络文件系统 (NFS) 无法读取到的情况下；  
> -n ：不升级 /etc/mtab 情况下卸除。


## 5.自动挂载数据盘

如果希望云服务器在重启或开机时能自动挂载数据盘，必须将分区信息添加到/etc/fstab中。如果没有添加，则云服务器重启或开机后，都不能自动挂载数据盘。
请确认分区路径是否为 “/dev/vdb1”,若路径错误，将会造成云主机重启失败

```
# 查看当前分区信息
cat /etc/fstab
# 编辑
vim /etc/fstab
# 在最后添加分区信息
/dev/vdb1 /mnt/project ext4 defaults 0 0
/dev/vdb2 /mnt/data ext4 defaults 0 0
...
```

使用 `echo '/dev/vdb1 /mydata ext3 defaults 0 0' >> /etc/fstab` 命令添加分区信息后，使用 `cat /etc/fstab` 命令查看，出现以下信息表示添加分区信息成功。