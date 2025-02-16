---
icon: lightbulb
---
# 网易 —— 网易数帆低代码CodeWave
## 低代码
低代码→图形化编程-完整的应用编程语义与框架  

采用的Java语言，每一个编程语言都是图灵完备的

低代码本质

- 可视化编程语言与框架
- 软件资产管理工具
- 软件集成工具
- 软件运维工具

低代码特点

- 更少的代码量
- 更短的交付周期
- 更高的软件质量
- 更低的维护成本

低代码： 更偏向软件工程的抽象

OutSystem, Mendix, CodeWave

低代码打造新的研发模式
- 专业者可从繁复低效的crud中解放出来
- 通过对业务领域的抽象和分析，编写更通用化抽象化的组件成为可复用的资产
- 随着生态的强大，吸引更多第三方生态厂商参与形成更多可复用资产

![](images/question_area.png)
![](images/solve_area.png)
![](images/new_mode.png)

## 低代码与零代码
零代码：更偏向场景的抽象（数据分析，电子表格，流程）

零代码特点：

- 基于场景封装，完全无需代码
- 简单，易用性好，上手快
- 面向业务人员

零代码不足：

- 灵活性差 （定制化能力差），支撑场景有限
- 可扩展性差

![](images/low_and_zero.png)

## CodeWave平台定位、产品架构与技术架构
![](images/product_position.png)

![](images/client_value.png)

![](images/product_architecture.png)

![](images/technique_architecture.png)

![](images/architecture.png)

![](images/architecture1.png)

![](images/future.png)

## 可视化搭建界面
应用中心的应用主页

![](images/view_home.png)

页面可视化搭建界面

![](images/view_page.png)

逻辑可视化搭建界面

![](images/view_logic.png)

数据可视化搭建界面

![](images/view_data.png)

流程可视化搭建界面

![](images/view_process.png)

## NASL-低代码内核（Application Specific Language，应用特定语言）
ASL-》将图形化界面逻辑表示为json文本化表示

向用户暴露3项
- NASL基础语言
- NASL领域DSL语言
- NASL语言框架

![](images/nasl_necessary.png)

![](images/nasl_necessary1.png)

![](images/nasl_3_elements.png)

![](images/nasl_way.png)

![](images/nasl_architecture.png)

![](images/nasl_top.png)

红线以上是用户可感知的，红线以下是用户无感知的

MVC架构（Model，View，Controller）

![](images/nasl_base.png)

![](images/nasl_example1.png)

![](images/nasl_example2.png)

## DSL（Domain Specific Language，领域特定语言）

可视化编辑器唯一作用是生成各种域的DSL，页面/逻辑/数据/流程等有各自对应的编辑器/设计器，生成各自对应的DSL

高上限：可复用的DSL

如何平衡通用性和灵活性的矛盾

示例：数据查询领域-数据查询有很多通用的地方，如筛选条件，排序，分页等

模型驱动设计 用户最需要关注的是Model（实体entity）

好处是代码标准化规范化-》精简的代码量-》更高的质量，更低的bug率

![](images/dsl.png)

![](images/lop.png)

![](images/lop1.png)

![](images/dsl_merge.png)

![](images/dsl_example1.png)

![](images/dsl_example2.png)

![](images/dsl_example3.png)

## Language Server 语义保障机制
质量可控：Language Server（能够做到浏览器端的类型检查和自动补全）

有两种实现路径：CodeWave采用的是上者，借助通用语言的ls，并没有自研ls

![](images/language_server.png)

![](images/language_server1.png)

## 代码生成
对于引擎式和编译式，本项目采用编译式，不强绑定低代码厂商，支持导出源码，可以进行二次独立开发，可独立部署

从可视化到代码生成：可视化NASL-》抽象语法树AST-》标注语法树-》代码生成：JS（前端）+Java（后端）

交付给用户的是NASL语言翻译成的Java和JS语言

AST树（NASL JSON AST树）

类型标注是指把缺失类型的字段补齐类型，如int，string等

![](images/code_generation.png)

## Debug
代码：按行打断点

可视化形态：按块打断点

nasl和可视化组件是一一映射的关系

nasl经过编译器生成sourcemap，sourcemap建立了nsal与源代码之间的双向映射

java运行在JVM上，JS运行在浏览器上

界面上点击调试命令 step over/into等，不是单独拆开调试服务端侧和客户端侧，而是通过低代码平台的命令下发统一处理，下发到服务端侧和客户端侧

![](images/debug1.png) 
![](images/debug2.png) 
![](images/debug3.png) 
![](images/debug4.png) 
![](images/debug5.png) 
![](images/debug6.png)

## CodeWave智能化
### AI Copilot瓶颈

![](images/AI_copilot_bottleneck.png)

### AIGC技术（AI-generated Content）的接入思路
- 推荐能力：通过用户操作的上下文自动帮助用户推荐接下来的操作，如流程节点的推荐、图表类型的推荐等。-》用户更快入门，搭建更高质量的网站，解决用户在使用平台时的选择困难症
    - 推荐系统思路
    - 推荐能力并没有使用大模型，使用的是传统的算法n-gram语言模型
- 解读能力：对生成的代码逻辑，可视化图表等进行解读
- 自动优化质量、安全、性能能力：通过代码扫描和算法，自动分析产品内的技术债务并给出优化建议，纬度包括性能、安全、可维护性、架构设计等。-》保证搭建产品的质量
- 自然语言编程能力，任务拆解，意图识别（NL2NASL/自然语言到NASL）把原来的设计器替换为自然语言输入
    - Prompt优化：通过Few shot
    - 微调优化：NL2NASL Fine-Tune
- Agent需求分析智能体
    - 对Agent的理解：通过Prompt驱动的，自主执行一些任务，能够调用工具Tools的，这种叫Agent
    - ReAct思路：Reasoning思考和Action任务执行的结合
        - ReAct存在问题：走一步看一步，缺乏宏观的规划的
        - AutoGPT大量使用了ReAct思路，经常会陷入不断循环中，烧token
    - Plan&Solve思路
        - Plan全局任务拆解，Solve每个拆解的任务执行
- RAG
    - 和之前积累的资产结合

### AI工程化整体架构

![](images/AI_engineering.png) 
![](images/AI_engineering1.png) 
![](images/AI_engineering2.png)

### 自然语言编程 NL2NASL

![](images/NL2NASL_bottleneck.png)

![](images/NL2NASL_fewshot.png)

![](images/NL2NASL_finetune.png)

![](images/NL2NASL_each_step.png)

### 推荐能力 N-gram语言模型

![](images/recommend_n_gram.png)

### Agent
![](images/agent.png)

![](images/agent1.png)

![](images/agent2.png)

![](images/ReAct.png)

![](images/ReAct1.png)

![](images/ReAct2.png)

![](images/Plan&Solve.png)

### RAG
![](images/RAG.png)
![](images/RAG1.png)

### 显存经验
吃显存看参数量，需要预估模型需要显卡的数量

经验：1b参数量对应3.75G显存

如果家里有一张4090的卡，就可以玩30b的模型

qwen72b可能需要2-3张卡

