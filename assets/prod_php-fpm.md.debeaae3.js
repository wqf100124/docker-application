import{_ as s,c as a,o as n,a as p}from"./app.a9aad340.js";const y=JSON.parse('{"title":"PHP-FPM","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA\u955C\u50CF","slug":"\u6784\u5EFA\u955C\u50CF","link":"#\u6784\u5EFA\u955C\u50CF","children":[{"level":3,"title":"php8.1","slug":"php8-1","link":"#php8-1","children":[]},{"level":3,"title":"php8.0","slug":"php8-0","link":"#php8-0","children":[]},{"level":3,"title":"php7.4","slug":"php7-4","link":"#php7-4","children":[]}]},{"level":2,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668","link":"#\u521B\u5EFA\u5BB9\u5668","children":[{"level":3,"title":"\u8D4B\u4E88\u6743\u9650","slug":"\u8D4B\u4E88\u6743\u9650","link":"#\u8D4B\u4E88\u6743\u9650","children":[]}]},{"level":2,"title":"Nginx\u914D\u7F6E","slug":"nginx\u914D\u7F6E","link":"#nginx\u914D\u7F6E","children":[{"level":3,"title":"HTTP","slug":"http","link":"#http","children":[]}]}],"relativePath":"prod/php-fpm.md"}'),l={name:"prod/php-fpm.md"},e=p(`<h1 id="php-fpm" tabindex="-1">PHP-FPM <a class="header-anchor" href="#php-fpm" aria-hidden="true">#</a></h1><h2 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1">\u6784\u5EFA\u955C\u50CF <a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h2><h3 id="php8-1" tabindex="-1">php8.1 <a class="header-anchor" href="#php8-1" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/php-fpm:8.1 -t wangqifei/php-fpm:latest --no-cache ./prod/php/php-fpm</span></span>
<span class="line"></span></code></pre></div><h3 id="php8-0" tabindex="-1">php8.0 <a class="header-anchor" href="#php8-0" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/php-fpm:8.0 --build-arg version=8.0 --no-cache ./prod/php/php-fpm</span></span>
<span class="line"></span></code></pre></div><h3 id="php7-4" tabindex="-1">php7.4 <a class="header-anchor" href="#php7-4" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/php-fpm:7.4 --build-arg version=7.4 --no-cache ./prod/php/php-fpm</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name php8.1-fpm \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/web/service/php/8.1/run:/var/run/php \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/web/project:/var/web/project \\</span></span>
<span class="line"><span style="color:#A6ACCD;">wangqifei/php-fpm:8.1</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8D4B\u4E88\u6743\u9650" tabindex="-1">\u8D4B\u4E88\u6743\u9650 <a class="header-anchor" href="#\u8D4B\u4E88\u6743\u9650" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ chmod -R 777 /var/web/service/php/8.1/run</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx\u914D\u7F6E" tabindex="-1">Nginx\u914D\u7F6E <a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-hidden="true">#</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen [::]:80</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name example.com</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /var/web/project/example.com/public</span><span style="color:#676E95;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    add_header X-Frame-Options </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SAMEORIGIN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header X-Content-Type-Options </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nosniff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    index index.php</span><span style="color:#676E95;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    charset utf-8</span><span style="color:#676E95;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ /index.php?$query_string</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /favicon.ico { access_log off</span><span style="color:#676E95;">; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /robots.txt  { access_log off</span><span style="color:#676E95;">; log_not_found off; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    error_page 404 /index.php</span><span style="color:#676E95;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include fastcgi_params</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ /\\.(?!well-known).* {</span></span>
<span class="line"><span style="color:#A6ACCD;">        deny all</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,15),o=[e];function c(t,i,r,h,d,C){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{y as __pageData,u as default};
