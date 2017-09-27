/*
	模块：
		指一个功能，独立功能
		Node.js中一个文件都可以称之为一个模块！

	模块分类：
		系统模块 
			Node.js天生自带的模块
				fs 文件系统
				http Web服务模块
		第三方模块 (共享在npm社区的模块)
			其他人已经定义好的模块
				拿过来用就行

		自定义模块
			自己根据自己的需求定义模块
*/ 

// 系统模块

// 引入文件系统模块
var fs = require('fs');	// fs 是文件系统模块的模块名

// console.log(fs);


// 创建目录
/*
	调用fs.mkdir()方法，将要创建目录名进行传递(./memeda)，进行创建目录，成功或者失败的信息会自动返回到回调函数中

	在Node.js中采用的是error-first的机制，回调函数的第一个参数接受的时错误信息
		如果值是null，表示没有错误，成功了;
		如果有错误，表示失败了
*/
fs.mkdir('./memeda',function(error){
	/*
		 EEXIST: file already exists 文件已经存在了...
	*/ 
	// console.log(error);

	// 判断
	if(!error){
		console.log('恭喜你，目录创建成功...');
	}else{
		// 创建失败 --- 1.已经存在了.. 2. 其他意外情况
		if(error.code=='EEXIST'){
			console.log('目录已经存在了...');
		}else{
			console.log('数据异常，请重新尝试...');
		}
	}
});

console.log('我先回被输出...');