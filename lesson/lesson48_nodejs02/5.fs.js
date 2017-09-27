// file相关操作

// 引入模块
var fs = require('fs');

// fs.readFile() 读取文件的内容
fs.readFile('./shi.txt',function(err,data){
	// 错误标志
	// console.log(err);

	// data 读取的缓冲区数据
	// console.log(data.toString());
});

// 写入
var dataStr = '治水非常着急，后来和他老婆在石头上，后来就有了孙悟空，因为孙悟空可以使用定海神针；孙悟空上了天宫定住了七仙女，有了葫芦娃，葫芦娃合起来是一块儿石头！';

/*
	fs.writeFile() 向文件中写入数据
		1. 当文件不存在时自动创建
		2. 默认是覆盖写的形式
*/
fs.writeFile('./tangshi.txt',dataStr,{
	// 定义编码格式
	encoding : 'utf8',

	// 写入数据的方式
	flag  : 'a'		// append 追加
},function(err){
	console.log(err);
});

// linux 命令 cat 预览

// 定义buffer对象
var buffer = Buffer.from('这是\n中文');

// fs.appendFile()
fs.appendFile('./haha.doc',buffer,function(err){
	console.log(err);
});

// 删除文件 fs.unlink()
fs.unlink('./shi.txt',function(err){
	console.log(err);
})