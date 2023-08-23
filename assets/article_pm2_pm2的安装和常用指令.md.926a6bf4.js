import{_ as e,o as p,c as a,X as t}from"./chunks/framework.8aaf079c.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/pm2/pm2的安装和常用指令.md","filePath":"article/pm2/pm2的安装和常用指令.md"}'),r={name:"article/pm2/pm2的安装和常用指令.md"},o=t(`<p><img src="https://img-blog.csdnimg.cn/20210113220832805.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTcwMDk3,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><blockquote><p>pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能</p></blockquote><p><a href="https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/" target="_blank" rel="noreferrer">pm2文档</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><pre><code>npm install pm2 -g
# or
yarn global add pm2
</code></pre><h3 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h3><p>启动应用</p><pre><code>pm2 start app.js
</code></pre><p>重命名应用</p><pre><code>pm2 start app.js --name &lt;app_name&gt;
</code></pre><p>重新启动应用</p><pre><code>pm2 restart app_name
</code></pre><p>重载应用</p><pre><code>pm2 reload app_name
</code></pre><p>停止运行中的应用</p><pre><code>pm2 stop app_name
</code></pre><p>删除应用</p><pre><code>pm2 delete app_name
</code></pre><p><strong>代替app_name</strong></p><ul><li>all 在所有过程中采取行动</li><li>id 对特定的进程ID采取行动</li></ul><h3 id="查看进程的状态" tabindex="-1">查看进程的状态 <a class="header-anchor" href="#查看进程的状态" aria-label="Permalink to &quot;查看进程的状态&quot;">​</a></h3><p><strong>列出由PM2管理的所有应用程序的状态</strong></p><pre><code>pm2 [list|ls|status]
</code></pre><p><strong>显示日志</strong></p><pre><code>pm2 logs

# 查看指定进程的日志
pm2 logs [app_name]
</code></pre>`,25),n=[o];function c(s,d,m,l,_,i){return p(),a("div",null,n)}const u=e(r,[["render",c]]);export{g as __pageData,u as default};
