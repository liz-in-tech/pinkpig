---
icon: lightbulb
---
# 大模型训练经验
- 租AutoDL
- 租魔搭
- google colab
- kaggle colab
- vscode remote ssh

## 1. 常用命令
```
nvidia-smi # 查看显存
htop # 查看内存和CPU
```
## 2. vscode remote ssh
Step1:安装vscode插件remote-ssh

![](images/vscode_remote_ssh.png)

Step2:后续教程：[http://www.php.cn/faq/497482.html](http://www.php.cn/faq/497482.html)

连接时输入ip和密码：
```
ssh test@61.153.7.125
```

Step3: 查看cuda版本命令
```
nvidia-smi
```
## 3. 使用Google Colab跑模型操作流程
1.**创建一个新的 Notebook**

2.**更改为GPU执行**

Google Colab的默认硬件加速器设置是“None”，即默认是CPU

代码执行环境-》更改运行时类型-》切换为GPU

如果用pytorch，采用T4GPU；如果用tensorFlow，采用TPU

- **TPU（Tensor Processing Unit）**：它是Google专门为机器学习和神经网络负载所设计的专用硬件。对于TensorFlow等框架来说，TPUs一般比传统的GPU更快。
- **GPU（Graphics Processing Unit）**：在处理图像、游戏、动画等方面有优势，同时也被广泛用于机器学习和深度学习领域。如果你使用的机器学习库不支持TPU，或者你的项目并不需要极高的并行运算能力，GPU是一个很好的选择。

![](images/google_colab_gpu.png)

3.**上传你的 Python 文件（记住，每次你打开你的 notebook时，又是新的了，原本的就没有了）**

如果只是单个文件，可以直接上传

如果上传多个文件，可以通过github上传

3.1）先将项目上传到GitHub

3.2）再通过git clone上传到colab（当前操作和接下来的操作都是在ipynb里添加代码）

如果是公开仓库

!git clone xxx (和平时clone一样，只多了！)

如果是私有仓库，需要有token，替换https://github.com/为如下

!git clone [https://<your_token>:x-oauth-basic@github.com/](https://%3Cyour_token%3E:x-oauth-basic@github.com/)><username>/<repository>.git

获取github的token：Github账户设置页面的"Developer settings" -> "Personal access tokens"生成一个新的命名为"colab"的token


示例如下，其中ghp_syvM8Ze32dXIMGhEIoysKi0NYma0p1qzCTD为token：
```
!git clone https://ghp_syvM8Ze32dXIMGhEIoysKi0NYma0p1qzCTD:x-oauth-basic@github.com/liz-starfield/LogAnomalyDetection.git
```

4.运行代码
```
cd LogAnomalyDetection

!pip install torch_geometric

cd approaches

!python GraphLog.py
```
## 4. 魔搭

账号：Nikkiu

![](images/moda_workdir.png)

modelscope 是transformers库的封装

huggingface — transformers

https://huggingface.co/docs/transformers/en/index

https://python.langchain.com/v0.1/docs/modules/data_connection/document_loaders/pdf/

watch -n 0.1 nvidia-smi

魔搭对标国外的HuggingFace

AutoDL

## 5. 下载模型
HuggingFace & 魔搭