import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c as l,a as e,b as r,e as t,f as d}from"./app-rvE1EVAc.js";const o={},p=e("h1",{id:"javascript",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#javascript","aria-hidden":"true"},"#"),r(" JavaScript")],-1),c=e("br",null,null,-1),b={href:"https://github.com/Asabeneh/30-Days-Of-JavaScript",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),m={href:"https://github.com/biaochenxuying/blog",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),h={href:"https://github.com/course-dasheng/fe-algorithm",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),_=d(`<p>1、注释 <br></p><p>html注释： <!-- 这是一个注释 --><br> css注释： /<em>这是个注释</em>/ <br> javascript注释：行注释// 和块注释/**/ <br></p><p>2、数据类型 <br></p><p>不区分整数和浮点数，统一用Number表示 <br></p><p>3、等于 <br></p><p>第一种是<mark>比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果； <br> 第二种是</mark>=比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。 <br> _不要_使用<mark>比较，始终坚持使用</mark>=比较 <br></p><p>4、NaN <br></p><p>这个特殊的Number与所有其他值都不相等，包括它自己 <br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NaN === NaN; // 返回false &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>唯一能判断NaN的方法是通过isNaN()函数： <br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>isNaN(NaN); // 返回true &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、浮点数比较 <br></p><p>浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值： <br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.abs(1 / 3 - (1 - 2 / 3)) &lt; 0.0000001; // true &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、null和undefined <br></p><p>JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。 <br></p><p>7、变量 <br></p><p>动态语言和静态语言：这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错 <br> javascript是动态语言，变量都不用申明类型 <br></p><p>var：申明一般变量。申明在函数内，作用域是函数内部，就算申明在块级内（eg.for循环），作用域也是在函数内部，而不局限于块级内部；申明在函数外，作用域是全局。 <br> let：申明块级作用域的变量 <br> const：申明常量（是块级作用域的） <br></p><p>尽可能避免使用全局变量 <br> 代码质量可以用全局变量来考量，数量越多越糟。 <br></p><p>8、字符串 <br></p><p>普通字符串：单引号&#39;...&#39;或双引号&quot;...&quot; <br> 多行字符串 ：反引号<code>...</code> <br> 模板字符串（ES6新增）： <br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = &#39;小明&#39;; &lt;br/&gt;
var age = 20; &lt;br/&gt;
var message = \`你好, \${name}, 你今年\${age}岁了!\`; &lt;br/&gt;
alert(message); &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、全局对象 <br></p><p>JavaScript默认有一个全局对象window，全局作用域的变量（函数也视为变量）都被绑定到window。alert()函数其实也是window的一个属性。 <br></p><p>10、解构赋值——一次性赋值多个变量 <br></p><p>11、规范 <br></p><p>构造函数首字母应当大写，而普通函数首字母应当小写 <br></p><p>12、方法 <br></p><p>声明公共方法时使用基于原型的方法，以节约内存和降低实例化的开销。生成私有方法时用在类定义时内部声明的方式，这样其他实例不会访问到这个方法。（在原型里，方法只会创建一次，所有实例共享。在定义类的内部结构时声明，每个类的实例都会有一份该方法的副本。） <br></p>`,30);function f(x,N){const a=s("ExternalLinkIcon");return i(),l("div",null,[p,e("p",null,[r("github "),c,e("a",b,[r("https://github.com/Asabeneh/30-Days-Of-JavaScript"),t(a)]),r(),u,e("a",m,[r("https://github.com/biaochenxuying/blog"),t(a)]),r(),v,e("a",h,[r("https://github.com/course-dasheng/fe-algorithm"),t(a)]),r(),g]),_])}const J=n(o,[["render",f],["__file","JavaScript.html.vue"]]);export{J as default};