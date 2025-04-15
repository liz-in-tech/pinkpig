---
icon: lightbulb
---
# ipdb

## control flow

| command | desc | eg |
|--|--|--|
| n (next line) | step over to next line(not step in) | n |
| s (next line) | step into function to execute next line | s |
| c (continue)  | keep run to next breakpoint | c |
| r (return)    | execute until current function return | r |
| q (quit)      | quit and kill program | q |
| j <lineno>    | jump to specific line number (be careful) | 


## breakpoint
| command | desc | eg |
|--|--|--|
| b (break) [location] | 设置断点 | b 10 (第10行)<br>b my_function (函数入口) |
| tbreak [location] | 临时断点（命中后自动删除） | tbreak 20 |
| cl (clear) [bpnumber] | 清除断点 | cl 1 (清除断点1) |
| disable [bpnumber] | 禁用断点 | disable 1 |
| enable [bpnumber] | 启用断点 | enable 1 |
| ignore [bpnumber] [count] | 忽略断点次数 | ignore 1 5 (忽略断点1前5次触发) |
| condition [bpnumber] [expr] | 条件断点 | condition 1 x > 5 (当x>5时触发断点1) |


## show

| command | desc | eg |
|--|--|--|
|l (list) | show code around current position | l |
|l <start_line>,<end_line>  | show code from <start_line> to <end_line> | p 50, 150 |
| p (print) | print value of variable | p x |