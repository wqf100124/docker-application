#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
# ---------- timezone ----------
apt-get install -y tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- python ----------
apt-get install -y python3 python3-dev python3-pip libxml2-dev libxslt1-dev zlib1g-dev libffi-dev libssl-dev
mkdir /root/.pip
mv /tmp/pip.conf /root/.pip/pip.conf
pip install --upgrade pip
# ---------- scrapy ----------
pip install cffi cryptography beautifulsoup4 scrapy colorama
touch /var/log/scrapy.log
# ---------- scrapy-jsonrpc ----------
pip install scrapy-jsonrpc
# ---------- psycopg2 ----------
apt-get install -y python3-psycopg2
pip install psycopg2
# ---------- sqlalchemy ----------
pip install sqlalchemy
# ---------- clear works ----------
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*
