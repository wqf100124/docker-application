import{_ as s,c as n,o as a,a as p}from"./app.53dcf57d.js";const h=JSON.parse('{"title":"Original","description":"","frontmatter":{},"headers":[],"relativePath":"deploy/original.md"}'),l={name:"deploy/original.md"},e=p(`<h1 id="original" tabindex="-1">Original <a class="header-anchor" href="#original" aria-hidden="true">#</a></h1><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nginx.conf /etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># sites /etc/nginx/sites-enabled/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># php.ini /etc/php/7.4/cli/php.ini</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># http://mirrors.163.com/ubuntu/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- replace aliyun source ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">cp -a /etc/apt/sources.list /etc/apt/sources.list.bak</span></span>
<span class="line"><span style="color:#A6ACCD;">sed -i </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s@http://.*archive.ubuntu.com@http://mirrors.163.com/ubuntu@g</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /etc/apt/sources.list</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get update</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get -y upgrade</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> DEBIAN_FRONTEND=noninteractive</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- depends ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y curl wget unzip vim</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- nginx ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- php none sodium ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-fpm \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-bcmath \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-bz2 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-curl \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-gd \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-gmp \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-imap \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-intl \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-json \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-mbstring \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-opcache \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-pgsql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-xml \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-xmlrpc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-xsl \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php7.4-zip \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php-redis \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php-amqp \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php-memcached \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php-imagick</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- composer ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y composer</span></span>
<span class="line"><span style="color:#A6ACCD;">composer config -g repos.packagist composer https://mirrors.cloud.tencent.com/composer/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- redis ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y redis-server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- nodejs ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y nodejs npm</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- git ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- mysql ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y mysql-server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- timezone ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg-reconfigure -f noninteractive tzdata</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- set default ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /home/web/hooks /home/web/project /home/web/backup</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get clean</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get autoremove</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- success ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -v</span></span>
<span class="line"><span style="color:#A6ACCD;">php -v</span></span>
<span class="line"><span style="color:#A6ACCD;">composer --version</span></span>
<span class="line"><span style="color:#A6ACCD;">node -v</span></span>
<span class="line"><span style="color:#A6ACCD;">npm -v</span></span>
<span class="line"><span style="color:#A6ACCD;">git --version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---------- start ----------</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/nginx start</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/php7.4-fpm start</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/redis-server start</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/mysql start</span></span>
<span class="line"></span></code></pre></div>`,2),t=[e];function o(c,i,r,A,y,C){return a(),n("div",null,t)}var g=s(l,[["render",o]]);export{h as __pageData,g as default};
