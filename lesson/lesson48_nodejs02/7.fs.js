// fs.rename() 重命名、剪切

// 加载模块
var fs = require('fs');

/*
// 重命名
fs.rename('./memeda.txt','papapa.txt',function(err){
	console.log(err);
})
*/

// 剪切
fs.rename('./papapa.txt','./demo/papapa.txt',function(err){
	console.log(err)
});

// 实现文件的复制 
// readFile 一次性读取
fs.readFile('./yangyang.jpg',function(err,data){
	// console.log(err);
	// console.log(data);
	if(!err){
		// data 读取的数据
		// 将读取的数据写入到指定的文件中
		fs.writeFile('./doubi.jpg',data,function(err){
			if(!err){
				console.log('复制成功...');
			}
		})
	}
});