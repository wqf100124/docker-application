import{_ as s,c as a,o as n,N as o}from"./chunks/framework.e029e743.js";const A=JSON.parse('{"title":"Django","description":"","frontmatter":{},"headers":[],"relativePath":"dev/django.md"}'),l={name:"dev/django.md"},p=o(`<h1 id="django" tabindex="-1">Django <a class="header-anchor" href="#django" aria-label="Permalink to &quot;Django&quot;">​</a></h1><p>python/pip/django</p><h2 id="构建镜像" tabindex="-1">构建镜像 <a class="header-anchor" href="#构建镜像" aria-label="Permalink to &quot;构建镜像&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i94m/django</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./dev/django</span></span>
<span class="line"></span></code></pre></div><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-label="Permalink to &quot;运行容器&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">django</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8000</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">8000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/web/project/django:/app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i94m/django</span></span>
<span class="line"></span></code></pre></div><h2 id="开发模式" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式" aria-label="Permalink to &quot;开发模式&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manage.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">runserver</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">0.0.0.0:</span><span style="color:#F78C6C;">8000</span></span>
<span class="line"></span></code></pre></div>`,8),e=[p];function t(c,r,C,y,i,d){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{A as __pageData,h as default};
