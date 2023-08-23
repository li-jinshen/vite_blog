import{_ as s,o as a,c as n,X as o}from"./chunks/framework.8aaf079c.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/uni/申请安卓证书.md","filePath":"article/uni/申请安卓证书.md"}'),l={name:"article/uni/申请安卓证书.md"},p=o(`<blockquote><p>使用uni-app 开发APP的时候我们就需要进行项目打包，在这里记录一下云打包中申请Android证书文件的方法，IOS证书的申请方法这里就不去记录了，因为官方有完整的文档</p></blockquote><p><img src="https://pic.iask.cn/fimg/524152483829.jpg" alt="https://pic.iask.cn/fimg/524152483829.jpg"></p><h2 id="安装jdk" tabindex="-1">安装JDK <a class="header-anchor" href="#安装jdk" aria-label="Permalink to &quot;安装JDK&quot;">​</a></h2><h3 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h3><p>官网下载：<a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank" rel="noreferrer">jdk下载</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>下载解压后正常安装就好了，安装好后将bin目录配置到环境变量中</p><p><img src="https://pic.iask.cn/fimg/269492484039.jpg" alt="https://pic.iask.cn/fimg/269492484039.jpg"></p><p><img src="https://pic.iask.cn/fimg/201952484037.jpg" alt="https://pic.iask.cn/fimg/201952484037.jpg"></p><h2 id="生成证书" tabindex="-1">生成证书 <a class="header-anchor" href="#生成证书" aria-label="Permalink to &quot;生成证书&quot;">​</a></h2><h3 id="生成普通证书" tabindex="-1">生成普通证书 <a class="header-anchor" href="#生成普通证书" aria-label="Permalink to &quot;生成普通证书&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">keytool</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-genkey</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-alias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">testalias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-keyalg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RSA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-keysize</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2048</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-validity</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">36500</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-keystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.keystore</span></span></code></pre></div><blockquote><p>testalias ：证书别名，可修改为自己想设置的字符，建议使用英文字母和数字</p><p>test.keystore ：证书文件名称，可修改为自己想设置的文件名称</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//输入证书文件密码，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">Re-enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//再次输入证书文件密码，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">first</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">last</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name?</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Unknown</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">//输入名字和姓氏，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">organizational</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unit?</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Unknown</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">//输入组织单位名称，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">organization?</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Unknown</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">//输入组织名称，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">City</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Locality?</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Unknown</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">//输入城市或区域名称，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">State</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Province?</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Unknown</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">//输入省/市/自治区名称，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">two-letter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">country</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unit?</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Unknown</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">//输入国家/地区代号（两个字母），中国为CN，输入完成回车</span></span>
<span class="line"><span style="color:#FFCB6B;">Is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CN=XX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OU=XX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">O=XX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">L=XX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ST=XX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C=XX</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">correct?</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">no</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">                   </span><span style="color:#C3E88D;">//确认上面输入的内容是否正确，输入y，回车</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">testalia</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">RETURN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">same</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">)</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//确认证书密码与证书文件密码一样（HBuilder</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">HBuilderX要求这两个密码一致），直接回车就可以</span></span></code></pre></div><h3 id="更换秘钥库类型" tabindex="-1">更换秘钥库类型 <a class="header-anchor" href="#更换秘钥库类型" aria-label="Permalink to &quot;更换秘钥库类型&quot;">​</a></h3><blockquote><p>签名算法名称： SHA1withRSA 主体公共密钥算法：1024 位 RSA 密钥 密钥库类型：JKS</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">keytool</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-importkeystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-srckeystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./yourapp.keystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-destkeystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./yourapp.keystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-deststoretype</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JKS</span></span></code></pre></div><p>使用这个证书就可以将我们的项目进行云打包了</p><h3 id="查看证书信息" tabindex="-1">查看证书信息 <a class="header-anchor" href="#查看证书信息" aria-label="Permalink to &quot;查看证书信息&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">keytool</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-keystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.keystore</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keystore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//输入密码，回车</span></span></code></pre></div><h2 id="申请ios证书" tabindex="-1">申请IOS证书 <a class="header-anchor" href="#申请ios证书" aria-label="Permalink to &quot;申请IOS证书&quot;">​</a></h2><p><strong>申请ios证书需要苹果电脑，黑苹果也可以，也可以在一些网站上面生成（要收费）</strong></p><p><a href="https://ask.dcloud.net.cn/article/152" target="_blank" rel="noreferrer">官方文档</a></p><blockquote><p>踩坑经历：证书命名，设置密码时不要使用中文和特殊字符</p></blockquote>`,25),e=[p];function t(r,c,C,y,A,D){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{E as __pageData,h as default};
