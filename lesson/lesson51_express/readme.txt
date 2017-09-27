Express
	1. 基于Node.js的框架，在Node.js基础上将一些方法、属性进行了封装
	2. 成熟的框架，版本4.x，目前有丰富的中间件、适用于Express的模块
	3. 按套路出牌，抓取对应模块(NPM)

一、搭建Express的网站基本结构
	1. 下载模块express
	2. 加载模块，搭建Web服务器

	3. 设置视图模板引擎
		// 定义应用使用视图模板引擎
		app.set('view engine','ejs');		// 一定要有ejs模块
		// 定义网站视图模板存储目录
		app.set('views','./views');

		ejs模板引擎默认识别扩展名为.ejs文件

	3. 静态资源托管

		// 静态资源托管
		app.use(express.static('./public'));

		在ejs模板中引入css/js/img图片时，使用/就表示了public目录


二、MVCR的开发模式
	M 	Model 模型 
	V	View 视图
	C	Controller 控制器
	R 	Router 路由

	Router 路由(前台)：
		负责当请求来临时进行对应的中转，将对应请求交给指定的控制器

	Controller 控制器(业务处理)
		处理业务逻辑

	View 视图(呈现内容)
		呈现的模板内容

	Model 模型(操作数据库)
		专门操作数据库

	Router负责将请求进行对应的中转，交给指定的对应的控制器；
		控制器Controller将业务进行处理，加载对应的视图View文件响应给客户端

		控制器Controller如果需要操作数据库，使用对应的模型Model,查询操作数据，将查询出的内容和视图文件进行混编，响应给客户端

三、模块化开发
	index模块
		首页、列表、详情页
	user模块
		个人中心、收藏、订单、地址信息
	goods模块
		添加商品、查看商品、删除商品、下架商品

	约定

		1. 以/开头的url地址请求，全部属于index模块
			/index
			/list 		

		2. 以/user开头的url地址请求，全部属于user模块

四、向ejs模板中分配数据
	
		ejs 的语法结构
		<%  开始标记
			ejs的语法 ---> 就是JS
		%>  结束标记

五、MongoDB数据库
	非关系型数据 区别于关系型数据库

	预习：
		菜鸟教程---> MongoDB数据库
	
