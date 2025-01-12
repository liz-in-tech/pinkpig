---
icon: lightbulb
date: 2024-10-29
category:
  - Channel
tag:
  - Blog
  - Knowledge Base
---
# 博客和知识库
<!-- more -->
## 启动
```
npm run docs:dev
```

## 两者要分清
||博客|知识库|
|--|--|--|
|链接|blog|pinkpig|
|受众|他人|自己|
|语言|中英双语分开|中英双语夹在写一起|
|内容|有好内容了再写|什么都有|
|时间线|写好后最好不要修改|每次修改更新为修改时间|
|内容|要精不要多|随手笔记|

## 两者都要注意
- 图片最好是英文
- 所有内容都记为markdown，不要杂七杂八

## 写作规范
文件夹和文件命名
- 小写字母
- 下划线

图片
- 在当前文件夹下
- 用文件名-大意命名

## 博客和知识库模板来源
框架：vuepress（博客和知识库均为此）   
主题：vuepress-theme-hope  
官网：https://marketplace.vuejs.press/themes/blog.html

知识库模板参考
- 演示：https://javaguide.cn/
- 代码：https://github.com/Snailclimb/JavaGuide

博客模板参考
- 演示：https://pengzhanbo.cn/
- 代码：https://github.com/pengzhanbo/pengzhanbo.cn

## 项目目录说明
- src => 所有页面展示
  - .vuepress => vuepress的配置
    - config.ts => 总站配置
      - theme.ts => 主题配置
        - navbar => 导航配置
        - sidebar => 侧边栏配置

## 图标积累
home 房子

book 书

user 用户

gears 齿轮

signs-post 风向标

lightbulb 电灯

star 五角星

## 单独页面设置

Note:总体配置在.vuepress下，每个页面可以进行单独设置，与总体设置不一样
```
---
article: false # 是否是文章
title: 布局与功能禁用 # 标题
icon: gears # 图标
order: 4 # 顺序
category: # 分类
  - 使用指南
tag: # 标签
  - 禁用

author: false  
word: true  
date: 2022-01-11  

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

sticky: true # 置顶
star: true # 星标
---

# 标题
<!-- more -->
```

## 自定义布局
布局包括:

- [导航栏](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)
- [侧边栏](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html)
- [页脚](https://theme-hope.vuejs.press/zh/guide/layout/footer.html)

同时每个页面包含:

- [路径导航](https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html)
- [标题和页面信息](https://theme-hope.vuejs.press/zh/guide/feature/page-info.html)
- [TOC (文章标题列表)](https://theme-hope.vuejs.press/zh/guide/layout/page.html#标题列表)
- [贡献者、更新时间等页面元信息](https://theme-hope.vuejs.press/guide/feature/meta.html)
- [评论](https://theme-hope.vuejs.press/zh/guide/feature/comment.html)

主题也带有以下元素:

- [夜间模式按钮](https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html)
- [返回顶部按钮](https://theme-hope.vuejs.press/guide/interface/others.html#返回顶部按钮)
- [打印按钮](https://theme-hope.vuejs.press/guide/interface/others.html#打印按钮)


