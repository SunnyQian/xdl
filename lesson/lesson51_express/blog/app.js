// 使用Express框架搭建Web网站

// 加载express
var express = require('express');

// 加载路由模块
var index = require('./routers/index');
var user = require('./routers/user');

// 创建一个应用实例 app application 应用
var app = express();

// 定义应用使用视图模板引擎
app.set('view engine','ejs');
// 定义网站视图模板存储目录
app.set('views','./views');

// 静态资源托管
app.use(express.static('./public'));

// 打印app
// console.log(app);

// 设置路由

/*
// 约定访问的路由 / 网站的首页(根目录)
app.get('/',function(req,res){
	// req 请求
	// res 响应

	// 响应一段文字
	// res.send('<h3>欢迎你到这里来....</h3>');

	// 如何响应一个页面(视图 模板)
	res.render('index');
})

// 约定列表页
app.get('/list',function(req,res){
	// res.send('<h3>欢迎访问网站的博客列表页</h3>');
	res.render('list');
})
*/

// 将指定路径开头的请求，交给指定的路由处理
app.use('/',index);		
app.use('/user',user);

// 设置监听
app.listen(8080,'192.168.31.254',function(){
	console.log('应用已经运行了...');
})