---
icon: lightbulb
---
# 常用命令

## 开启代理
export用于设置环境变量，只在当前终端会话有效，关闭终端后失效
export http_proxy="http://127.0.0.1:10808"
export https_proxy="http://127.0.0.1:10808"
echo用于在终端输出文字或变量的值：echo $http_proxy

os.environ['http_proxy']='http://127.0.0.1:10808'
os.environ['https_proxy']='http://127.0.0.1:10808'

## ipdb
在重要位置打断点
import ipdb; ipdb.set_trace()

不需要 local_mode=True

verl trainer ray_trainer.py

## 常用命令
查看显存，查看cuda版本命令
```
nvidia-smi
```
看显存使用情况（1秒刷新一下）
```
watch -n 1 nvidia-smi
```

杀掉进程
```
ps -ef | grep xxx

kill -s 9 <pid>

ray stop
```

```
htop # 查看内存和CPU
```
