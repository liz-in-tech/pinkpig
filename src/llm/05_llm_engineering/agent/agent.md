---
icon: lightbulb
date: 2024-01-28


category:
  - LLM
tag:
  - LLM
---

# Agent
<!-- more -->
## AI Agent vs Agentic AI
- 生成式 AI： 能「说」，不能「做」，被动，无工具，无协作。
- AI Agent： 能「说」，能用「工具」独立「做」简单事，任务内自主，单体，有工具，无协作。
- Agentic AI： 能「说」，能让「团队」用「工具」协同「做」复杂事，系统级自主，多 Agent，有工具，强协作，有编排，有共享记忆。

## AI Agent4种设计模式
https://blog.csdn.net/weixin_40774379/article/details/139133605

## 趋势：大语言模型的Agent化
大语言模型的Agent化，将语言模型转变为具备自主决策和执行能力的智能体。这意味着模型不仅能生成文本，还能理解上下文、制定计划并与外部环境交互，从而执行任务，如自动化客服、数据分析或个人助手等。

大语言模型的Agent化是在大模型本身基础上融合了Agent应用，加入了反思、工具应用等技术元素，使得大语言模型本身就成为一个AI Agent。
从而让大模型多了更多的功能，而不需要普通用户再去考虑复杂的提示词或者再去学习如何添加更多的功能。

比如OpenAI前段时间推出的能够推理的o1模型，就是一个AI Agent，可以通过思维链进行反思从而给予用户更好的答案。

Claude 3.5 Sonnet升级版便是Claude进一步Agent化的结果，大模型的直接升级让其实现能够直接操作电脑。Claude 3.5 Sonnet升级版的最大特点是具备计算机使用功能，引入了名为"computer use"的突破性功能，允许AI像人类一样操作计算机，包括查看屏幕、移动光标、点击按钮和输入文本等操作。

## LangChain Agent生态
![alt text](images/langchain_agent_ecosystem.png)
![alt text](images/langchain_data_ecosystem.png)

### history
#### v0.0.x
不同组件

#### v0.2
LCEL，降低了抽象，所有组件打平在一层，都可以用管道符去连接组合

### langfuse
langsmith alternative

### 最核心
#### Runnable
强类型panditic

管道符进行任意排列组合

## CoT 与 ReAct
CoT:Reasoning
用llm自身的能力做思维链，仅依赖模型本身的知识，不会用工具
Act-Only: Act
ReAct = Reasoning + Act
在思维链基础上加上工具的使用，交替思考和行动，思考->行动->思考->行动..

ReAct的实现核心是Prompt的定义



