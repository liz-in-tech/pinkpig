import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as l,e as n}from"./app-dh4YKh5Y.js";const s={},d=n(`<h1 id="快速恢复30题-一周恢复" tabindex="-1"><a class="header-anchor" href="#快速恢复30题-一周恢复" aria-hidden="true">#</a> 快速恢复30题 (一周恢复)</h1><p>day1 7<br> day2 6<br> day3 4<br> day4 4<br> day5 5<br> day6 6<br> day7 6</p><ul><li>1.链表（4题） day1 <ul><li>92 反转链表 II</li><li>25 K个一组翻转链表</li><li>142 环形链表 II</li><li>143 重排链表</li></ul></li><li>2.树（3题）day1 <ul><li>102 二叉树的层次遍历</li><li>103 二叉树的锯齿形层序遍历</li><li>236 二叉树的最近公共祖先</li></ul></li><li>3.动态规划（5题）day2 <ul><li>70 爬楼梯 (2种方法)</li><li>1143 最长公共子序列</li><li>64 最小路径和</li><li>5 最长回文子串</li><li>300 最长上升子序列</li></ul></li><li>4.BackTrack &amp; DFS（3题）day3 <ul><li>46 全排列</li><li>51 N皇后</li><li>200 岛屿数量 (并查集，有dfs和bfs2种方法，我做算法题选用dfs)</li></ul></li><li>5.BFS（4题）day4 <ul><li>1926 迷宫中离入口最近的出口</li><li>210 课程表 II</li><li>127 单词接龙</li><li>多层迷宫</li></ul></li><li>6.队列/堆（1题）day5 <ul><li>239 滑动窗口最大值 (2种方法)</li></ul></li><li>7.栈（3题）day5 <ul><li>739 每日温度</li><li>155 最小栈</li><li>224 基本计算器 &amp; 227 基本计算器 II</li></ul></li><li>8.set/dict（4题）day6 <ul><li>1 两数之和 (2种方法)</li><li>3 无重复字符的最长子串</li><li>146 LRU 缓存 (2种方法)</li><li>381 O(1) 时间插入、删除和获取随机元素 - 允许重复</li></ul></li><li>9.二分查找（1题）day7 <ul><li>33 旋转过的排序数组</li></ul></li><li>10.排序（2题）day7 <ul><li>215 数组中的第K个最大元素 (3种方法)</li><li>912 排序数组（用于练习O(nlogn)的排序）(2种方法) -练习2种排序：快排/归并排序</li></ul></li></ul><h2 id="多层迷宫题目" tabindex="-1"><a class="header-anchor" href="#多层迷宫题目" aria-hidden="true">#</a> 多层迷宫题目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Description

You are trapped in a 3D dungeon and need to find the quickest way out! The dungeon is composed of unit cubes which may or may not be filled with rock. It takes one minute to move one unit north, south, east, west, up or down. You cannot move diagonally and the maze is surrounded by solid rock on all sides.

Is an escape possible? If yes, how long will it take?

Input

The input consists of a number of dungeons. Each dungeon description starts with a line containing three integers L, R and C (all limited to 30 in size).
L is the number of levels making up the dungeon.
R and C are the number of rows and columns making up the plan of each level.
Then there will follow L blocks of R lines each containing C characters. Each character describes one cell of the dungeon. A cell full of rock is indicated by a &#39;#&#39; and empty cells are represented by a &#39;.&#39;. Your starting position is indicated by &#39;S&#39; and the exit by the letter &#39;E&#39;. There&#39;s a single blank line after each level. Input is terminated by three zeroes for L, R and C.

Output

Each maze generates one line of output. If it is possible to reach the exit, print a line of the form
Escaped in x minute(s).

where x is replaced by the shortest time it takes to escape.
If it is not possible to escape, print the line
Trapped!
Sample Input

3 4 5
S....
.###.
.##..
###.#

#####
#####
##.##
##...

#####
#####
#.###
####E

1 3 3
S##
#E#
###

0 0 0
Sample Output

Escaped in 11 minute(s).
Trapped!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[d];function r(t,u){return e(),l("div",null,a)}const o=i(s,[["render",r],["__file","快速恢复30题.html.vue"]]);export{o as default};
