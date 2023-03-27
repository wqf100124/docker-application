import{_ as s,c as n,o as a,N as l}from"./chunks/framework.e029e743.js";const h=JSON.parse('{"title":"Nginx的配置","description":"","frontmatter":{},"headers":[],"relativePath":"prod/nginx.md"}'),p={name:"prod/nginx.md"},e=l(`<h1 id="nginx的配置" tabindex="-1">Nginx的配置 <a class="header-anchor" href="#nginx的配置" aria-label="Permalink to &quot;Nginx的配置&quot;">​</a></h1><h2 id="构建镜像" tabindex="-1">构建镜像 <a class="header-anchor" href="#构建镜像" aria-label="Permalink to &quot;构建镜像&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i94m/nginx:alpine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./prod/nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="创建容器" tabindex="-1">创建容器 <a class="header-anchor" href="#创建容器" aria-label="Permalink to &quot;创建容器&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#F78C6C;">443</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">~/web/service/php/</span><span style="color:#F78C6C;">8.1</span><span style="color:#C3E88D;">/run/php8.</span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">-fpm.sock:/var/run/php/php8.</span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">-fpm.sock:ro</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">~/web/service/nginx/conf.d:/etc/nginx/conf.d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">~/web/apps:/apps</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">i94m/nginx:alpine</span></span>
<span class="line"></span></code></pre></div><h3 id="https-proxy" tabindex="-1">Https Proxy <a class="header-anchor" href="#https-proxy" aria-label="Permalink to &quot;Https Proxy&quot;">​</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 443 ssl http2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  api.guangji.wang</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate /etc/nginx/conf.d/ssl/api.guangji.wang.pem</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key /etc/nginx/conf.d/ssl/api.guangji.wang.key</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_prefer_server_ciphers on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_timeout 10m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_cache builtin:1000 shared:SSL:10m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_buffer_size 1400</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Strict-Transport-Security </span><span style="color:#F07178;">max-age</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">15768000</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_stapling on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_stapling_verify on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    if ($</span><span style="color:#F07178;">ssl_protocol</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 301 https://$host$request_uri</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    server_tokens off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /apps/shop/api/public</span><span style="color:#676E95;font-style:italic;">;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    error_log  /var/log/nginx/api.guangji.wang-error.log error</span><span style="color:#676E95;font-style:italic;">;</span></span>
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
<span class="line"></span></code></pre></div><h2 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h2><h3 id="_1-轮询" tabindex="-1">1.轮询 <a class="header-anchor" href="#_1-轮询" aria-label="Permalink to &quot;1.轮询&quot;">​</a></h3><p>轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除。</p><p>配置示例：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upstream web-server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-权重" tabindex="-1">2.权重 <a class="header-anchor" href="#_2-权重" aria-label="Permalink to &quot;2.权重&quot;">​</a></h3><p>指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能，如下配置后192.168.0.2服务的访问比率会是192.168.0.1服务的二倍。</p><p>配置示例：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upstream web-server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.1 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.2 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-ip-hash" tabindex="-1">3.ip hash <a class="header-anchor" href="#_3-ip-hash" aria-label="Permalink to &quot;3.ip hash&quot;">​</a></h3><p>每个请求都根据访问ip的hash结果分配，经过这样的处理，每个访客固定访问一个后端服务，如下配置（ip_hash可以和weight配合使用）。</p><p>配置示例：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upstream web-server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ip_hash</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.1 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.2 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-最少连接" tabindex="-1">4.最少连接 <a class="header-anchor" href="#_4-最少连接" aria-label="Permalink to &quot;4.最少连接&quot;">​</a></h3><p>将请求分配到连接数最少的服务上。</p><p>配置示例：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upstream web-server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    least_conn</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.1 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.2 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-fair" tabindex="-1">5.fair <a class="header-anchor" href="#_5-fair" aria-label="Permalink to &quot;5.fair&quot;">​</a></h3><p>按后端服务器的响应时间来分配请求，响应时间短的优先分配。</p><p>配置示例：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upstream web-server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    least_conn</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.1 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server   192.168.0.2 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">worker_processes  1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream web-server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        server   192.168.0.1 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server   192.168.0.2 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">       listen       80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       server_name  localhost</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">       location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://web-server</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_redirect default</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,30),o=[e];function t(c,r,i,y,C,A){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{h as __pageData,d as default};
