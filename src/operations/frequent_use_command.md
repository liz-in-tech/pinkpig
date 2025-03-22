# 常用命令

## 开启代理
export用于设置环境变量，只在当前终端会话有效，关闭终端后失效
export http_proxy="http://127.0.0.1:10808"
export https_proxy="http://127.0.0.1:10808"
echo用于在终端输出文字或变量的值：echo $http_proxy

os.environ['http_proxy']='http://127.0.0.1:10808'
os.environ['https_proxy']='http://127.0.0.1:10808'


