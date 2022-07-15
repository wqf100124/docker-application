import{_ as a,c as e,o as n,a as s}from"./app.33e63f35.js";const v=JSON.parse('{"title":"Django","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA\u955C\u50CF","slug":"\u6784\u5EFA\u955C\u50CF"},{"level":2,"title":"\u8FD0\u884C\u5BB9\u5668","slug":"\u8FD0\u884C\u5BB9\u5668"},{"level":2,"title":"\u5F00\u53D1\u6A21\u5F0F","slug":"\u5F00\u53D1\u6A21\u5F0F"}],"relativePath":"dev/django.md"}'),d={name:"dev/django.md"},o=s(`<h1 id="django" tabindex="-1">Django <a class="header-anchor" href="#django" aria-hidden="true">#</a></h1><p>python/pip/django</p><h2 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1">\u6784\u5EFA\u955C\u50CF <a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/django --no-cache ./dev/django</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD0\u884C\u5BB9\u5668" tabindex="-1">\u8FD0\u884C\u5BB9\u5668 <a class="header-anchor" href="#\u8FD0\u884C\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d --name django --network web -p 8000:8000 -v /var/web/project/django:/var/web/project/django --restart always wangqifei/django</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F00\u53D1\u6A21\u5F0F" tabindex="-1">\u5F00\u53D1\u6A21\u5F0F <a class="header-anchor" href="#\u5F00\u53D1\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ python3 manage.py runserver 0.0.0.0:8000</span></span>
<span class="line"></span></code></pre></div>`,8),r=[o];function c(t,p,l,i,h,g){return n(),e("div",null,r)}var u=a(d,[["render",c]]);export{v as __pageData,u as default};
