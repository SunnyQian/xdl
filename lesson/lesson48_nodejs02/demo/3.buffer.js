// Buffer对象常用方法

// 定义buffer对象
var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('def');

console.log(buf1,buf2);

// 连接
/*
	buf1和buf2进行连接时：
		遇到+，字符串连接运算符，触发自动类型转换，将对象转为字符串，进行拼接
*/ 
var newBuf = buf1 + buf2;		
console.log(typeof newBuf);		// string

// 直接打印
console.log(newBuf);

// buffer对象进行拼接
var newBuf = Buffer.concat([buf1,buf2,Buffer.from('ggg')]);
console.log(newBuf.toString());

// 比较 compare
var buf1 = Buffer.from('dbc');
var buf2 = Buffer.from('bbc');

/*
	compare 比较的结果只有3种：
		1 		表示大
		0		表示相等
		-1		表示小
*/
var res = Buffer.compare(buf1,buf2);
console.log(res);

/*
	Buffer.isBuffer 判断当前对象是否是buffer对象
		判断方式：
			如果是Buffer对象，那么返回true；否则返回false
*/ 
var str = 'this is a buffer';	// 字符串
var str = Buffer.from('');		// buffer对象

var res = Buffer.isBuffer(str);
console.log(res);		

// buffer对象的取值
// var buf = Buffer.from('我是中文');
var buf = Buffer.from('abc');
console.log(buf);
// 取值 buf[index]

// 如何将unicode编码的数值转为对应的Unicode字符
console.log(buf[1]);

// 如何将unicode编码的数值转为对应的Unicode字符
// String.fromCharCode()
console.log(String.fromCharCode(0x4e00));

console.log('------');

// buf.copy() 复制
var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('def');

// 将buf1里面的内容拷贝到buf2里面去,从源buffer对象的索引1位置开始取出，到索引2(不包含)结束，在目标buf2中的索引1位置开始写入
buf1.copy(buf2,1,1,2);

console.log(buf1.toString(),buf2.toString());

// buf.indexOf() 正序查找,返回对应的索引位置；如果不存在，返回-1
var buf = Buffer.from('aba');
var res = buf.indexOf('a');
console.log(res);

// buf.lastIndexOf() 倒序查找，返回对应的索引位置；如果不存在，返回-1

// buf.slice() 截取
var buf = Buffer.from('abcdef');

// 在buf对象中，从索引1位置开始截取，截取到索引2(不包含)位置
var newBuf = buf.slice(1,2);
console.log(newBuf.toString());