import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,e}from"./app-dVf4Oob3.js";const t={},s=e(`<h1 id="git使用手册" tabindex="-1"><a class="header-anchor" href="#git使用手册" aria-hidden="true">#</a> Git使用手册</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>工作区(在电脑上能看到的目录) <br> 暂存区(git add之后的状态) <br> 版本库(git commit之后的状态) <br> 远程仓库 <br></p><h2 id="初始操作" tabindex="-1"><a class="header-anchor" href="#初始操作" aria-hidden="true">#</a> 初始操作</h2><div class="language-&lt;br/&gt; line-numbers-mode" data-ext="&lt;br/&gt;"><pre class="language-&lt;br/&gt;"><code>//查看用户名和邮箱地址： &lt;br/&gt;
git config user.name &lt;br/&gt;
git config user.email &lt;br/&gt;

//设置姓名和邮箱地址 &lt;br/&gt;
git config --global user.name &quot;zz&quot; &lt;br/&gt;
git config --global user.email &quot;xxx@163.com&quot; &lt;br/&gt;

// 设置代理 (这里走的是socks5协议，注意改代理服务器ip和端口)  两条命令要同时运行 &lt;br/&gt;
git config --global http.https://github.com.proxy socks5://127.0.0.1:10808 &lt;br/&gt;
git config --global https.https://github.com.proxy socks5://127.0.0.1:10808 &lt;br/&gt;

//查看git设置列表信息 &lt;br/&gt;
git config --list &lt;br/&gt;

//设置SSH Key &lt;br/&gt;
ssh-keygen -t rsa -C &#39;xxx@163.com&#39;(第一次回车，第二次输入密码，第三次再次输入密码) &lt;br/&gt;
//查看SSH Key(~表示用户目录，比如我的windows就是C:\\Users\\Administrator) &lt;br/&gt;
cat ~/.ssh/id_rsa.pub &lt;br/&gt;
//验证ssh key是否添加成功，两个里看需求进行连接测试 &lt;br/&gt;
ssh -T git@gitlab.com &lt;br/&gt;
ssh -T git@github.com &lt;br/&gt;

//初始化仓库 &lt;br/&gt;
git init &lt;br/&gt;
\`\`\` &lt;br/&gt;
## 常用操作
### 日常操作
#### 场景1：提交
\`\`\` &lt;br/&gt;
git pull --rebase origin xxx &lt;br/&gt;
git add .//工作区的修改添加到暂存区 &lt;br/&gt;
git commit -m &quot;修改readme&quot;//暂存区提交到版本库 &lt;br/&gt;
git push origin xxx &lt;br/&gt;
git checkout dev //切换分支 &lt;br/&gt;
git checkout -b zlz_test //新建分支 &lt;br/&gt;
\`\`\` &lt;br/&gt;
#### 场景2：查看
\`\`\` &lt;br/&gt;
git status//查看状态 &lt;br/&gt;
git diff//在没add之前，查看工作区和暂存区的区别 &lt;br/&gt;
git diff HEAD//查看工作区和版本库的区别 &lt;br/&gt;
git diff head --readme.txt//查看指定文件的工作区和版本库的区别 &lt;br/&gt;
\`\`\` &lt;br/&gt;
#### 场景3：暂存
\`\`\` &lt;br/&gt;
git stash//把当前工作现场“储藏”起来，等以后恢复现场后继续工作 &lt;br/&gt;
git stash pop//恢复的同时把stash内容也删了 &lt;br/&gt;
git stash list//查看储藏记录列表 &lt;br/&gt;

stash信息解读 &lt;br/&gt;
stash@{index}: WIP on [分支名]: [最近一次的commitID] [最近一次的提交信息] &lt;br/&gt;
Note：如果多次stash &lt;br/&gt;
\`\`\` &lt;br/&gt;
### rebase操作
#### 合并多条commit记录
##### 0.只能rebase你自己使用的分支，永远不要rebase一个和别人共用的分支
##### 1.看提交记录，确定要从哪个commit开始合并
如果要把上次合到主分支之后的代码提交都合并，那就选合到主分支的那个commit作为本次合并的base记录，注意这个commit并不会包括进来，左开右闭。 &lt;br/&gt;
\`\`\` &lt;br/&gt;
git log --graph --oneline &lt;br/&gt;

Note：上下键滚动、Q键退出 &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 2.执行git rebase -i命令
\`\`\` &lt;br/&gt;
git rebase -i base_commit_id &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 3.出现如下界面，按i进入编辑，把除了第一个以外的pick的都改成s，按Esc退出编辑，按:wq保存
Note：s是squash的缩写 &lt;br/&gt;
![image.png](images/Git使用手册-1.png) &lt;br/&gt;
##### 4.出现如下界面，按i进入编辑，把第一条提交信息改成合并后想展示的提交信息，把除了第一条以外的提交信息用#注释掉，按Esc退出编辑，按:wq保存
![image.png](images/Git使用手册-2.png) &lt;br/&gt;
##### 5.再看提交记录，多个commit已经合并成一条记录，完成
#### 提交记录不出现pull
##### 1.执行git pull --rebase
\`\`\` &lt;br/&gt;
git pull --rebase origin xxx_branch &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 2.如果报错，进行stash暂存，重新执行git pull --rebase
\`\`\` &lt;br/&gt;
Note：执行时必须保持工作区干净,否则报如下错误，需提交或暂存工作区修改内容 &lt;br/&gt;
error: cannot pull with rebase: You have unstaged changes. &lt;br/&gt;
error: please commit or stash them. &lt;br/&gt;
\`\`\` &lt;br/&gt;
\`\`\` &lt;br/&gt;
git stash &lt;br/&gt;

git pull --rebase origin xxx_branch &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 3.1.如果出现冲突，解决冲突
##### 去IDEA看冲突文件，手动解决好冲突，然后执行如下命令
\`\`\` &lt;br/&gt;
git add one.md &lt;br/&gt;

git rebase --continue &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 3.2.如果出现冲突，放弃本次rebase操作
\`\`\` &lt;br/&gt;
git rebase --abort &lt;br/&gt;
\`\`\` &lt;br/&gt;
### 分支操作
\`\`\` &lt;br/&gt;
git branch//查看本地分支 &lt;br/&gt;
git branch -a//查看远程分支和本地分支 &lt;br/&gt;
git branch -r//查看远程分支 &lt;br/&gt;
git branch dev//创建 &lt;br/&gt;
git branch -D local_branch_name  //删除本地分支 &lt;br/&gt;
git checkout -b dev(本地分支名称) origin/develop(远程分支名称)  //建立和远程分支一致的本地分支 &lt;br/&gt;
git checkout -b dev//创建并切换 &lt;br/&gt;
git checkout dev//切换 &lt;br/&gt;
git checkout -//切换到上一个分支 &lt;br/&gt;
(在master分支上操作,不推荐)git merge dev//把dev分支的工作成果合并到master分支上 &lt;br/&gt;
(在master分支上操作,推荐)git merge --no-ff -m &quot;merge with no-ff&quot; dev//--no-ff参数，表示禁用Fast forward &lt;br/&gt;
//在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息 &lt;br/&gt;
git branch -D dev//删除dev分支 &lt;br/&gt;
\`\`\` &lt;br/&gt;
### 远程操作
\`\`\` &lt;br/&gt;
git remote//查看远程库的信息 &lt;br/&gt;
git remote -v//显示更详细的信息 &lt;br/&gt;
git push -u origin dev//推送分支并建立关联(第一次推送)(如果远程仓库没有此分支,就会创建对应的远程分支) &lt;br/&gt;
git push origin master//上传本地指定分支到远程仓库 &lt;br/&gt;
git push//推送到对应的远程仓库 &lt;br/&gt;
git push -f//强推 &lt;br/&gt;
git pull//获取最新的远程仓库分支 &lt;br/&gt;
git pull origin master//取回远程仓库的变化，并与本地分支合并 &lt;br/&gt;


git branch --set-upstream-to=origin/dev dev//关联本地分支和远程分支 &lt;br/&gt;
git remote add origin git@github.com:wangjiax9/practice.git //关联远程仓库 &lt;br/&gt;
git clone git@github.com:michaelliao/gitskills.git//克隆一个本地库 &lt;br/&gt;
git checkout -b dev origin/dev//创建远程分支对应的本地分支并切换过来 &lt;br/&gt;
git clone -b &lt;branch name&gt; [remote repository address]//克隆某一个特定的远程分支（推荐此） &lt;br/&gt;
例如：git checkout -b dev git@github.com:michaelliao/gitskills.git  --&gt; 然后导入已有的git项目 &lt;br/&gt;

\`\`\` &lt;br/&gt;
### 暂存操作
stash 藏 &lt;br/&gt;
将当前未提交的修改（即，工作区的修改和暂存区的修改）先暂时储藏起来 &lt;br/&gt;
一般操作：现有分支暂存，切到主分支，拉新分支改bug提交，再切回原分支 &lt;br/&gt;
Q1：把未提交的暂存起来，但不切分支，在该分支上修改提交 &lt;br/&gt;
Q2：把未提交的暂存起来，但从现有分支切新分支，在新分支修改提交，再切回原分支 &lt;br/&gt;
## 历史操作
\`\`\` &lt;br/&gt;
git log//穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本 &lt;br/&gt;
git log --pretty=oneline//查看提交历史,简化显示 &lt;br/&gt;
git log --graph//以图表形式查看分支 &lt;br/&gt;
git log --graph --pretty=oneline --abbrev-commit//以图表形式查看分支,简化显示 &lt;br/&gt;
git reflog//要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本 &lt;br/&gt;
git checkout -- file//可以丢弃工作区的修改 &lt;br/&gt;
git reset HEAD file//把暂存区的修改撤销掉（unstage），重新放回工作区 &lt;br/&gt;
git reset --hard head^//退到上一个版本 &lt;br/&gt;
git reset --hard head^^//退到上两个版本 &lt;br/&gt;
git reset --hard 1094a//退到版本号为1094a的版本（版本号不用写全） &lt;br/&gt;
\`\`\` &lt;br/&gt;
## 不常用操作
\`\`\`shell &lt;br/&gt;
## 删除 untracked files
git clean -f//连 untracked 的目录也一起删掉 &lt;br/&gt;
git clean -fd//连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的） &lt;br/&gt;
git clean -xfd//在用上述 git clean 前，强烈建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删，如下 &lt;br/&gt;
git clean -nf &lt;br/&gt;
git clean -nfd &lt;br/&gt;
git clean -nxfd &lt;br/&gt;
\`\`\` &lt;br/&gt;
## 问题解决记录

## git pull之后进入特殊界面
![image.png](images/Git使用手册-3.png) &lt;br/&gt;
解决：不是错误。按ESC，输入&quot;:wp&quot;，按回车键退出 &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[s];function d(v,b){return n(),l("div",null,r)}const c=i(t,[["render",d],["__file","Git使用手册.html.vue"]]);export{c as default};
