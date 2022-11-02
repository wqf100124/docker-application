import{_ as a,c as s,o as n,a as e}from"./app.c791084f.js";const m=JSON.parse('{"title":"MQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"RabbitMQ","slug":"rabbitmq","link":"#rabbitmq","children":[{"level":3,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668","link":"#\u521B\u5EFA\u5BB9\u5668","children":[]}]}],"relativePath":"service/mq.md"}'),t={name:"service/mq.md"},l=e(`<h1 id="mq" tabindex="-1">MQ <a class="header-anchor" href="#mq" aria-hidden="true">#</a></h1><h2 id="rabbitmq" tabindex="-1">RabbitMQ <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name rabbitmq \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --ip 172.16.0.56 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 5672:5672 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 15672:15672 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  rabbitmq:3.9-management-alpine</span></span>
<span class="line"></span></code></pre></div>`,4),r=[l];function i(p,c,o,d,h,_){return n(),s("div",null,r)}const C=a(t,[["render",i]]);export{m as __pageData,C as default};
