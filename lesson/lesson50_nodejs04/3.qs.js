// 引入querystring模块
var qs = require('querystring');

console.log(qs);

// escape() 执行编码 
var str = '这%是 中@文';		
console.log(escape(str));	// %u8FD9%25%u662F%20%u4E2D@%u6587

// 解码 unescape()
console.log(unescape('%u8FD9%25%u662F%20%u4E2D@%u6587'));

// 解析查询字符
var params = 'username=zhangsan&userpwd=admin';
var paramObj = qs.parse(params);
console.log(paramObj.username);

// 拼接
var paramObj = {
	id : 10,
	userpwd: 'admin',
	level : 20
}

// 序列化，转为查询字符串 qs.stringify
var paramStr = qs.stringify(paramObj);
console.log(paramStr);
