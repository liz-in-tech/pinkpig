import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as s,c as d,a as e,b as a,e as t,f as o}from"./app-rvE1EVAc.js";const p="/pinkpig/assets/hetero_and_homo-m8J-lcv2.png",n="/pinkpig/assets/hetero_graph_example-EL36ne31.png",c={},g=o('<h1 id="pyg-heterogeneous-graph-practice" tabindex="-1"><a class="header-anchor" href="#pyg-heterogeneous-graph-practice" aria-hidden="true">#</a> PyG Heterogeneous Graph Practice</h1><h2 id="同构图与异构图" tabindex="-1"><a class="header-anchor" href="#同构图与异构图" aria-hidden="true">#</a> 同构图与异构图</h2><figure><img src="'+p+'" alt="同构图与异构图" tabindex="0" loading="lazy"><figcaption>同构图与异构图</figcaption></figure><h3 id="同构图" tabindex="-1"><a class="header-anchor" href="#同构图" aria-hidden="true">#</a> 同构图</h3><p>不区分节点和边的类型，节点和边都只有一种类型</p><p>点类型+边类型=2</p><p>例如，在社交网络中，可以想象node只有‘人’这一个种类，edge只有‘认识’这一种连接。而人和人要么认识，要么不认识。</p><h3 id="异构图" tabindex="-1"><a class="header-anchor" href="#异构图" aria-hidden="true">#</a> 异构图</h3><p>点的类型或边的类型超过一种</p><p>点类型+边类型&gt;2</p><p>现实世界中，大多数图都是异构图，表示了关于不同类型实体及其不同类型关系的信息。不同类型的点和边的特征表示类型和维度可以不相同。</p><h2 id="图神经网络框架" tabindex="-1"><a class="header-anchor" href="#图神经网络框架" aria-hidden="true">#</a> 图神经网络框架</h2><h3 id="pyg" tabindex="-1"><a class="header-anchor" href="#pyg" aria-hidden="true">#</a> PyG</h3>',13),l={href:"https://pytorch-geometric.readthedocs.io/en/latest/notes/heterogeneous.html?highlight=Heterogeneous#creating-heterogeneous-gnns",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"dgl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dgl","aria-hidden":"true"},"#"),a(" DGL")],-1),f={href:"https://docs.dgl.ai/en/1.1.x/guide_cn/graph-heterogeneous.html",target:"_blank",rel:"noopener noreferrer"},_=o('<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><img src="'+n+'" alt="异构图案例" loading="lazy"> 这个异构图有1939743个节点，分为4种类型：作者author, 论文paper, 机构institution，研究领域field of study。 有21111007个边，也分为4种类型：</p><ul><li>写writes：一位作者[写]一篇特定的论文</li><li>隶属于affiliated with：一位作者[隶属于]一个特定的机构</li><li>引用cites：一篇论文[引用]另一篇论文</li><li>涉及主题has topic：一篇论文[涉及]特定领域的[主题]</li></ul><h2 id="邻居加载" tabindex="-1"><a class="header-anchor" href="#邻居加载" aria-hidden="true">#</a> 邻居加载</h2><p>https://pytorch-geometric.readthedocs.io/en/latest/tutorial/neighbor_loader.html</p><h1 id="pyg-heterogeneous-graph-practice-1" tabindex="-1"><a class="header-anchor" href="#pyg-heterogeneous-graph-practice-1" aria-hidden="true">#</a> PyG Heterogeneous Graph Practice</h1><h2 id="homogeneous-graph-and-heterogeneous-graph" tabindex="-1"><a class="header-anchor" href="#homogeneous-graph-and-heterogeneous-graph" aria-hidden="true">#</a> Homogeneous Graph and Heterogeneous Graph</h2><h3 id="homogeneous-graph" tabindex="-1"><a class="header-anchor" href="#homogeneous-graph" aria-hidden="true">#</a> Homogeneous graph</h3><p>Without distinguishing between node and edge types, there is only one type of node and one type of edge.</p><p>Node Type + Edge Type = 2</p><p>For example, in a social network, it can be imagined that nodes only have one category &#39;person&#39;, and edges only have one type of connection &#39;knows&#39;. And people either know each other or they do not.</p><h3 id="heterogeneous-graph" tabindex="-1"><a class="header-anchor" href="#heterogeneous-graph" aria-hidden="true">#</a> Heterogeneous Graph</h3><p>The type of node or edge exceeds one kind.</p><p>Node Type + Edge Type &gt; 2</p><p>In the real world, most graphs are heterogeneous, representing information about different types of entities and their different types of relationships. The feature representations of different types of nodes and edges can have distinct types and dimensions.</p><h2 id="graph-neural-network-framework" tabindex="-1"><a class="header-anchor" href="#graph-neural-network-framework" aria-hidden="true">#</a> Graph Neural Network Framework</h2><h3 id="pyg-1" tabindex="-1"><a class="header-anchor" href="#pyg-1" aria-hidden="true">#</a> PyG</h3>',17),m={href:"https://pytorch-geometric.readthedocs.io/en/latest/notes/heterogeneous.html?highlight=Heterogeneous#creating-heterogeneous-gnns",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"dgl-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dgl-1","aria-hidden":"true"},"#"),a(" DGL")],-1),x={href:"https://docs.dgl.ai/en/1.1.x/guide/graph-heterogeneous.html",target:"_blank",rel:"noopener noreferrer"},b=o('<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><figure><img src="'+n+'" alt="Heterogeneous Graph Example" tabindex="0" loading="lazy"><figcaption>Heterogeneous Graph Example</figcaption></figure><p>The given heterogeneous graph has 1,939,743 nodes, split between the four node types author, paper, institution and field of study.</p><p>It further has 21,111,007 edges, which also are of one of four types:</p><ul><li>writes: An author writes a specific paper</li><li>affiliated with: An author is affiliated with a specific institution</li><li>cites: A paper cites another paper</li><li>has topic: A paper has a topic of a specific field of study</li></ul><h2 id="neighbor-loader" tabindex="-1"><a class="header-anchor" href="#neighbor-loader" aria-hidden="true">#</a> Neighbor Loader</h2><p>https://pytorch-geometric.readthedocs.io/en/latest/tutorial/neighbor_loader.html</p>',7);function G(k,w){const r=i("ExternalLinkIcon");return s(),d("div",null,[g,e("p",null,[e("a",l,[a("PyG异构图指南"),t(r)])]),u,e("p",null,[e("a",f,[a("DGL异构图指南"),t(r)])]),_,e("p",null,[e("a",m,[a("PyG Heterogeneous Graph Guide"),t(r)])]),y,e("p",null,[e("a",x,[a("DGL Heterogeneous Graph Guide"),t(r)])]),b])}const N=h(c,[["render",G],["__file","06_heterogeneous_graph.html.vue"]]);export{N as default};