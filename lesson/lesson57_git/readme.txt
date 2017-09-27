Git 版本控制器

用途：
	一个项目在进行开发时，多人协作开发
	分布式版本控制器


安装
	git官网 https://git-scm.com/

基本使用
	1. 创建工作目录(仓库)
	mkdir jd

	2. 初始化仓库
	$ git init
	Initialized empty Git repository in D:/wamp/www/H5-31/lesson57_git/jd/.git/

	说明：
		.git 目录
			记录了整个项目的信息，

		master 主分支

	3. 获取当前版本仓库的状态
	$ git status
	On branch master

	No commits yet

	Untracked files:
	  (use "git add <file>..." to include in what will be committed)

	        index.html

	nothing added to commit but untracked files present (use "git add" to track)

	4. 将文件提交到暂存区
		git add index.html 

	5. 将文件提交到分支中
		git commit -m "注释..."

		说明：
			第一次提交文件到版本库时，需要验证身份
				说明你叫什么名字
					git config --global user.name 'huxiaoshuai'
				说明邮件地址
					git config --global user.email 'justbecoder@aliyun.com'

	6. 查看历史操作
		git log

	7. 版本的回退
		git reset --hard HEAD^1 		上一个版本

		git reset --hard commit_id 		指定版本的commit_id


	8. 开发原则：
		在master主分支中，一直运行的是OK的项目
			创建一个开发分支 dev ,表示正在开发的分支
				每一个人创建一个分支 
					huxiaoshuai
					jack


		创建分支
			git branch dev 

		查看分支
			git branch 

		切换分支
			git checkout branch


	9. 版本仓库 (GitHub网站)
		提供代码的托管

		a. 创建远程仓库

		b. 将合法的身份添加到仓库的白名单中
			
		c. 将项目克隆到本地

		d. 将修改完毕的数据推送到服务器
			前提：
				本地与服务器要创建联系
					$ git remote add origin git@github.com:justbecoder/H5-31memeda.git

				查看
					git remote (只是查看名称)
					git remote -v 查看所有的详情

			推送：
				git push origin master


多人协作开发：
	1. 创建一个公共的版本仓库

	2. 授权(将每一个账户的ssh key 将其添加到仓库的白名单中)

	3. 使用clone将项目拉取到本地
		git clone git@github.com:justbecoder/H5-31memeda.git


	本地分支要想和远程服务器的分支进行数据的合并：
		1. 保证和远程的版本是一致的！
			git pull origin master

		2. 合并
			CONFLICT 冲突 (content): Merge conflict in index.html
			Automatic merge failed; fix conflicts and then commit the result.

			git diff 显示当前目录下所有的文件内容冲突

			找人确定什么要，什么不要！
			git add
			git commit -m

		3. 推送到远程的分支
			git push origin master



关于Linux命令行下的编辑器 Vim
	命令模式： (使用ESC切换到命令模式)
		运行命令
			:w 		保存
			:q 		退出
			:wq 	先保存再退出

	插入模式： (使用i或者a切换到输入模式)
		输入内容
			aaaa


多人协作开发步骤：
	1. 在GitHub网站创建一个版本仓库(组长)
	2. 组长给每个人分配任务
		每一个人都有自己的GitHub账号，fork组长的仓库


		个人用户操作
			2. 每一个人在本地克隆一份服务器的数据
				git clone git@github.com:justbecoder/H5-31memeda.git

				指定本地的文件夹名称
				git clone git@github.com:justbecoder/H5-31memeda.git demo

			3. 在master分支的基础上创建自己独有的分支
				git branch huxiaoshuai

			4. 在自己的分支上进行相应的开发
				git add
				git commit -m

			5. 合并分支
				切换到 主分支
					git checkout master
				合并
					git merge huxiaoshuai

			6. 将本地数据推送到远程版本仓库
				将远程对应分支的数据拉取到本地，进行对比更新
					git pull origin master

				将本地的版本推送到远程服务器
					git push origin master

	3. 自己的功能开发完成之后 pull request 
		告诉组长，我的功能开发OK了，你看看行不行

	4. 组长审核功能
		a. 直接在github上直接查看