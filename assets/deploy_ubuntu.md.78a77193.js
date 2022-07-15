import{_ as s,c as a,o as e,a as n}from"./app.7530d465.js";const _=JSON.parse('{"title":"Ubuntu","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u7528\u6237","slug":"\u521B\u5EFA\u7528\u6237"},{"level":2,"title":"jenkins","slug":"jenkins"},{"level":2,"title":"\u5B89\u88C5Docker","slug":"\u5B89\u88C5docker"},{"level":2,"title":"network","slug":"network"}],"relativePath":"deploy/ubuntu.md"}'),l={name:"deploy/ubuntu.md"},t=n(`<h1 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u7528\u6237" tabindex="-1">\u521B\u5EFA\u7528\u6237 <a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">useradd -d /home/wqf -m -g root -s /bin/bash -p Wqf123 wqf</span></span>
<span class="line"></span></code></pre></div><h2 id="jenkins" tabindex="-1">jenkins <a class="header-anchor" href="#jenkins" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo apt-key add -</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo sh -c </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">echo deb http://pkg.jenkins.io/debian-stable binary/ &gt; /etc/apt/sources.list.d/jenkins.list</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get update</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install jenkins</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5docker" tabindex="-1">\u5B89\u88C5Docker <a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">apt install docker.io</span></span>
<span class="line"></span></code></pre></div><h2 id="network" tabindex="-1">network <a class="header-anchor" href="#network" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker network create --subnet=172.16.0.0/24 web</span></span>
<span class="line"></span></code></pre></div>`,9),o=[t];function p(c,r,i,d,h,u){return e(),a("div",null,o)}var b=s(l,[["render",p]]);export{_ as __pageData,b as default};
