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

	// 获取文件的大小
	console.log('文件的大小是：'+stats.size+' byte');
});