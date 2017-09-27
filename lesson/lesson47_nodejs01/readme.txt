一、区别概念：
	ECMAScript : 
		标准(ECMA 欧洲计算机制造商协会)，由W3C T39号委员会进行维护

	JavaScript:
		ECMAScript 核心语法 + DOM + BOM (浏览器)

	Node.js:
		一个采用了Chrome的V8引擎来解析JS的平台
		使用的语言是JavaScript，只包含了ECMAScript核心语法结构

		Node.js是一个采用事件驱动机制，单线程的非阻塞式I/O模型

		事件环机制

	JS的用途：
		客户端浏览器进行运行
		Node.js允许使用javascript作为后台开发的语言
		使JS从单一的前端走向了全栈(客户端、服务器端)

	脚本语言：
		前端：
			HTML5
			CSS3
			JavaScript

		后台脚本：
			Node.js (后台脚本语言)
				1. 学习梯度较弱，一门语言，通前端+后端
				2. 一站式语言，全栈式编程
				3. 前端开发人员走向全栈的非常容易的一条道路
				4. 在B(百度)A(阿里)T(腾讯)、京东大型互联网公司Node.js都有一个深入使用
					Node.js 适用于高并发的业务场景

			PHP
			Java
			C
			Python

	服务器：
		Apache 服务器 + PHP 
		IIS 服务器 + ASP .net
		Tomcat 服务器 + JSP Java

		Node.js --> 
			使用JS自己搭建Web服务器解析脚本(JS脚本)
			Chrome浏览器发布新版本 采用 Chrome V8引擎(JS解析器)

	相关网站：
		https://nodejs.org/en/ 官网
		http://nodejs.cn/ 	Node.js中文网

	Node.js伴生：
		NPM Node Package Manager Node的包管理器
		什么是包：软件
			jQuery 
			Bootstrap
			vue 

		好处：
			1. 自动解决依赖关系
			2. 直接使用npm相关命令就可安装或者卸载相关的包

===========================
Node.js的基本使用
	1. 下载安装
	2. 检测是否成功安装
		a. 打开命令行 Win(菜单键)+R(快捷键)
		b. 在命令行中输入字符 node -v (检测当前安装的node的版本)
			检测Node.js的版本号
			C:\Users\Administrator>node -v
			v8.4.0

			C:\Users\Administrator>

			检测NPM的版本号 version
			C:\Users\Administrator>npm -v
			5.3.0

			C:\Users\Administrator>

	简述软件版本号：
		8.4.0
		主版本号.副版本号.修复Bug版本号

		主版本号		
			当软件有重大升级，并且不是特写向下兼容时，升级主版本号
				1.8.3 1.11.3 2.x.x
				没有支付功能，现有支付功能 
		副版本号
			软件添加了某些新功能
				不能支持微信支付，现在支持
		修复Bug版本号
			当修复了某个bug,或者是当前版本下小幅度升级时，可以更新版本号

REPL解析环境：
	解析JS的环境

	如何进入REPL的解析环境
		C:\Users\Administrator>node (回车)
		>

	如何退出REPL的解析环境
		1. .exit 退出
		2. 连着两次按键 Ctrl+C 终止程序

使用的Node解析js文件
	切换到对应的目录下，执行js文件
	node 文件名

Windows系统下的命令行操作命令
	
	切换系统盘目录 盘符名:
		切换到d --> d:

	dir 显示当前目录下所有的目录和文件
	cd 切换目录
		cd . 切换到当前目录
		cd .. 切换到上一级目录

	tab键 补全文件名或者是目录名
	cls 	清屏

认识Git Bash
	简介：Git Bash是Git软件自带的命令行操作工具，环境是linux环境

Linux系统下的命令行操作命令
	pwd 	显示当前所在的位置
	ls 		显示当前目录下所有的文件
	clear 	清屏


模块：
	功能

	模块分类：
		系统模块
			Node.js天生自带的模块

		第三方模块
			其他人已经定义好的，共享在NPM社区的

		自定义模块
			根据自己的需求定义模块(系统模块、第三方模块不能很好的完成自己的要求)

	加载模块：
		require('模块名')	
			1. 首先会自动去系统模块中进行查找，如果有就使用
			2. 如果系统模块中没有，自动从当前目录下的node_modules目录下查询对应模块

		require('路径+文件名')
			加载自定义模块

