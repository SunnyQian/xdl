1. 有木有一个功能：
	监听我文件发生改变，自动重启node服务
	
	supervisor 监督者

	a. 全局安装supervisor模块
		npm install time-stamp 在当前目录下产生 node_modules 目录(局部安装)
		npm install -g supervisor 在系统用户目录下

	b. node 文件名 ----> supervisor 文件名
		


2. npm 下载模块时去的网址npm社区的官网
	从国内到国外(网速较慢)

	国内的镜像(CNPM)  http://npm.taobao.org/

	使用CNPM的方式
		a. 全局安装cnpm模块，同时设置镜像源
			npm install -g cnpm --registry=https://registry.npm.taobao.org

		b. cnpm -v 检测cnpm的版本
		c. 之前所有使用node的命令，使用cnpm代替
