import{_ as s,c as a,o as n,a as e}from"./app.718cdcf4.js";const D=JSON.parse('{"title":"NodeJs项目","description":"","frontmatter":{},"headers":[{"level":2,"title":"运行容器","slug":"运行容器","link":"#运行容器","children":[]}],"relativePath":"dev/nodejs.md"}'),o={name:"dev/nodejs.md"},p=e(`<h1 id="nodejs项目" tabindex="-1">NodeJs项目 <a class="header-anchor" href="#nodejs项目" aria-hidden="true">#</a></h1><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-hidden="true">#</a></h2><p>以 nodejs16 为例：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">8080</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/web/app:/var/web/app</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">node:</span><span style="color:#F78C6C;">16</span><span style="color:#C3E88D;">-alpine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span></span>
<span class="line"></span></code></pre></div><p>记得修改 host 为 <code>0.0.0.0</code></p>`,5),l=[p];function t(c,r,C,d,i,y){return n(),a("div",null,l)}const _=s(o,[["render",t]]);export{D as __pageData,_ as default};