---
icon: lightbulb
---
# Java Interview
## 八股
### JVM
JVM内存模型

Double与double在JVM里的存储细节

基本数据类型在栈

包装类在堆

年轻代怎么调大

JVM类加载过程

强引用弱引用

GC

JVM调优

### JUC
#### 锁
悲观锁和乐观锁

公平锁和非公平锁

synchronized

synchorined与RentrateLock的区别

synchorined在JDK1.6之后做了哪些改动

synchornized的源码

#### 线程池
多线程经常使用吗，在项目中怎么使用的，线程池在项目中怎么用的？线程池用到什么地方？用到线程池的场景

为什么用线程池，而不是单个线程

线程池配置及拒绝策略

线程池的参数，你怎么配置参数

线程池参数及流程

线程池最佳实践
如何配置线程池参数，要你配你怎么配

（线程池：IO密集型下适用，阻塞率等待时间长的，来提高用户代码的CPU利用率，提高吞吐量，吞吐量即业务的CPU利用率；计算密集型下单线程更适合）

#### AQS
RentrateLock底层AQS是怎么实现的吗

了解AQS吗

#### ThreadLocal
应用场景

用public static修饰的原因

有状态&无状态（哥哥提出的）

#### 有5个线程，等到全部执行完，再往下执行，JUC包里哪个可以实现
CountDownLatch

### MySQL
索引

什么字段适合加索引

索引优化的explain命令有哪些参数
怎么看用了什么索引

索引，B+树 vs B树，为什么不在每一列上加索引，适合在哪些列上加索引

MySQL性能优化/调优

where 条件a or 条件b ，a和b都有索引, 怎么查的，用了哪个索引 

 普通索引如何查一个数

聚簇索引与非聚簇索引

联合索引，abc,怎样会用上索引-->最左匹配原则

索引失效的情况

存储引擎

innoDB底层是怎么实现的，为什么不用b树

MySQL存储数据的结构是怎样的？按页存储，16k，多页又会出现什么情况

事务

事务的隔离级别，分别会出现什么问题

Mysql怎么解决脏读 答：MVCC

MySQL和Oracle的事务隔离级别（这个之前面试有答反哦）

数据库事务4个特征，隔离级别，可重复读与幻读

MVCC是怎么实现的

SQL

SQL：employee表有id,name字段，name有重复，删掉重复名字的，每个名字只保留一条
oracle的分页：取oracle表的2-9行，rownum &lt; &gt;能直接大于2小于9吗，还是子查询里小于9，然后外面嵌套查询大于2，大于和小于有先后顺序吗，哪个先，哪个后

数据量大

MySQL数据有几亿，会出现什么问题
为什么读写慢

数据库数量太大，怎么处理

mysql 一条语句是怎么执行的

### Redis
缓存雪崩

redis应用场景

RedisLock底层（命令再往深）怎么实现的

如何保证redis的可用性

Redis的集群模式有哪些（哨兵？主从？是两种）

为什么要做缓存? 我的回答：内存操作，减少IO

Redis用过哪些数据结构，知道hash底层是怎么实现的吗
Redis 存储数据结构

list数据结构是双向链表还是单向链表，我在项目中用什么数据结构，为什么要用hash存对象

Redislock 分布式锁的实现原理

redis分布式锁：在修改支付状态前卡住了，没修改成功，并且锁失效了，其他请求会进来，那么也会到修改支付状态这步，会重复吗   
答：修改支付状态（如果支付状态是未支付，才去修改，update where status is nopay，查询状态和修改状态是原子性的）肯定是不会同时，所以总是只有一个能成功，其他的无法修改成功

超时hystrix熔断，释放锁，锁的过期时间>hystrix超时时间，只当程序执行完，不管成功还是失败，都去释放锁

SETNX vs SET   乐观锁 vs 悲观锁

Redis与DB数据一致性如何保证(结合项目讲，定时任务不考虑强一致 （着重）

redis和mysql的事务的区别

会不会出现一个写的时候另一个读？不会，Redis是单线程，不会同时进行
红锁是怎么实现的？一半以上加了锁才会显示加锁成功
那解锁呢？
锁有设置过期时间，代码执行到一半，锁过期了怎么处理？ttl给锁续期

### MQ
MQ选型

为什么选用RocketMQ

RabbitMQ为什么慢

rocketMQ顺序消息怎么实现的

rocketMQ本地只会起一个线程消费吗，一个消费者的话，会起多个线程吗，是单线程消费还是多线程消费

开源的RocketMQ延迟消息为什么只有特定的那几个，为什么不全都有？

rocketmq 顺序消息实现、事务消息

RocketMQ的底层实现
还了解其他MQ吗？了解kafka   有什么区别？kafka性能好，功能单一，多用于日志和大数据；RocketMQ功能全面，性能稍次kafka，常用于电商场景，几乎适用于全场景。
存在一些什么问题？一致性，丢失，幂等，顺序，高可用的问题
什么情况导致消息丢失？怎么处理呢？
1.生产者发送消息到MQ（eg.网络抖动）-->ACK机制/事务消息
2.主从复制-->同步复制
3.没有落盘-->同步落盘
4.消费消息（eg.MQ发送消息到了消费者，消费者先回复MQ接收成功，后处理本地事务，但失败了，这条消息丢了，MQ也空了）-->消费者先执行本地事务，完成了再ACK向MQ说接收成功了

### Spring
#### Spring
AOP

加挡板过程，原理

AOP的使用
AOP的原理-->动态代理 2种区别

AOP是在初始化的哪一步

IOC

IoC DI ，spring对象创建托管，生命周期原理(spring 底层原理，怎么用代理的方式创建对象，销毁对象

反射（电费优化策略模式中的反射）不会与SpringBean管理冲突吗

https://zhuanlan.zhihu.com/p/264783307

SpringBean的生命周期，它有几个生命周期

#### 设计模式
spring相关的设计模式

#### SpringBoot
##### 注解
springboot注解：启动类注解封装了哪些子注解

注解Configuration

配置类里有方法A和方法B，A、B方法上都有Bean注解，A方法new了一个对象返回，B方法调用了A方法并返回，此时会产生两个A对象的Bean吗

Mybatis注解MapperScan

项目中有没有用到事务，怎么实现的，有没有遇到@Transactional失效的情况，rollback失败的，有没有自测过，构造异常来看能不能回滚，几张表的更改是否一致

#### SpringCloud
架构情况

Hystrix两种模式的区别，限流降级实现

注册中心用的什么？答：Eureka
Eureka挂了还能正常调用吗？
Eureka会缓存实例信息到客户端，那Eureka挂了，可以用本地缓存的信息调用吗？

服务通信

###### RPC
http性能为什么没有rpc好？网络有7层协议，rpc是更底层的
RPC是属于哪种协议呢？

有了解过RPC框架吗？RPC和SpringCloud有什么区别呢？

dubbo

服务间调用组件用的啥，有没有用过dubbo

spring cloud vs dubbo

###### HTTP
Restful了解吗

模块之间调用用的什么？ 答：RocketMQ和FeighClient

Feign client具体调用方式    ：http方式   (阿里关注spring cloud各组件原理)  

### 分布式
分布式事务

分布式事务的实现



![](images/java_interview_001.png)

幂等

消息幂等的解决方案 1.分布式事务 2.数据库cas操作 3.还有其他方法吗

幂等性问题的场景？ACK机制重试      如何解决？分布式锁

分布式锁

不用分布式锁，Mysql本身是不是也可做到这个事情？ 用数据库的cas操作

分布式锁的实现 1.redis 2.zookeeper



![](images/java_interview_002.png)

CAP理论

raft协议

定时任务

定时任务的实现方式

补偿的一些逻辑，是写在定时任务的项目里，还是其他项目里？
会调度几台机器呢
（分布式定时任务：quartz，xxl-job，elasticjob）延时队列 ->堆

定时任务是用的啥？SpringTask  
定时任务是单点的还是分布式的？ 分布式的，用redis做分布式锁，value是节点ip

### Java基础
#### 集合
HashMap的底层原理

HashMap原理？底层数组+链表+红黑树，重写hashcode和equals，hashcode找到数组下标，equals对链表进行比对，如果存在则覆盖。
为什么要转成红黑树？性能
链表和红黑树的时间复杂度是多少？链表O(n),红黑树O(logn)
红黑树的原理？一些规则。
红黑树如何保证平衡的？左旋和右旋+着色（插入的节点先是红色，然后变更父子节点的颜色来达到刚才说的规则）
了解2-3树吗，其实红黑树是从2-3树演变过来的

java集合框架

hashset去重原理

解决哈希冲突的方式有哪些

#### 基础
Double为什么会丢失精度

科学计数法存储

float 符号位(1bit) 指数(8 bit) 尾数(23 bit)

double 符号位(1bit) 指数(11 bit) 尾数(52 bit)

BigDecimal为什么可以保证运算精确？字符数组

### linux命令
修改文件只读为可编辑；读日志的命令

grep如何查不包括xxx

### 操作系统
什么是进程

什么是协程

进程间通信方式

### 网络
select poll epoll
epoll文件是用的什么数据结构

TCP UDP的区别

### 其他
cpu问题怎么排查

线上接口访问着一下子慢了，怎么排查

如何确定慢在哪一步

安全

安全方面做了哪些措施？token校验，金额校验   针对反编译接口，有没有保护的机制，比如接口的鉴权校验

支付风控

### 个人梳理
#### 生命周期
类加载过程/类的生命周期

Spring Bean的生命周期

线程的生命周期/线程的状态

线程池的生命周期/线程池的状态

#### 调优
JVM调优

MySQL调优

线程池调优



![](images/java_interview_003.png)

#### 源码
##### 1 并发包，很值得看看
###### ConcurrentHashMap
核心方法（和HashMap完全一致）

put(k,v)

做插入操作时，首先进入乐观锁，
然后，在乐观锁中判断容器是否初始化，
如果没初始化则初始化容器，
如果已经初始化，则判断该hash位置的节点是否为空，如果为空，则通过CAS操作进行插入。
如果该节点不为空，再判断容器是否在扩容中，如果在扩容，则帮助其扩容。
如果没有扩容，则进行最后一步，先加synchronized锁，然后在链表或红黑树中查找是否存在，决定做覆盖操作还是插入操作。
循环结束，插入完毕。

总结：在链表或红黑树上查找之前，都是CAS锁；在链表或红黑树上查找时，才加synchronized锁

get(k)

不加锁，由volatile保证的值是最新的

remove(k)

数据结构
```
volatile Node<K,V>[] table;
```
用volatile修饰

###### CopyOnWriteArrayList
读写分离的思想，适用于读多写少且不要求强一致性的场景

优

并发读而不需加锁

缺

内存占用问题

写时复制，会有两份对象内存

数据不一致问题

只能保证最终一致性，不能保证强一致性

数据结构

volatile Object[] array;

用volatile修饰

构造函数

CopyOnWriteArrayList()

array = new Object[0]

核心方法（和ArrayList完全一致）

和ArrayList的区别

1.有多少元素，容量就是多大，没有空闲的容量

2.写操作加了synchronized锁

写操作加synchronized锁，复制新的容器进行增删改，完成后引用指向新容器

add(Object)
add(index,Object)

remove(index)
remove(Object)

set(index,Object)

读操作不加锁

get(index)

##### 2 面试常问的集合之类的
/算法题涉及到的集合类
###### ArrayList
动态数组，增删慢，查询快

遍历方式：实现了RandomAccess，可以随机访问，遍历推荐用普通for循环

数据结构

int size;

Object[] elementData;

参数

int DEFAULT_CAPACITY = 10;

构造函数

ArrayList()

在构造函数时还是空数组，初始大小是在第一次add()时扩容到默认容量10

ArrayList(capacity)

初始大小为设置的容量capacity

核心方法

add(Object)
add(index,Object)

add(E)是在尾部添加，先看受否需要扩容完成扩容，在尾部进行添加
add(index,E)是在任意下标位置添加，先看是否需要扩容完成扩容，然后将后面元素往后移一位，在下标位置进行添加

ArrayList的核心是基于数组的动态扩容机制

扩容的关键方法grow(capacity)
```
private void grow(int minCapacity) {
        // overflow-conscious code
        int oldCapacity = elementData.length;  //将扩充前的elementData大小给oldCapacity
        int newCapacity = oldCapacity + (oldCapacity >> 1);//newCapacity就是1.5倍的oldCapacity
        if (newCapacity - minCapacity < 0)//这句话就是适应于elementData就空数组的时候，length=0，那么oldCapacity=0，newCapacity=0，所以这个判断成立，在这里就是真正的初始化elementData的大小了，就是为10.前面的工作都是准备工作。
            newCapacity = minCapacity;
        if (newCapacity - MAX_ARRAY_SIZE > 0)//如果newCapacity超过了最大的容量限制，就调用hugeCapacity，也就是将能给的最大值给newCapacity
            newCapacity = hugeCapacity(minCapacity);
        // minCapacity is usually close to size, so this is a win:
    //新的容量大小已经确定好了，就copy数组，改变容量大小咯。（这步是真正的扩容操作，以上的都在计算要扩容多少）
        elementData = Arrays.copyOf(elementData, newCapacity);
    }
```
总结

除了初始为空数组和超过最大值的情况，正常情况下会扩容1.5倍
int newCapacity = oldCapacity + (oldCapacity >> 1);

remove(index)
remove(Object)

remove(index)根据索引删除，将后面的都往前移一位
remove(Object)根据内容删除，先遍历找到下标，然后将后面的都往前移一位

set(index,Object)

检查索引是否越界，用新值替换数组对应下标的旧值
elementData[index] = element

get(index)

检查索引是否越界，返回数组对应下标的值
return (E) elementData[index]

###### LinkedList
双向链表，增删快，查询慢

通过一个Node内部类实现的这种链表结构

![](images/java_interview_004.png)

实现了List和Deque接口，能够当作链表、队列、栈、双端队列来使用

遍历方式：iterator或foreach(即增强for循环，其原理就是iterator)

数据结构
```
int size = 0;

Node<E> first;

private static class Node<E> {
        E item;
        Node<E> next;
        Node<E> prev;
}

Node<E> last;
```
构造函数

LinkedList()

核心方法

总结：如果指定index，可以确定从前遍历查找还是从后遍历查找；如果没有涉及index，那都从前遍历查找

add(Object)
add(index,Object)

add(Object)添加到尾部
add(index,Object)添加到任意位置，先通过index找到结点Node，和get(index)方式一样，然后在这个Node之前添加新结点

remove(Object)
remove(index)

remove(Object)从头结点顺序查找，找到后进行删除
remove(index)和get(index)方式一样找到Node，然后进行删除

get(index)

1.看index是在链表的前一半还是后一半（最多只查一半）
2.如果在前一半，从头结点开始顺序查找
2.如果在后一半，从尾结点开始顺序查找

indexOf(Object)

无法知道是在前一半还是后一半，所以从头结点顺序查找

###### HashMap
数据结构

int size;

键值对个数

int threshold;

threshold=capacity * load factor，是扩容的阈值，当size >= threshold时，达到了扩容的条件之一

扩容条件至二：put一个元素时，对应数组位置上有元素（如果没有元素，则本次put不进行扩容操作）

float loadFactor;

计算HashMap的实时装载因子的方法为：size/capacity

用来衡量HashMap满的程度，决定什么时候扩容

loadFactor越趋近于1，那么数组中存放的数据(entry)也就越多，也就越密，也就是会让链表的长度增加，查找的性能会低下
loadFactor越趋近于0，数据越稀疏，会浪费空间

默认为0.75，一般情况下不需要更改它
```
Node<K,V>[] table;

static class Node<K,V> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;
}
```
数组的长度即capacity，默认值为16，一般第一次扩容到64，之后是2倍

数组的长度总是2的幂

参数

int DEFAULT_INITIAL_CAPACITY = 1 << 4;

默认初始容量16

int MAXIMUM_CAPACITY = 1 << 30;

float DEFAULT_LOAD_FACTOR = 0.75f;

默认加载因子0.75，f是float的意思，因为直接写0.75默认是double类型

int TREEIFY_THRESHOLD = 8;

链表转红黑树的阈值8

int UNTREEIFY_THRESHOLD = 6;

红黑树转链表的阈值6

int MIN_TREEIFY_CAPACITY = 64;

构造函数
(操作仅仅是变量赋值，还没有初始化容器)

HashMap()

默认的初始容量和加载因子

HashMap(capacity)

指定的初始容量，默认的加载因子

核心方法

put(k,v)

1.判断是否要扩容
第一次put时，进行初始化容器，初始化操作即调用resize()扩容操作

扩容resize()

会遍历所有的键值对进行重新hash分配，是非常耗时的

2.通过hash找到数组下标

(n - 1) & hash，当容量n为2的幂时，等价于hash%n，即将hash取模，确保在有效下标范围内，避免下标越界

3.通过equals比对数组下标位置处以及链表或红黑树的key

4.如果找到了，进行替换；没找到进行添加

如果数组下标处为空，放数组下标处

如果是链表，放链表末尾

如果是红黑树，放树中

get(k)

1.通过hash找到数组下标

2.通过equals比对数组下标位置处以及链表或红黑树的key

remove(k)

找到后删除

###### LinkedHashMap
和HashMap的唯一区别：有序

用双向链表维护了迭代顺序，该迭代顺序可以是插入顺序或者是访问顺序

和HashMap操作数据的方法完全一样，无非就是细节上有一些的不同罢了

底层实现

LinkedHashMap可以认为是HashMap+LinkedList

它既使用HashMap操作数据结构，又使用LinkedList维护插入元素的先后顺序

数据结构
```
Entry<K,V> head;

static class Node<K,V> implements Map.Entry<K,V> {
        /*这是和HashMap一样的*/
        final int hash;
        final K key;
        V value;
        Node<K,V> next;
        /*这个是用来维护顺序的*/
        Entry<K,V> before, after;
}

Entry<K,V> tail;
```
默认链表新访问的放尾部，越老的访问越靠近头节点

final boolean accessOrder;

迭代顺序，true为访问顺序，即最近最少使用顺序LRU，false为插入顺序

构造函数

public LinkedHashMap(int initialCapacity, float loadFactor,
 boolean accessOrder) {
    /*父类即HashMap的构造函数*/
    super(initialCapacity, loadFactor);
    /*指定迭代顺序*/
    this.accessOrder = accessOrder;
}

核心方法（和HashMap完全一致）

方法都是HashMap中的，这里重写了一些钩子函数

put(k,v)

已存在进行更新

afterNodeAccess(node);

维护访问或更新操作后的双向链表

把目标节点从当前位置删除，添加到链表尾部

不存在进行插入

维护插入操作后的双向链表

linkNodeAtEnd(p);

将目标节点添加到链表尾部

afterNodeInsertion(boolean)

默认不生效的

如果重写boolean removeEldestEntry(eldest)，例如当容量满时删掉最老的那一个，那么当该方法为true时，会删掉链表的头结点，实现LRU

get(k)

afterNodeAccess(node);

维护访问或更新操作后的双向链表

把目标节点从当前位置删除，添加到链表尾部

remove(k)

afterNodeRemoval(node);

维护删除操作后的双向链表

把目标节点从当前位置删除

###### TreeMap
有序，按key排序，可以通过比较器指定排序方式

底层实现

红黑树

红黑树结构天然支持排序，默认情况下通过Key值的自然顺序进行排序

数据结构
```
Entry<K,V> root;

static final class Entry<K,V> implements Map.Entry<K,V> {
        K key;
        V value;
        Entry<K,V> left;
        Entry<K,V> right;
        Entry<K,V> parent;
        boolean color = BLACK;
}

int size = 0;

final Comparator<? super K> comparator;
```
构造函数

TreeMap()

默认顺序
```
TreeMap(Comparator<? super K> comparator)
```
指定排序顺序

核心方法（和HashMap完全一致）

查

get(k)

从根节点开始对比，决定往左子树还是右子树走

增改

put(k,v)

1.第一次put会创建红黑树并赋值给root

2.寻找key，和get(k)一致

3.找到了，更新value

4.没找到，插入到最后遍历的节点下；调整实现平衡

删

remove(k)

1.先找到待删除节点

2.删除该节点
（如何删除树节点，算法题有考察到）

1）删除的是根节点，则直接将根节点置为null;
2）待删除节点的左右子节点都为null，删除时将该节点置为null;
3）待删除节点的左右子节点有一个有值，则用有值的节点替换该节点即可；
4）待删除节点的左右子节点都不为null，则找前驱或者后继，将前驱或者后继的值复制到该节点中，然后删除前驱或者后继（前驱：左子树中值最大的节点，后继：右子树中值最小的节点）

###### HashSet
底层是HashMap，只用key，不用value

######  LinkedHashSet
底层是LinkedHashSet，只用key，不用value

###### TreeSet
底层是TreeMap，只用key，不用value

##### 3 spring 系列
IOC

AOP

## 算法
### 链表
算法题：k个一组翻转链表，最后不够k个的也要翻转

算法题：链表翻转

### 动态规划
算法题：走台阶，每步走1步或2步，有几种走法

算法题2：走台阶，左脚走1步，右脚走1步或2步，有几种走法

### 栈
算法题：最大值栈。实现一个pop,push,max均为O(1)的栈。（腾讯校招）

### 树
算法题：二叉树层序遍历

### 排序
快排怎么实现的，时间复杂度是多少？双指针那样实现，O(nlogn)
排序算法中其他O(nlogn)的算法？归并排序，堆排序
实际应用场景中为什么快排用的是最多的？交换次数比较少，时间复杂度虽然一样，但快排的常数比较小
最差O(n^2),平均O(nlogn)，快排可以不用其他空间，空间复杂度可为O(1)
一堆数里取最大的10个数？用堆，优先队列来做。 先随机取出N个数中的K个数，将这N个数构造为小顶堆，那么堆顶的数肯定就是这K个数中最小的数了，然后再将剩下的N-K个数与堆顶进行比较，如果大于堆顶，那么说明该数有机会成为TopK，就更新堆顶为该数，此时由于小顶堆的性质可能被破坏，就还需要调整堆 
时间复杂度为多少？
 首先需要对K个元素进行建堆，时间复杂度为O(k)，然后要遍历数组,最坏的情况是，每个元素都与堆顶比较并排序，需要堆化n次 所以是O(nlog(k))，因此总复杂度是O(k+nlog(k));

算法题：手写归并排序

## 项目
### 项目介绍
自己做一个项目，作为讲解的，把所有技术栈都融合进去，有技术深度和业务深度

项目在一定程度上引导面试官提问，把问题引导到你熟悉的地方

项目中最大的技术挑战

面试项目准备：

说一个你做过的最自豪的项目，或是最近做过的一个项目。

说一个你解决过的最难的技术问题，或是最有技术含量的问题。

说一个你最痛苦的项目，或最艰难的项目。

说一个犯过的最大的技术错误，或是引发的技术故障。

对于上面这四个问题：

第一个问题，主要是想看看你过去工作中做过的最高级的事是什么，还有你的兴趣点和兴奋点是什么；

第二和第三个问题，主要是想看看你解决难题的能力，以及面对压力和困难时的心态；

第四个问题，主要是想了解一下你面对错误时的态度，还要了解你是否会对错误有所总结和改进。

要有框架。

讲故事要学会使用 STAR 。

Situation - 在什么样的环境和背景下，

Task - 你要干什么样的事，

Action - 你采取了什么样的行动和努力，

Result - 最终得到了什么样的效果。

这是整个语言组织的框架，不要冗长啰嗦。要有细节。没有细节的故事听起来就很假，所以，其中要有很多细节。因为是技术方面的，所以，一定要有很多技术细节。要有感情。讲这些故事一定要带感情。要让面试官感受到你的热情、骄傲、坚韧和顽强。一定要是真实的，只有真实的事才会有真实的感情。要有思考。只有细节和故事还不够，还要有自己的思考和得失总结，以及后续的改进。这不是你能临时准备出来的，工夫都是花在平时的。而训练这方面能力的最好方式就是在工作中写文档 ，在工作之余写博客。只有写得多了，写得好了，你这样的能力才能训练出来。

### 国网项目
项目有多大的并发量

并发量：日活

看不同的接口，高频的接口，平均在2000多qps，支付每秒几十笔的样子（参考得物的回答）

项目中RocketMQ应用场景

项目里RedisLock设置的过期时间是多长，超时了怎么处理

生产部署了几台机器，定时任务部署了多台，可在多台上同时执行吗？

什么样的情况需要做补偿呢？
对内的业务，两个操作我们都可控，我们可以用分布式事务使两个操作保持一致性  
对外的业务，自己需要有回查机制。支付机构进行支付，退款的回调，我们可能接收失败，自己主动去支付机构回查状态。

用工厂模式重构下单？  策略模式，交给spring管理的

redis的key设置

团队有多少人？6人
产品和测试是多个中心共用的吗？3个中心共用产品和测试

不用分布式锁，Mysql本身是不是也可做到这个事情？ 用数据库的cas操作
如果网络抖动中途失败会重试吗？是有支付结果查询的定时任务会搂付款中的状态去回查支付宝的状态

对账，按天对的，凌晨2点，保证数据完整性

技术栈与使用场景

##### 基础设施
###### 数据库
MySQL

数据库连接池

Druid

数据库分库分表

ShardingJDBC

###### 缓存
Redis

redis客户端框架

redisson

###### 消息中间件
RocketMQ

##### 微服务架构
###### 基础框架
SpringBoot

###### MVC框架
接口规范

RESTful

SpringMVC

###### 持久框架
ORM框架

Mybatis

Mybatis增强工具

Mybatis-Plus

数据库代码生辰工具

MybatisGenerator

###### 负载均衡
nginx

###### 定时任务
xxl-job

###### SpringCloud
注册中心

Eureka

###### SpringCloudAlibaba
注册中心/配置中心

Nacos

分布式事务框架

Seata

19年1月开源

限流框架

Sentinel

RPC框架

Dubbo

##### CI/CD
###### 自动化部署工具
Jenkins

###### 项目构建框架
Maven

###### 容器技术
Docker

###### 容器集群管理平台
K8S

##### 其他
###### 日志处理
Log4j

###### 集合框架
guava

###### Java语言增强库/简化对象封装工具
Lombok

###### 安全框架/认证和授权框架
Spring Security

Spring Security Oauth2

###### 认证/JWT登陆支持
JWT

###### 文档生成工具
Swagger UI

架构图

系统架构

###### 架构选型图
![](images/java_interview_005.png)

微服务架构

![](images/java_interview_006.png)



![](images/java_interview_007.png)



![](images/java_interview_008.png)



![](images/java_interview_009.png)



![](images/java_interview_010.png)



![](images/java_interview_011.png)

业务架构

项目组织结构

## 其他
自我介绍

不要扯太多不相关的过往，主要说项目和自己的优势

我在技术方面做了什么，看了哪些框架和源码

我有自己做出了什么项目，产品

平时怎么学习技术

自信条理

平时会看一些框架或JDK源码吗？问有读过哪些源码？平时什么途径学习的，怎么学习的？

你有什么要问我的吗



![](images/java_interview_012.png)

小组内会定期组织一些技术分享或code review吗（技术氛围）

如果我有幸入职，我还需要了解些什么技术（技术栈）

我们公司有自研Chatgpt吗，可以用的chatgpt版本是多少

公司的网络可以上Google和Github网站吗

如果我有幸入职，带我的人（给我分配任务的人）是您吗。如果不是，能冒昧问下他大概有多少年的工作经验吗

您觉得公司的文化怎么样，您最喜欢公司的哪一点

简历

简历不追求多，而追求精，突出亮点，每一点准备好问到你不会，一定要特别熟悉

把它看成广告位

打招呼语

您好，我有4年+的Java开发经验，对JVM、JUC、Spring、MySQL、Redis、MQ，以及微服务和分布式都有经验和积累。我非常希望能够得到这个岗位的面试机会，如果岗位还有空缺，希望能够得到机会。

