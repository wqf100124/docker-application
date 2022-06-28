FROM nginx:alpine
LABEL author="928988368@qq.com"
LABEL description="The nginx production environment."
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx","-g","daemon off;"]
EXPOSE 80 443