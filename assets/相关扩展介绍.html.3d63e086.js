import{_ as t,r as e,o as p,c as o,a as s,b as n,d as i,e as l}from"./app.4208a849.js";const r="/images/kuozhan1.png",c="/images/kuozhan2.png",u="/images/kuozhan3.png",d="/images/kuozhan4.png",g="/images/kuozhan5.png",m="/images/kuozhan10.png",h="/images/kuozhan6.png",k="/images/kuozhan7.png",v="/images/kuozhan8.png",_="/images/kuozhan9.png",b={},q=l('<h1 id="相关扩展介绍" tabindex="-1"><a class="header-anchor" href="#相关扩展介绍" aria-hidden="true">#</a> 相关扩展介绍</h1><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h2><p>这里主要介绍 vscode 常用的一些扩展插件。</p><h2 id="html-相关扩展" tabindex="-1"><a class="header-anchor" href="#html-相关扩展" aria-hidden="true">#</a> HTML 相关扩展</h2><p>1.Highlight Matching Tag**（HTML 高亮）**</p><p>可以帮我们更好的看清代码结构，点击 tag，对应 tag 首尾都会变色高亮显示</p><p><img src="'+r+`" alt="kuozhan1"></p><ul><li>如果光标在 Tag 区域，找到匹配的光标，然后用 Overlay 高亮匹配的标签</li><li>如果光标不在 Tag 区域，隐藏标签高亮</li></ul><p>相关设置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;highlight-matching-tag.style&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token property">&quot;backgroundcolor&quot;</span><span class="token operator">:</span><span class="token string">&quot;rgba(165,153,233)&quot;</span><span class="token comment">//高亮颜色</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;highlight-matching-tag.leftstyle&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token property">&quot;borderwidth&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token comment">//左边框样式</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;highlight-matching-tag.rightstyle&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token property">&quot;borderwidth&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token comment">//右边框样式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.Auto Rename Tag （<strong>HTML 标签自动闭合</strong>）</p><p>让我们更高效的书写代码，写一个 tag 或修改一个 tag 的时间更短</p><p><img src="`+c+'" alt="kuozhan2"></p><p>重命名一个 HTML / XML 标签时，自动重命名配对的 HTML / XML 标签</p><p>3.HTMLHint （代码检查工具）</p><p>可以帮助我们更好的维护代码质量</p><p><img src="'+u+'" alt="kuozhan3"></p><p>HTMLHint 工具内置了很多规则，可以对 HTML 代码文件进行静态代码检查，从而提高 HTML 代码编写的规范和质量。</p><p>4.lit-html （语法高亮，响应补全）</p><p>当我们在 js/ts 中写 html 代码时，可以更轻松，看的也更清晰</p><p><img src="'+d+'" alt="kuozhan4"></p><p>在 JavaScript/TypeScript 的文件中，如果有使用到 HTML 标记，lit-html 提供语法高亮和相应的补全支持。</p><h2 id="css-相关扩展" tabindex="-1"><a class="header-anchor" href="#css-相关扩展" aria-hidden="true">#</a> CSS 相关扩展</h2><p>1.Color Highlight</p><p><img src="'+g+'" alt="kuozhan5"></p><p>可以显示高亮你所输入的颜色</p><p>2.CSS Peek</p><p><img src="'+m+'" alt="kuozhan10"></p><p>可以追踪至样式表中 CSS 类和 id 定义的地方。</p><h2 id="git-相关扩展" tabindex="-1"><a class="header-anchor" href="#git-相关扩展" aria-hidden="true">#</a> GIT 相关扩展</h2><p>1.Gitconfig Syntax(语法高亮)</p><p><img src="'+h+'" alt="kuozhan6"></p><p>.gitconfig， .gitattributes 和.gitmodules 文件的语法高亮显示。</p><p>2.gitignore</p><p><img src="'+k+`" alt="kuozhan7"></p><ul><li>通过从 github/gitignore 存储库中提取.gitignore 模板来添加本地.gitignorefile</li><li>.gitignore 文件的语言支持</li></ul><p>相关设置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// Git lens</span>
<span class="token property">&quot;gitlens.gitExplorer.files.layout&quot;</span><span class="token operator">:</span><span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span><span class="token comment">//获取视图布局</span>
<span class="token property">&quot;gitlens.currentLine.enabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//指定默认情况下是否为当前行提供一个责备注释。</span>
<span class="token property">&quot;gitlens.hovers.enabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//指定是否提供任何悬停</span>
<span class="token property">&quot;gitlens.keymap&quot;</span><span class="token operator">:</span><span class="token string">&quot;alternate&quot;</span><span class="token punctuation">,</span> <span class="token comment">//指定GitLens快捷键使用的键映射alternate-添加以Alt（⌥在macOS上）chorded-添加以Ctrl+Shift+G（⌥⌘G在macOS上）none开头的快捷键集合</span>
<span class="token property">&quot;gitlens.advanced.messages&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//指定应禁止显示哪些消息</span>
    <span class="token property">&quot;suppressShowKeyBindingsNotice&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gyh.life/2022/11/21/e1a6aa8b106f6.png" alt="image-20221121145103602"></p><p>3.GitLens — Git supercharged(<u>特别推荐</u>)</p><p><img src="`+v+'" alt="kuozhan8"></p><p>Gitlens 增强了 VS Code 中内置的 Git 功能。它允许可视化代码作者，存储库视图，行悬停等等！您必须使用它来了解其全部潜力。</p><ul><li><p>在每行代码的末尾，GitLens 都会公开最后一次提交的作者、提交的时间以及其他详细的备注信息。状态栏的备注显示类似的信息。将鼠标悬停在这些注释上将显示有关每行提交历史记录的更多详细信息。</p></li><li><p>在每个文件的顶部和每个代码块的开头，GitLens 公开了最近的提交和作者数量。它通过利用 CodeLens（VS Code 中最强大的工具之一）来实现此目的，它提供了可单击的链接，公开了提交详细信息，并允许您从快速选择菜单中进行选择，以比较、导航和进一步探索每个提交。</p></li><li><p>只需单击一个按钮，您就可以在任何文件的历史记录中来回导航。比较随时间推移而发生的变化，并查看整个文件或每行代码的修订历史记录。可自定义且不显眼的 Git 责备注释仍然显示在每一行上，告诉您最后一次提交的作者，日期和消息！</p></li><li><p>这个功能强大的工具提供对许多常见 Git 命令的引导式分步访问，以及对提交（历史记录和搜索）、隐藏和状态（当前分支和工作树）的快速访问</p><p>4.GitHub Pull Requests</p></li></ul><p><img src="'+_+'" alt="kuozhan9"></p>',44),f={href:"https://so.csdn.net/so/search?q=GitHub&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"};function y(z,L){const a=e("ExternalLinkIcon");return p(),o("div",null,[q,s("p",null,[n("在 Visual Studio Code 中查看和管理"),s("a",f,[n("GitHub"),i(a)]),n("拉取请求和问题")])])}const H=t(b,[["render",y],["__file","相关扩展介绍.html.vue"]]);export{H as default};
