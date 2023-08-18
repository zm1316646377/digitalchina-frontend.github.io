import{_ as a,r,o as t,c as i,a as n,b as e,d,e as o}from"./app.4208a849.js";const l={},c=n("h1",{id:"前端网站目录结构规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端网站目录结构规范","aria-hidden":"true"},"#"),e(" 前端网站目录结构规范")],-1),h=n("h2",{id:"目录结构介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录结构介绍","aria-hidden":"true"},"#"),e(" 目录结构介绍")],-1),u={href:"https://v2.vuepress.vuejs.org/zh/guide/page.html",target:"_blank",rel:"noopener noreferrer"},_=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
  ├─design // 设计类文章
  │  ├─TECHNOLOGY-STACK-NAME // 技术栈名称，比如 \`figma\`
  │  │      README.md
  ├─develop // 研发类文章
  │  ├─TECHNOLOGY-STACK-NAME
  │  │      README.md
  └─en // 文档英文版，下级目录结构与 \`docs\` 下级结构一致
  │    ├─README.md // 英文版网站首页
  │    ├─design
  │    └─develop
  └─README.md // 网站首页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录结构规范" tabindex="-1"><a class="header-anchor" href="#目录结构规范" aria-hidden="true">#</a> 目录结构规范</h2><h3 id="一级目录" tabindex="-1"><a class="header-anchor" href="#一级目录" aria-hidden="true">#</a> 一级目录</h3>`,3),v=n("code",null,"design",-1),b=n("code",null,"develop",-1),m={href:"https://github.com/digitalchina-frontend/digitalchina-frontend.github.io/issues/new",target:"_blank",rel:"noopener noreferrer"},f=n("h3",{id:"二级目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二级目录","aria-hidden":"true"},"#"),e(" 二级目录")],-1),p={href:"https://egghead.io/topics",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"kebab-case",-1),E=n("code",null,"vuejs",-1),x=n("code",null,"babel-gatsby",-1),k=n("h3",{id:"三级目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三级目录","aria-hidden":"true"},"#"),e(" 三级目录")],-1),A=n("code",null,"kebab-case",-1),M=n("code",null,"README.md",-1),N=n("code",null,"README.md",-1),D=n("code",null,"README.md",-1),R={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar",target:"_blank",rel:"noopener noreferrer"},V={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar",target:"_blank",rel:"noopener noreferrer"};function j(C,T){const s=r("ExternalLinkIcon");return t(),i("div",null,[c,h,n("p",null,[e("基于 "),n("a",u,[e("VuePress V2 的目录结构"),d(s)]),e(" 扩展，前端网站的文档目录结构如下：")]),_,n("p",null,[e("一级目录数量不能太多，暂定为："),v,e("、"),b,e("，如果有其他类型文章可以提 "),n("a",m,[e("issue"),d(s)]),e(" 进行提案。")]),f,n("p",null,[e("二级目录为所属技术栈名称，目录名称全小写，全部技术栈参考 "),n("a",p,[e("egghead topics"),d(s)]),e("，格式为 "),g,e("，比如所属技术栈为 Vue.js 的文章应该放在 "),E,e(" 目录下，同时属于 Babel 和 Gatsby 的文章应该放在 "),x,e(" 目录下，目录不存在应该创建目录。")]),k,n("p",null,[e("三级目录为具体文章主题，格式为 "),A,e("，文章可以是单篇，可以是系列；如果是单篇文章，目录下 "),M,e(" 即为文章内容，如果为系列文章，目录下 "),N,e(" 为系列介绍，也可以不提供 "),D,e(" 文件，系列文章需要参考 "),n("a",R,[e("sidebar"),d(s)]),e(" 配置侧边栏导航；不论是单篇还是系列文章，都需要参考 "),n("a",V,[e("navbar"),d(s)]),e(" 配置头部导航栏。")])])}const L=a(l,[["render",j],["__file","index.html.vue"]]);export{L as default};
