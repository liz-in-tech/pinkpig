import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-I9eu-1La.js";const i={},t=e(`<h1 id="python算法刷题语法快速恢复" tabindex="-1"><a class="header-anchor" href="#python算法刷题语法快速恢复" aria-hidden="true">#</a> Python算法刷题语法快速恢复</h1><h2 id="关键词" tabindex="-1"><a class="header-anchor" href="#关键词" aria-hidden="true">#</a> 关键词</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>and 与  
or  或  
not 非  
in  包含  
is 等于（比较对象）  
== 等于（比较值）  
True  真  
False 假  
None  空
nonlocal 局部函数用全局变量
math.inf 最大值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与-is" tabindex="-1"><a class="header-anchor" href="#与-is" aria-hidden="true">#</a> == 与 is</h3><ul><li>== <ul><li>除了<strong>自定义对象</strong>和<strong>None</strong>，==可以比较任何数据类型的值相等 <ul><li>数字</li><li>字符/字符串</li><li>list/set/dict/tuple/...</li></ul></li><li>原理 <ul><li>==其实调用的是<code>__eq__</code>方法，内置类型都实现了自己的<code>__eq__</code></li></ul></li></ul></li><li>is <ul><li>None用is进行比较，不要用&quot;== None&quot;</li><li>自定义对象 <ul><li>用is就是比较地址</li><li>用<mark>如果写了<code>__eq__</code>，则比较值，否则</mark>等同于is，在比较对象的地址</li></ul></li></ul></li></ul><h2 id="选择" tabindex="-1"><a class="header-anchor" href="#选择" aria-hidden="true">#</a> 选择</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if:
    pass
elif:
    pass
else:
    pass
if nums[start] &lt;= target &lt; nums[mid]: # 两边同时比较
n1 = int(num1[i]) if i &gt;= 0 else 0  
return True if len(stack) == 0 else False  
if root in (None, p, q): return root  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while xxx:  
for item in nums:  
for index, item in enumerate(nums):   
for i in range(n)： # 从0到（n-1）  
for i in range(1, len(prices)): # 从1到（len-1）  
for _ in range(len(q)): # 如果不需要用到遍历的值，用“_”
for x, y in [(row - 1, col), (row + 1, col), (row, col - 1), (row, col + 1)]: # dfs地图遍历4个方向（方式一）
for x,y in [[-1,0],[1,0],[0,-1],[0,1]]: # dfs地图遍历4个方向（方式二）
    tmp_i = i + x
    tmp_j = j + y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上三角/下三角 （按长度大小进行迭代，从左下角或右上角开始）动态规划</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for L in range(2,n+1): # 长度  
    for start in range(n): # 开始  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义变量与赋值" tabindex="-1"><a class="header-anchor" href="#定义变量与赋值" aria-hidden="true">#</a> 定义变量与赋值</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>res = &quot;&quot; # 1个变量  
n1,n2,n3 = len(a1),len(a2),0 # 多个变量  
slow = fast = head # 2个赋相同值
res = pre = end = ListNode(0, head) # 3个赋相同值
flag = True
flag = not flag # 切换flag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交换两个数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums[left], nums[random_index] = nums[random_index], nums[left]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> main</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if __name__==&#39;__main__&#39;:
 pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类" aria-hidden="true">#</a> 定义类</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class LinkedNode:
  def __init__(self,value=0):
     self.value=value
     self.prev=None
     self.next=None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例化对象" tabindex="-1"><a class="header-anchor" href="#实例化对象" aria-hidden="true">#</a> 实例化对象</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h = ListNode(0, None) # 前面不加new  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="通用函数" tabindex="-1"><a class="header-anchor" href="#通用函数" aria-hidden="true">#</a> 通用函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>len(xxx) # 求长度
max(xxx) # 求最大值
min(xxx) # 求最小值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums.sort() # 在原有数组上排序
sorted(nums) # 不改变原有数组，生成新的数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>数据类型转换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str(xxx) # 转字符串  
int(xxx) # 转整型
float(xxx) # 转浮点数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符函数" tabindex="-1"><a class="header-anchor" href="#字符函数" aria-hidden="true">#</a> 字符函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>c.lower() # 转小写  
c.isalnum() # 是字母或数字
c.isdigit() # 是数字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>“00123”.lstrip(0) # 去掉前缀0  
s[::-1] # 反转
&quot; &quot;.join(nums) # 数组转字符串，在数字之间用空格分隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分割字符串</p><ul><li>用s.split()分割（分隔符默认是空格，也可以是其他字符，但不可以是空字符）</li><li>用list(s)分割，分割后为字符数组，用于将可迭代对象（iterable） 转换为列表</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; s = &quot;hello&quot;
&gt;&gt;&gt; print(s.split())
[&#39;hello&#39;]
&gt;&gt;&gt; s1 = &quot;hello world&quot;
&gt;&gt;&gt; print(s1.split())
[&#39;hello&#39;, &#39;world&#39;]
&gt;&gt;&gt; print(s.split(&#39;&#39;))
Traceback (most recent call last):
  File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;
ValueError: empty separator
&gt;&gt;&gt; print(list(s))
[&#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;]
&gt;&gt;&gt; print(list(s1))
[&#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;, &#39; &#39;, &#39;w&#39;, &#39;o&#39;, &#39;r&#39;, &#39;l&#39;, &#39;d&#39;]
&gt;&gt;&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp = [0 for _ in range(size)] # 定义方式1
dp = [0] * n
dp[i] = 5 # 添加方式1（只有初始化长度足够，这样赋值才不会索引越界）  

res = list() # 定义方式2  
res.append(xxx) # 添加方式2（添加不能是res[i]=5的方式赋值）
res.pop() # 去除并返回最后一位
res[-1] # 查看最后一位

res[i] # 取   
res[::-1] # 反转

for word in wordList + [beginWord]: # 数组拼接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新数组（不会影响旧数组）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tmp = nums[:]
tmp = [num for num in nums]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二维数组" tabindex="-1"><a class="header-anchor" href="#二维数组" aria-hidden="true">#</a> 二维数组</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp = [[False] * n for _ in range(n)] # 定义  
dp[i][j] # 存取  
s[begin: begin+max_len] # 子串，左闭右开  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二维数组排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sorted不在原有数组上排序，生成新的数组  
array = sorted(array, key=lambda x:(x[0],x[1])) # 按第一个元素升序，再按第二个元素升序  
array = sorted(array, key=lambda x: (x[0], -x[1]))  # 按第一个元素升序，再按第二个元素降序  

sort在原有数组上排序    
array.sort(key=lambda x:(x[0],x[1]))  
array.sort(key=lambda x:(x[0],-x[1]))  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="栈-同数组一样" tabindex="-1"><a class="header-anchor" href="#栈-同数组一样" aria-hidden="true">#</a> 栈（同数组一样）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stack = list() # 定义  
stack.append(xxx) # 存  
stack.pop() # 取  
stack[-1] # 栈顶  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>q = collections.deque() # 定义
q = collections.deque([beginWord]) # 定义并初始化，传入一个数组进行初始化
q.pop() # 将队列最后一个出队 
q.popleft() # 将队列第一个出队  
q.append() # 入队 
q[0] # 第一个元素
q[-1] # 最后一个元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="堆-优先队列" tabindex="-1"><a class="header-anchor" href="#堆-优先队列" aria-hidden="true">#</a> 堆/优先队列</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>heap = [(-nums[i], i) for i in range(k)] # heap是一个列表
# 默认是最小堆，通过取相反数来模拟最大堆
# 这里每个元素是一个元组，其实堆的元素可以是任何可以比较大小的数据类型
# 元组怎么比较大小：先按元组的第一个元素（也就是下标0）来比较大小，只有第一个元素相等时，才会继续比较第二个元素，依此类推
heapq.heapify(heap) # 堆化，如果heap为空，则不需要这一步，直接使用heappush和heappop就好
heapq.heappush(heap, (-nums[i], i)) # 插入元素
heapq.heappop(heap) # 弹出堆顶
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h2><p>邻接表--用于构造图</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adj = defaultdict(list)
prerequisites = [[1,0],[2,0],[3,1],[3,2]]
for after, before in prerequisites:
    adj[before].append(after)
for value in adj[key]:
    pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use = set()
use.add(num)
use.remove(num)
use.pop()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="词典-哈希表" tabindex="-1"><a class="header-anchor" href="#词典-哈希表" aria-hidden="true">#</a> 词典/哈希表</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dict = {} # 定义  
dict = dict() # 定义
dict = {beginWord: 0}
dict[target-item] # 取值  
dict[item] = index # 赋值  
if target-item in dict # 判断key是否存在  
dict.pop(key) # 去除key方式一
del dict[key] # 去除key方式二

dict.keys() # 所有key

dict.values() # 所有value

for k,v in dict.items(): # 每一项kv
    print(k, v)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有序词典</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>orderedDict = collections.orderedDict()
orderedDict.move_to_end(key)
orderedDict.popitem(last=False)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 整除（得到整数）  
/ 除法（得到小数）  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="随机数" tabindex="-1"><a class="header-anchor" href="#随机数" aria-hidden="true">#</a> 随机数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>random.choice(list) #从列表中随机选择一项
random_index = random.randint(left, right) # 从[left，right]中随机选择一项（左闭右闭）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出" aria-hidden="true">#</a> 输入输出</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>line <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># # 一行一行读</span>

parts <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 拆分为多列</span>

nums <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 数字列表</span>

n<span class="token punctuation">,</span> m <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 多个数字变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
3 5
qwerd
1 x
2 n
0 u
4 8
drruubbf
4 i
3 i
2 e
1 r
1 4
wqqq
2 k
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> sys

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
   line <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token keyword">not</span> line<span class="token punctuation">:</span>
      <span class="token keyword">break</span>
   n<span class="token punctuation">,</span> m <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   s <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
   ops <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
   <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
      op_line <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
      index<span class="token punctuation">,</span> char <span class="token operator">=</span> op_line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
      ops<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> char<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;处理一个测试用例：&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;n =&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token string">&quot;m =&quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;字符串:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;操作:&quot;</span><span class="token punctuation">,</span> ops<span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
   <span class="token keyword">try</span><span class="token punctuation">:</span>
      line <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
      n<span class="token punctuation">,</span> m <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      s <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
      ops <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
         op_line <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
         index<span class="token punctuation">,</span> char <span class="token operator">=</span> op_line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
         ops<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> char<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;处理一个测试用例：&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;n =&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token string">&quot;m =&quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;字符串:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;操作:&quot;</span><span class="token punctuation">,</span> ops<span class="token punctuation">)</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
      <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="捕获异常" tabindex="-1"><a class="header-anchor" href="#捕获异常" aria-hidden="true">#</a> 捕获异常</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 有可能抛出异常的代码</span>
    result <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">0</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;发生错误：&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>每行结尾不用加；  
递归，方法前要加self.  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,69),l=[t];function d(c,p){return s(),a("div",null,l)}const r=n(i,[["render",d],["__file","python算法刷题语法快速恢复.html.vue"]]);export{r as default};
