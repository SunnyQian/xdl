1. Web网站工作原理
	a. 用户通过客户端向服务器发送一个请求时，对应的服务器会向客户端发送一个响应
	b. 访问某一个网页或者是网站，一般来说都不是一次性就完成，而是一个来来回回的过程

	request 	请求
	response 	响应

2. 异步和同步的区别：
	异步：两个事情同时发生，相互不阻塞
	同步：有一个先后的顺序，会发生阻塞

3. 原生的Ajax

4. jQuery版的Ajax

5. 服务器端(后端)开发语言
	Node.js 平台，使用js作为开发语言
	PHP 
	Java
	C
	....

	关于PHP

========================
Ajax 的数据请求方式
	1. 创建Ajax对象
		var x = new XMLHttpRequest();

	2. 设置事件监听函数
		// 当readyState状态码发生变化时
		x.onreadystatechange = function(){
			// readyState 0-4 4的时候表示响应结束

			// HTTP状态码 200 表示成功了

			// 响应回来的数据
				约定 ok 表示允许使用
				约定 buok 表示不允许使用
		}

	3. 初始化请求
		// 以一种什么样的形式来访问指定的地址
		x.open('get','地址',true)	// true 代表了异步

		// 使用get的方式传递数据，携带的数据要添加到URL地址
			(get,.demo.php?me=zhangcheng,true)
					参数名：me
					参数值：zhangcheng

			服务器使用GET方式进行接收：$_GET

	4. 发送请求
		x.send()