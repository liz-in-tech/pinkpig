import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as i,c as s,d,a as e,b as t,e as a,f as h}from"./app-hqFn6cUE.js";const o={},u=e("h1",{id:"博客和知识库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#博客和知识库","aria-hidden":"true"},"#"),t(" 博客和知识库")],-1),p=h(`<h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="两者要分清" tabindex="-1"><a class="header-anchor" href="#两者要分清" aria-hidden="true">#</a> 两者要分清</h2><table><thead><tr><th></th><th>博客</th><th>知识库</th></tr></thead><tbody><tr><td>链接</td><td>blog</td><td>pinkpig</td></tr><tr><td>受众</td><td>他人</td><td>自己</td></tr><tr><td>语言</td><td>中英双语分开</td><td>中英双语夹在写一起</td></tr><tr><td>内容</td><td>有好内容了再写</td><td>什么都有</td></tr><tr><td>时间线</td><td>写好后最好不要修改</td><td>每次修改更新为修改时间</td></tr><tr><td>内容</td><td>要精不要多</td><td>随手笔记</td></tr></tbody></table><h2 id="两者都要注意" tabindex="-1"><a class="header-anchor" href="#两者都要注意" aria-hidden="true">#</a> 两者都要注意</h2><ul><li>图片最好是英文</li><li>所有内容都记为markdown，不要杂七杂八</li></ul><h2 id="写作规范" tabindex="-1"><a class="header-anchor" href="#写作规范" aria-hidden="true">#</a> 写作规范</h2><p>文件夹和文件命名</p><ul><li>小写字母</li><li>下划线</li></ul><p>图片</p><ul><li>在当前文件夹下</li><li>用文件名-大意命名</li></ul><h2 id="博客和知识库模板来源" tabindex="-1"><a class="header-anchor" href="#博客和知识库模板来源" aria-hidden="true">#</a> 博客和知识库模板来源</h2><p>框架：vuepress（博客和知识库均为此）<br> 主题：vuepress-theme-hope<br> 官网：https://marketplace.vuejs.press/themes/blog.html</p><p>知识库模板参考</p><ul><li>演示：https://javaguide.cn/</li><li>代码：https://github.com/Snailclimb/JavaGuide</li></ul><p>博客模板参考</p><ul><li>演示：https://pengzhanbo.cn/</li><li>代码：https://github.com/pengzhanbo/pengzhanbo.cn</li></ul><h2 id="项目目录说明" tabindex="-1"><a class="header-anchor" href="#项目目录说明" aria-hidden="true">#</a> 项目目录说明</h2><ul><li>src =&gt; 所有页面展示 <ul><li>.vuepress =&gt; vuepress的配置 <ul><li>config.ts =&gt; 总站配置 <ul><li>theme.ts =&gt; 主题配置 <ul><li>navbar =&gt; 导航配置</li><li>sidebar =&gt; 侧边栏配置</li></ul></li></ul></li></ul></li></ul></li></ul><h2 id="图标积累" tabindex="-1"><a class="header-anchor" href="#图标积累" aria-hidden="true">#</a> 图标积累</h2><p>home 房子</p><p>book 书</p><p>user 用户</p><p>gears 齿轮</p><p>signs-post 风向标</p><p>lightbulb 电灯</p><p>star 五角星</p><h2 id="单独页面设置" tabindex="-1"><a class="header-anchor" href="#单独页面设置" aria-hidden="true">#</a> 单独页面设置</h2><p>Note:总体配置在.vuepress下，每个页面可以进行单独设置，与总体设置不一样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
article: false # 是否是文章
title: 布局与功能禁用 # 标题
icon: gears # 图标
order: 4 # 顺序
category: # 分类
  - 使用指南
tag: # 标签
  - 禁用
navbar: false # 导航栏
sidebar: false # 侧边栏

breadcrumb: false # 路径导航
pageInfo: false # 页面信息
contributors: false # 贡献者
editLink: false # 编辑此页链接
lastUpdated: false # 更新时间
prev: false # 上一篇
next: false # 下一篇
comment: false # 评论
footer: false # 页脚
backtotop: false # 返回顶部按钮
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义布局" tabindex="-1"><a class="header-anchor" href="#自定义布局" aria-hidden="true">#</a> 自定义布局</h2><p>布局包括:</p>`,32),c={href:"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://theme-hope.vuejs.press/zh/guide/layout/footer.html",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"同时每个页面包含:",-1),f={href:"https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://theme-hope.vuejs.press/zh/guide/feature/page-info.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://theme-hope.vuejs.press/zh/guide/layout/page.html#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},x={href:"https://theme-hope.vuejs.press/guide/feature/meta.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://theme-hope.vuejs.press/zh/guide/feature/comment.html",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"主题也带有以下元素:",-1),j={href:"https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://theme-hope.vuejs.press/guide/interface/others.html#%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8%E6%8C%89%E9%92%AE",target:"_blank",rel:"noopener noreferrer"},y={href:"https://theme-hope.vuejs.press/guide/interface/others.html#%E6%89%93%E5%8D%B0%E6%8C%89%E9%92%AE",target:"_blank",rel:"noopener noreferrer"};function A(B,N){const r=n("ExternalLinkIcon");return i(),s("div",null,[u,d(" more "),p,e("ul",null,[e("li",null,[e("a",c,[t("导航栏"),a(r)])]),e("li",null,[e("a",m,[t("侧边栏"),a(r)])]),e("li",null,[e("a",v,[t("页脚"),a(r)])])]),b,e("ul",null,[e("li",null,[e("a",f,[t("路径导航"),a(r)])]),e("li",null,[e("a",g,[t("标题和页面信息"),a(r)])]),e("li",null,[e("a",_,[t("TOC (文章标题列表)"),a(r)])]),e("li",null,[e("a",x,[t("贡献者、更新时间等页面元信息"),a(r)])]),e("li",null,[e("a",k,[t("评论"),a(r)])])]),E,e("ul",null,[e("li",null,[e("a",j,[t("夜间模式按钮"),a(r)])]),e("li",null,[e("a",z,[t("返回顶部按钮"),a(r)])]),e("li",null,[e("a",y,[t("打印按钮"),a(r)])])])])}const I=l(o,[["render",A],["__file","blog_and_pinkpig.html.vue"]]);export{I as default};