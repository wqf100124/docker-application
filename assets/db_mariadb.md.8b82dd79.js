import{_ as a,c as s,o as n,a as e}from"./app.a9aad340.js";const h=JSON.parse('{"title":"Mariadb","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668","link":"#\u521B\u5EFA\u5BB9\u5668","children":[]}],"relativePath":"db/mariadb.md"}'),l={name:"db/mariadb.md"},p=e(`<h1 id="mariadb" tabindex="-1">Mariadb <a class="header-anchor" href="#mariadb" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --name mariadb \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --env MYSQL_ROOT_HOST=% \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --env MYSQL_ROOT_PASSWORD=Ab123456 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --ip 172.16.0.33 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 3306:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v /var/web/service/mariadb:/var/lib/mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    mariadb:10.2</span></span>
<span class="line"></span></code></pre></div>`,3),r=[p];function t(c,o,i,d,_,A){return n(),s("div",null,r)}const b=a(l,[["render",t]]);export{h as __pageData,b as default};
