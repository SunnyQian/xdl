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
});

// 读取目录
fs.readdir('./demo',function(err,files){
	// 判断是否有错误
	if(err){
		// 有错误
		if(err.code=='ENOENT'){
			console.log('目录是不存在滴....');
		}
	}else{
		// 
		console.log('读取成功');

		// 返回的是当前读取的目录下所有的目录和文件名的数组
		console.log(files);

		// 遍历
		files.forEach(function(file,index){
			console.log(file);
		});
	}
});