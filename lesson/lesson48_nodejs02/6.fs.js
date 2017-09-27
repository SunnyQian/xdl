// fs 文件系统模块 字节级操作

// 加载模块
var fs  = require('fs');

// console.log(fs.open);

/*
	打开某个文件 进行读取操作
	fs.open() 打开某个文件
		r 		只读，表示不可写(文件不存在会报错)
		r+ 		可读可写，以读为主(文件不存在会报错)
		w 		只写，不可读(当文件不存在时自动创建)
		w+ 		可写可读，以写为主(当文件不存在时自动创建)
		a		追加写，不可读(文件不存在自动创建)
		a+  	可写可读，追加写(文件不存在自动创建)
*/ 
fs.open('./memedas.txt','a+',function(err,fd){
	// err 错误标记
	// fd 打开文件的标记
	// console.log(err);
	// console.log(fd);

	if(err){
		console.log('数据有误，请重新尝试...');
		// 终止程序
		return;
	}

	// 创建一个存储的容器
	var buf = Buffer.alloc(10);

	/*
		fs.read() 读取
			fd 		打开的文件标记
			buf 	用于存储的容器
			0		指从buf中开始写入的位置
			3 		指要读取的字节数量
			0 		从文件中索引0位置开始读取
	*/ 
	fs.read(fd,buf,0,3,0,function(err,bytesRead,buffer){
		console.log(err);			// 错误信息
		// console.log(bytesRead);		// 读取的字节数
		// console.log(buffer.toString());

		// console.log(buf.toString());
	})

	/*
		fs.write()
			fd 		打开的文件标记
			Buffer.from() 要写入的数据
			1 		表示从索引1开始
			4 		表示要写入的长度为4
			0 		表示从fd文件的索引0位置开始写
	*/ 
	fs.write(fd,Buffer.from('哈哈哈'),0,3,0,function(err){
		/*
			错误信息：Error: EPERM: operation not permitted, write errno: -4048, code: 'EPERM', syscall: 'write'

			operation not permitted 操作不允许，权限不足
		*/ 
		console.log(err);
	});

	// fs.close() 关闭
	fs.close(fd,function(){
		console.log('操作完毕，进行关闭');
	});
});
