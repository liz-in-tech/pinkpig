---
icon: lightbulb
---
# LLM Roadmap
## 1. LLM 基础（Done，不要从头学了，只需在实践中查漏补缺）
- Mathematics for ML
    - 线性代数
        - 向量、矩阵、行列式、特征值和特征向量、向量空间和线性变换
    - 概率论
    - 微积分
        - 导数、积分、极限和级数、多元微积分和梯度
- Python for ML
    - Python Basics
        - 基本语法、数据类型、错误处理和面向对象编程
    - Data Science Libraries
        - NumPy 用于数值运算
        - Pandas 用于数据操作和分析
        - Matplotlib 和 Seaborn 用于数据可视化
    - Data Preprocessing
        - 涉及特征缩放和规范化、处理缺失数据、异常值检测、分类数据编码以及将数据分成训练、验证和测试集
    - ML Libraries
        - 熟练掌握 Scikit-learn（一个提供多种监督和非监督学习算法的库）至关重要。了解如何实现线性回归、逻辑回归、决策树、随机森林、k-最近邻 (K-NN) 和 K-均值聚类等算法非常重要。PCA 和 t-SNE 等降维技术也有助于可视化高维数据。
- Neural Networks
    - Fundamentals
        - 理解神经网络的结构，例如层、权重、偏差和激活函数（sigmoid、tanh、ReLU 等）。
    - 梯度爆炸和梯度消失
    - Overfitting 过拟合
    - Training and Optimization
        - 熟悉反向传播和不同类型的损失函数，了解各种优化算法，如梯度下降、随机梯度下降 和 Adam。
- NLP
    - 分词（文本token化）：Text Preprocessing / Tokenizer 
        - 学习各种文本预处理步骤，如标记化（将文本分成单词或句子）、词干提取（将单词简化为其词根形式）、词形还原（类似于词干提取但考虑上下文）、停用词删除等
    - 特征提取：Feature Extraction Techniques
        - 熟悉将文本数据转换为机器学习算法可以理解的格式的技术。主要方法包括词袋 (BoW)、词频-逆文档频率 (TF-IDF) 和 n-gram。
    - 嵌入（token向量化）：Word Embeddings / Word2Vec
        - 词嵌入是一种词语表示方法，可以让具有相似含义的词语具有相似的表示。主要方法包括 Word2Vec、GloVe 和 FastText。
    - NLP三大特征抽取器
        - Transformer
        - RNN
            - 了解 RNN 的工作原理，RNN 是一种用于处理序列数据的神经网络。探索 LSTM 和 GRU，这两种 RNN 变体都能够学习长期依赖关系。
        - CNN
    - NLP预训练发展史：图像预训练 → word embedding → word2vec → elmo → transformer → gpt → bert → GPT 234

## 2. LLM 架构（Done，不要从头学了，只需在实践中查漏补缺）
- 了解从编码器-解码器 Transformer 到仅解码器架构（如 GPT）的演变，这些架构构成了现代人工智能的基础
- Tokenizer
    - 了解标记化的原理，如何将文本转换为可以处理的数字表示。探索不同的标记化策略及其对模型性能和输出质量的影响
- Attention
    - 掌握注意力机制的核心概念，尤其是自我注意力及其变体。了解这些机制如何能够处理长距离依赖关系并在整个序列中保持上下文
- 解码策略 (Top-k / Top-p / Temperature)
- 采样技术
    - 探索各种文本生成方法及其权衡。将贪婪搜索和束搜索等确定性方法与温度采样和核采样等概率方法进行比较。
- Transformer
- GPT
- BERT
- MoE
- 常见大模型
    - Llama
    - Qwen
    - Deepseek

## 3. LLM 训练（专注于LLM的训练和推理，有待加强，训练部分最重要的是分布式训练和强化学习）
### 3.1. LLM 数据工程
- 数据格式
- 数据收集
- 数据清洗
    - 去重
    - 过滤
    - 选择
    - 组合
- 标记化 Tokenizer

### 3.2. 分布式训练
- GPU
- 使用 DeepSpeed 或 FSDP 在多个 GPU 上进行大规模训练。DeepSpeed 提供三个 ZeRO 优化阶段，通过状态分区提高内存效率。两种方法都支持梯度检查点以提高内存效率。
- 并行策略 : 这些策略需要优化跨 GPU 集群的网络通信和内存管理
- DeepSpeed
- Megatron

### 3.3. 有监督微调
全面微调会更新所有模型参数，但需要大量计算。LoRA 和 QLoRA 等参数高效的微调技术通过训练少量适配器参数同时保持基本权重不变来减少内存需求。QLoRA 将 4 位量化与 LoRA 相结合，以减少 VRAM 的使用。

### 3.4. 强化学习 & 人类偏好对齐
重点是将生成的答案与人类偏好对齐。此阶段旨在调整语气并减少毒性和幻觉。然而，提高其性能和实用性也变得越来越重要。与 SFT 不同，有许多偏好对齐算法。在这里，我们将重点介绍两个最重要的算法：DPO 和 PPO。

### 3.5. 训练参数
关键参数包括带调度器的学习率、批量大小、梯度累积、时期数、优化器（如 8 位 AdamW）、正则化的权重衰减以及训练稳定性的预热步骤。

LoRA 还增加了三个参数：等级（通常为 16-128）、alpha（1-2x 等级）和目标模块。

### 3.6. 训练监控
使用仪表板跟踪关键指标（损失、梯度、GPU 统计数据），针对分布式训练问题实施有针对性的日志记录，并设置性能分析以识别跨设备计算和通信中的瓶颈。

跟踪训练指标，包括损失曲线、学习率计划和梯度范数。监控常见问题，如损失峰值、梯度爆炸或性能下降。

## 4. LLM 推理（专注于LLM的训练和推理，有待加强，推理部分重点是加速优化）
### 4.1. 训练和推理的加速优化
- 全过程优化
- 训练优化
- 推理优化

### 4.2. LLM 压缩
- 量化
- 蒸馏
- 剪枝

### 4.3. LLM 部署
- 本地部署
    - LM Studio 、 Ollama 、 oobabooga 、 kobold.cpp 等
- 演示部署
    - Gradio 和 Streamlit 等框架有助于创建应用程序原型并共享演示
    - 您还可以轻松地在线托管它们，例如使用 Hugging Face Spaces
- 服务器部署
    - 大规模部署需要云（另请参阅 SkyPilot）或本地基础架构，并且通常利用优化的文本生成框架，例如 TGI 、 vLLM 等
- 边缘部署
    - 在受限环境中， MLC 和 mnn- 等高性能框架可以在网络浏览器、Android 和 iOS 中部署

### 4.4. LLM 评估
可靠地评估LLMs是一项复杂但必不可少的任务，可以指导数据生成和训练。它提供了有关改进领域的宝贵反馈，可以利用这些反馈来修改数据组合、质量和训练参数。

## 5. LLM应用开发（Done，不要从头学了，只需在实践中查漏补缺）
### 5.1. LLM APIs
LLM API ：API 是一种便捷的部署方式。该领域分为私有领域（ OpenAI 、 Google 、 Anthropic 、 Cohere 等）和开源领域（ OpenRouter 、 Hugging Face 、 Together AI 等）。

### 5.2. 开源 LLMs
开源LLMs ： Hugging Face Hub 是查找LLMs的好地方。您可以直接在 Hugging Face Spaces 中运行其中一些，也可以在 LM Studio 等应用中下载并在本地运行它们，或者通过 CLI 使用 llama.cpp 或 Ollama 运行它们。

### 5.3. Prompt Engineering
提示工程 ：常用技术包括零样本提示、少样本提示、思路链和 ReAct。它们更适用于较大的模型，但也可以适用于较小的模型。

提示黑客 ：与提示工程相关的不同技术，包括提示注入（劫持模型答案的附加指令）、数据/提示泄露（检索其原始数据/提示）和越狱（制作提示以绕过安全功能）。
### 5.4. Agent & RAG
- 文档加载
- 文档拆分
- 嵌入模型
- 向量数据库
- 检索
- LangChain 、 LlamaIndex 、 FastRAG 
- 结构化输出 ：许多任务需要结构化输出，如严格的模板或 JSON 格式。可以使用 LMQL 、 Outlines 、 Guidance 等库来指导生成并遵循给定的结构。
- 评估 
    - Ragas 和 DeepEval



