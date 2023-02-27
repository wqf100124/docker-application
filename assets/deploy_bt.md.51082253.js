import{_ as a,c as s,o as l,a as e}from"./app.718cdcf4.js";const u=JSON.parse('{"title":"使用宝塔部署项目","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装宝塔","slug":"安装宝塔","link":"#安装宝塔","children":[]},{"level":2,"title":"查看默认入口和账号密码","slug":"查看默认入口和账号密码","link":"#查看默认入口和账号密码","children":[]},{"level":2,"title":"修改端口号","slug":"修改端口号","link":"#修改端口号","children":[]},{"level":2,"title":"查看所有命令","slug":"查看所有命令","link":"#查看所有命令","children":[]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":2,"title":"Mysql","slug":"mysql","link":"#mysql","children":[]},{"level":2,"title":"PHP","slug":"php","link":"#php","children":[]},{"level":2,"title":"部署站点","slug":"部署站点","link":"#部署站点","children":[{"level":3,"title":"1.添加站点","slug":"_1-添加站点","link":"#_1-添加站点","children":[]},{"level":3,"title":"2.防跨站攻击","slug":"_2-防跨站攻击","link":"#_2-防跨站攻击","children":[]},{"level":3,"title":"3.URL重写","slug":"_3-url重写","link":"#_3-url重写","children":[]},{"level":3,"title":"4.修改 storage 目录权限","slug":"_4-修改-storage-目录权限","link":"#_4-修改-storage-目录权限","children":[]}]},{"level":2,"title":"Webhook","slug":"webhook","link":"#webhook","children":[]}],"relativePath":"deploy/bt.md"}'),n={name:"deploy/bt.md"},p=e(`<h1 id="使用宝塔部署项目" tabindex="-1">使用宝塔部署项目 <a class="header-anchor" href="#使用宝塔部署项目" aria-hidden="true">#</a></h1><p><a href="https://www.bt.cn" target="_blank" rel="noreferrer">宝塔面板</a> - 简单好用的Linux/Windows服务器运维管理面板</p><h2 id="安装宝塔" tabindex="-1">安装宝塔 <a class="header-anchor" href="#安装宝塔" aria-hidden="true">#</a></h2><p><a href="https://www.bt.cn/new/download.html" target="_blank" rel="noreferrer">https://www.bt.cn/new/download.html</a></p><h2 id="查看默认入口和账号密码" tabindex="-1">查看默认入口和账号密码 <a class="header-anchor" href="#查看默认入口和账号密码" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span>
<span class="line"></span></code></pre></div><h2 id="修改端口号" tabindex="-1">修改端口号 <a class="header-anchor" href="#修改端口号" aria-hidden="true">#</a></h2><p>编辑</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/server/panel/data/port.pl</span></span>
<span class="line"></span></code></pre></div><p>重启</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/init.d/bt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"></span></code></pre></div><h2 id="查看所有命令" tabindex="-1">查看所有命令 <a class="header-anchor" href="#查看所有命令" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">bt</span></span>
<span class="line"></span></code></pre></div><ul><li>(0) 取消</li><li>(1) 重启面板服务</li><li>(2) 停止面板服务</li><li>(3) 启动面板服务</li><li>(4) 重载面板服务</li><li>(5) 修改面板密码</li><li>(6) 修改面板用户名</li><li>(7) 强制修改MySQL密码</li><li>(8) 改面板端口</li><li>(9) 清除面板缓存</li><li>(10) 清除登录限制</li><li>(11) 设置是否开启IP + User-Agent验证</li><li>(12) 取消域名绑定限制</li><li>(13) 取消IP访问限制</li><li>(14) 查看面板默认信息</li><li>(15) 清理系统垃圾</li><li>(16) 修复面板(检查错误并更新面板文件到最新版)</li><li>(17) 设置日志切割是否压缩</li><li>(18) 设置是否自动备份面板</li><li>(22) 显示面板错误日志</li><li>(23) 关闭BasicAuth认证</li><li>(24) 关闭动态口令认证</li><li>(25) 设置是否保存文件历史副本</li><li>(29) 取消访问设备验证</li></ul><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h2><p>1.在【软件商店】中搜索并安装 <code>nginx</code></p><h2 id="mysql" tabindex="-1">Mysql <a class="header-anchor" href="#mysql" aria-hidden="true">#</a></h2><p>1.在【软件商店】中搜索并安装 <code>mysql</code></p><h2 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-hidden="true">#</a></h2><p>1.在【软件商店】中搜索并安装 <code>php</code></p><p>2.在【已安装】软件中找到并打开php的设置</p><p>3.点击【禁用函数】，删除以下方法：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">putenv</span></span>
<span class="line"></span></code></pre></div><p>4.点击【安装扩展】，安装所需要的扩展如 <code>phpinfo</code>、<code>redis</code> 等</p><h2 id="部署站点" tabindex="-1">部署站点 <a class="header-anchor" href="#部署站点" aria-hidden="true">#</a></h2><p>以 Laravel 项目为例：</p><h3 id="_1-添加站点" tabindex="-1">1.添加站点 <a class="header-anchor" href="#_1-添加站点" aria-hidden="true">#</a></h3><p>点击 【网站】 -&gt; 【添加站点】，填写项目根目录如：/www/wwwroot/example</p><h3 id="_2-防跨站攻击" tabindex="-1">2.防跨站攻击 <a class="header-anchor" href="#_2-防跨站攻击" aria-hidden="true">#</a></h3><ul><li>第一种方案：打开【网站目录】，去掉勾选【防跨站攻击(open_basedir)】</li><li>第二种方案：打开项目目录，修改 public 目录下的 <code>.user.ini</code> 例如：</li></ul><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">open_basedir</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/www/wwwroot/example/:/www/wwwroot/example/public/:/tmp/</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-url重写" tabindex="-1">3.URL重写 <a class="header-anchor" href="#_3-url重写" aria-hidden="true">#</a></h3><p>打开 【站点设置】，在【伪静态】选项中选择 laravel5模板 或 手动添加如下代码：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /index.php?$query_string</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-修改-storage-目录权限" tabindex="-1">4.修改 storage 目录权限 <a class="header-anchor" href="#_4-修改-storage-目录权限" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot/example/storage</span></span>
<span class="line"></span></code></pre></div><h2 id="webhook" tabindex="-1">Webhook <a class="header-anchor" href="#webhook" aria-hidden="true">#</a></h2><blockquote><p>可设置回调脚本，通常用于第三方回调通知!</p></blockquote><p>1.在【软件商店】中搜索并安装 <code>宝塔WebHook</code></p><p>2.点击【添加Hook】，填写名称和执行脚本</p><p>以 git 自动部署为例：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot/example</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--all</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin/main</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">date</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">+%Y-%m-%d %H:%M:%S</span><span style="color:#89DDFF;">&quot;)</span></span>
<span class="line"></span></code></pre></div><p>点击【查看密钥】查看使用方法</p>`,43),i=[p];function t(o,r,c,d,h,C){return l(),s("div",null,i)}const g=a(n,[["render",t]]);export{u as __pageData,g as default};