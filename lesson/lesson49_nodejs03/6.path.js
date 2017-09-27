// path 路径

// 加载模块
var path = require('path');

// 对路径进行解析
var url = 'https://www.baidu.com/img/bd_logo1.png';

/*
	解析路径
	{ 
	  root: '',		// 根
	  dir: 'https://www.baidu.com/img',	// 路径 目录
	  base: 'bd_logo1.png', 		// 包含了文件名和扩展名
	  ext: '.png',					// 扩展名
	  name: 'bd_logo1' }			// 单纯的文件名

*/ 
var pathObj = path.parse(url);

console.log(pathObj);

// path.dirname() 获取路径的目录部分
var dirname = path.dirname(url);
console.log(dirname);

// 获取文件的文件名和扩展名
var basename = path.basename(url);
console.log(basename);

// 单纯的扩展名
var extname = path.extname(url);
console.log(extname);

// 拼接路径
var newPath = path.join('./imgs','./1.jpg');

console.log(newPath);