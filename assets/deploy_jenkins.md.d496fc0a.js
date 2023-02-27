import{_ as s,c as n,o as a,a as l}from"./app.718cdcf4.js";const d=JSON.parse('{"title":"Jenkins自动化部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"初始化密码","slug":"初始化密码","link":"#初始化密码","children":[]},{"level":2,"title":"设置时区","slug":"设置时区","link":"#设置时区","children":[]},{"level":2,"title":"配置域名","slug":"配置域名","link":"#配置域名","children":[]}],"relativePath":"deploy/jenkins.md"}'),e={name:"deploy/jenkins.md"},p=l(`<h1 id="jenkins自动化部署" tabindex="-1">Jenkins自动化部署 <a class="header-anchor" href="#jenkins自动化部署" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">注意：</p><p>如果服务器内存太小，千万不要装，使用简单的webhook即可！</p></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>Ubuntu:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-q</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-O</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://pkg.jenkins.io/debian/jenkins.io.key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">echo deb http://pkg.jenkins.io/debian-stable binary/ &gt; /etc/apt/sources.list.d/jenkins.list</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins</span></span>
<span class="line"></span></code></pre></div><h2 id="初始化密码" tabindex="-1">初始化密码 <a class="header-anchor" href="#初始化密码" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/jenkins_home/secrets/initialAdminPassword</span></span>
<span class="line"></span></code></pre></div><h2 id="设置时区" tabindex="-1">设置时区 <a class="header-anchor" href="#设置时区" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/zoneinfo/Asia/Shanghai</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/localtime</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Asia/Shanghai</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/timezone</span></span>
<span class="line"></span></code></pre></div><h2 id="配置域名" tabindex="-1">配置域名 <a class="header-anchor" href="#配置域名" aria-hidden="true">#</a></h2><p>Http</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># jenkins</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  jenkins.example.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://127.0.0.1:8080</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>Https</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># jenkins</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      443 ssl http2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name                 jenkins.example.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate             /etc/nginx/conf.d/ssl/jenkins.example.com.pem</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key         /etc/nginx/conf.d/ssl/jenkins.example.com.key</span><span style="color:#676E95;font-style:italic;">;</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://127.0.0.1:8080</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,14),o=[p];function t(c,i,r,C,y,A){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{d as __pageData,h as default};