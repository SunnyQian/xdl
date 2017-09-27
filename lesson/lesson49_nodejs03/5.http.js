/*
	Node.js走向服务器端，自己利用http模块搭建一个Web服务器
*/ 

/*
	网站访问原理：
		1. 在浏览器打开网址 http://www.baidu.com,相当于发送了一个请求
		2. 百度服务器在接收到请求之后，发送对应的数据(响应)
*/ 

// 加载模块
var http = require('http');

// 创建web服务器
var server = http.createServer(function(req,res){
	/*
		req request 客户端发送的请求
		res response 响应
	*/ 

	// 获取客户端请求的URL地址
	// console.log(req.url);

	// 请求的方法
	// console.log(req.method);

	/*
		设置响应头
			writeHead()
				200 	状态码
				content-type 文档类型
	*/ 
	res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

	// 获取客户端的IP地址
	console.log(req.connection.remoteAddress);
	var ip = req.connection.remoteAddress;

	// 响应
	res.write('<h3>欢迎你！</h3>'+ ip +'<img src="https://www.baidu.com/img/bd_logo1.png" alt="" />' );

	// 表示响应结束
	res.end();
});

// console.log(server);

// 设置服务器监听的IP地址和端口号
server.listen(8080,'192.168.31.254',function(){
	console.log('服务器已经在本地的IP地址 127.0.0.1:8080 位置运行了...');
});