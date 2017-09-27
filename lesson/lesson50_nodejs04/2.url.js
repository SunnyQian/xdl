// url 专门针对url地址

// 加载模块
var url = require('url');

// 定义路径
var webUrl = 'http://user:password@nodejs.cn:8080/api/path.html?id=1&level=10#path_path_isabsolute_path';

/*
	Url {
  protocol: 'http:',		协议
  slashes: true,
  auth: 'user:password',	权限：用户和密码
  host: 'nodejs.cn:8080',	域名和端口号
  port: '8080',				端口号
  hostname: 'nodejs.cn', 	域名
  hash: '#path_path_isabsolute_path', 锚点
  search: '?id=1&level=10', 	查看的字符串(?)
  query: 'id=1&level=10', 		携带的参数
  pathname: '/api/path.html',	文件路径
  path: '/api/path.html?id=1&level=10',
  href: 'http://user:password@nodejs.cn:8080/api/path.html?id=1&level=10#path_path_isabsolute_path' 地址
  }
*/ 
var urlObj = url.parse(webUrl);
var urlObj = url.parse(webUrl,true);		// 将query转为一个对象
console.log(urlObj);

console.log(urlObj.query.id);