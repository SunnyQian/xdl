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

		fs.writeFile('./test.html',dataStr,function(err){
			console.log(err);
		});

		// 定义字符串
		var newStr = `<ul class="picList">哈
		哈哈</ul>`;

		// 定义匹配指定区域的ul正则
		// 现在应该是所有的字符都进行匹配 
		// . 除了换行符以外的任意一个字符  换行符\n
		// \s 表示任意一个空白符
		var ulReg = /<ul class="picList">[.\n]<\/ul>/;
		console.log(ulReg);
		// 执行正则匹配
		var ulRes = ulReg.exec(newStr);

		console.log(ulRes);

		if(ulRes){
			// 对应小括号中的内容
			console.log(ulRes[1]);
		}
	})
});