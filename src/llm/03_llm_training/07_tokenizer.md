---
icon: lightbulb
---
# Tokenization（词元化，分词）
- token 词元 
    - token 和单词不一样，token 是一个比单词更小的分割单位
- tokenizer 分词器
- Tokenization / Segment 词元化，token化，分词

目的 : 将原始文本分割成模型可识别和建模的词元序列，作为大语言模型的输入数据

## 1. 分词方式
- 基于词汇word的分词方法
    - 优点 : 分词最直观的解决方式
    - 缺点 : 存在OOV的问题（OOV，out of vocabulary, 未登录词）(word模型的word数量太多，存在大量稀疏word，删掉它们又会导致OOV问题)
- 基于字符character的分词方式
    - 对26个字母训练word2vec，每个词由其字母的embedding拼接或者求平均得到
    - 优点：解决了OOV问题
    - 缺点：和word级别的模型效果差不多，并没有显著优势。而且如果用RNN来训练character级别的模型也有它的问题，就是训练起来非常慢，原来的一个word，现在变成了七八个character，时间步长增加了很多，训练和预测都更久了，而且梯度消失（爆炸）的问题也会更严重
- 基于子词subword的分词方法
    - 子词分词器（Subword Tokenizer）被广泛应用于基于 Transformer 的语言模型中
    - 优点：作为character和word的折中模型，解决了OOV问题，训练也不会特别慢
    - 三种常见方法
        - BPE 分词
            - BPE 通过合并高频字符对形成子词词汇表
            - BPE算法 (Byte Pair Encoding)
                - 是上世纪提出的一种数据压缩算法，后来被广泛应用于 NLP
                - 核心思想：BPE通过迭代地合并出现频率最高的字符或子词单元，最终形成一个最优的子词词汇表，使得常见的词可以用较少的子词单元表示，而不常见的词则可以拆分为更小的可组合单元
            - 优点
                - 减少 OOV 问题：通过将不常见词拆分为更小的可识别子词，提升模型泛化能力
                - 平衡词汇表大小与覆盖率：常见词可以用较少子词表示，不常见词则拆分为组合单元
                - 适用于多种语言：特别适合形态丰富的语言（如德语、芬兰语），以及无空格分隔的语言（如中文）
            - 代表性模型： GPT-2 、BART 和 LLaMA
        - WordPiece 分词
            - WordPiece 和BPE类似但选择合并对的方式不同
            - 是谷歌内部非公开的分词算法
            - 代表性模型： BERT
        - Unigram 分词
            - Unigram 从大词汇表逐步移除低频子词
            - 代表性模型：T5 和 mBART
    - 两种实现方式
        - 模型结构和word模型完全一样，只不过把word换成了subword
            - 关键点：怎样得到subword
            - BPE、WordPiece 和 Unigram 这三种常见分词方法都属于此
        - word和character模型的杂交模型
            - 字典中的词用word分词模型，对于不太常见的词则用character分词模型

## 2. 分词器 Tokenizer 的选择
- 分词器
    - 已有的分词器
    - 定制化分词器
        - 值得注意的是，在扩展现有的大语言模型（如继续预训练或指令微调）的同时，还需要意识到原始分词器可能无法较好地适配实际需求。此外，为进一步提高某些特定能力（如数学能力），也可能需要针对性地设计分词器。
        - 虽然直接使用已有的分词器较为方便，但是使用为预训练语料专门训练或设计的分词器会更加有效，尤其是对于那些混合了多领域、多语言和多种格式的语料。
        - 最近的大语言模型通常使用 SentencePiece 代码库为预训练语料训练定制化的分词器，这一代码库支持字节级别的 BPE 分词和 Unigram 分词。
- 分词器的选择
    - 首先，分词器必须具备无损重构的特性，即其分词结果能够准确无误地还原为原始输入文本。
    - 其次，分词器应具有高压缩率，即在给定文本数据的情况下，经过分词处理后的词元数量应尽可能少，从而实现更为高效的文本编码和存储。

## 3. Token计算

what：一个字符串算多少token

经验：1K token大概是750个英文单词，500个中文汉字

how：

1）在线计算  https://platform.openai.com/tokenizer

2）程序里统计 ： tiktoken

https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken

https://github.com/openai/tiktoken