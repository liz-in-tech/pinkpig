# NLP
## NLP三大特征抽取器比较(CNN/RNN/Transformer)

结论：RNN已经基本完成它的历史使命，将来会逐步退出历史舞台；CNN如果改造得当，将来还是有希望有自己在NLP领域的一席之地；而Transformer明显会很快成为NLP里担当大任的最主流的特征抽取器。

NLP任务的特点：输入是个一维线性序列；输入不定长；单词或句子的位置关系很重要；句子中长距离特征对于语义理解也很重要。

三大抽取器比较
- 语义特征提取能力：TF > RNN/CNN
    - Transformer在这方面的能力非常显著地超过RNN和CNN，RNN和CNN两者能力差不太多。
- 长距离特征捕获能力：TF/RNN > CNN
    - 原生CNN特征抽取器在这方面极为显著地弱于RNN和Transformer
- 任务综合特征抽取能力（机器翻译）：TF > RNN/CNN    
    - Transformer综合能力要明显强于RNN和CNN，而RNN和CNN看上去表现基本相当，貌似CNN表现略好一些。
- 并行计算能力及运行效率：TF/CNN > RNN
    - RNN在并行计算方面有严重缺陷，这是它本身的序列依赖特性导致的；对于CNN和Transformer来说，因为它们不存在网络中间状态不同时间步输入的依赖关系，所以可以非常方便及自由地做并行计算改造。Transformer和CNN差不多，都远远远远强于RNN。

综合排名: TF > CNN > RNN

单从任务综合效果方面来说，Transformer明显优于CNN，CNN略微优于RNN。速度方面Transformer和CNN明显占优，RNN在这方面劣势非常明显。

三者的结合：向Transformer靠拢