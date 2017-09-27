// 加载模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var getType = require('./getType');
// console.log(getType);

// 搭建Web服务器
http.createServer(function(req,res){
	// 查看req.url

	console.log(req.url);

	// 过滤收藏夹图标
	if(req.url=='/favicon.ico'){
		return;
	}

	// 首页请求
	if(req.url=='/'){
		// 响应首页
		fs.readFile('./index.html',function(err,data){
			if(!err){
				// 响应数据
				res.writeHead(200,{'content-type':'text/html'});
				res.write(data);
				res.end();
			}
		})
	}else if(req.url=='/list'||req.url=='/memeda'){
		// 看列表页
		fs.readFile('./list.html',function(err,data){
			if(!err){
				// 响应数据
				res.writeHead(200,{'content-type':'text/html'});
				res.write(data);
				res.end();
			}
		})
	}else if(req.url=='/details'){
		fs.readFile('./details.html',function(err,data){
			if(!err){
				// 响应数据
				res.writeHead(200,{'content-type':'text/html'});
				res.write(data);
				res.end();
			}
		})
	}else if(req.url=='/gouwuche'){
		fs.readFile('./shopcar.html',function(err,data){
			if(!err){
				// 响应数据
				res.writeHead(200,{'content-type':'text/html'});
				res.write(data);
				res.end();
			}
		})
	}else{
		// 读取静态资源(CSS、JS、img、其他资源文件)
		var newFile = path.join('./',req.url);
		fs.readFile(newFile,function(err,data){
			// console.log(err);
			if(err){
				// 响应404错误页面
				fs.readFile('./404.html',function(err,data){
					if(!err){
						res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
						res.write(data);
						res.end();
					}
				});
			}else{
				// 读取静态资源是OK的
				var type = getType(path.extname(newFile));
				res.writeHead(200,{'content-type':type});
				// console.log(getType(path.extname(newFile)));
				res.write(data);
				res.end();
			}
		})
	}

}).listen(8080,'192.168.31.254',function(){
	console.log('服务器已经运行了...');
})