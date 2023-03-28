import{_ as s,c as a,o as n,N as l}from"./chunks/framework.e029e743.js";const h=JSON.parse('{"title":"Laravel Octane","description":"","frontmatter":{},"headers":[],"relativePath":"prod/octane.md"}'),p={name:"prod/octane.md"},o=l(`<h1 id="laravel-octane" tabindex="-1">Laravel Octane <a class="header-anchor" href="#laravel-octane" aria-label="Permalink to &quot;Laravel Octane&quot;">​</a></h1><h2 id="构建镜像" tabindex="-1">构建镜像 <a class="header-anchor" href="#构建镜像" aria-label="Permalink to &quot;构建镜像&quot;">​</a></h2><h3 id="php8-2-latest" tabindex="-1">php8.2/latest <a class="header-anchor" href="#php8-2-latest" aria-label="Permalink to &quot;php8.2/latest&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">octane:php8.</span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span></code></pre></div><h3 id="php8-1" tabindex="-1">php8.1 <a class="header-anchor" href="#php8-1" aria-label="Permalink to &quot;php8.1&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">octane:php8.</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><h3 id="php8-0" tabindex="-1">php8.0 <a class="header-anchor" href="#php8-0" aria-label="Permalink to &quot;php8.0&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">octane:php8.</span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">laravel/octane</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">octane:install</span></span>
<span class="line"></span></code></pre></div><p>默认使用swoole，如果要使用roadrunner，替换supervisor命令</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">command</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/usr/bin/php -d </span><span style="color:#F07178;">variables_order</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">EGPCS /app/artisan octane:start --</span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">roadrunner --</span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0.0.0.0 --</span><span style="color:#F07178;">rpc-port</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">6001 --</span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">8000</span></span>
<span class="line"></span></code></pre></div><h2 id="创建容器" tabindex="-1">创建容器 <a class="header-anchor" href="#创建容器" aria-label="Permalink to &quot;创建容器&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name </span><span style="color:#C3E88D;">app</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">~/web/apps/app:/app</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">~/web/service/supervisor:/etc/supervisor/conf.d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">i94m/octane</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx配置" tabindex="-1">Nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;Nginx配置&quot;">​</a></h2><h3 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      443 ssl http2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name                 example.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate             /etc/nginx/conf.d/ssl/example.com.pem</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key         /etc/nginx/conf.d/ssl/example.com.key</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols               TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers                 EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_prefer_server_ciphers   on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_timeout         10m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_cache           builtin:1000 shared:SSL:10m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_buffer_size             1400</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header                  Strict-Transport-Security </span><span style="color:#F07178;">max-age</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">15768000</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_stapling                on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_stapling_verify         on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log                  off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    if ($</span><span style="color:#F07178;">ssl_protocol</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 301 https://$host$request_uri</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    server_tokens off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /apps/example/public</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    charset utf-8</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location /index.php {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files /not_exists @octane</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ @octane</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /favicon.ico { access_log off</span><span style="color:#676E95;font-style:italic;">; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /robots.txt  { access_log off</span><span style="color:#676E95;font-style:italic;">; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    error_log  /var/log/nginx/example.com-error.log error</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    error_page 404 /index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location @octane {</span></span>
<span class="line"><span style="color:#A6ACCD;">        set $suffix </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        if ($</span><span style="color:#F07178;">uri</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /index.php) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            set $suffix ?$query_string</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_http_version 1.1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Host $http_host</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Scheme $scheme</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header SERVER_PORT $server_port</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header REMOTE_ADDR $remote_addr</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Upgrade $http_upgrade</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Connection $connection_upgrade</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://172.16.0.2:8000$suffix</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,17),e=[o];function t(c,r,i,y,C,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{h as __pageData,d as default};