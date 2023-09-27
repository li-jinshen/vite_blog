import{_ as s,o as a,c as n,X as l}from"./chunks/framework.8aaf079c.js";const E=JSON.parse('{"title":"原码反码补码和位运算符","description":"","frontmatter":{},"headers":[],"relativePath":"article/java/原码反码补码和位运算符.md","filePath":"article/java/原码反码补码和位运算符.md"}'),t={name:"article/java/原码反码补码和位运算符.md"},e=l(`<h1 id="原码反码补码和位运算符" tabindex="-1">原码反码补码和位运算符 <a class="header-anchor" href="#原码反码补码和位运算符" aria-label="Permalink to &quot;原码反码补码和位运算符&quot;">​</a></h1><h2 id="原码反码补码总结" tabindex="-1">原码反码补码总结 <a class="header-anchor" href="#原码反码补码总结" aria-label="Permalink to &quot;原码反码补码总结&quot;">​</a></h2><ol><li>二进制的最高位是符号位：0表示正数，1表示负数（0 -&gt; 0 , 1-&gt; -）</li><li>正数的原码，反码，补码都是一样的（三码合一）</li><li>负数的反码 = 它的原码符号位不变，其它位取反（0-&gt;1，1-&gt;0）</li><li>负数的补码 = 它的反码 + 1，负数的反码 = 负数的补码 - 1</li><li>0的反码，补码都是0</li><li>java没有符号数，换言之，java中的数都是有符号的</li><li>在计算机运算的时候，都是<code>以补码的方式来运算</code>的</li><li><code>当我们看运算结果的时候，要看它的原码</code></li></ol><h2 id="位运算符" tabindex="-1">位运算符 <a class="header-anchor" href="#位运算符" aria-label="Permalink to &quot;位运算符&quot;">​</a></h2><table><thead><tr><th>名称</th><th>解释</th></tr></thead><tbody><tr><td>按位与&amp;</td><td>两个全为1，结果为1，否则为0</td></tr><tr><td>按位或|</td><td>两位有一个为1，结果为1，否则为0</td></tr><tr><td>按位异或^</td><td>两位一个为0，一个为1，结果为1，否则为0</td></tr><tr><td>按位取反~</td><td>0 -&gt; 1 , 1-&gt;0</td></tr><tr><td>算术右移 &gt;&gt;</td><td>低位溢出,符号位不变,并用符号位补溢出的高位</td></tr><tr><td>算术左移 &lt;&lt;</td><td>符号位不变,低位补0</td></tr><tr><td>逻辑右移也叫无符号右移 &gt;&gt;&gt;</td><td>低位溢出，高位补 0</td></tr></tbody></table><h2 id="位运算符计算示例" tabindex="-1">位运算符计算示例 <a class="header-anchor" href="#位运算符计算示例" aria-label="Permalink to &quot;位运算符计算示例&quot;">​</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//1 =&gt; 00000001 =&gt; 00000000 本质 1 / 2 / 2 =0</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//1 =&gt; 00000001 =&gt; 00000100 本质 1 * 2 * 2 = 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 计算 2&amp;3 （计算机计算都是以补码进行计算，计算后再转为原码查看结果）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1、先得到2的补码 =&gt; 2的原码（2是int类型4个字节）（正数原码补码反码三码合一）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    原码：00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    补码：00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2、先得到3的补码 =&gt; 3的原码（3是int类型4个字节）（正数原码补码反码三码合一）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    原码：00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    补码：00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3、按位与&amp; ：两个全为1结果为1，否则为0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    2的补码：00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    3的补码：00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    结果补码：00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    转为原码：00000000 00000000 00000000 00000010 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    二进制转十进制：2（最后的结果）</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 计算 ~-2 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1、先得到-2的补码 =&gt; -2的原码（负数的反码 = 原码符号位不变其他位取反，负数补码 = 负数反码 + 1）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    -2的原码：10000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    -2的反码：11111111 11111111 11111111 11111101</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    -2的补码：11111111 11111111 11111111 11111110</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2、按位取反~ </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    -2的补码取反：00000000 00000000 00000000 00000001 （最高位是0，变成了正数，正数三码合1）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//      转为十进制：1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 计算 ~2 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1、先得到2的补码 =&gt; 2的原码（2是int类型4个字节）（正数原码补码反码三码合一）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    原码：00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    补码：00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2、按位取反~ </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    2的补码取反：11111111 11111111 11111111 11111101</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    反码：11111111 11111111 11111111 11111100</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    原码：10000000 00000000 00000000 00000011 （负数的原码符号位不变，其他取反）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    结果：-3 （十进制）</span></span></code></pre></div>`,7),p=[e];function o(i,c,r,y,d,f){return a(),n("div",null,p)}const h=s(t,[["render",o]]);export{E as __pageData,h as default};
