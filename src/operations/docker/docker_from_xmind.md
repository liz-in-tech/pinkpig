---
icon: lightbulb
---
# Docker1
## 理论
### 容器（container）
#### 概念
是一个具有视图隔离、资源可限制、独立文件系统的进程集合

可以理解为一个集装箱，里面放着一个或多个应用以及运行环境

#### 解决了几个重要问题
一个应用，因为环境不同，可能会出现各种各样本可以避免的问题

一个系统中，多个应用之间可能引发的各种冲突故障

相比传统的虚拟机，不吃资源，节省成本

#### 虚拟机和容器
![](images/docker_001.png)

##### 虚拟机模拟了一个操作系统
优：完全隔离

缺：消耗资源多

##### 容器针对进程而言，是进程级别的隔离，只需要一个独立的文件系统提供他所需要运行的所有文件集合即可
缺：隔离都是进程级别的，隔离效果比VM差

优：消耗资源少

### Docker
Docker是第一个广泛流行的开源的应用容器引擎。通过Docker开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux机器或Windows机器上

#### 底层实现原理
Docker底层用的Linux的cgroup和namespace这两项技术来实现应用隔离



![](images/docker_002.png)

##### 不进行隔离的进程特点
###### 1.可以相互看见，相互通信；
具有高级权限的进程，可以攻击其他进程

###### 2.使用同样的文件系统；
进程跟进程之间所需要的依赖可能会存在冲突

高级权限的进程可以破坏其他进程的运行

###### 3.使用同样的系统资源（CPU、内存等）
应用跟应用之间会存在资源的抢占问题

##### 隔离后的进程
1.资源视图隔离-namespace 可以采用这个技术来帮助对进程进行隔离，也就是在资源的视图上进行隔离；

2.独立的文件系统-chroot 给这些进程提供一个独立的运行环境，把一个子目录变成一个根目录，在视图级别进行隔离，可以有一个独立的文件系统，这样这个进程对这个文件系统的增删改查，都不会影响其他进程的使用。

3.资源控制使用率-cgroup 为了减少对其他进程的影响，可以限制资源使用率。

#### 架构
Docker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器

##### 一个完整的Docker有以下几个部分组成
![](images/docker_003.png)

###### Docker Client客户端。
Docker 客户端通过命令行或者其他工具使用 Docker API (https://docs.docker.com/reference/api/docker_remote_api) 与 Docker 的守护进程通信。

Docker Daemon守护进程。

###### Docker Image镜像。
Docker 镜像是用于创建 Docker 容器的模板

###### Docker Container容器。
容器是独立运行的一个或一组应用

###### Docker Registry仓库。
Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。

Docker Hub(https://hub.docker.com) 提供了庞大的镜像集合供使用。

Networks网络模型

Volumes存储卷模型。

#### 镜像和容器
##### 镜像
就是容器所需要的所有文件集合，具备一次构建到处运行的特点

##### 容器
就是和系统的其他部分隔离开的进程集合

##### 关系
镜像运行起来就是容器

Docker 容器通过 Docker 镜像来创建

镜像与容器的关系类似于面向对象编程中的类与对象

#### 应用场景
Web 应用的自动化打包和发布。

自动化测试和持续集成、发布。

在服务型环境中部署和调整数据库或其他的后台应用。

从头编译或者扩展现有的OpenShift或Cloud Foundry平台来搭建自己的PaaS环境。

#### 镜像的层次结构
当docker设计镜像底层结构时，为了节约存储控件，会将镜像设计成只读的分层结构。这样每一层只记录和前一层的文件差别。如果两个不同的镜像底层使用了相同的镜像层，则只需要存储一份就可以。这样就大大减小了冗余镜像存储的情况。

## Docker in windows
windows如何使用docker：打开Docker DeskTop在右下角可以看到图标后，cmd打开命令行即可使用

## 实践
### 命令行操作
#### Docker安装
##### linux环境
docker必须在linux内核上跑

windows上要装docker，需先装wsl（相当于vmware），然后装ubuntu（linux环境），之后才能跑docker

##### 安装Docker
###### 在Linux环境中安装Docker，你可以在任何目录下执行安装命令
因为Docker的安装通常涉及的操作有：下载Docker的安装包、解压安装包、执行安装脚本等，这些都是全局操作，不依赖于特定的目录。

至于在创建和管理Docker容器时，一般会在/home目录或者/var目录下进行，这主要取决于你具体的需求和习惯。例如，如果你需要挂载本地的某个目录到Docker容器中，就需要在对应的目录下进行操作。

##### 启动Docker服务
systemctl start docker.service

##### 配置国内镜像源加速下载镜像，并重启服务
systemctl restart docker.service 

##### 验证docker服务启动成功
docker version

##### 帮助命令
docker [command] --help

eg.docker stats --help  #查看 docker stats 指令的具体使用方法

#### Docker操作
##### 镜像管理
###### 在镜像源中查找容器镜像
####### docker search
eg.  docker search ubuntu  # 查找ubuntu的容器镜像

###### 拉取容器镜像到本地
####### docker pull
######## 不指定版本是拉取最新版本
eg.docker pull ubuntu

###### 查看本地镜像列表
docker images

###### 查看指定镜像详细信息
####### docker inspect 镜像名
会获得一个非常庞大的JSON格式字符串的详细信息

####### docker inspect -f "模板字符串" 镜像名
docker inspect -f "模板字符串" 镜像名 | jq
为了能从字符串中只获得我们需要的内容，我们可以使用-f参数对详细信息进行过滤和格式化

在参数后面再加入 | jq，将docker inspect的输出结果交给jq命令进行格式化和美化（jquery）

注意：过滤字符串中json后有一个空格，然后才是一个点

######## docker inspect -f "{\"Id\":{{json .Id}},\"RepoTags\":{{json .RepoTags}}}" python | jq
过滤只查2个信息

######## docker inspect -f "{{json .RootFS.Layers}}" python | jq
######### 镜像的层次关系
镜像信息的.RootFS.Layers位置可以查看镜像是由几层组成的

######### 普通镜像和快照镜像的区别
![](images/docker_004.png)

普通镜像一般由多层组成

快照镜像会将所有层压缩成一层

###### 删除镜像
####### docker rmi xxx
docker rmi无法删除已经创建了容器的镜像，如果需要删除需要先停止相关的容器，并添加--force参数

###### 镜像的保存与加载（在没有网络访问的情况下使用）
####### docker save
docker save的格式为：docker save -o [导出文件名] [需要导出的镜像列表]

docker save -o images.tar nginx hello-world

####### docker load
docker load的格式为：docker load -i [导入文件名]

要注意的是：如果docker内部已经存在了相关的镜像，文件中的镜像会被忽略

docker load -i images.tar

###### 通过容器生成镜像
在Docker中，容器镜像的制作有两种方法，分别是commit方法和build方法

基本上我们都会选择基于一个已有的容器镜像为基础，在此之上进行镜像制作

####### 生成镜像方式
######## docker build
docker commit命令将一个编辑好的容器，生成一个新的镜像。但是这种方法生成的容器可以查看的只有文件层面的变更内容，容器的使用者往往会搞不清楚在容器制作过程中执行了什么命令，按什么顺序执行了这些命令或者操作。因此除了这种方法之外，Docker还提供了另一种docker build的方式来构建容器。

######### 步骤
########## 使用vi命令生成Dockerfile
每行一条命令，每行的格式为：命令 参数

########### 支持的命令


![](images/docker_005.png)



![](images/docker_006.png)

########### 常用4个命令
############ FROM
指定基础镜像

############ RUN
在基础镜像之上执行一些命令

同时每一条命令需要使用一个RUN命令

############ WORKDIR
设置容器中的目标路径，类似于cd

############ ADD
从宿主机向容器中复制文件或从网络上下载文件到容器

当复制源文件的扩展名是.tar.gz格式时，该命令会将压缩包解压缩并复制到容器当中

########### 案例


![](images/docker_007.png)

########## 生成镜像
格式：docker build -t 容器镜像名 Dockerfile所在路径

如果Dockerfile文件就在控制台的当前目录下，一般使用.来设置

########### eg. docker build -t ub/build .


![](images/docker_008.png)

########## 验证
docker images

########### 查看新镜像的层
############ docker inspect -f "{{json .RootFS.Layers}}"  ub/build | jq
会发现ub/build在原有层之上构建了多个新的层

镜像的层数和镜像的步骤并不是严格的一一对应关系。这是因为docker会自动压缩一些没有实际产生数据修改的镜像，将多个临时镜像压缩成一层。比如WORKDIR命令所生成的中间状态。

########### docker history
通过docker build生成的镜像。除了docker inspcet之外，还可以通过docker history命令来查看通过Dockerfile定义的镜像的生成方式。我们可以看到docker history命令输出了镜像构建的过程信息，通过这一信息我们能比较清晰的看到镜像作者在制作镜像时的具体操作。



![](images/docker_009.png)

######## docker commit
######### 特点
docker commit命令生成镜像时，会在原有的镜像层之上添加一个新的层

######### 步骤
########## 查看容器修改内容
docker diff 容器名

docker diff ubuntu-commit

容器镜像的是以只读分层的方式进行存储的。当我们通过镜像创建容器之后，每一个容器都会生成一个可以编写的存储层，所有用户对容器的文件修改，都会记录在容器存储层中。当我们把容器镜像的只读层和容器存储层叠加起来之后，就得到了容器的完整存储内容。而docker diff命令查看的，正是容器存储层所保存的内容。

########## 通过容器生成镜像
docker commit 容器名 新镜像名

eg.  docker commit ubuntu-commit ub/commit

########### eg.  docker commit -m="has update" -a="edualiyun" e218edb10161 edualiyun/ubuntu:v2
-m:提交的描述信息

-a:指定镜像作者

e218edb10161：容器

edualiday/ubuntu:v2:指定要创建的目标镜像名

########## 验证
docker images

########### 查看新镜像的层
############ docker inspect -f "{{json .RootFS.Layers}}"  ub/commit | jq
会发现ub/commit在原有层之上构建了一个新的层。事实上这一层的内容就是将之前的ubuntu-commit容器存储层转化成镜像只读层。

######## 容器快照的导出和导入
######### 导出
docker export 容器名 > 快照文件名

导出当前的快照，修改部分也会同时导出

docker export python-1 > python-snapshot.tar  #导出快照
ll python-snapshot.tar                                            #查看导出的文件

######### 导入
docker import 快照文件 导入镜像名称:版本号

导入的会是一个镜像

docker import python-snapshot.tar python-snapshot:latest

######### 利用导入的镜像创建容器
docker run -itd --name snapshot python-snapshot /bin/bash  # 最后得加bin/bash

该容器就包含了导出前修改的部分

##### 容器管理
###### 创建容器
####### docker create
######## eg. docker create -it ubuntu
使用下载好的ubuntu镜像创建容器；如果本地镜像没有该镜像，会先拉取最新版本容器镜像到本地，再进行创建容器

因为我们要创建一个可以持久运行的ubuntu容器，因此需要添加-it参数

######## 创建指定名称的容器
docker create -it --name ubuntu-1 ubuntu

使用--name参数指定名称

如果不指定名称，会生成一个随机的名称

###### 查看现有的容器
####### 查看所有状态的容器
######## docker ps -a
参数-a表示all

####### 查看正在运行的容器
docker ps

####### 查看指定容器
docker top xxx

###### 启动/运行容器
####### 容器的快速启动方式：下载镜像，创建容器，启动容器一条龙服务
######## docker run（仅第一次，之后都用docker start）
docker run xxx

######### 启动长期运行的一次性容器
########## docker run -it xxx
将会进入容器内部，退出容器回到宿主机用exit命令，一旦退出，容器也会关闭，只适用通过容器执行一些临时性操作时使用



![](images/docker_010.png)

######### 启动长期后台运行的容器
########## docker run -itd --name ubuntu-2 ubuntu
不会进入容器内部，仍然在宿主机

######### 参数
########## -it
长期运行

-it一般都一起用

-i:允许你对容器内的标准输入 (STDIN) 进行交互

-t:在新容器内指定一个伪终端或终端

########## -d
后台运行

########## --name
名称

Note:后面跟多个字母或字符，要用--

########## -e
########### 环境变量，可以有多个
############ docker run -it --name env1 -e ECHO=环境变量 -e NUM=123456 busybox
echo $ECHO $NUM    // 在终端输出ECHO和NUM变量（环境变量）的值

########## -v
挂载文件或文件夹，将宿主机中的文件或文件夹挂载到容器中

########### 文件挂载的时候，宿主机和容器中的文件的关系更像是linux中的硬链接。也就是虽然看起来是两个文件，但是双方实际上在共享同一个物理文件
修改一方，另一方也会受影响

如果容器中的挂载点已存在文件或文件夹，则会被宿主机的同名文件夹或文件覆盖

用法：-v 宿主机文件的绝对路径:容器文件的绝对路径

########### 示例
eg.  docker run -itd --name file2 -v $(pwd)/local.txt:/mount.txt busybox

eg.  docker run -itd --name mysql-mount -e MYSQL_ROOT_PASSWORD=[MYSQL密码] -v /root/mysql/config/my.cnf:/etc/my.cnf mysql:8.0

eg.  docker run -itd --name folder1 -v $(pwd)/mount:/mount folder

########### 高级功能
############ 容器挂载的权限
如果用户希望控制文件在容器中是否可以被修改，那么可以用rw或者readwrite参数将挂载文件设置为读写权限，或者使用ro或者readonly参数设置为只读权限

docker run -itd --name share-readonly -v $(pwd)/share.txt:/share.txt:ro busybox    #容器内只读，宿主机可读写

############ 多个容器同时挂载一个文件
不同的容器可以使用不同的权限挂载同一个文件

docker run -itd --name share-readonly -v $(pwd)/share.txt:/share.txt:ro busybox 

docker run -itd --name share-readwrite -v $(pwd)/share.txt:/share.txt:rw busybox

  # 宿主机同一个文件被挂载到share-readonly容器和share-readwrite容器，权限分别为只读和读写，宿主机也可以读写

########## -p
端口映射

########### -p 8000:80   #将容器的80端口映射到宿主机的8000端口
在宿主机通过curl命令访问127.0.0.1:8000验证容器服务

########### eg.  docker run -itd -p 8800:80 --name nginx_4 nginx:latest  #启动容器并暴露端口
8800:80，前者8800代表宿主机对外暴露的端口，

      后者80代表找到内网的80端口进行实际的访问。

      容器内部的 80 端口映射到我们本地主机的 8800 端口上

####### docker start
eg. docker start ubuntu-1

仅仅有启动容器的功能

###### 停止容器
docker stop xxx

####### 停止所有的容器
docker stop `docker ps -aq`

Note： `为Tab键上面的那个

###### 设置容器开机自启动
####### 设置
docker update --restart always <container_id_or_name>

####### 验证
docker inspect --format='{{.HostConfig.RestartPolicy.Name}}'  <container_id_or_name>

上述命令结果为always即设置成功

###### 重启容器
docker restart xxx

###### 删除容器
docker rm xxx

####### 强制删除
docker rm -f xxx

f为force

###### 操作容器
####### docker exec
######## 进入容器内进行操作
######### eg. docker exec -it ubuntu-2 bin/bash
eg. docker exec -it busybox-1 sh
退出用exit命令

########## 在docker中，传统的ubuntu或者centos镜像所包含的命令数量都非常少，每次使用时都需要手动安装相关命令非常不方便，因此在实际使用docker时，我们经常使用busybox镜像来作为基础镜像。
为了保证镜像体积，busybox镜像中并不包括bash命令，而是使用了替代的sh命令

Note:/bin/bash为解释器,在启动的容器里执行的命令

######## 在宿主机内操作容器
######### docker exec 容器名 bash -c "命令行"
docker exec python-1 bash -c "echo snapshot > snapshot.txt"
docker exec python-1 bash -c "cat snapshot.txt"

######### docker exec 容器名 命令行
docker exec ubuntu-commit apt-get update  # 对 ubuntu-commit容器执行apt-get update

docker exec file1 cat local.txt  # 对file1容器执行cat local.txt

###### 容器内操作
####### 安装命令工具
在docker中，传统的ubuntu或者centos镜像所包含的命令数量都非常少，每次使用时都需要手动安装相关命令

######## apt-get update
apt-get -y python3 net-tools curl
在容器中安装python3，ifconfig，curl三个命令行工具。其中ifconfig命令工具需要安装net-tools工具包

##### 存储管理
###### 宿主机和容器之间的文件复制
####### 向容器中复制文件时，会以宿主机中的文件为样本向容器中复制一个文件的副本。在复制完成之后宿主机和容器中的文件是没有关联的。
修改一方，另一方不会受影响

####### 在文件复制时容器中文件的描述方式为，容器名:容器文件路径
docker cp 文件目录 容器ID:内部路径

docker cp 容器ID:内部路径 文件目录

####### 示例
docker cp local.txt  container1:/local.txt  #将宿主机的local.txt复制到容器

docker cp mysql:/etc/my.cnf /root/mysql/config/my.cnf  # 将mysql容器中的配置文件复制到宿主机

###### 挂载方式（bind mount方式）
适用场景：将宿主机中的文件共享到容器中的场景

####### docker run -v 参数进行挂载宿主机路径到容器
详见docker run处

###### volume方式（持久化方式）
####### 适用场景：将容器中的数据持久化保存到宿主机中的场景
容器的停止和删除并不会影响volume的存在

数据卷的生命周期是独立于容器的生命周期的，也就是说容器的创建运行停止删除，都跟数据卷的生命周期没有任何关系

####### 这种方式通常会先在宿主机中通过docker volume命令创建一个具有名称的volume，然后再将这个volume挂载到容器中
相比较于bind mount方式，这种方式在使用的时候完全使用docker命令，并不需要向bing mount方式那样依赖于宿主机的绝对目录

一个volume可同时绑定到多个容器中

####### 步骤
######## 1.创建volume
格式：docker volume create [volume名]

eg. docker volume create file-vol

######## 2.挂载volume
docker run 的-v参数挂载volume，只需用volume名称代替宿主机路径即可

当我们使用docker run 创建容器并使用-v挂载volume的时候，如果需要加载的volume还没有被创建，则docker run会自动创建volume

######### volume的多重绑定
使用多个-v参数绑定多个volume

eg.  docker run -itd --name vol3 -v ext-vol:/ext -v file-vol:/file busybox 

######## 3.查看volume信息
格式：docker volume inspect [volume名]

docker volume inspect file-vol

### Docker Compose操作
#### 命令行操作的痛点
随着docker run参数的增多，命令行的长度会越来越长。再加上复杂的服务往往由多个不同的容器共同组成，这样在创建一个完整的服务的时候，就会输入多条超长的命令。这时候我们就可以考虑使用docker compose

docker compose 是一个用go语言开发的docker扩展程序，通过docker compose我可以使用配置文件的方式来同时管理多个容器。可以对所有配置文件里的容器批量操作。

#### 安装Docker Compose
##### 插件安装方式（推荐，作为一个插件）
在centos或者redhat系统中，我们可以通过yum以插件的方式安装docker compose

yum install -y docker-compose-plugin   # 安装
docker compose version                           # 验证

这种方式在安装之后使用docker compose命令进行运行（中间是空格）

##### 单独应用安装方式（作为一个单独应用）
这种方式在安装之后使用docker-compose命令进行运行（中间是横杠）

# 安装
curl -SL https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
# 添加权限
chmod +x /usr/local/bin/docker-compose
# 验证
docker-compose version 

#### 编写yml格式配置文件
##### yml格式
YML通过行前的空格来表明内容之间的层次关系

元素前加入- （横杠）代表是数组

##### yml中配置与run命令选项的对应


![](images/docker_011.png)



![](images/docker_012.png)



![](images/docker_013.png)

##### 案例：lilishop集群模式部署docker-compose脚本
version: '3.7'

# Settings and configurations that are common for all containers
x-minio-common: &minio-common
  image: quay.io/minio/minio:RELEASE.2022-07-08T00-05-23Z
  command: server --console-address ":9001" http://minio{1...4}/data{1...2}
  expose:
    - "9000"
    - "9001"
  environment:
    MINIO_ROOT_USER: AKIAIOSFODNN7EXAMPLE
    MINIO_ROOT_PASSWORD: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
  healthcheck:
    test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
    interval: 30s
    timeout: 20s
    retries: 3

# starts 4 docker containers running minio server instances.
# using nginx reverse proxy, load balancing, you can access
# it through port 9000.
services:
  minio1:
    <<: *minio-common
    hostname: minio1
    volumes:
      - data1-1:/data1
      - data1-2:/data2

  minio2:
    <<: *minio-common
    hostname: minio2
    volumes:
      - data2-1:/data1
      - data2-2:/data2

  minio3:
    <<: *minio-common
    hostname: minio3
    volumes:
      - data3-1:/data1
      - data3-2:/data2

  minio4:
    <<: *minio-common
    hostname: minio4
    volumes:
      - data4-1:/data1
      - data4-2:/data2

  nginx:
    image: nginx:1.19.2-alpine
    hostname: nginx
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    ports:
      - "9000:9000"
      - "9001:9001"
    depends_on:
      - minio1
      - minio2
      - minio3
      - minio4

## By default this config uses default local driver,
## For custom volumes replace with volume driver configuration.
volumes:
  data1-1:
  data1-2:
  data2-1:
  data2-2:
  data3-1:
  data3-2:
  data4-1:
  data4-2:


#### 启动配置文件中描述的容器
##### docker compose up -d                                                        # 默认yml文件docker-compose.yml
docker compose -f docker-compose-minio.yml up -d    # 用-f指定yml文件
docker compose -f db.yml -f cache.yml -f app.yml -p wp up -d  # 多个yml文件
-d表示后台运行

通过-p参数指定资源所在的Project

#### 特定容器操作（类似原生Docker命令）
##### 案例
version: "3.9"
services:
    web:
       container_name: web
       image: "httpd:latest"
       ports:
          - "5000:80"
          - "6000:8000"
    db:
       container_name: db
       image: "mysql"
       volumes:
          - "mysql-vol:/var/lib/mysql"
       environment:
          MYSQL_ROOT_PASSWORD: "root"
volumes:
    mysql-vol: {}

docker compose exec db ls
docker compose cp docker-compose.yml db:/root/
docker compose exec db bin/bash -c "cat /root/docker-compose.yml"

#### 配置文件中描述的容器的批量操作
##### 启停删除
###### docker compose pause
docker compose unpause

docker compose stop
docker compose restart

docker compose down
同up命令一致，默认yml文件为docker-compose.yml

docker compose -f docker-compose-minio.yml  pause # 指定yml文件

##### 容器状态查询
和使用docker原生命令相比，docker compose只会对配置文件中包含的容器生效。并不需要具体指定容器名，降低了操作复杂性。

docker compose ps
docker compose top
docker compose images

