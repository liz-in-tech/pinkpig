---
icon: lightbulb
---
# Python算法刷题语法快速恢复
## 关键词
```
and 与  
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
```
### == 与 is
- ==
    - 除了**自定义对象**和**None**，==可以比较任何数据类型的值相等
        - 数字
        - 字符/字符串
        - list/set/dict/tuple/...
    - 原理
        - ==其实调用的是`__eq__`方法，内置类型都实现了自己的`__eq__`
- is
    - None用is进行比较，不要用"== None"
    - 自定义对象
        - 用is就是比较地址
        - 用==如果写了`__eq__`，则比较值，否则==等同于is，在比较对象的地址

## 选择
```
if:
    pass
elif:
    pass
else:
    pass
if nums[start] <= target < nums[mid]: # 两边同时比较
n1 = int(num1[i]) if i >= 0 else 0  
return True if len(stack) == 0 else False  
if root in (None, p, q): return root  
```

## 循环
```
while xxx:  
for item in nums:  
for index, item in enumerate(nums):   
for i in range(n)： # 从0到（n-1）  
for i in range(1, len(prices)): # 从1到（len-1）  
for _ in range(len(q)): # 如果不需要用到遍历的值，用“_”
for x, y in [(row - 1, col), (row + 1, col), (row, col - 1), (row, col + 1)]: # dfs地图遍历4个方向（方式一）
for x,y in [[-1,0],[1,0],[0,-1],[0,1]]: # dfs地图遍历4个方向（方式二）
    tmp_i = i + x
    tmp_j = j + y
```
上三角/下三角 （按长度大小进行迭代，从左下角或右上角开始）动态规划
```
for L in range(2,n+1): # 长度  
    for start in range(n): # 开始  
```

## 定义变量与赋值
```
res = "" # 1个变量  
n1,n2,n3 = len(a1),len(a2),0 # 多个变量  
slow = fast = head # 2个赋相同值
res = pre = end = ListNode(0, head) # 3个赋相同值
flag = True
flag = not flag # 切换flag
```
交换两个数
```
nums[left], nums[random_index] = nums[random_index], nums[left]
```

## main
```
if __name__=='__main__':
 pass
```

## 定义类
```
class LinkedNode:
  def __init__(self,value=0):
     self.value=value
     self.prev=None
     self.next=None
```

## 实例化对象
```
h = ListNode(0, None) # 前面不加new  
```

## 通用函数
```
len(xxx) # 求长度
max(xxx) # 求最大值
min(xxx) # 求最小值
```
排序
```
nums.sort() # 在原有数组上排序
sorted(nums) # 不改变原有数组，生成新的数组
```
数据类型转换
```
str(xxx) # 转字符串  
int(xxx) # 转整型
float(xxx) # 转浮点数
```

## 字符函数
```
c.lower() # 转小写  
c.isalnum() # 是字母或数字
c.isdigit() # 是数字
```

## 字符串
```
“00123”.lstrip(0) # 去掉前缀0  
s[::-1] # 反转
" ".join(nums) # 数组转字符串，在数字之间用空格分隔
```

分割字符串
- 用s.split()分割（分隔符默认是空格，也可以是其他字符，但不可以是空字符）
- 用list(s)分割，分割后为字符数组，用于将可迭代对象（iterable） 转换为列表

```
>>> s = "hello"
>>> print(s.split())
['hello']
>>> s1 = "hello world"
>>> print(s1.split())
['hello', 'world']
>>> print(s.split(''))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: empty separator
>>> print(list(s))
['h', 'e', 'l', 'l', 'o']
>>> print(list(s1))
['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
>>> 
```

## 数组
```
dp = [0 for _ in range(size)] # 定义方式1
dp = [0] * n
dp[i] = 5 # 添加方式1（只有初始化长度足够，这样赋值才不会索引越界）  

res = list() # 定义方式2  
res.append(xxx) # 添加方式2（添加不能是res[i]=5的方式赋值）
res.pop() # 去除并返回最后一位
res[-1] # 查看最后一位

res[i] # 取   
res[::-1] # 反转

for word in wordList + [beginWord]: # 数组拼接
```
新数组（不会影响旧数组）
```
tmp = nums[:]
tmp = [num for num in nums]
```

## 二维数组
```
dp = [[False] * n for _ in range(n)] # 定义  
dp[i][j] # 存取  
s[begin: begin+max_len] # 子串，左闭右开  
```
二维数组排序
```
sorted不在原有数组上排序，生成新的数组  
array = sorted(array, key=lambda x:(x[0],x[1])) # 按第一个元素升序，再按第二个元素升序  
array = sorted(array, key=lambda x: (x[0], -x[1]))  # 按第一个元素升序，再按第二个元素降序  

sort在原有数组上排序    
array.sort(key=lambda x:(x[0],x[1]))  
array.sort(key=lambda x:(x[0],-x[1]))  
```

## 栈（同数组一样）
```
stack = list() # 定义  
stack.append(xxx) # 存  
stack.pop() # 取  
stack[-1] # 栈顶  
```

## 队列
```
q = collections.deque() # 定义
q = collections.deque([beginWord]) # 定义并初始化，传入一个数组进行初始化
q.pop() # 将队列最后一个出队 
q.popleft() # 将队列第一个出队  
q.append() # 入队 
q[0] # 第一个元素
q[-1] # 最后一个元素
```

## 堆/优先队列
```
heap = [(-nums[i], i) for i in range(k)] # heap是一个列表
# 默认是最小堆，通过取相反数来模拟最大堆
# 这里每个元素是一个元组，其实堆的元素可以是任何可以比较大小的数据类型
# 元组怎么比较大小：先按元组的第一个元素（也就是下标0）来比较大小，只有第一个元素相等时，才会继续比较第二个元素，依此类推
heapq.heapify(heap) # 堆化，如果heap为空，则不需要这一步，直接使用heappush和heappop就好
heapq.heappush(heap, (-nums[i], i)) # 插入元素
heapq.heappop(heap) # 弹出堆顶
```

## 图
邻接表--用于构造图
```
adj = defaultdict(list)
prerequisites = [[1,0],[2,0],[3,1],[3,2]]
for after, before in prerequisites:
    adj[before].append(after)
for value in adj[key]:
    pass
```

## 集合
```
use = set()
use.add(num)
use.remove(num)
use.pop()
```

## 词典/哈希表
```
dict = {} # 定义  
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
```
有序词典
```
orderedDict = collections.orderedDict()
orderedDict.move_to_end(key)
orderedDict.popitem(last=False)
```

## 运算符
```
// 整除（得到整数）  
/ 除法（得到小数）  
```

## 随机数
```
random.choice(list) #从列表中随机选择一项
random_index = random.randint(left, right) # 从[left，right]中随机选择一项（左闭右闭）
```
## 输入输出
```python
line = sys.stdin.readline().strip() # # 一行一行读

parts = sys.stdin.readline().strip().split() # 拆分为多列

nums = list(map(int, sys.stdin.readline().strip().split())) # 数字列表

n, m = map(int, line.strip().split()) # 多个数字变量
```
```python
"""
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
"""

import sys

while True:
   line = sys.stdin.readline()
   if not line:
      break
   n, m = map(int, line.strip().split())
   s = sys.stdin.readline().strip()
   ops = []
   for _ in range(n):
      op_line = sys.stdin.readline().strip()
      index, char = op_line.split()
      ops.append((int(index), char))
   print("处理一个测试用例：")
   print("n =", n, "m =", m)
   print("字符串:", s)
   print("操作:", ops)
   print("---")
```
```python
import sys

while True:
   try:
      line = sys.stdin.readline()
      n, m = map(int, line.strip().split())
      s = sys.stdin.readline().strip()
      ops = []
      for _ in range(n):
         op_line = sys.stdin.readline().strip()
         index, char = op_line.split()
         ops.append((int(index), char))
      print("处理一个测试用例：")
      print("n =", n, "m =", m)
      print("字符串:", s)
      print("操作:", ops)
      print("---")
   except Exception as e:
      break
```
## 捕获异常
```python
try:
    # 有可能抛出异常的代码
    result = 10 / 0
except Exception as e:
    print("发生错误：", e)
```

## 细节
```
每行结尾不用加；  
递归，方法前要加self.  
```
