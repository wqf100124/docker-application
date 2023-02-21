import{_ as s,c as n,o as a,a as l}from"./app.7041339b.js";const F=JSON.parse('{"title":"PHP本地开发环境","description":"","frontmatter":{},"headers":[{"level":2,"title":"构建镜像","slug":"构建镜像","link":"#构建镜像","children":[]},{"level":2,"title":"创建网络","slug":"创建网络","link":"#创建网络","children":[]},{"level":2,"title":"运行容器","slug":"运行容器","link":"#运行容器","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}]},{"level":2,"title":"Laravel Octane","slug":"laravel-octane","link":"#laravel-octane","children":[]},{"level":2,"title":"Docker Compose","slug":"docker-compose","link":"#docker-compose","children":[]}],"relativePath":"dev/php.md"}'),p={name:"dev/php.md"},o=l(`<h1 id="php本地开发环境" tabindex="-1">PHP本地开发环境 <a class="header-anchor" href="#php本地开发环境" aria-hidden="true">#</a></h1><p>包含软件</p><ul><li>nginx</li><li>php</li><li>composer</li><li>npm</li></ul><h2 id="构建镜像" tabindex="-1">构建镜像 <a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a></h2><p>php8.2</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/dev:php8.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/dev:latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./dev/php</span></span>
<span class="line"></span></code></pre></div><p>php8.1</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/dev:php8.</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--build-arg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version=</span><span style="color:#F78C6C;">8.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./dev/php</span></span>
<span class="line"></span></code></pre></div><p>php8.0</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/dev:php8.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--build-arg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version=</span><span style="color:#F78C6C;">8.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./dev/php</span></span>
<span class="line"></span></code></pre></div><p>php7.4</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/dev:php7.</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--build-arg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version=</span><span style="color:#F78C6C;">7.4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./dev/php</span></span>
<span class="line"></span></code></pre></div><h2 id="创建网络" tabindex="-1">创建网络 <a class="header-anchor" href="#创建网络" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--subnet=172.16.0.0/24</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">web</span></span>
<span class="line"></span></code></pre></div><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/var/web/project:/var/web/project</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/var/web/service/nginx/conf.d:/etc/nginx/conf.d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">wangqifei/dev</span></span>
<span class="line"></span></code></pre></div><h3 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h3><p>站点配置 <code>/etc/nginx/conf.d</code></p><p>可用模板 <code>/etc/nginx/sites-available</code></p><p>基础命令</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{stop</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">quit</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">reopen</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">reload</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="laravel-octane" tabindex="-1">Laravel Octane <a class="header-anchor" href="#laravel-octane" aria-hidden="true">#</a></h2><p>安装依赖</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chokidar</span></span>
<span class="line"></span></code></pre></div><p>代码热加载</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">octane:start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--server=swoole</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--host=0.0.0.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--port=8000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--watch</span></span>
<span class="line"></span></code></pre></div><h2 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">web</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wangqifei/dev:php8.2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">web</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project:/var/web/project</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx:/etc/nginx/conf.d</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">web</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ipv4_address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">172.16.0.80</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">80:80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">depends_on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis:alpine</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">web</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ipv4_address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">172.16.0.63</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6379:6379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pgsql</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres:13-alpine</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pgsql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">web</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ipv4_address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">172.16.0.54</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5432:5432</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pgsql:/etc/postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POSTGRES_DB=postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POSTGRES_USER=postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POSTGRES_PASSWORD=Ab123456</span></span>
<span class="line"><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">web</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">web</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ipam</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">subnet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">172.16.0.0/24</span></span>
<span class="line"><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">project</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/wade/web/project</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nginx</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/wade/web/service/nginx/conf.d</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pgsql</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pgsql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/wade/web/service/pgsql</span></span>
<span class="line"></span></code></pre></div>`,28),e=[o];function c(t,r,C,y,D,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};