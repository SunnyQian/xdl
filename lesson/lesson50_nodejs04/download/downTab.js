// 针对某一个栏目进行下载

// 加载模块
var http = require('http');
var fs = require('fs');
var downOne = require('./downOne');
var path = require('path');

/*
	1. 访问栏目的网页
	2. 抓取到每一个美女的页面url地址
	3. 调用函数
*/

// 定义三次元的网址
var tabUrl = 'http://tu.hanhande.com/scy/scy_1.shtml';

// 获取当前页面内所有的HTML代码
http.get(tabUrl,function(im){
	// 定义变量接收传输的数据 
	var dataStr = '';

	// 数据传输
	im.on('data',function(chunk){
		dataStr += chunk;
	});

	// 数据传输完毕
	im.on('end',function(){
		// dataStr
		// console.log(dataStr);

		// 匹配 <ul class="picList"> </ul>
		var ulReg = /<ul class="picList">([\s\S]*?)<\/ul>/;

		// 执行正则匹配
		var ulRes = ulReg.exec(dataStr);

		// console.log(ulRes);
		if(ulRes){
			// 包含链接地址的字符
			var aStr = ulRes[1];
			// console.log(aStr)

			// 定义正则表达式 匹配a链接
			var aReg = /<a.*?href="(.*?)".*?>.*?<\/a>/g;

			// 定义存储网页url地址的变量
			var webUrls = [];

			do{
				// 执行匹配
				var aRes = aReg.exec(aStr);
				if(aRes){
					// console.log(aRes[1]);

					// 没有的压入到webUrls
					if(webUrls.indexOf(aRes[1])==-1){
						webUrls.push(aRes[1]);
					}
				}
			}while(aRes);

			// 打印
			// console.log(webUrls);
			
			// 遍历每一个美女的网址
			webUrls.forEach(function(webUrl){
				// 创建目录(当前对应的目录是否已经存在了？)
				console.log(path.basename(webUrl,'.shtml'));

				// 定义路径
				var newPath = './imgs/'+path.basename(webUrl,'.shtml');
				fs.access(newPath,function(err){
					if(!err){
						// 目录是存在的
						downOne(webUrl,newPath);
					}else{
						// 有错误
						if(err.code=='ENOENT'){
							fs.mkdir(newPath,function(){
								downOne(webUrl,newPath);
							})
						}
					}
				});
			});
		}
	})
});