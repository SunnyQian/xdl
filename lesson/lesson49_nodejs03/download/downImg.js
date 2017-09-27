// 使用Node.js将远程的img图片下载到本地

// 加载http模块
var http = require('http');
var fs = require('fs');
var path = require('path');

/**
* 定义下载抓取图片的函数 downImg()
* @param string imgUrl 图片的url地址
* @param string savePath 保存图片路径(地址)
*/
function downImg(imgUrl,savePath){
	// 定义图片的url地址
	// var imgUrl = 'http://www.itxdl.cn/uploadfile/2017/0915/20170915094215375.jpg';

	// http 模块 --> 作为客户端发送请求 --> 发送get方式请求
	http.get(imgUrl,function(im){
		// im 从服务器端返回的数据
		// console.log(im);

		// 设置数据传输的编码格式
		im.setEncoding('binary');	// 二进制数据

		// 定义接收传递的数据变量
		var data = '';

		// 监听数据传输事件
		im.on('data',function(chunk){
			// console.log(chunk);

			// 拼接每一块儿传输的数据
			data += chunk;
		});

		// 数据传输完毕
		im.on('end',function(){
			// console.log('数据传输完毕。。。');

			// 输出data
			// console.log(data);

			// 将读取到的数据写入到本地文件中 // ./imgs/1.jpg
			fs.writeFile(path.join(savePath+path.basename(imgUrl)),data,'binary',function(err){
				console.log(err);
			})
		})
	});
}

// 将模块向外导出
module.exports = downImg;
