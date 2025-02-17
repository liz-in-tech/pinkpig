import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,f as c}from"./app-DJTr8_lk.js";const n={},d=c(`<h1 id="解题技巧汇总" tabindex="-1"><a class="header-anchor" href="#解题技巧汇总" aria-hidden="true">#</a> 解题技巧汇总</h1><h2 id="链表题解题技巧-6项" tabindex="-1"><a class="header-anchor" href="#链表题解题技巧-6项" aria-hidden="true">#</a> 链表题解题技巧(6项)</h2><p>1.哨兵节点：头节点有变动时必须用</p><p>2.快慢指针：定位特定节点</p><p>3.删除当前节点：将下一个节点的值给当前节点，并删除下一个节点</p><p>4.相交链表（2个链表的尾部重合）找相交点：2个指针到尾部后换到另一个链表上，当2个指针指向同一个节点，就是相交点</p><p>5.环形链表找环的入口点：快慢指针重合后，快指针回到原点1倍速和慢指针重逢点即入口点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>证明
       a：入环前长度 b：入环到相遇点 c：相遇点到入环点
       slow走的距离：a + k1(b+c) + b
       fast走的距离：a + k2(b+c) + b
       2(a + k1(b+c) + b) =  a + k2(b+c) + b
       2a + 2b + 2k1(b+c) = a + b + k2(b+c)
       a = (k2-2k1) (b+c) - b
       a = (k2-2k1-1)(b+c) + c
       a = k(b+c) + c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.环形链表环的长度：找到环的入口点后，一个指针待在入口点，另一个指针走一圈（通过比对入口点指针知道是否走了一圈），记录下走的距离即为环的距离</p><h2 id="动态规划解题技巧-3项" tabindex="-1"><a class="header-anchor" href="#动态规划解题技巧-3项" aria-hidden="true">#</a> 动态规划解题技巧(3项)</h2><p>1.状态定义：1）一维还是二维，2）dp[i]/dp[i][j]代表意义</p><p>2.初始状态：边界</p><p>3.状态转移：1）转移方程，2）dp数组填入内容的顺序</p><h2 id="回溯解题技巧" tabindex="-1"><a class="header-anchor" href="#回溯解题技巧" aria-hidden="true">#</a> 回溯解题技巧</h2><p>1.backtrack传参：只传2种参数，1种是进行到哪一步的定位，1种是回溯结束时要得到的数据</p><p>2.结束条件</p><p>3.每个backtrack有几种情况</p><p>4.每种情况 1）剪枝 2）前置更新 3）backtrack递归调用 4）后置恢复</p>`,18),r=[d];function s(t,l){return a(),i("div",null,r)}const h=e(n,[["render",s],["__file","solve_trick.html.vue"]]);export{h as default};
