/*
	1. 认识Node.js的概念
		Node.js是一个采用了事件驱动的单线程，非阻塞式I/O模型
		Node.js推荐使用的是异步的操作
		Node.js提供的是一个解析JavaScript的平台，允许JS进行服务器端的开发

	2. Node.js提供的REPL的解析环境

	3. 使用Node.js执行解析JS文件,使用JS文件脱离了浏览器依然可以执行

	4. 认识模块的概念
		模块：一个相对独立的功能
			在Node.js中一个文件都可以称之为一个模块

		分类：
			系统模块:
				Node.js天生自带的模块

			第三方模块
				其他人定义好的，共享在NPM社区的模块

			自定义模块
				根据自己的需求自定义模块

				定义模块需要供其他模块进行使用：
					向外暴露(导出)
						会导出一个对象，相应的键名指向了对应的变量
							exports.keyName = 变量
							module.exports.keyName = 变量

						直接将变量进行导出
						module.exports = 变量 
*/