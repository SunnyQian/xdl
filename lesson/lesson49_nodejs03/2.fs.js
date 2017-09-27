// 文件的流式操作
var fs = require('fs');

// 文件的流式读取

// 创建可读流
var rs = fs.createReadStream('./css.chm'); 

// console.log(rs);

// 定义空字符串，接收传递的数据
var data = '';

// 读取事件
rs.on('data',function(chunk){
	// chunk 每一次读取的小数据块
	console.log(chunk);

	// 将每次读取的数据块进行拼接
	data += chunk;
});

// 读取完毕事件
rs.on('end',function(){
	// 输出总的数据
	console.log('已经读取完毕了...');
	// console.log(data);
});

// 监听错误事件
rs.on('error',function(err){
	console.log('读取失败，错误原因：'+err);
});

// 创建可写流
var ws = fs.createWriteStream('./test.txt');

// 进行写入数据传输,数据传输完毕
ws.on('finish',function(){
	console.log('已经写入完毕了...');
});

// 监听出错
ws.on('error',function(){
	console.log('数据写入失败...');
})

// 写数据
ws.write('这个位置是一个问题！');

// 手动标记写入结束
ws.end();
