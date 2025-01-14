# Open Interpreter
## Scope
我们的工作范围是什么？
Open Interpreter 包含两个相互支持的项目，其范围如下：
core 项目，致力于研究如何让语言模型安全地控制计算机。目前，这意味着要创建一个语言模型可以操作的实时代码执行环境。
终端接口（terminal_interface），这是一种纯文本方式，供用户指挥运行在core 内的 LLM。这包括将内核连接到各种本地和托管 LLM 的功能（内核本身不应该知道这些 LLM）。
什么不在我们的范围内？
我们的指导思想是极简主义，因此我们还决定明确将以下内容视为范围之外：
运行代码之外的核心附加功能。
在terminal_interface中与 LLM 进行文本之外的更复杂交互（但文本中可以包含图片或视频等更复杂输入的文件路径）。

What's in our scope?
Open Interpreter contains two projects which support each other, whose scopes are as follows:
core, which is dedicated to figuring out how to get LLMs to safely control a computer. Right now, this means creating a real-time code execution environment that language models can operate.
terminal_interface, a text-only way for users to direct the code-running LLM running inside core. This includes functions for connecting the core to various local and hosted LLMs (which the core itself should not know about).
What's not in our scope?
Our guiding philosophy is minimalism, so we have also decided to explicitly consider the following as out of scope:
Additional functions in core beyond running code.
More complex interactions with the LLM in terminal_interface beyond text (but file paths to more complex inputs, like images or video, can be included in that text).