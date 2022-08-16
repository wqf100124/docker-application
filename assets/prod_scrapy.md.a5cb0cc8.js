import{_ as s,c as a,o as e,a as n}from"./app.973828c5.js";const C=JSON.parse('{"title":"Scrapy","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA\u955C\u50CF","slug":"\u6784\u5EFA\u955C\u50CF"},{"level":2,"title":"\u8FD0\u884C\u5BB9\u5668","slug":"\u8FD0\u884C\u5BB9\u5668"},{"level":2,"title":"\u521B\u5EFA\u722C\u866B\u9879\u76EE","slug":"\u521B\u5EFA\u722C\u866B\u9879\u76EE"},{"level":2,"title":"\u521B\u5EFA\u722C\u866B","slug":"\u521B\u5EFA\u722C\u866B"},{"level":2,"title":"\u6293\u53D6\u6570\u636E","slug":"\u6293\u53D6\u6570\u636E"},{"level":2,"title":"\u5B58\u5165\u6570\u636E\u5E93","slug":"\u5B58\u5165\u6570\u636E\u5E93"}],"relativePath":"prod/scrapy.md"}'),p={name:"prod/scrapy.md"},l=n(`<h1 id="scrapy" tabindex="-1">Scrapy <a class="header-anchor" href="#scrapy" aria-hidden="true">#</a></h1><h2 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1">\u6784\u5EFA\u955C\u50CF <a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/scrapy --no-cache </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD0\u884C\u5BB9\u5668" tabindex="-1">\u8FD0\u884C\u5BB9\u5668 <a class="header-anchor" href="#\u8FD0\u884C\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d --name scrapy --network web -v /var/web/scrapy:/var/web/scrapy --restart always wangqifei/scrapy</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u722C\u866B\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u722C\u866B\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u722C\u866B\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ scrapy startproject </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">project_name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">project_dir</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ crapy startproject media scrapy</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u722C\u866B" tabindex="-1">\u521B\u5EFA\u722C\u866B <a class="header-anchor" href="#\u521B\u5EFA\u722C\u866B" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># basic</span></span>
<span class="line"><span style="color:#A6ACCD;">$ scrapy genspider example example.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># crawl</span></span>
<span class="line"><span style="color:#A6ACCD;">$ scrapy genspider -t crawl example example.com</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6293\u53D6\u6570\u636E" tabindex="-1">\u6293\u53D6\u6570\u636E <a class="header-anchor" href="#\u6293\u53D6\u6570\u636E" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u9879\u76EE\u5185</span></span>
<span class="line"><span style="color:#A6ACCD;">$ scrapy crawl example -O example.json --nolog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5168\u5C40(\u6709\u4E9B\u95EE\u9898)</span></span>
<span class="line"><span style="color:#A6ACCD;">$ scrapy runspider /var/web/project/spider/hjd/spider/spiders/sites.py --nolog</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> scrapy scrapy crawl sites --nolog</span></span>
<span class="line"><span style="color:#A6ACCD;">$ docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> scrapy scrapy crawl threads --nolog</span></span>
<span class="line"><span style="color:#A6ACCD;">$ docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> scrapy scrapy crawl reads --nolog</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B58\u5165\u6570\u636E\u5E93" tabindex="-1">\u5B58\u5165\u6570\u636E\u5E93 <a class="header-anchor" href="#\u5B58\u5165\u6570\u636E\u5E93" aria-hidden="true">#</a></h2>`,13),c=[l];function r(o,t,i,d,y,h){return e(),a("div",null,c)}var g=s(p,[["render",r]]);export{C as __pageData,g as default};