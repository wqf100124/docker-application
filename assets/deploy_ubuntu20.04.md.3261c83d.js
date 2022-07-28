import{_ as s,c as a,o as n,a as p}from"./app.39ac7f5c.js";const h=JSON.parse('{"title":"Ubuntu20.04\u4E0B\u642D\u5EFA\u751F\u4EA7\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u7528\u6237","slug":"\u521B\u5EFA\u7528\u6237"},{"level":2,"title":"\u5B89\u88C5Docker","slug":"\u5B89\u88C5docker"},{"level":2,"title":"\u521B\u5EFADocker\u7F51\u7EDC","slug":"\u521B\u5EFAdocker\u7F51\u7EDC"},{"level":2,"title":"\u5B89\u88C5\u6307\u5B9A\u7248\u672Cnodejs","slug":"\u5B89\u88C5\u6307\u5B9A\u7248\u672Cnodejs"},{"level":2,"title":"Nginx","slug":"nginx"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u670D\u52A1\u547D\u4EE4","slug":"\u670D\u52A1\u547D\u4EE4"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF08\u4F7F\u7528octane\uFF09","slug":"\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF08\u4F7F\u7528octane\uFF09"},{"level":2,"title":"PHP","slug":"php"},{"level":2,"title":"Composer","slug":"composer"},{"level":2,"title":"Supervisor","slug":"supervisor"},{"level":2,"title":"Cron(\u5B9A\u65F6\u4EFB\u52A1)","slug":"cron-\u5B9A\u65F6\u4EFB\u52A1"},{"level":2,"title":"Entrypoint","slug":"entrypoint"},{"level":2,"title":"Redis","slug":"redis"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5-1"},{"level":3,"title":"\u670D\u52A1\u547D\u4EE4","slug":"\u670D\u52A1\u547D\u4EE4-1"}],"relativePath":"deploy/ubuntu20.04.md"}'),e={name:"deploy/ubuntu20.04.md"},l=p(`<h1 id="ubuntu20-04\u4E0B\u642D\u5EFA\u751F\u4EA7\u73AF\u5883" tabindex="-1">Ubuntu20.04\u4E0B\u642D\u5EFA\u751F\u4EA7\u73AF\u5883 <a class="header-anchor" href="#ubuntu20-04\u4E0B\u642D\u5EFA\u751F\u4EA7\u73AF\u5883" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u7528\u6237" tabindex="-1">\u521B\u5EFA\u7528\u6237 <a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ useradd -d /home/wade -m -g root -s /bin/bash wade</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5docker" tabindex="-1">\u5B89\u88C5Docker <a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ apt install docker.io</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFAdocker\u7F51\u7EDC" tabindex="-1">\u521B\u5EFADocker\u7F51\u7EDC <a class="header-anchor" href="#\u521B\u5EFAdocker\u7F51\u7EDC" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker network create --subnet=172.16.0.0/24 web</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5\u6307\u5B9A\u7248\u672Cnodejs" tabindex="-1">\u5B89\u88C5\u6307\u5B9A\u7248\u672Cnodejs <a class="header-anchor" href="#\u5B89\u88C5\u6307\u5B9A\u7248\u672Cnodejs" aria-hidden="true">#</a></h2><p>NodeSource \u662F\u4E00\u4E2A\u516C\u53F8\uFF0C\u805A\u7126\u4E8E\u63D0\u4F9B\u4F01\u4E1A\u7EA7\u7684 Node \u652F\u6301\u3002\u5B83\u7EF4\u62A4\u4E86\u4E00\u4E2A APT \u8F6F\u4EF6\u6E90\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5F88\u591A Node.js \u7248\u672C\u3002\u5982\u679C\u4F60\u7684\u5E94\u7528\u9700\u8981\u6307\u5B9A\u7248\u672C\u7684Node.js \u7248\u672C\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u8F6F\u4EF6\u6E90\u3002</p><p>\u4E0B\u8F7D\u5E76\u6267\u884C NodeSource \u5B89\u88C5\u811A\u672C\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ curl -sL https://deb.nodesource.com/setup_16.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo -E bash -</span></span>
<span class="line"></span></code></pre></div><p>NodeSource \u6E90\u542F\u7528\u6210\u529F\u540E\uFF0C\u5B89\u88C5 Node.js \u548C npm:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ sudo apt install nodejs</span></span>
<span class="line"></span></code></pre></div><p>\u9A8C\u8BC1 Node.js \u548C npm \u662F\u5426\u6B63\u786E\u5B89\u88C5\u3002\u6253\u5370\u5B83\u4EEC\u7684\u7248\u672C\u53F7\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ node --version</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm --version</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get install -y nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="\u670D\u52A1\u547D\u4EE4" tabindex="-1">\u670D\u52A1\u547D\u4EE4 <a class="header-anchor" href="#\u670D\u52A1\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/etc/init.d/nginx {start</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">stop</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">restart</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">reload</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">force-reload</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">configtest</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">rotate</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">upgrade}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF08\u4F7F\u7528octane\uFF09" tabindex="-1">\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF08\u4F7F\u7528octane\uFF09 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF08\u4F7F\u7528octane\uFF09" aria-hidden="true">#</a></h3><p>vim /etc/nginx/nginx.conf</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">user  nginx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">error_log  /var/log/nginx/error.log notice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">pid        /var/run/nginx.pid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       /etc/nginx/mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    log_format  main  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$status $body_bytes_sent &quot;$http_referer&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    access_log  /var/log/nginx/access.log  main</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">connection_upgrade </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        default upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">      close</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    include /etc/nginx/conf.d/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.conf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get install -y software-properties-common \\</span></span>
<span class="line"><span style="color:#A6ACCD;">add-apt-repository -y ppa:ondrej/php \\</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get update \\</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-amqp \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-bcmath \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-curl \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-mbstring \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-xml \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-xmlrpc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-redis \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-pgsql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-sqlite3 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-swoole \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-gd \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-gmp \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php8.1-zip \\</span></span>
<span class="line"><span style="color:#A6ACCD;">mv /tmp/php.ini /etc/php/8.1/cli/php.ini</span></span>
<span class="line"></span></code></pre></div><h2 id="composer" tabindex="-1">Composer <a class="header-anchor" href="#composer" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">php -r </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">copy(&#39;https://install.phpcomposer.com/installer&#39;, &#39;composer-setup.php&#39;);</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php composer-setup.php --install-dir=/usr/bin --filename=composer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="supervisor" tabindex="-1">Supervisor <a class="header-anchor" href="#supervisor" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get install -y supervisor</span></span>
<span class="line"></span></code></pre></div><p>/etc/supervisor/conf.d</p><h2 id="cron-\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1">Cron(\u5B9A\u65F6\u4EFB\u52A1) <a class="header-anchor" href="#cron-\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">crontab -l </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> cat</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">* * * * * /usr/bin/php /var/web/project/app/artisan schedule:run &gt;&gt; /dev/null 2&gt;&amp;1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> crontab -</span></span>
<span class="line"></span></code></pre></div><h2 id="entrypoint" tabindex="-1">Entrypoint <a class="header-anchor" href="#entrypoint" aria-hidden="true">#</a></h2><p><a href="http://entrypoint.sh" target="_blank" rel="noopener noreferrer">entrypoint.sh</a></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/cron start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># supervisor</span></span>
<span class="line"><span style="color:#A6ACCD;">supervisord -c /etc/supervisor/supervisord.conf --nodaemon --user root</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># supervisorctl start app:*</span></span>
<span class="line"></span></code></pre></div><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5-1" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get install -y redis-server</span></span>
<span class="line"></span></code></pre></div><h3 id="\u670D\u52A1\u547D\u4EE4-1" tabindex="-1">\u670D\u52A1\u547D\u4EE4 <a class="header-anchor" href="#\u670D\u52A1\u547D\u4EE4-1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/etc/init.d/redis-server {start</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">stop</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">restart</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">force-reload</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">status}</span></span>
<span class="line"></span></code></pre></div>`,41),o=[l];function c(r,t,i,d,D,y){return n(),a("div",null,o)}var A=s(e,[["render",c]]);export{h as __pageData,A as default};
