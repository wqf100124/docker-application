import{_ as s,o as a,c as l,O as n}from"./chunks/framework.4afe7240.js";const u=JSON.parse('{"title":"使用宝塔部署项目","description":"","frontmatter":{},"headers":[],"relativePath":"deploy/bt.md","filePath":"deploy/bt.md"}'),e={name:"deploy/bt.md"},p=n(`<h1 id="使用宝塔部署项目" tabindex="-1">使用宝塔部署项目 <a class="header-anchor" href="#使用宝塔部署项目" aria-label="Permalink to &quot;使用宝塔部署项目&quot;">​</a></h1><p><a href="https://www.bt.cn" target="_blank" rel="noreferrer">宝塔面板</a> - 简单好用的Linux/Windows服务器运维管理面板</p><h2 id="安装宝塔" tabindex="-1">安装宝塔 <a class="header-anchor" href="#安装宝塔" aria-label="Permalink to &quot;安装宝塔&quot;">​</a></h2><p><a href="https://www.bt.cn/new/download.html" target="_blank" rel="noreferrer">https://www.bt.cn/new/download.html</a></p><h2 id="查看默认入口和账号密码" tabindex="-1">查看默认入口和账号密码 <a class="header-anchor" href="#查看默认入口和账号密码" aria-label="Permalink to &quot;查看默认入口和账号密码&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span></code></pre></div><h2 id="关闭ssl" tabindex="-1">关闭SSL <a class="header-anchor" href="#关闭ssl" aria-label="Permalink to &quot;关闭SSL&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/server/panel/data/ssl.pl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/etc/init.d/bt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span></code></pre></div><h2 id="修改端口号" tabindex="-1">修改端口号 <a class="header-anchor" href="#修改端口号" aria-label="Permalink to &quot;修改端口号&quot;">​</a></h2><p>编辑</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/server/panel/data/port.pl</span></span></code></pre></div><p>重启</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/init.d/bt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span></code></pre></div><h2 id="查看所有命令" tabindex="-1">查看所有命令 <a class="header-anchor" href="#查看所有命令" aria-label="Permalink to &quot;查看所有命令&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bt</span></span></code></pre></div><ul><li>(0) 取消</li><li>(1) 重启面板服务</li><li>(2) 停止面板服务</li><li>(3) 启动面板服务</li><li>(4) 重载面板服务</li><li>(5) 修改面板密码</li><li>(6) 修改面板用户名</li><li>(7) 强制修改MySQL密码</li><li>(8) 改面板端口</li><li>(9) 清除面板缓存</li><li>(10) 清除登录限制</li><li>(11) 设置是否开启IP + User-Agent验证</li><li>(12) 取消域名绑定限制</li><li>(13) 取消IP访问限制</li><li>(14) 查看面板默认信息</li><li>(15) 清理系统垃圾</li><li>(16) 修复面板(检查错误并更新面板文件到最新版)</li><li>(17) 设置日志切割是否压缩</li><li>(18) 设置是否自动备份面板</li><li>(22) 显示面板错误日志</li><li>(23) 关闭BasicAuth认证</li><li>(24) 关闭动态口令认证</li><li>(25) 设置是否保存文件历史副本</li><li>(29) 取消访问设备验证</li></ul><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h2><p>1.在【软件商店】中搜索并安装 <code>nginx</code></p><h2 id="mysql" tabindex="-1">Mysql <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;Mysql&quot;">​</a></h2><p>1.在【软件商店】中搜索并安装 <code>mysql</code></p><h2 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-label="Permalink to &quot;PHP&quot;">​</a></h2><p>1.在【软件商店】中搜索并安装 <code>php</code></p><p>2.在【已安装】软件中找到并打开php的设置</p><p>3.点击【禁用函数】，删除以下方法：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">putenv, proc_open</span></span></code></pre></div><p>4.点击【安装扩展】，安装所需要的扩展如 <code>phpinfo</code>、<code>redis</code> 等</p><h2 id="部署站点" tabindex="-1">部署站点 <a class="header-anchor" href="#部署站点" aria-label="Permalink to &quot;部署站点&quot;">​</a></h2><p>以 Laravel 项目为例：</p><h3 id="_1-添加站点" tabindex="-1">1.添加站点 <a class="header-anchor" href="#_1-添加站点" aria-label="Permalink to &quot;1.添加站点&quot;">​</a></h3><p>点击 【网站】 -&gt; 【添加站点】，填写项目根目录如：/www/wwwroot/example</p><h3 id="_2-防跨站攻击" tabindex="-1">2.防跨站攻击 <a class="header-anchor" href="#_2-防跨站攻击" aria-label="Permalink to &quot;2.防跨站攻击&quot;">​</a></h3><ul><li>第一种方案：打开【网站目录】，去掉勾选【防跨站攻击(open_basedir)】</li><li>第二种方案：打开项目目录，修改 public 目录下的 <code>.user.ini</code> 例如：</li></ul><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">open_basedir</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/www/wwwroot/example/:/www/wwwroot/example/public/:/tmp/</span></span></code></pre></div><h3 id="_3-url重写" tabindex="-1">3.URL重写 <a class="header-anchor" href="#_3-url重写" aria-label="Permalink to &quot;3.URL重写&quot;">​</a></h3><p>打开 【站点设置】，在【伪静态】选项中选择 laravel5模板 或 手动添加如下代码：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /index.php?$query_string</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="_4-修改-storage-目录权限" tabindex="-1">4.修改 storage 目录权限 <a class="header-anchor" href="#_4-修改-storage-目录权限" aria-label="Permalink to &quot;4.修改 storage 目录权限&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot/example/storage</span></span></code></pre></div><h2 id="webhook" tabindex="-1">Webhook <a class="header-anchor" href="#webhook" aria-label="Permalink to &quot;Webhook&quot;">​</a></h2><blockquote><p>可设置回调脚本，通常用于第三方回调通知!</p></blockquote><p>1.在【软件商店】中搜索并安装 <code>宝塔WebHook</code></p><p>2.点击【添加Hook】，填写名称和执行脚本</p><p>以 git 自动部署为例：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot/example</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--all</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin/main</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">date</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">+%Y-%m-%d %H:%M:%S</span><span style="color:#89DDFF;">&quot;)</span></span></code></pre></div><p>点击【查看密钥】查看使用方法</p><h2 id="php版本" tabindex="-1">PHP版本 <a class="header-anchor" href="#php版本" aria-label="Permalink to &quot;PHP版本&quot;">​</a></h2><p>查看当前 php 版本的信息</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/php</span></span></code></pre></div><p>查看服务器上有多少个 php版本</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/server/php</span></span></code></pre></div><p>设置默认php版本</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/server/php/81/bin/php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/php</span></span></code></pre></div><p>验证</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span></code></pre></div><p>使用指定的php版本安装composer依赖</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/server/php/74/bin/php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/server/php/81/bin/php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span></code></pre></div>`,56),o=[p];function t(c,r,i,h,C,d){return a(),l("div",null,o)}const A=s(e,[["render",t]]);export{u as __pageData,A as default};