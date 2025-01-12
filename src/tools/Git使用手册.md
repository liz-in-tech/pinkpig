---
icon: lightbulb
---
# Git使用手册
## 基本概念
工作区(在电脑上能看到的目录)  
暂存区(git add之后的状态)  
版本库(git commit之后的状态)  
远程仓库  

## 初始操作(从无到有)
```
# step1:初始化仓库
git init

# step2:设置全局或局部姓名和邮箱地址
git config --global user.name "liz"
git config --global user.email "xxx@gmail.com"

# 查看git配置信息
git config --list

# step3:设置SSH Key
1）生成SSH Key
ssh-keygen -t rsa -C 'xxx@gmail.com'(第一次回车，第二次输入密码，第三次再次输入密码)

2）查看SSH Key(~表示用户目录)
cat ~/.ssh/id_rsa.pub

3）在Github中配置SSH Key
复制id_rsa.pub中的内容到github

4）验证
ssh -T git@github.com

5）克隆Github代码
git clone xxx
```

## 常用操作
### 日常操作
#### 场景1：提交
```
git pull --rebase origin xxx 
git add .//工作区的修改添加到暂存区 
git commit -m "修改readme"//暂存区提交到版本库 
git push origin xxx 
git checkout dev //切换分支 
git checkout -b zlz_test //新建分支 
```
#### 场景2：查看
``` 
git status//查看状态 
git diff//在没add之前，查看工作区和暂存区的区别 
git diff HEAD//查看工作区和版本库的区别 
git diff head --readme.txt//查看指定文件的工作区和版本库的区别 
``` 
#### 场景3：暂存
``` 
git stash//把当前工作现场“储藏”起来，等以后恢复现场后继续工作 
git stash pop//恢复的同时把stash内容也删了 
git stash list//查看储藏记录列表 

stash信息解读 
stash@{index}: WIP on [分支名]: [最近一次的commitID] [最近一次的提交信息] 
Note：如果多次stash 
``` 
### rebase操作
#### 合并多条commit记录
##### 0.只能rebase你自己使用的分支，永远不要rebase一个和别人共用的分支
##### 1.看提交记录，确定要从哪个commit开始合并
如果要把上次合到主分支之后的代码提交都合并，那就选合到主分支的那个commit作为本次合并的base记录，注意这个commit并不会包括进来，左开右闭。 
``` 
git log --graph --oneline 

Note：上下键滚动、Q键退出 
``` 
##### 2.执行git rebase -i命令
``` 
git rebase -i base_commit_id 
``` 
##### 3.出现如下界面，按i进入编辑，把除了第一个以外的pick的都改成s，按Esc退出编辑，按:wq保存
Note：s是squash的缩写 
##### 4.出现如下界面，按i进入编辑，把第一条提交信息改成合并后想展示的提交信息，把除了第一条以外的提交信息用#注释掉，按Esc退出编辑，按:wq保存
##### 5.再看提交记录，多个commit已经合并成一条记录，完成
#### 提交记录不出现pull
##### 1.执行git pull --rebase
``` 
git pull --rebase origin xxx_branch 
``` 
##### 2.如果报错，进行stash暂存，重新执行git pull --rebase
``` 
Note：执行时必须保持工作区干净,否则报如下错误，需提交或暂存工作区修改内容 
error: cannot pull with rebase: You have unstaged changes. 
error: please commit or stash them. 
``` 
``` 
git stash 

git pull --rebase origin xxx_branch 
``` 
##### 3.1.如果出现冲突，解决冲突
##### 去IDEA看冲突文件，手动解决好冲突，然后执行如下命令
``` 
git add one.md 

git rebase --continue 
``` 
##### 3.2.如果出现冲突，放弃本次rebase操作
``` 
git rebase --abort 
``` 
### 分支操作
``` 
git branch//查看本地分支 
git branch -a//查看远程分支和本地分支 
git branch -r//查看远程分支 
git branch dev//创建 
git branch -D local_branch_name  //删除本地分支 
git checkout -b dev(本地分支名称) origin/develop(远程分支名称)  //建立和远程分支一致的本地分支 
git checkout -b dev//创建并切换 
git checkout dev//切换 
git checkout -//切换到上一个分支 
(在master分支上操作,不推荐)git merge dev//把dev分支的工作成果合并到master分支上 
(在master分支上操作,推荐)git merge --no-ff -m "merge with no-ff" dev//--no-ff参数，表示禁用Fast forward 
//在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息 
git branch -D dev//删除dev分支 
``` 
### 远程操作
``` 
git remote//查看远程库的信息 
git remote -v//显示更详细的信息 
git push -u origin dev//推送分支并建立关联(第一次推送)(如果远程仓库没有此分支,就会创建对应的远程分支) 
git push origin master//上传本地指定分支到远程仓库 
git push//推送到对应的远程仓库 
git push -f//强推 
git pull//获取最新的远程仓库分支 
git pull origin master//取回远程仓库的变化，并与本地分支合并 


git branch --set-upstream-to=origin/dev dev//关联本地分支和远程分支 
git remote add origin git@github.com:wangjiax9/practice.git //关联远程仓库 
git clone git@github.com:michaelliao/gitskills.git//克隆一个本地库 
git checkout -b dev origin/dev//创建远程分支对应的本地分支并切换过来 
git clone -b <branch name> [remote repository address]//克隆某一个特定的远程分支（推荐此） 
例如：git checkout -b dev git@github.com:michaelliao/gitskills.git  --> 然后导入已有的git项目 
``` 
### 暂存操作
stash 藏  
将当前未提交的修改（即，工作区的修改和暂存区的修改）先暂时储藏起来  
一般操作：现有分支暂存，切到主分支，拉新分支改bug提交，再切回原分支  
Q1：把未提交的暂存起来，但不切分支，在该分支上修改提交  
Q2：把未提交的暂存起来，但从现有分支切新分支，在新分支修改提交，再切回原分支  

## 历史操作
``` 
git log//穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本 
git log --pretty=oneline//查看提交历史,简化显示 
git log --graph//以图表形式查看分支 
git log --graph --pretty=oneline --abbrev-commit//以图表形式查看分支,简化显示 
git reflog//要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本 
git checkout -- file//可以丢弃工作区的修改 
git reset HEAD file//把暂存区的修改撤销掉（unstage），重新放回工作区 
git reset --hard head^//退到上一个版本 
git reset --hard head^^//退到上两个版本 
git reset --hard 1094a//退到版本号为1094a的版本（版本号不用写全） 
``` 
## 不常用操作
```shell 
## 删除 untracked files
git clean -f//连 untracked 的目录也一起删掉 
git clean -fd//连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的） 
git clean -xfd//在用上述 git clean 前，强烈建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删，如下 
git clean -nf 
git clean -nfd 
git clean -nxfd 
``` 
## 问题解决记录
### git pull之后进入特殊界面
解决：不是错误。按ESC，输入":wp"，按回车键退出 
