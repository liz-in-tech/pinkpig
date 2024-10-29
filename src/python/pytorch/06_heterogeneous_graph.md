---
icon: lightbulb
date: 2024-02-29
category:
  - Pytorch
tag:
  - Pytorch
---
# PyG Heterogeneous Graph Practice
## 同构图与异构图
![同构图与异构图](images/hetero_and_homo.png)

### 同构图
不区分节点和边的类型，节点和边都只有一种类型

点类型+边类型=2

例如，在社交网络中，可以想象node只有‘人’这一个种类，edge只有‘认识’这一种连接。而人和人要么认识，要么不认识。

### 异构图
点的类型或边的类型超过一种

点类型+边类型>2

现实世界中，大多数图都是异构图，表示了关于不同类型实体及其不同类型关系的信息。不同类型的点和边的特征表示类型和维度可以不相同。

## 图神经网络框架
### PyG
[PyG异构图指南](https://pytorch-geometric.readthedocs.io/en/latest/notes/heterogeneous.html?highlight=Heterogeneous#creating-heterogeneous-gnns)
### DGL
[DGL异构图指南](https://docs.dgl.ai/en/1.1.x/guide_cn/graph-heterogeneous.html)

## 案例
![异构图案例](images/hetero_graph_example.png)
这个异构图有1939743个节点，分为4种类型：作者author, 论文paper, 机构institution，研究领域field of study。
有21111007个边，也分为4种类型：
- 写writes：一位作者[写]一篇特定的论文
- 隶属于affiliated with：一位作者[隶属于]一个特定的机构
- 引用cites：一篇论文[引用]另一篇论文
- 涉及主题has topic：一篇论文[涉及]特定领域的[主题]

## 邻居加载
https://pytorch-geometric.readthedocs.io/en/latest/tutorial/neighbor_loader.html

# PyG Heterogeneous Graph Practice
## Homogeneous Graph and Heterogeneous Graph
### Homogeneous graph
Without distinguishing between node and edge types, there is only one type of node and one type of edge.

Node Type + Edge Type = 2

For example, in a social network, it can be imagined that nodes only have one category 'person', and edges only have one type of connection 'knows'. And people either know each other or they do not.

### Heterogeneous Graph
The type of node or edge exceeds one kind.

Node Type + Edge Type > 2

In the real world, most graphs are heterogeneous, representing information about different types of entities and their different types of relationships. The feature representations of different types of nodes and edges can have distinct types and dimensions.

## Graph Neural Network Framework
### PyG
[PyG Heterogeneous Graph Guide](https://pytorch-geometric.readthedocs.io/en/latest/notes/heterogeneous.html?highlight=Heterogeneous#creating-heterogeneous-gnns)
### DGL
[DGL Heterogeneous Graph Guide](https://docs.dgl.ai/en/1.1.x/guide/graph-heterogeneous.html)

## Example
![Heterogeneous Graph Example](images/hetero_graph_example.png)

The given heterogeneous graph has 1,939,743 nodes, split between the four node types author, paper, institution and field of study. 

It further has 21,111,007 edges, which also are of one of four types:
- writes: An author writes a specific paper
- affiliated with: An author is affiliated with a specific institution
- cites: A paper cites another paper
- has topic: A paper has a topic of a specific field of study

## Neighbor Loader
https://pytorch-geometric.readthedocs.io/en/latest/tutorial/neighbor_loader.html