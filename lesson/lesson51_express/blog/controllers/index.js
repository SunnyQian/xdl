// index模块的控制器

// 定义对象
var index = {};

// 定义方法
index.index = function(req,res){
	// 响应模板和分配数据
	// res.send('么么哒');

	// 定义用户信息
	var user = {
		uname : '胡小帅',
		age : 18,
		email : 'huxiaoshuai@itxdl.cn',
		isOnlyOne: 'no',
		sex : '',
		address : '北京市昌平区回龙观育荣教育园兄弟连大楼'
	};

	// 话题
	var topics = [
		{
			img:'1.jpg',
			uname : '孙大圣',
			title : '为什么这个金箍棒.....'
		},{
			img:'2.jpg',
			uname:'猪无能',
			title:'为什么找不到媳妇儿...'
		},{
			img:'3.jpg',
			uname:'小白龙',
			title:'老是唐僧骑我，我什么时候能够骑别人...'
		}
	];

	res.render('index',{title:'胡小帅的博客',person:user,topics:topics});
}

// 定义处理登录页面的方法
index.login = function(req,res){
	res.render('login');
}

index.doLogin = function(req,res){
	res.send('数据处理...');
}

// 向外暴露模块
module.exports = index;