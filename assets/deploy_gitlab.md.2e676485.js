import{_ as e,c as a,o as t,a as r}from"./app.7530d465.js";const h=JSON.parse('{"title":"Gitlab","description":"","frontmatter":{},"headers":[],"relativePath":"deploy/gitlab.md"}'),l={name:"deploy/gitlab.md"},s=r(`<h1 id="gitlab" tabindex="-1">Gitlab <a class="header-anchor" href="#gitlab" aria-hidden="true">#</a></h1><p><a href="https://docs.gitlab.com/ee/install/docker.html" target="_blank" rel="noopener noreferrer">https://docs.gitlab.com/ee/install/docker.html</a><a href="https://registry.hub.docker.com/u/gitlab/gitlab-ce/" target="_blank" rel="noopener noreferrer">https://registry.hub.docker.com/u/gitlab/gitlab-ce/</a></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -d --hostname gitlab.example.com -p 443:443 -p 80:80 --name gitlab --restart always -v /home/web/service/gitlab/config:/etc/gitlab -v /home/web/service/gitlab/logs:/var/log/gitlab -v /home/web/service/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest</span></span>
<span class="line"></span></code></pre></div>`,3),o=[s];function i(c,n,p,d,b,g){return t(),a("div",null,o)}var m=e(l,[["render",i]]);export{h as __pageData,m as default};
