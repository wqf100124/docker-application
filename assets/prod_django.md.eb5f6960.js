import{_ as s,c as a,o as n,a as l}from"./app.718cdcf4.js";const d=JSON.parse('{"title":"Django","description":"","frontmatter":{},"headers":[{"level":2,"title":"构建镜像","slug":"构建镜像","link":"#构建镜像","children":[]},{"level":2,"title":"运行容器","slug":"运行容器","link":"#运行容器","children":[]},{"level":2,"title":"开发模式","slug":"开发模式","link":"#开发模式","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"uWSGI","slug":"uwsgi","link":"#uwsgi","children":[]}]}],"relativePath":"prod/django.md"}'),p={name:"prod/django.md"},o=l(`<h1 id="django" tabindex="-1">Django <a class="header-anchor" href="#django" aria-hidden="true">#</a></h1><p>python/pip/django</p><h2 id="构建镜像" tabindex="-1">构建镜像 <a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/django</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./prod/django</span></span>
<span class="line"></span></code></pre></div><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">django</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8000</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">8000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/web/project/django:/var/web/project/django</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/django</span></span>
<span class="line"></span></code></pre></div><h2 id="开发模式" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manage.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">runserver</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">0.0.0.0:</span><span style="color:#F78C6C;">8000</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">django</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span></code></pre></div><p>安装依赖</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">requerments.txt</span></span>
<span class="line"></span></code></pre></div><p>nginx配置</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">location /static {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># static静态文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /www/wwwroot/43.139.215.50/zcxt/static</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>STATIC_ROOT = os.path.join(BASE_DIR, &#39;static&#39;)</p><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-hidden="true">#</a></h2><h3 id="uwsgi" tabindex="-1">uWSGI <a class="header-anchor" href="#uwsgi" aria-hidden="true">#</a></h3><blockquote><p>uWSGI 文档提供了一个覆盖 Django，nginx，和 uWSGI（一个配置，多种适配）。以下文档专注于如何用 uWSGI 集成 Django。</p></blockquote><p>安装</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span></span>
<span class="line"></span></code></pre></div><p>项目配置</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">uwsgi --</span><span style="color:#F07178;">chdir</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/www/wwwroot/43.139.215.50/zcxt \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --</span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zcxt.wsgi:application \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --env </span><span style="color:#F07178;">DJANGO_SETTINGS_MODULE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zcxt.settings \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --master --</span><span style="color:#F07178;">pidfile</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/tmp/project-zcxt.pid \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --</span><span style="color:#F07178;">socket</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">127.0.0.1:8008 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --</span><span style="color:#F07178;">processes</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --</span><span style="color:#F07178;">uid</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1000 --</span><span style="color:#F07178;">gid</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2000 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --</span><span style="color:#F07178;">harakiri</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">20 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --</span><span style="color:#F07178;">max-requests</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5000 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --vacuum \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --</span><span style="color:#F07178;">daemonize</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/var/log/uwsgi/zcxt.log</span></span>
<span class="line"></span></code></pre></div><p>uwsgi.ini</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[uwsgi]</span></span>
<span class="line"><span style="color:#F07178;">socket</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /tmp/example.sock</span></span>
<span class="line"><span style="color:#F07178;">chdir</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/www/wwwroot/example</span></span>
<span class="line"><span style="color:#F07178;">module</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">example.wsgi:application</span></span>
<span class="line"><span style="color:#F07178;">master</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">True</span></span>
<span class="line"><span style="color:#F07178;">pidfile</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/tmp/project-example.pid</span></span>
<span class="line"><span style="color:#F07178;">vacuum</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">True</span></span>
<span class="line"><span style="color:#F07178;">max-requests</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5000</span></span>
<span class="line"><span style="color:#F07178;">daemonize</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/var/log/uwsgi/example.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[uwsgi]</span></span>
<span class="line"><span style="color:#F07178;">socket</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /tmp/zcxt.sock</span></span>
<span class="line"><span style="color:#F07178;">chdir</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/www/wwwroot/43.139.215.50/zcxt</span></span>
<span class="line"><span style="color:#F07178;">module</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zcxt.wsgi:application</span></span>
<span class="line"><span style="color:#F07178;">master</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">True</span></span>
<span class="line"><span style="color:#F07178;">pidfile</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/tmp/project-zcxt.pid</span></span>
<span class="line"><span style="color:#F07178;">vacuum</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">True</span></span>
<span class="line"><span style="color:#F07178;">max-requests</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5000</span></span>
<span class="line"><span style="color:#F07178;">daemonize</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/var/log/uwsgi/zcxt.log</span></span>
<span class="line"></span></code></pre></div><p>运行</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--ini</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot/example/uwsgi.ini</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--ini</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot/43.139.215.50/zcxt/uwsgi.ini</span></span>
<span class="line"></span></code></pre></div><p>停止服务</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/project-example.pid</span></span>
<span class="line"></span></code></pre></div><p>重启服务</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/project-example.pid</span></span>
<span class="line"></span></code></pre></div><p>nginx</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  localhost</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {            </span></span>
<span class="line"><span style="color:#A6ACCD;">        include  uwsgi_params</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        uwsgi_pass unix:/tmp/example.sock</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        uwsgi_param UWSGI_SCRIPT example.wsgi</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        uwsgi_param UWSGI_CHDIR /www/wwwroot/example</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html index.htm</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        client_max_body_size 35m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    location /static/ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 静态资源路径，js、css、图片、字体等</span></span>
<span class="line"><span style="color:#A6ACCD;">        alias /www/wwwroot/example/static/</span><span style="color:#676E95;font-style:italic;">; </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">location / {            </span></span>
<span class="line"><span style="color:#A6ACCD;">        include  uwsgi_params</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        uwsgi_pass unix:/tmp/zcxt.sock</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># uwsgi_param UWSGI_SCRIPT example.wsgi;</span></span>
<span class="line"><span style="color:#A6ACCD;">        uwsgi_param UWSGI_CHDIR /www/wwwroot/43.139.215.50/zcxt</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html index.htm</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        client_max_body_size 35m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span></code></pre></div><p>修改/www/wwwroot/example/settings.py，在ALLOWED_HOSTS里面添加域名就可以了。</p><p>docker run -it <br> --name app <br> -p 8080:8080 <br> -v /Users/wade/web/project/html:/var/web/app <br> node:16-alpine sh</p>`,33),e=[o];function t(c,r,i,C,y,D){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};