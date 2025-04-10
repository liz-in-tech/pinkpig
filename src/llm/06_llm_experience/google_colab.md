# 注意事项
资源限制：Google Colab 免费版提供的 GPU（如 T4、K80 或 P100）是动态分配的，类型和可用性取决于当前负载，可能无法选择特定型号。

运行时限制：免费版最多连续运行 12 小时（视使用情况可能更短），闲置一段时间后会断开连接。

使用建议：若 GPU 未被充分利用，Colab 可能会提示切换回标准运行时（CPU）。建议仅在需要时启用 GPU，以避免浪费资源或触发使用限制。

解决无 GPU 可用问题：若提示“无法连接到 GPU”，可能是资源耗尽，建议稍后重试或使用多个 Google 账号切换。

其他选项
若需更稳定或更强的 GPU（如 A100），可以考虑升级到 Colab Pro 或 Colab Pro+，这些付费版本提供更高优先级和更多计算资源。

更改运行时后，当前环境会重置，已安装的库需重新安装。

# google colab 恢复初始环境，也就是什么都没操作过之前
Runtime -> Disconnect and delete runtime

# google colab 初始环境
google colab 初始环境预装了很多常用的 Python 包，尤其是机器学习、数据分析相关的，目的是让你可以开箱即用、节省安装时间

一些不兼容的情况，可能是与预装的包相关，也可能是用户安装的包之间的版本相关

案例一：

预装的包里gcsfs 和 fsspec版本不兼容用户需安装的包，所以要把gcsfs 和 fsspec版本设定为兼容的版本
```
# 安装这些包需要 1 min
!pip install \
  fsspec==2024.12.0 \
  gcsfs==2024.12.0 \
  datasets \
  transformers \
  accelerate \
  evaluate \
  bitsandbytes \
  trl \
  peft
```

pip install前后的变化：
- google colab原本有的包
    - accelerate                         1.5.2
    - peft                               0.14.0
    - transformers                       4.50.3
    - fsspec                             2025.3.2
    - gcsfs                              2025.3.2
- 变动的包
    - bitsandbytes                       0.45.4
    - datasets                           3.5.0
    - dill                               0.3.8
    - evaluate                           0.4.3
    - fsspec                             2024.12.0
    - gcsfs                              2024.12.0
    - multiprocess                       0.70.16
    - trl                                0.16.1
    - xxhash                             3.5.0

# google colab 避免重复安装包
## 结论
如果import缺少包，则直接执行pip install，也不需要国内镜像源

```
import importlib.util

def is_installed(pkg_name):
  return importlib.util.find_spec(pkg_name) is not None

if not is_installed("bitsandbytes"): # 这里选一个pip install前后有变化的包进行验证
  !pip install \
  fsspec==2024.12.0 \
  gcsfs==2024.12.0 \
  datasets \
  transformers \
  accelerate \
  evaluate \
  bitsandbytes \
  trl \
  peft
```

## 为什么会重复安装包
在 Google Colab 中，每次启动运行单元（notebook）时，都是一个全新的干净 Python 环境，也就是：

- 没有你之前安装的任何第三方库（除了一些 Colab 自带的）
- 所有依赖都需要重新安装
- 所有文件、变量都会在断连或重新启动后消失

## google colab 使用国内镜像源反而更慢
查询IP地址和地理位置
```
!curl ipinfo.io
```

google colab的ip是在US, 离PyPI 官方源更近
```
{
  "ip": "34.150.241.254",
  "hostname": "254.241.150.34.bc.googleusercontent.com",
  "city": "Washington",
  "region": "District of Columbia",
  "country": "US",
  "loc": "38.8951,-77.0364",
  "org": "AS396982 Google LLC",
  "postal": "20004",
  "timezone": "America/New_York",
  "readme": "https://ipinfo.io/missingauth"
}
```

不使用国内镜像源pip install 需要 1min54s
使用国内镜像源pip install 需要 11min47s

## 解决途径：用 Colab 的“挂载 Google Drive”+ 缓存机制
### 实验结果
drive挂载需要 5min
pip install 仅需1min54s

### 适用场景
包非常大（例如开源模型权重），缓存可以避免下载失败或限速

### 挂载 Google Drive 慢的原因
Google Drive 不是本地磁盘
挂载 /content/drive 其实是通过 FUSE 网络协议访问远程文件，不是真正“本地磁盘” → IO 比较慢

首次挂载过程慢
drive.mount() 本质上要登录 + 加载你的整个 Google Drive 根目录，加载时间可能 30s～2 分钟

安装 .whl 文件本质还是解压 + 安装
安装 .whl 也需要时间，尤其是像 transformers 和 datasets 这样体积比较大的包 → 加上 Drive 的读写延迟，反而会更慢

### 怎么挂载
安装包并存入drive
```
# Step 1: 在colab根目录创建wheels目录并下载包，下载为.whl文件（只需运行一次）
!mkdir -p wheels
!pip download fsspec==2024.12.0 gcsfs==2024.12.0 datasets transformers accelerate evaluate bitsandbytes trl peft -d wheels

# Step 2: 挂载 Google Drive，把下载好的包保存到 Google Drive
from google.colab import drive
drive.mount('/content/drive')
!cp -r wheels /content/drive/MyDrive/

# Step3:查看google drive的内容是否符合预期
MyDrive/
  └── wheels/
        ├── transformers-4.39.0-py3-none-any.whl
        ├── datasets-2.19.1-py3-none-any.whl
        └── ...
```

以后每次使用时运行的 Notebook（从 Google Drive 安装）
```
# Step 1: 挂载 Google Drive
from google.colab import drive
drive.mount('/content/drive')

# Step 2: 安装缓存的 .whl 包
!pip install -q /content/drive/MyDrive/wheels/*
```