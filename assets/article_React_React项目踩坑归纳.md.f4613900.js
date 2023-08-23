import{_ as s,o as a,c as n,X as l}from"./chunks/framework.8aaf079c.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/React/React项目踩坑归纳.md","filePath":"article/React/React项目踩坑归纳.md"}'),p={name:"article/React/React项目踩坑归纳.md"},o=l(`<p><img src="https://img-blog.csdnimg.cn/2021070618344660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTcwMDk3,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><h2 id="react踩坑" tabindex="-1">React踩坑 <a class="header-anchor" href="#react踩坑" aria-label="Permalink to &quot;React踩坑&quot;">​</a></h2><h3 id="安装sass" tabindex="-1">安装sass <a class="header-anchor" href="#安装sass" aria-label="Permalink to &quot;安装sass&quot;">​</a></h3><blockquote><p>npm install node-sass sass-loader --save</p></blockquote><h4 id="使用scss" tabindex="-1">使用scss <a class="header-anchor" href="#使用scss" aria-label="Permalink to &quot;使用scss&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import  &#39;./UserInfo.scss&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default class Login extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">	render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">UserInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                demo</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h4><blockquote><p>TypeError: this.getOptions is not a function</p></blockquote><p><code>sass-loader@11.0.0</code> 版本需要 <code>webpack@5.0.0</code> ，而 <code>@vue/cli@4.5.0</code> 所用的是 <code>webpack@4</code>，所以需要将 <code>sass-loader</code>的版本降到11以下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn remove sass-loader</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn add sass-loader@10.1.1</span></span></code></pre></div><h3 id="关于this-props-history-listen-解绑的问题" tabindex="-1">关于this.props.history.listen 解绑的问题 <a class="header-anchor" href="#关于this-props-history-listen-解绑的问题" aria-label="Permalink to &quot;关于this.props.history.listen 解绑的问题&quot;">​</a></h3><blockquote><p>使用this.props.history.listen 监听路由变化时，在组件卸载的时候需要执行解绑操作，否则浏览器会报错</p></blockquote><blockquote><p>解绑的方法是：this.props.history.listen 执行会返回一个函数，通过执行这个函数就可以进行解绑</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> UNLISTEN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">route</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 对应的逻辑</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">componentWillUnmount</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">UNLISTEN</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">UNLISTEN</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 执行解绑this.props.history.listen</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resize</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">listenerResize</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="关于通过ref获取组件的width-和-height的问题" tabindex="-1">关于通过ref获取组件的width 和 height的问题 <a class="header-anchor" href="#关于通过ref获取组件的width-和-height的问题" aria-label="Permalink to &quot;关于通过ref获取组件的width 和 height的问题&quot;">​</a></h3><blockquote><p>1、在使用ref 获取元素高度时 ，需要执行 this.setState({}) 更新一下页面再获取</p><p>2、或者使用定时器延迟获取</p><p>3、或者使用 <a href="https://segmentfault.com/a/1190000039207626?utm_source=tag-newes" target="_blank" rel="noreferrer">Mutation Observer API 用来监视 DOM 变动</a></p></blockquote><h3 id="父组件如何调用子组件-子组件为函数组件-的方法" tabindex="-1">父组件如何调用子组件（子组件为函数组件）的方法 <a class="header-anchor" href="#父组件如何调用子组件-子组件为函数组件-的方法" aria-label="Permalink to &quot;父组件如何调用子组件（子组件为函数组件）的方法&quot;">​</a></h3><blockquote><p>useImperativeHandle: 可以自定义暴露给父组件的方法或者变量</p></blockquote><blockquote><p>forwardRef： 提供子组件 ref 对象</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRef</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useImperativeHandle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ReactDOM </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> FancyInput </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forwardRef</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ref</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inputRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRef</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useImperativeHandle</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">focus</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">inputRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">inputRef</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fancyInputRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRef</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FancyInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">fancyInputRef</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> fancyInputRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span><span style="color:#A6ACCD;">父组件调用子组件的 focus</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> root)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="antd踩坑" tabindex="-1">antd踩坑 <a class="header-anchor" href="#antd踩坑" aria-label="Permalink to &quot;antd踩坑&quot;">​</a></h2><h3 id="form-表单获取数据" tabindex="-1">form 表单获取数据 <a class="header-anchor" href="#form-表单获取数据" aria-label="Permalink to &quot;form 表单获取数据&quot;">​</a></h3><blockquote><p>form表单所在组件是一个函数组件，函数组件中才能够使用 Form.useForm();</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">useForm</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// form.validateFields() 执行表单校验</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// form.getFieldsValue() 获取到表单数据</span></span>
<span class="line"><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validateFields</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFieldsValue</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">city</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">leaderIdS</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">remark</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">startAt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFieldsValue</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// form.setFieldsValue  设置表单数据</span></span>
<span class="line"><span style="color:#A6ACCD;"> form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFieldsValue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          address</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          leaderIdS</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          remark</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          city</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">startAt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> newStartAt</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="select设置defaultvalue" tabindex="-1">select设置defaultValue <a class="header-anchor" href="#select设置defaultvalue" aria-label="Permalink to &quot;select设置defaultValue&quot;">​</a></h3><blockquote><p>需要添加key = {defaultValue} defaultValue设置才能生效</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Select</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">multiple</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">allowClear</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Please select</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;"> = {</span><span style="color:#A6ACCD;">defaultValue</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">defaultValue</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">defaultValue</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">onChange</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleChange</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">minWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">250</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">maxTagCount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">responsive</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;"> 	&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> 		</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="给form中的select设置默认值" tabindex="-1">给form中的select设置默认值 <a class="header-anchor" href="#给form中的select设置默认值" aria-label="Permalink to &quot;给form中的select设置默认值&quot;">​</a></h3><blockquote><p>1、通过 <strong>form.setFieldsValue()</strong> 给 Form.Item 的 name 赋值</p><p>2、name的值必须是一个<strong>字符串</strong>，假如我们是需要将id赋值给name，也需要将id的值转为字符串（如果是一个number类型的值，则会直接展示id的值，而不是展示我们期望展示的值）</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 修改的方法</span></span>
<span class="line"><span style="color:#82AAFF;">modify</span><span style="color:#A6ACCD;">(obj) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">admin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">remark</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []   </span><span style="color:#676E95;font-style:italic;">// uid就是 Form.Item name属性绑定的值</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">admin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">uid</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)  </span><span style="color:#676E95;font-style:italic;">// 将id转为字符串</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFieldsValue</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">address</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">remark</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">uid</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;"> {...</span><span style="color:#A6ACCD;">formItemLayout</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">form</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form.Item</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uid</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">管理员</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">hasFeedback</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择管理员</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Select</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">multiple</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">allowClear</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择管理员</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">onChange</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleChange</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">maxTagCount</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">          &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form.Item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,32),e=[o];function t(c,r,F,D,y,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
