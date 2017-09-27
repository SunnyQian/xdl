// 项目的主入口文件

// 引入模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var getType = require('./getType');

/**
* 定义读取指定文件的进行响应的函数 readFile()
*/
function readFile(filename,req,res){
	// 所读取的文件是否存在
	fs.readFile(filename,function(err,data){
		if(!err){
			// 设置响应头
			res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

			// 设置响应的数据
			res.write(data);

			// 响应结束
			res.end();
		}
	})	
}

// 搭建web服务，设置监听的端口号和IP地址
http.createServer(function(req,res){
	// req request 请求
	// res response 响应

	// /favicon.ico 请求收藏夹的图标,需要过滤该请求
	if(req.url=='/favicon.ico'){
		return;
	}

	// 监听用户请求的IP地址
	console.log(req.url);

	/*
		用户访问网站
			/ 首页 			网站的根请求
			/sendMoney 	汇款


		路由 Router  --> 你想干什么，你想上哪儿去
		视图 View    --> 呈现的内容
	*/
	if(req.url=='/'){
		// 读取首页
		readFile('./index.html',req,res);
	}else if(req.url=='/sendMoney'){
		// 读取汇款页面
		readFile('./sm.html',req,res);
	}else{
		// 在Node.js中任何一个url地址请求都要进行处理

		// 定义文件路径
		var newFile = path.join('./',req.url);

		// 读取静态资源时
		fs.readFile(newFile,function(err,data){
			// console.log(err);
			// console.log(data);
			if(err){
				fs.readFile('./404.html',function(err,data){
					// 响应
					if(!err){
						res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
						res.write(data);
						// 是否可以
						res.end();
					}
				})
			}else{
				// 文档头没有写！--- 根据用户请求的文件类型不同来加载不同的 content-type
				res.writeHead(200,{'content-type':getType(path.extname(newFile))})

				// getType('.css')
				// console.log(getType(path.extname(newFile)));

				// 进行响应
				res.write(data);
				res.end();
			}
		})
		// 读取404页面
	}

}).listen(8080,'192.168.31.254',function(){
	console.log('服务器已经运行在 192.168.31.254:8080位置');
});