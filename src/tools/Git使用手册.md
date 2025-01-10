---
icon: lightbulb
---
# Git使用手册
## 基本概念
工作区(在电脑上能看到的目录) <br/>
暂存区(git add之后的状态) <br/>
版本库(git commit之后的状态) <br/>
远程仓库 <br/>
## 初始操作
``` <br/>
//查看用户名和邮箱地址： <br/>
git config user.name <br/>
git config user.email <br/>

//设置姓名和邮箱地址 <br/>
git config --global user.name "zz" <br/>
git config --global user.email "xxx@163.com" <br/>

// 设置代理 (这里走的是socks5协议，注意改代理服务器ip和端口)  两条命令要同时运行 <br/>
git config --global http.https://github.com.proxy socks5://127.0.0.1:10808 <br/>
git config --global https.https://github.com.proxy socks5://127.0.0.1:10808 <br/>

//查看git设置列表信息 <br/>
git config --list <br/>

//设置SSH Key <br/>
ssh-keygen -t rsa -C 'xxx@163.com'(第一次回车，第二次输入密码，第三次再次输入密码) <br/>
//查看SSH Key(~表示用户目录，比如我的windows就是C:\Users\Administrator) <br/>
cat ~/.ssh/id_rsa.pub <br/>
//验证ssh key是否添加成功，两个里看需求进行连接测试 <br/>
ssh -T git@gitlab.com <br/>
ssh -T git@github.com <br/>

//初始化仓库 <br/>
git init <br/>
``` <br/>
## 常用操作
### 日常操作
#### 场景1：提交
``` <br/>
git pull --rebase origin xxx <br/>
git add .//工作区的修改添加到暂存区 <br/>
git commit -m "修改readme"//暂存区提交到版本库 <br/>
git push origin xxx <br/>
git checkout dev //切换分支 <br/>
git checkout -b zlz_test //新建分支 <br/>
``` <br/>
#### 场景2：查看
``` <br/>
git status//查看状态 <br/>
git diff//在没add之前，查看工作区和暂存区的区别 <br/>
git diff HEAD//查看工作区和版本库的区别 <br/>
git diff head --readme.txt//查看指定文件的工作区和版本库的区别 <br/>
``` <br/>
#### 场景3：暂存
``` <br/>
git stash//把当前工作现场“储藏”起来，等以后恢复现场后继续工作 <br/>
git stash pop//恢复的同时把stash内容也删了 <br/>
git stash list//查看储藏记录列表 <br/>

stash信息解读 <br/>
stash@{index}: WIP on [分支名]: [最近一次的commitID] [最近一次的提交信息] <br/>
Note：如果多次stash <br/>
``` <br/>
### rebase操作
#### 合并多条commit记录
##### 0.只能rebase你自己使用的分支，永远不要rebase一个和别人共用的分支
##### 1.看提交记录，确定要从哪个commit开始合并
如果要把上次合到主分支之后的代码提交都合并，那就选合到主分支的那个commit作为本次合并的base记录，注意这个commit并不会包括进来，左开右闭。 <br/>
``` <br/>
git log --graph --oneline <br/>

Note：上下键滚动、Q键退出 <br/>
``` <br/>
##### 2.执行git rebase -i命令
``` <br/>
git rebase -i base_commit_id <br/>
``` <br/>
##### 3.出现如下界面，按i进入编辑，把除了第一个以外的pick的都改成s，按Esc退出编辑，按:wq保存
Note：s是squash的缩写 <br/>
![image.png](images/Git使用手册-1.png) <br/>
##### 4.出现如下界面，按i进入编辑，把第一条提交信息改成合并后想展示的提交信息，把除了第一条以外的提交信息用#注释掉，按Esc退出编辑，按:wq保存
![image.png](images/Git使用手册-2.png) <br/>
##### 5.再看提交记录，多个commit已经合并成一条记录，完成
#### 提交记录不出现pull
##### 1.执行git pull --rebase
``` <br/>
git pull --rebase origin xxx_branch <br/>
``` <br/>
##### 2.如果报错，进行stash暂存，重新执行git pull --rebase
``` <br/>
Note：执行时必须保持工作区干净,否则报如下错误，需提交或暂存工作区修改内容 <br/>
error: cannot pull with rebase: You have unstaged changes. <br/>
error: please commit or stash them. <br/>
``` <br/>
``` <br/>
git stash <br/>

git pull --rebase origin xxx_branch <br/>
``` <br/>
##### 3.1.如果出现冲突，解决冲突
##### 去IDEA看冲突文件，手动解决好冲突，然后执行如下命令
``` <br/>
git add one.md <br/>

git rebase --continue <br/>
``` <br/>
##### 3.2.如果出现冲突，放弃本次rebase操作
``` <br/>
git rebase --abort <br/>
``` <br/>
### 分支操作
``` <br/>
git branch//查看本地分支 <br/>
git branch -a//查看远程分支和本地分支 <br/>
git branch -r//查看远程分支 <br/>
git branch dev//创建 <br/>
git branch -D local_branch_name  //删除本地分支 <br/>
git checkout -b dev(本地分支名称) origin/develop(远程分支名称)  //建立和远程分支一致的本地分支 <br/>
git checkout -b dev//创建并切换 <br/>
git checkout dev//切换 <br/>
git checkout -//切换到上一个分支 <br/>
(在master分支上操作,不推荐)git merge dev//把dev分支的工作成果合并到master分支上 <br/>
(在master分支上操作,推荐)git merge --no-ff -m "merge with no-ff" dev//--no-ff参数，表示禁用Fast forward <br/>
//在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息 <br/>
git branch -D dev//删除dev分支 <br/>
``` <br/>
### 远程操作
``` <br/>
git remote//查看远程库的信息 <br/>
git remote -v//显示更详细的信息 <br/>
git push -u origin dev//推送分支并建立关联(第一次推送)(如果远程仓库没有此分支,就会创建对应的远程分支) <br/>
git push origin master//上传本地指定分支到远程仓库 <br/>
git push//推送到对应的远程仓库 <br/>
git push -f//强推 <br/>
git pull//获取最新的远程仓库分支 <br/>
git pull origin master//取回远程仓库的变化，并与本地分支合并 <br/>


git branch --set-upstream-to=origin/dev dev//关联本地分支和远程分支 <br/>
git remote add origin git@github.com:wangjiax9/practice.git //关联远程仓库 <br/>
git clone git@github.com:michaelliao/gitskills.git//克隆一个本地库 <br/>
git checkout -b dev origin/dev//创建远程分支对应的本地分支并切换过来 <br/>
git clone -b <branch name> [remote repository address]//克隆某一个特定的远程分支（推荐此） <br/>
例如：git checkout -b dev git@github.com:michaelliao/gitskills.git  --> 然后导入已有的git项目 <br/>

``` <br/>
### 暂存操作
stash 藏 <br/>
将当前未提交的修改（即，工作区的修改和暂存区的修改）先暂时储藏起来 <br/>
一般操作：现有分支暂存，切到主分支，拉新分支改bug提交，再切回原分支 <br/>
Q1：把未提交的暂存起来，但不切分支，在该分支上修改提交 <br/>
Q2：把未提交的暂存起来，但从现有分支切新分支，在新分支修改提交，再切回原分支 <br/>
## 历史操作
``` <br/>
git log//穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本 <br/>
git log --pretty=oneline//查看提交历史,简化显示 <br/>
git log --graph//以图表形式查看分支 <br/>
git log --graph --pretty=oneline --abbrev-commit//以图表形式查看分支,简化显示 <br/>
git reflog//要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本 <br/>
git checkout -- file//可以丢弃工作区的修改 <br/>
git reset HEAD file//把暂存区的修改撤销掉（unstage），重新放回工作区 <br/>
git reset --hard head^//退到上一个版本 <br/>
git reset --hard head^^//退到上两个版本 <br/>
git reset --hard 1094a//退到版本号为1094a的版本（版本号不用写全） <br/>
``` <br/>
## 不常用操作
```shell <br/>
## 删除 untracked files
git clean -f//连 untracked 的目录也一起删掉 <br/>
git clean -fd//连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的） <br/>
git clean -xfd//在用上述 git clean 前，强烈建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删，如下 <br/>
git clean -nf <br/>
git clean -nfd <br/>
git clean -nxfd <br/>
``` <br/>
## 问题解决记录

## git pull之后进入特殊界面
![image.png](images/Git使用手册-3.png) <br/>
解决：不是错误。按ESC，输入":wp"，按回车键退出 <br/>
