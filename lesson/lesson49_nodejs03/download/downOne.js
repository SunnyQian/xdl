// 针对多个图片进行下载

// 加载自定义的抓取图片的模块
var downImg = require('./downImg');

// 加载模块
var http = require('http');
var fs = require('fs');

// console.log(downImg);

/**
* 定义下载一个美女所有图片的函数 downOne()
* @param string webUrl 要下载的美女所在的网址
* @param string savePath 要保存的文件路径
*/

function downOne(webUrl,savePath){
	// 定义要下载图片的网址
	// var webUrl = 'http://tu.hanhande.com/scy/7055833.shtml#p';

	// 对指定的网址发送请求
	http.get(webUrl,function(im){
		// 现在请求的网址的源代码
		var dataStr = '';

		// 数据传输
		im.on('data',function(chunk){
			dataStr += chunk;
		})

		// 数据传输完毕
		im.on('end',function(){
			// console.log(dataStr);

			// 将抓取到的字符串保存到本地
			// fs.writeFile('./demo.html',dataStr,function(err){
			// 	console.log(err);
			// })

			// 在dataStr中查询指定格式的字符串 ul id="picLists"
			// 定义正则表达式
			var ulReg = /<ul id="picLists">(.*?)<\/ul>/;

			// 执行正则匹配
			var ulRes = ulReg.exec(dataStr);

			// 获取第一个小括号中对应的数据
			// console.log(ulRes[1]);

			// 定义匹配img标签的正则表达式
			var imgReg = /<img.*?src='(.*?)'.*?>/g;

			// 定义存储url地址的容器
			var imgUrls = [];

			// 执行匹配
			do{
				var imgRes = imgReg.exec(ulRes[1]);

				// 判断
				if(imgRes){
					// 说明已经有匹配的结果
					// console.log(imgRes[1]);

					// 压入到指定的数组中
					imgUrls.push(imgRes[1]);
				}
			}while(imgRes);

			// 答应当前包含图片url地址的数组
			// console.log(imgUrls);

			// 针对该数组中每一个图片调用下载的函数
			// 定义图片存储的位置
			// var savePath = './imgs/';

			// 针对每一个图片地址进行遍历下载
			imgUrls.forEach(function(imgUrl){
				// 下载
				downImg(imgUrl,savePath);
			})
		})
	})
}

// 向外暴露模块
module.exports = downOne;