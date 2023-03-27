#!/bin/bash
if [ ! -f /app/manage.py ]; then
    mkdir -p /app && django-admin startproject app /app
fi

python3 manage.py runserver 0.0.0.0:8000
