#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
# ---------- timezone ----------
apt-get install -y tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- working directory ----------
mkdir -p /app
# ---------- python ----------
apt-get install -y python3 python3-dev python3-pip
mkdir /root/.pip
mv /tmp/pip.conf /root/.pip/pip.conf
pip install --upgrade pip
# ---------- django ----------
pip install django
# ---------- psycopg2 ----------
apt-get install -y python3-psycopg2
pip install psycopg2
# ---------- vite ----------
pip install django-vite
# ---------- init ----------
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*
