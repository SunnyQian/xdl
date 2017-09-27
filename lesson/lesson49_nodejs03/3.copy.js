// 实现大文件的复制操作

// 引入模块
var fs = require('fs');
var zlib = require('zlib');

// 复制css.chm

// 创建可读流
var rs = fs.createReadStream('./css.chm');

// 创建可写流
var ws = fs.createWriteStream('./copy.chm');

// 将可读流通过管道方法写入到可写流中
rs.pipe(ws);

// 监听写入完毕
ws.on('finish',function(){
	console.log('已经复制完毕了...');
});

// 利用管道符和压缩文件模块，压缩文件

// 创建压缩方式
// console.log(zlib);
var gzip = zlib.createGzip();

// 创建可读流
var rs = fs.createReadStream('./css.chm');

// 可写流
// 压缩文件命名规则：保留源文件名+压缩文件后缀
var ws = fs.createWriteStream('./css.chm.rar');	

// 进行数据传输
rs.pipe(gzip).pipe(ws); 
