import{_ as s,o as a,c as o,X as n}from"./chunks/framework.8aaf079c.js";const l="/assets/z1.f8195c48.png",t="/assets/z2.6949868e.png",e="/assets/1.fe26e416.png",m=JSON.parse('{"title":"OhMyZsh的安装和常用插件","description":"","frontmatter":{},"headers":[],"relativePath":"article/zsh/OhMyZsh的安装和常用插件.md","filePath":"article/zsh/OhMyZsh的安装和常用插件.md"}'),p={name:"article/zsh/OhMyZsh的安装和常用插件.md"},c=n(`<h1 id="ohmyzsh的安装和常用插件" tabindex="-1">OhMyZsh的安装和常用插件 <a class="header-anchor" href="#ohmyzsh的安装和常用插件" aria-label="Permalink to &quot;OhMyZsh的安装和常用插件&quot;">​</a></h1><blockquote><p>Oh My Zsh 它是基于 zsh 命令行的一个扩展工具集，提供了丰富的扩展功能</p></blockquote><h1 id="安装oh-my-zsh" tabindex="-1">安装Oh My Zsh <a class="header-anchor" href="#安装oh-my-zsh" aria-label="Permalink to &quot;安装Oh My Zsh&quot;">​</a></h1><h2 id="方式一-官网推荐" tabindex="-1">方式一：官网推荐 <a class="header-anchor" href="#方式一-官网推荐" aria-label="Permalink to &quot;方式一：官网推荐&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># via curl</span></span>
<span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># via wget</span></span>
<span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span></code></pre></div><h2 id="方式二-手动安装" tabindex="-1">方式二：手动安装 <a class="header-anchor" href="#方式二-手动安装" aria-label="Permalink to &quot;方式二：手动安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 下载 oh-my-zsh 源码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git://github.com/robbyrussell/oh-my-zsh.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.oh-my-zsh</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 并且把 .zshrc 配置文件拷贝到根目录下</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.oh-my-zsh/templates/zshrc.zsh-template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 让 .zshrc 配置文件生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span></code></pre></div><p>如果无法访问github 可以使用码云的地址替换github仓库的地址</p><blockquote><p><a href="https://gitee.com/mirrors/oh-my-zsh" target="_blank" rel="noreferrer">https://gitee.com/mirrors/oh-my-zsh</a></p></blockquote><h2 id="关于-zshrc-文件" tabindex="-1">关于.zshrc 文件 <a class="header-anchor" href="#关于-zshrc-文件" aria-label="Permalink to &quot;关于.zshrc 文件&quot;">​</a></h2><blockquote><p>这个文件非常关键，是 oh-my-zsh 的配置文件，它的位置在根目录下，可以通过 vim ~/.zshrc 查看。 每一次修改它之后，如果想要立即生效需要手动执行 source ~/.zshrc。</p></blockquote><h2 id="自动补全插件-zsh-autosuggestions" tabindex="-1">自动补全插件 zsh-autosuggestions <a class="header-anchor" href="#自动补全插件-zsh-autosuggestions" aria-label="Permalink to &quot;自动补全插件 zsh-autosuggestions&quot;">​</a></h2><blockquote><p>把插件仓库克隆到$ZSH_CUSTOM/plugins (默认位置是 ~/.oh-my-zsh/custom/plugins)</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/zsh-users/zsh-autosuggestions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/zsh-autosuggestions</span></span></code></pre></div><blockquote><p>无法克隆github上的地址，可以尝试码云上的仓库</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/phpxxo/zsh-autosuggestions.git</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/zsh-autosuggestions</span></span></code></pre></div><p><strong>设置~/.zshrc，把zsh-autosuggestions添加到 Oh My Zsh 要加载的插件列表中</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">=(</span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh-autosuggestions</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p><img src="`+l+'" alt="请添加图片描述"></p><p><strong>使配置生效</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span></code></pre></div><p><strong>效果</strong></p><blockquote><p>重新打开一个session。现在就会提示我们执行过的命令啦～～如果提示的是你要的那句命令，按键盘的➡️就可以补全命令了～ <img src="'+t+`" alt="请添加图片描述"></p></blockquote><h2 id="autojump-插件" tabindex="-1">autojump 插件 <a class="header-anchor" href="#autojump-插件" aria-label="Permalink to &quot;autojump 插件&quot;">​</a></h2><blockquote><p>它的用法是输入 j 目录名 或 j 目录名包含的字符（这个目录必须是之前 cd 访问过的），就可直接切换到相应的目录</p></blockquote><h3 id="手动安装" tabindex="-1">手动安装 <a class="header-anchor" href="#手动安装" aria-label="Permalink to &quot;手动安装&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git://github.com/wting/autojump.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autojump</span></span>
<span class="line"><span style="color:#FFCB6B;">./install.py</span></span></code></pre></div><blockquote><p>然后在～/.zshrc 里加上如下语句再source ~/.zshrc即可生效</p></blockquote><blockquote><p>[[ -s /Users/xxxxxx/.autojump/etc/profile.d/autojump.sh ]] &amp;&amp; source /Users/xxxxxx/.autojump/etc/profile.d/autojump.sh 注意⚠️：这个步骤在执行安装后自动会提示，xxxxxx指代你的用户名，到时候直接复制整句即可。</p></blockquote><h3 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autojump</span></span>
<span class="line"><span style="color:#FFCB6B;">./uninstall.py</span></span></code></pre></div><h2 id="zsh-syntax-highlighting" tabindex="-1">zsh-syntax-highlighting <a class="header-anchor" href="#zsh-syntax-highlighting" aria-label="Permalink to &quot;zsh-syntax-highlighting&quot;">​</a></h2><blockquote><p>高亮显示常用命令的插件</p></blockquote><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/zsh-users/zsh-syntax-highlighting.git</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/zsh-syntax-highlighting</span></span></code></pre></div><blockquote><p>使配置生效 source ~/.zshrc</p></blockquote><p><img src="`+e+'" alt="请添加图片描述"></p>',37),r=[c];function h(i,y,u,C,g,D){return a(),o("div",null,r)}const b=s(p,[["render",h]]);export{m as __pageData,b as default};
