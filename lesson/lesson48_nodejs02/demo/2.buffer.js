/*
	Buffer:
		Node.js提供了专门与系统进行二进制数据交流的模块 --- 缓冲区
*/

// 1. 创建Buffer
var buf = Buffer.alloc(10);		// 相当于定义长度为10的空的buffer对象
console.log(buf);

// 2. 在buf对象中写入数据
buf.fill('abcdef');

console.log(buf);
console.log(buf.toString());

// 再次写入
buf.fill('g',1,2);			// 使用字母g进行填充，从索引1位置开始填充，在索引2之前填充结束
console.log(buf);
console.log(buf.toString());		// agcdefabcd

// buf.write()
buf.write('锄禾',3,3,'utf8');		// 写入 锄禾 两个字符，从buf对象的索引3位置开始写入，写6个字节

// 在Unicode字符中，一个中文占3个字节
console.log(buf);		// 锄禾abcd
console.log(buf.toString());		// 锄禾abcd


// 1. 使用Buffer.from()创建buffer对象
var buf = Buffer.from('我是中国人');
console.log(buf);

// 字符串长度 
var str = '我是中国人';

console.log(str.length);	// 5

// buf.length (字节)长度为15
console.log(buf.length);

// 获取字符串的字节长度
var byteLength = Buffer.byteLength(str);
console.log(byteLength);