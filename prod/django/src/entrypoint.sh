#!/bin/bash
if [ ! -f /var/web/project/django/manage.py ]; then
    mkdir -p /var/web/project/django && django-admin startproject app /var/web/project/django
fi

python3 manage.py runserver 0.0.0.0:8000