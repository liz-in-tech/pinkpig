import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,e as s}from"./app-dVf4Oob3.js";const d={},l=s(`<h1 id="多层迷宫" tabindex="-1"><a class="header-anchor" href="#多层迷宫" aria-hidden="true">#</a> 多层迷宫</h1><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Description

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import collections
from operator import indexOf
from typing import List

if __name__ == &#39;__main__&#39;:
    while True:
        L, R, C = map(int, input().split()) # layer, row, column
        # &quot;#&quot;代表墙，&quot;.&quot;代表通路，&quot;S&quot;代表起点，&quot;E&quot;代表终点，求最短路径
        # print(f&quot;L:{L},R:{R},C:{C}&quot;)
        if L == R == C == 0: break
        map_3d = [[[&quot;#&quot;] * C for _ in range(R)] for _ in range(L)]

        q_start = collections.deque()
        q_end = collections.deque()
        visited_start = set()
        visited_end = set()

        for l in range(L):
            for r in range(R):
                s = input()
                for i, c in enumerate(s):
                    map_3d[l][r][i] = c
                if &quot;S&quot; in s:
                    q_start.append((l, r, s.find(&quot;S&quot;)))
                    visited_start.add((l, r, s.find(&quot;S&quot;)))
                    # map_3d[l][r][s.find(&quot;S&quot;)] = &quot;#&quot;
                if &quot;E&quot; in s:
                    q_end.append((l, r, s.find(&quot;E&quot;)))
                    visited_end.add((l, r, s.find(&quot;E&quot;)))
                    # map_3d[l][r][s.find(&quot;E&quot;)] = &quot;#&quot;
            input()
        # print(map_3d)
        # print(q_start)
        # print(q_end)
        next_step = [
            [0, 0, -1], # 前
            [0, 0, 1], # 后
            [0, -1, 0], # 左
            [0, 1, 0], # 右
            [-1, 0, 0], # 上
            [1, 0, 0], # 下
        ]
        ans = 0
        flag = False
        while q_start and q_end:
            ans += 1
            if len(q_start) &lt;= len(q_end):
                q = q_start
                visited = visited_start
            else:
                q = q_end
                visited = visited_end
            n = len(q)
            for i in range(n):
                layer, row, col = q.popleft()
                map_3d[layer][row][col] = &quot;#&quot;
                for next in next_step:
                    layer1, row1, col1 = layer+next[0], row+next[1], col+next[2]
                    if 0 &lt;= layer1 &lt; L and 0 &lt;= row1 &lt; R and 0 &lt;= col1 &lt; C and map_3d[layer1][row1][col1] == &quot;.&quot;:
                        # map_3d[layer1][row1][col1] = &quot;#&quot;
                        visited.add((layer1, row1, col1))
                        q.append((layer1, row1, col1))
            if len(visited_start.intersection(visited_end)) &gt; 0:
                print(f&quot;Escaped in {ans} minute(s).&quot;)
                flag = True
                break
        if not flag:
            print(&quot;Trapped!&quot;)





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[l];function r(v,t){return i(),e("div",null,a)}const o=n(d,[["render",r],["__file","多层迷宫.html.vue"]]);export{o as default};
