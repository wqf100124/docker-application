import{_ as s,c as a,o as n,a as e}from"./app.7041339b.js";const D=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建容器","slug":"创建容器","link":"#创建容器","children":[]}],"relativePath":"db/redis.md"}'),l={name:"db/redis.md"},p=e(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h1><h2 id="创建容器" tabindex="-1">创建容器 <a class="header-anchor" href="#创建容器" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">web</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">172.16.0.63</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6379</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">6379</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">redis:alpine</span></span>
<span class="line"></span></code></pre></div>`,3),o=[p];function t(r,c,C,i,A,d){return n(),a("div",null,o)}const _=s(l,[["render",t]]);export{D as __pageData,_ as default};
