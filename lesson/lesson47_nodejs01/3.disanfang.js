// 第三方模块

// 访问NPM社区 https://www.npmjs.com/，查询需要的模块

// 格式化时间 2017-09-13 16:31:22

/*
	1. 安装下载第三方模块

	使用 npm install 包名 来下载安装包
		npm install time-stamp 
		在当前目录下产生 node_modules 目录，里面存放time-stamp模块
*/

// 2. 按照说明书去使用 

// 加载模块
var timeStamp = require('time-stamp');

// console.log(timeStamp);

// 调用指定的方法
var timeStr = timeStamp();	// 默认用法

// 定时器
setInterval(function(){
	// 获取指定格式的时间字符串
	var timeStr = timeStamp('YYYY年MM月DD日 HH:mm:ss');
	console.log(timeStr);
},1000);
