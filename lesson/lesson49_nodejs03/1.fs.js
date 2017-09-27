// 引入模块
var fs = require('fs');

// fs.access()函数 判断文件(文件和目录)是否存在
fs.access('./memedas',function(err){
	// 错误信息标志
	console.log(err);

	// 判断文件和目录是否存在
	if(err.code == 'ENOENT'){
		console.log('文件或目录是不存在...');
	}
})

// 读取文件状态
fs.stat('./memedas.txt',function(err,stats){
	// err 错误信息标志
	// stats 状态信息对象(查看的文件或者是目录的相关信息)
	console.log(err);
	console.log(stats);

	// 目录是无法直接获取大小的，只有文件可以

	// 获取文件的大小
	console.log('文件的大小是：'+stats.size+' byte');

	// 文件创建时间 birthtime
	console.log('文件创建的时间：'+stats.birthtime.toLocaleString());

	// mtime modify 修改
	console.log('文件最后一次修改时间：'+stats.mtime.toLocaleString());

	// atime 文件最后一次访问时间
	console.log('文件最后一次访问时间：'+stats.atime.toLocaleString());

	// ctime 文件状态发生变化的时间 changetime
	console.log(stats.ctime.toLocaleString());

	// 判断当前传递的路径是目录还是文件

	// stats.isFile()判断是否是文件，如果是文件返回true;否则返回false
	var res = stats.isFile();			
	console.log(res);

	// stats.isDirectory() 判断是否是目录，如果是返回true,否则返回false
	var res = stats.isDirectory();
	console.log(res);
});