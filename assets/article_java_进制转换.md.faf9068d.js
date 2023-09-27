import{_ as s,o as a,c as n,X as l}from"./chunks/framework.8aaf079c.js";const A=JSON.parse('{"title":"进制转换","description":"","frontmatter":{},"headers":[],"relativePath":"article/java/进制转换.md","filePath":"article/java/进制转换.md"}'),o={name:"article/java/进制转换.md"},p=l(`<h1 id="进制转换" tabindex="-1">进制转换 <a class="header-anchor" href="#进制转换" aria-label="Permalink to &quot;进制转换&quot;">​</a></h1><h2 id="二进制转十进制" tabindex="-1">二进制转十进制 <a class="header-anchor" href="#二进制转十进制" aria-label="Permalink to &quot;二进制转十进制&quot;">​</a></h2><blockquote><p>从最低位（右边）开始，将每个位上的数提取出来，乘以2的(位数-1)次方，然后求和</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将二进制0b1011转为十进制</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0b1011</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1*2 的0次方+1*2 的1次方+0*2 的2次方+1*2 的3次方</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 二进制a -&gt; 十进制b 为 11</span></span></code></pre></div><h2 id="八进制转十进制" tabindex="-1">八进制转十进制 <a class="header-anchor" href="#八进制转十进制" aria-label="Permalink to &quot;八进制转十进制&quot;">​</a></h2><blockquote><p>从最低位（右边）开始，将每个位上的数提取出来，乘以8的(位数-1)次方，然后求和</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将8进制0234转为十进制</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0234</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4*8 的0次方+3*8 的1次方+2*8 的2次方</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 八进制c -&gt; 十进制d 为156</span></span></code></pre></div><h2 id="十六进制转十进制" tabindex="-1">十六进制转十进制 <a class="header-anchor" href="#十六进制转十进制" aria-label="Permalink to &quot;十六进制转十进制&quot;">​</a></h2><blockquote><p>从最低位（右边）开始，将每个位上的数提取出来，乘以16的(位数-1)次方，然后求和</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将16进制0x23A转为十进制</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> e </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x23A</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 10*16 的0次方+3*16 的1次方+2*16 的2次方</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">48</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">512</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 16进制e -&gt; 十进制f 为 570</span></span></code></pre></div><h2 id="十进制转二进制" tabindex="-1">十进制转二进制 <a class="header-anchor" href="#十进制转二进制" aria-label="Permalink to &quot;十进制转二进制&quot;">​</a></h2><blockquote><p>将该数不断除以2，直到商为0为止，然后将每步得到的余数倒过来，就是对应的二进制</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将34转为二进制</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> g </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> h </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0b00100010</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 转换是得到0b100010，一个字节为8位，不足补0 -&gt; 0b00100010</span></span></code></pre></div><h2 id="十进制转八进制" tabindex="-1">十进制转八进制 <a class="header-anchor" href="#十进制转八进制" aria-label="Permalink to &quot;十进制转八进制&quot;">​</a></h2><blockquote><p>将该数不断除以8，直到商为0为止，然后将每步得到的余数倒过来，就是对应的八进制</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将131转为八进制</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">131</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0203</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="十进制转十六进制" tabindex="-1">十进制转十六进制 <a class="header-anchor" href="#十进制转十六进制" aria-label="Permalink to &quot;十进制转十六进制&quot;">​</a></h2><blockquote><p>将该数不断除以16，直到商为0为止，然后将每步得到的余数倒过来，就是对应的十六进制</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将237转为十六进制</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> k </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">237</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xed</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="二进制转八进制" tabindex="-1">二进制转八进制 <a class="header-anchor" href="#二进制转八进制" aria-label="Permalink to &quot;二进制转八进制&quot;">​</a></h3><blockquote><p>从最低位（右边）开始，将二进制数每3位一组，转成对应的八进制数即可</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将0b11010101转成8进制</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 101 -&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 010 -&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 11 -&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 结果 -&gt; 0325</span></span></code></pre></div><h2 id="二进制转十六进制" tabindex="-1">二进制转十六进制 <a class="header-anchor" href="#二进制转十六进制" aria-label="Permalink to &quot;二进制转十六进制&quot;">​</a></h2><blockquote><p>从最低位（右边）开始，将二进制数每4位一组，转成对应的十六进制数即可</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将0b11010101转成十六进制</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 0101 -&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1101 -&gt; d</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 结果 -&gt; 0xd5</span></span></code></pre></div><h2 id="八进制转二进制" tabindex="-1">八进制转二进制 <a class="header-anchor" href="#八进制转二进制" aria-label="Permalink to &quot;八进制转二进制&quot;">​</a></h2><blockquote><p>将八进制每一位，转成对应的一个3位二进制数即可</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 0237转成2进制</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 7 -&gt; 111</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3 -&gt; 011</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2 -&gt; 010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 结果 0b10011111</span></span></code></pre></div><h2 id="十六进制转二进制" tabindex="-1">十六进制转二进制 <a class="header-anchor" href="#十六进制转二进制" aria-label="Permalink to &quot;十六进制转二进制&quot;">​</a></h2><blockquote><p>将16进制每一位，转成对应的一个4位二进制数即可</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 0x23b转成二进制</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// b -&gt; 1011</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3 -&gt; 0011</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2 -&gt; 0010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 结果 0b001000111011</span></span></code></pre></div>`,31),t=[p];function e(c,i,r,y,C,D){return a(),n("div",null,t)}const h=s(o,[["render",e]]);export{A as __pageData,h as default};
