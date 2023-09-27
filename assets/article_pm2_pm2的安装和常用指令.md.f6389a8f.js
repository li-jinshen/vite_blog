import{_ as s,o as a,c as p,X as l}from"./chunks/framework.8aaf079c.js";const m=JSON.parse('{"title":"pm2的安装和常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"article/pm2/pm2的安装和常用指令.md","filePath":"article/pm2/pm2的安装和常用指令.md"}'),n={name:"article/pm2/pm2的安装和常用指令.md"},e=l(`<h1 id="pm2的安装和常用指令" tabindex="-1">pm2的安装和常用指令 <a class="header-anchor" href="#pm2的安装和常用指令" aria-label="Permalink to &quot;pm2的安装和常用指令&quot;">​</a></h1><blockquote><p>pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能</p></blockquote><p><a href="https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/" target="_blank" rel="noreferrer">pm2文档</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pm2</span></span></code></pre></div><h3 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h3><p>启动应用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span></span></code></pre></div><p>重命名应用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">app_nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>重新启动应用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span></span></code></pre></div><p>重载应用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span></span></code></pre></div><p>停止运行中的应用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span></span></code></pre></div><p>删除应用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span></span></code></pre></div><p><strong>代替app_name</strong></p><ul><li>all 在所有过程中采取行动</li><li>id 对特定的进程ID采取行动</li></ul><h3 id="查看进程的状态" tabindex="-1">查看进程的状态 <a class="header-anchor" href="#查看进程的状态" aria-label="Permalink to &quot;查看进程的状态&quot;">​</a></h3><p><strong>列出由PM2管理的所有应用程序的状态</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> [list</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">ls</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">status]</span></span></code></pre></div><p><strong>显示日志</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">logs</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;"># 查看指定进程的日志</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">logs</span><span style="color:#A6ACCD;"> [app_name]</span></span></code></pre></div>`,25),o=[e];function t(c,r,i,C,y,d){return a(),p("div",null,o)}const D=s(n,[["render",t]]);export{m as __pageData,D as default};
