import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,d as m,f as t,a as s,b as a}from"./app-wOWrq7-J.js";const i="/pinkpig/assets/llama_advanced_batchnorm-oZwbHFKM.png",p="/pinkpig/assets/llama_advanced_layernorm-BPCA1zmS.png",c="/pinkpig/assets/llama_advanced_2d-OVpC_kWy.png",r="/pinkpig/assets/llama_advanced_3d-wNg3WFss.png",h="/pinkpig/assets/llama_advanced_norm-akPxCtpa.png",o={},g=t('<h1 id="llama进阶" tabindex="-1"><a class="header-anchor" href="#llama进阶" aria-hidden="true">#</a> Llama进阶</h1><ul><li><ol><li>LayerNorm(Layer Normalization，层归一化)</li></ol></li><li><ol start="2"><li>Attention</li></ol></li><li><ol start="3"><li>超参数</li></ol></li><li><ol start="4"><li>张量维度转换</li></ol></li><li><ol start="5"><li>可训练参数量</li></ol></li><li><ol start="6"><li>源码</li></ol></li></ul>',2),d=t('<p>苏剑林</p><p>https://spaces.ac.cn/archives/10091</p><h2 id="_1-layernorm-layer-normalization-层归一化" tabindex="-1"><a class="header-anchor" href="#_1-layernorm-layer-normalization-层归一化" aria-hidden="true">#</a> 1. LayerNorm(Layer Normalization，层归一化)</h2><h3 id="_1-1-layernorm的计算公式" tabindex="-1"><a class="header-anchor" href="#_1-1-layernorm的计算公式" aria-hidden="true">#</a> 1.1. LayerNorm的计算公式</h3><p>Normalization（归一化）要求：均值Mean为0，方差Deviation为1</p><p>计算步骤：</p><p>1.计算均值和方差</p><p>均值Mean：</p>',8),u=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"μ"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"N")]),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"N")]),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"}," \\mu = \\frac{1}{N} \\sum_{i=1}^{N} x_i ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"μ"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.106em","vertical-align":"-1.2777em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8283em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])])])],-1),y=s("p",null,"方差Deviation:",-1),v=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"σ"),s("mn",null,"2")]),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"N")]),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"N")]),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",null,"−"),s("mi",null,"μ"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"}," \\sigma^2 = \\frac{1}{N} \\sum_{i=1}^{N} (x_i - \\mu)^2 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.106em","vertical-align":"-1.2777em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8283em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"μ"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])])],-1),x=s("p",null,"2.归一化",-1),w=s("p",null,"使用计算出的均值和方差来归一化每个特征值。",-1),_=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"x"),s("mo",null,"^")]),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"−"),s("mi",null,"μ")]),s("msqrt",null,[s("mrow",null,[s("msup",null,[s("mi",null,"σ"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"ϵ")])])])]),s("annotation",{encoding:"application/x-tex"}," \\hat{x} = \\frac{x - \\mu}{\\sqrt{\\sigma^2 + \\epsilon}} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"x")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1903em","vertical-align":"-0.93em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2603em"}},[s("span",{style:{top:"-2.1966em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9134em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"ϵ")])]),s("span",{style:{top:"-2.8734em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1266em"}},[s("span")])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"μ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.93em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),b=s("p",null,[a("其中，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a("是原始输入值，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"x"),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"},"\\hat{x}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"x")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])])])])])])])]),a("是归一化后的值，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"ϵ")]),s("annotation",{encoding:"application/x-tex"},"\\epsilon")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"ϵ")])])]),a("是一个非常小的数值，防止除0的情况发生。")],-1),k=s("p",null,[a("归一化后的"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"x"),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"},"\\hat{x}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"x")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])])])])])])])]),a("达到了均值为0方差为1的要求")],-1),f=s("p",null,"3.缩放和平移",-1),M=s("p",null,[a("引入两个可学习参数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"γ")]),s("annotation",{encoding:"application/x-tex"},"\\gamma")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ")])])]),a("和"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"β")]),s("annotation",{encoding:"application/x-tex"},"\\beta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β")])])]),a("进行缩放和平移变换，以保持网络的表达能力。")],-1),N=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"γ"),s("mo",null,"∗"),s("mover",{accent:"true"},[s("mi",null,"x"),s("mo",null,"^")]),s("mo",null,"+"),s("mi",null,"β")]),s("annotation",{encoding:"application/x-tex"}," y = \\gamma * \\hat{x} + \\beta ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6597em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"x")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β")])])])])],-1),z=s("p",null,[a("其中，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y")]),s("annotation",{encoding:"application/x-tex"},"y")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])])]),a("表示LayerNorm的输出，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"γ")]),s("annotation",{encoding:"application/x-tex"},"\\gamma")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ")])])]),a("和"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"β")]),s("annotation",{encoding:"application/x-tex"},"\\beta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β")])])]),a("在训练过程中学习得到。")],-1),L=s("p",null,"缩放和平移操作不会影响均值和方差，所以依旧满足均值为0方差为1的要求",-1),q=s("p",null,"4.总的公式",-1),B=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"γ"),s("mo",null,"∗"),s("mfrac",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"−"),s("mi",null,"μ")]),s("msqrt",null,[s("mrow",null,[s("msup",null,[s("mi",null,"σ"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"ϵ")])])]),s("mo",null,"+"),s("mi",null,"β")]),s("annotation",{encoding:"application/x-tex"}," y = \\gamma * \\frac{x - \\mu}{ \\sqrt{\\sigma^2 + \\epsilon}} + \\beta ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6597em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1903em","vertical-align":"-0.93em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2603em"}},[s("span",{style:{top:"-2.1966em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9134em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"ϵ")])]),s("span",{style:{top:"-2.8734em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1266em"}},[s("span")])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"μ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.93em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β")])])])])],-1),H=t('<h3 id="_1-2-batchnorm和layernorm" tabindex="-1"><a class="header-anchor" href="#_1-2-batchnorm和layernorm" aria-hidden="true">#</a> 1.2. BatchNorm和LayerNorm</h3><p>思考：要在哪一维度上做Normalization，为什么</p><p>LayerNorm与BatchNorm的区别是在哪一维度上进行归一化。</p><p>LayerNorm是在特征维度进行归一化，而BatchNorm是在批次维度上，如下图BatchNorm1D和LayerNorm的示例所示。</p><figure><img src="'+i+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+p+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>适用场景：</p><p>LayerNorm与BatchNorm的适用场景略有不同。</p><p>LayerNorm通常用于循环神经网络（RNNs）以及Transformer架构中, 不要求批量数据大小固定，可以对小批量数据（或在线学习中的单个样本）进行高效的归一化，更适用于NLP领域。</p><p>BatchNorm通常用在卷积神经网络（CNNs）中，并且适用于处理大小固定的批量数据，比较适合训练大规模数据集，更适用于CV领域。</p><h3 id="_1-3-normalization的几何意义" tabindex="-1"><a class="header-anchor" href="#_1-3-normalization的几何意义" aria-hidden="true">#</a> 1.3. Normalization的几何意义</h3><figure><img src="'+c+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+r+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="_1-4-rmsnorm" tabindex="-1"><a class="header-anchor" href="#_1-4-rmsnorm" aria-hidden="true">#</a> 1.4. RMSNorm</h3><h3 id="_1-4-normalization对attention的重要性" tabindex="-1"><a class="header-anchor" href="#_1-4-normalization对attention的重要性" aria-hidden="true">#</a> 1.4. Normalization对Attention的重要性</h3><p>思考：Normalization要在计算层(attention和mlp)的前面还是后面，为什么</p><p>参考论文：https://arxiv.org/pdf/2305.02582</p>',17),A=s("p",null,[a("上述论文将LayerNorm分解为两个几何操作：1）将输入向量投影到与向量[1,1,...,1]正交的子空间上，2）以及将投影后的向量缩放到相同的范数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msqrt",null,[s("mi",null,"d")])]),s("annotation",{encoding:"application/x-tex"},"\\sqrt{d}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.04em","vertical-align":"-0.1078em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9322em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord mathnormal"},"d")])]),s("span",{style:{top:"-2.8922em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1078em"}},[s("span")])])])])])])]),a("。")],-1),C=s("figure",null,[s("img",{src:h,alt:"alt text",tabindex:"0",loading:"lazy"}),s("figcaption",null,"alt text")],-1),R=s("p",null,[a("图1a展示了在没有LayerNorm的情况下，Transformers中的Keys和queries并没有明显的几何结构。相比之下，图1b显示LayerNorm已经将所有keys投影到了与向量[1,1,...,1]正交的超平面上。 LayerNorm的第二个组成部分是缩放：我们展示了LayerNorm如何将投影后的输入缩放到具有确切的"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msqrt",null,[s("mi",null,"d")])]),s("annotation",{encoding:"application/x-tex"},"\\sqrt{d}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.04em","vertical-align":"-0.1078em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9322em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord mathnormal"},"d")])]),s("span",{style:{top:"-2.8922em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1078em"}},[s("span")])])])])])])]),a("的L2范数。在第3节中，我们展示了缩放输入向量可以防止“不可选”的keys的问题，其中一些keys向量被包含在由其他keys形成的凸包内，因此永远无法获得最高的注意力得分。图1c和1d显示了在100次运行中平均有多少份“不可选”的向量是从正态分布中随机抽取的。如图1c所示，在没有LayerNorm的情况下，某些设置中获得“不可选”keys的概率可能非常高。然而，如图1d所示，有了LayerNorm，每个keys向量始终是可选的。 这些结果揭示了常用的LayerNorm的新方面，并展示了它对于Transformers中的注意力机制的重要性。")],-1),T=t('<p>示例：Q和K做矩阵相乘</p><p>先计算后norm：求点积，随机分布，有遮挡，看不到一些权重，准确率会降低，训练速度会慢3倍以上</p><p>先norm后计算：使用了norm后，全都能看到，不会有遮挡</p><p>Normalization（归一化）是深度学习中用于加速训练过程、稳定学习、防止过拟合的技术，把数据进行缩放，避免大的特别大，小的特别小，造成模型训练的时候过于拟合或者是过于爆炸，让训练速度变得很慢。</p><p>效果：queries和keys矩阵相乘时，分布的更均匀，把数据空间拉近，保持数据空间的特征存在的情况下，取值更集中，方便计算，减少梯度爆炸和梯度消失的问题，提高训练稳定性和加速收敛。</p><p>LayerNorm对于其后的多头注意力层的表达能力是至关重要的。这与人们通常认为LayerNorm唯一的作用是在正向传播过程中规范化激活值，在反向传播时规范化它们的梯度的观点相反。 我们从几何角度解释LayerNorm，并展示它由两部分组成：（a）将输入向量投影到与向量[1, 1, ..., 1]正交的维空间；（b）将所有向量缩放到相同的规范化尺度上。我们展示了在Transformers中，这些组成部分对其后的注意力层有多么重要:（a）投影允许注意力机制创建一个平等对待所有键的注意力查询，免除了注意力层需要学习这一操作的负担；（b）缩放允许每个键都有可能获得最高的注意力，并防止键被“选不上”。</p><p>常用的LayerNorm组件不仅对于优化过程至关重要，同时对于Transformers中的注意力表达能力也非常关键。</p><h2 id="_3-llama为什么不用encoder-decoder-而只用decoder" tabindex="-1"><a class="header-anchor" href="#_3-llama为什么不用encoder-decoder-而只用decoder" aria-hidden="true">#</a> 3. llama为什么不用encoder-decoder,而只用decoder</h2><h2 id="_4-attention计算为什么要除根号d" tabindex="-1"><a class="header-anchor" href="#_4-attention计算为什么要除根号d" aria-hidden="true">#</a> 4. attention计算为什么要除根号d</h2><h2 id="_5-attention公式的计算优化" tabindex="-1"><a class="header-anchor" href="#_5-attention公式的计算优化" aria-hidden="true">#</a> 5. attention公式的计算优化</h2><h2 id="_6-kv-cache-group-kv-cache省了哪一部分计算-省了多少" tabindex="-1"><a class="header-anchor" href="#_6-kv-cache-group-kv-cache省了哪一部分计算-省了多少" aria-hidden="true">#</a> 6. kv_cache,group+kv_cache省了哪一部分计算，省了多少</h2><h2 id="_7-旋转位置编码的长度外推是怎么做的" tabindex="-1"><a class="header-anchor" href="#_7-旋转位置编码的长度外推是怎么做的" aria-hidden="true">#</a> 7. 旋转位置编码的长度外推是怎么做的</h2><h2 id="_8-能不能自定义特殊token" tabindex="-1"><a class="header-anchor" href="#_8-能不能自定义特殊token" aria-hidden="true">#</a> 8. 能不能自定义特殊token</h2><h2 id="_9-pytorch的通用算子汇总-公式和输入输出" tabindex="-1"><a class="header-anchor" href="#_9-pytorch的通用算子汇总-公式和输入输出" aria-hidden="true">#</a> 9. pytorch的通用算子汇总(公式和输入输出)</h2>',14);function V(Y,D){return e(),n("div",null,[g,m(" more "),d,u,y,v,x,w,_,b,k,f,M,N,z,L,q,B,H,A,C,R,T])}const S=l(o,[["render",V],["__file","llama_advanced.html.vue"]]);export{S as default};