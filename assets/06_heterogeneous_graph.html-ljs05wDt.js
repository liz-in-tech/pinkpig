const e=JSON.parse('{"key":"v-6243a8a0","path":"/python/pytorch/06_heterogeneous_graph.html","title":"PyG Heterogeneous Graph Practice","lang":"en-US","frontmatter":{"icon":"lightbulb","date":"2024-02-29T00:00:00.000Z","category":["Pytorch"],"tag":["Pytorch"],"description":"PyG Heterogeneous Graph Practice 同构图与异构图 同构图与异构图 同构图 不区分节点和边的类型，节点和边都只有一种类型 点类型+边类型=2 例如，在社交网络中，可以想象node只有‘人’这一个种类，edge只有‘认识’这一种连接。而人和人要么认识，要么不认识。 异构图 点的类型或边的类型超过一种 点类型+边类型&gt;2 现实世界中，大多数图都是异构图，表示了关于不同类型实体及其不同类型关系的信息。不同类型的点和边的特征表示类型和维度可以不相同。","head":[["meta",{"property":"og:url","content":"https://liz-in-tech.github.io/pinkpig/python/pytorch/06_heterogeneous_graph.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"PyG Heterogeneous Graph Practice"}],["meta",{"property":"og:description","content":"PyG Heterogeneous Graph Practice 同构图与异构图 同构图与异构图 同构图 不区分节点和边的类型，节点和边都只有一种类型 点类型+边类型=2 例如，在社交网络中，可以想象node只有‘人’这一个种类，edge只有‘认识’这一种连接。而人和人要么认识，要么不认识。 异构图 点的类型或边的类型超过一种 点类型+边类型&gt;2 现实世界中，大多数图都是异构图，表示了关于不同类型实体及其不同类型关系的信息。不同类型的点和边的特征表示类型和维度可以不相同。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-29T16:42:17.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"Pytorch"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T16:42:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PyG Heterogeneous Graph Practice\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-29T16:42:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-in-tech\\"}]}"]]},"headers":[{"level":2,"title":"同构图与异构图","slug":"同构图与异构图","link":"#同构图与异构图","children":[{"level":3,"title":"同构图","slug":"同构图","link":"#同构图","children":[]},{"level":3,"title":"异构图","slug":"异构图","link":"#异构图","children":[]}]},{"level":2,"title":"图神经网络框架","slug":"图神经网络框架","link":"#图神经网络框架","children":[{"level":3,"title":"PyG","slug":"pyg","link":"#pyg","children":[]},{"level":3,"title":"DGL","slug":"dgl","link":"#dgl","children":[]}]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"邻居加载","slug":"邻居加载","link":"#邻居加载","children":[]},{"level":2,"title":"Homogeneous Graph and Heterogeneous Graph","slug":"homogeneous-graph-and-heterogeneous-graph","link":"#homogeneous-graph-and-heterogeneous-graph","children":[{"level":3,"title":"Homogeneous graph","slug":"homogeneous-graph","link":"#homogeneous-graph","children":[]},{"level":3,"title":"Heterogeneous Graph","slug":"heterogeneous-graph","link":"#heterogeneous-graph","children":[]}]},{"level":2,"title":"Graph Neural Network Framework","slug":"graph-neural-network-framework","link":"#graph-neural-network-framework","children":[{"level":3,"title":"PyG","slug":"pyg-1","link":"#pyg-1","children":[]},{"level":3,"title":"DGL","slug":"dgl-1","link":"#dgl-1","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Neighbor Loader","slug":"neighbor-loader","link":"#neighbor-loader","children":[]}],"git":{"createdTime":1730220137000,"updatedTime":1730220137000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":1.92,"words":575},"filePathRelative":"python/pytorch/06_heterogeneous_graph.md","localizedDate":"February 29, 2024","excerpt":"<h1> PyG Heterogeneous Graph Practice</h1>\\n<h2> 同构图与异构图</h2>\\n<figure><figcaption>同构图与异构图</figcaption></figure>\\n<h3> 同构图</h3>\\n<p>不区分节点和边的类型，节点和边都只有一种类型</p>\\n<p>点类型+边类型=2</p>\\n<p>例如，在社交网络中，可以想象node只有‘人’这一个种类，edge只有‘认识’这一种连接。而人和人要么认识，要么不认识。</p>\\n<h3> 异构图</h3>\\n<p>点的类型或边的类型超过一种</p>\\n<p>点类型+边类型&gt;2</p>\\n<p>现实世界中，大多数图都是异构图，表示了关于不同类型实体及其不同类型关系的信息。不同类型的点和边的特征表示类型和维度可以不相同。</p>","autoDesc":true}');export{e as data};