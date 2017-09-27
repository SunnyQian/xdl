/*
	文件系统：
		Linux/Unix (一切皆文件)
			file 			文件
			dir 			目录
			unknown 		未知文件
			block 			块状设备文件
			char 			字符型设备
			link 			链接
			fifo 			管道

		Windows
			file 			文件
			dir				目录
			unknown 		未知文件
*/

// fs File System 文件系统模块

// 引入模块
var fs = require('fs');

// console.log(fs);

// 创建目录 make directory ===> mkdir
fs.mkdir('./memeda',function(error){
	console.log(error);
});

// 删除目录 remove directory ===> rmdir
fs.rmdir('./memeda',function(error){
	console.log('删除成功...');
})