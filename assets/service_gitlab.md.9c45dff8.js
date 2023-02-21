import{_ as s,c as a,o as l,a as e}from"./app.7041339b.js";const b=JSON.parse('{"title":"Gitlab","description":"","frontmatter":{},"headers":[],"relativePath":"service/gitlab.md"}'),o={name:"service/gitlab.md"},t=e(`<h1 id="gitlab" tabindex="-1">Gitlab <a class="header-anchor" href="#gitlab" aria-hidden="true">#</a></h1><p><a href="https://docs.gitlab.com/ee/install/docker.html" target="_blank" rel="noreferrer">https://docs.gitlab.com/ee/install/docker.html</a><a href="https://registry.hub.docker.com/u/gitlab/gitlab-ce/" target="_blank" rel="noreferrer">https://registry.hub.docker.com/u/gitlab/gitlab-ce/</a></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hostname</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab.example.com</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/web/service/gitlab/config:/etc/gitlab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/web/service/gitlab/logs:/var/log/gitlab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/web/service/gitlab/data:/var/opt/gitlab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab/gitlab-ce:latest</span></span>
<span class="line"></span></code></pre></div>`,3),n=[t];function p(r,c,C,i,y,A){return l(),a("div",null,n)}const g=s(o,[["render",p]]);export{b as __pageData,g as default};
