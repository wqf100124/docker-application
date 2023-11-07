import{_ as s,o as a,c as n,O as p}from"./chunks/framework.4afe7240.js";const D=JSON.parse('{"title":"PHP-FPM","description":"","frontmatter":{},"headers":[],"relativePath":"prod/php-fpm.md","filePath":"prod/php-fpm.md"}'),l={name:"prod/php-fpm.md"},o=p(`<h1 id="php-fpm" tabindex="-1">PHP-FPM <a class="header-anchor" href="#php-fpm" aria-label="Permalink to &quot;PHP-FPM&quot;">​</a></h1><h2 id="构建镜像" tabindex="-1">构建镜像 <a class="header-anchor" href="#构建镜像" aria-label="Permalink to &quot;构建镜像&quot;">​</a></h2><h3 id="php8-2-latest" tabindex="-1">php8.2/latest <a class="header-anchor" href="#php8-2-latest" aria-label="Permalink to &quot;php8.2/latest&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm:8.2</span></span></code></pre></div><h3 id="php8-1" tabindex="-1">php8.1 <a class="header-anchor" href="#php8-1" aria-label="Permalink to &quot;php8.1&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm:8.1</span></span></code></pre></div><h3 id="php8-0" tabindex="-1">php8.0 <a class="header-anchor" href="#php8-0" aria-label="Permalink to &quot;php8.0&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm:8.0</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i94m/php-fpm:8.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--build-arg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version=</span><span style="color:#F78C6C;">8.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./prod/php/php-fpm</span></span></code></pre></div><h3 id="php7-4" tabindex="-1">php7.4 <a class="header-anchor" href="#php7-4" aria-label="Permalink to &quot;php7.4&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm:7.4</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i94m/php-fpm:7.4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--build-arg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version=</span><span style="color:#F78C6C;">7.4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./prod/php/php-fpm</span></span></code></pre></div><h2 id="创建容器" tabindex="-1">创建容器 <a class="header-anchor" href="#创建容器" aria-label="Permalink to &quot;创建容器&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name </span><span style="color:#C3E88D;">php8.1-fpm</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">~/web/service/php/8.1/run:/var/run/php</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">~/web/apps:/apps</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">i94m/php-fpm:8.1</span></span></code></pre></div><h3 id="赋予权限" tabindex="-1">赋予权限 <a class="header-anchor" href="#赋予权限" aria-label="Permalink to &quot;赋予权限&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/web/service/php/8.1/run</span></span></code></pre></div><h2 id="nginx配置" tabindex="-1">Nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;Nginx配置&quot;">​</a></h2><h3 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen [::]:80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name example.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /apps/example.com/public</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    add_header X-Frame-Options </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SAMEORIGIN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header X-Content-Type-Options </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nosniff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    index index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    charset utf-8</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ /index.php?$query_string</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /favicon.ico { access_log off</span><span style="color:#676E95;font-style:italic;">; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /robots.txt  { access_log off</span><span style="color:#676E95;font-style:italic;">; log_not_found off; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    error_page 404 /index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include fastcgi_params</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ /\\.(?!well-known).* {</span></span>
<span class="line"><span style="color:#A6ACCD;">        deny all</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,17),e=[o];function t(c,r,i,C,y,A){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{D as __pageData,d as default};