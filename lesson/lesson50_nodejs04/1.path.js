// path 操作路径
var path = require('path');

// 定义文件路径
var filePath = '/user/index.html';

// path.parse()
var pathObj = path.parse(filePath);
console.log(pathObj);

/*
	path.dirname() 		获取路径名
	path.extname() 		获取扩展名
	path.basename() 	获取完整文件名
*/ 
var filename = path.basename(filePath);		// index.html
var filename = path.basename(filePath,'.html');		// index
console.log(filename);

// path.join() 连接路径
var newPath = path.join('./','/user/','index.html');	// ./user/index.html
// var newPath = path.join('./','/user/','../index.html');	// ./user/../index.html 
console.log(newPath);

// path.relative() 从第一个参数的路径到第一个参数的路径，该怎么走
var newPath = path.relative('./user/index/1.html','./a/bbb/c.html');
console.log(newPath);

// path.resolve() 将路径转为绝对路径
var newPath = path.resolve('./index.html');
console.log(newPath);

// 判断当前的路径是否是绝对路径
// 以 / 是绝对路径
var res = path.isAbsolute('/http://www.baidu.com');
console.log(res);

// path.format() 将包含path信息的对象转为path字符串
var pathObj = {
	dir : './user/index',
	base : 'index.html'
}

// 格式化路径对象，返回路径字符串
var newPath = path.format(pathObj);
console.log(newPath);