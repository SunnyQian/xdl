// 专门处理和user相关的控制器

// 创建对象
var user = {
	// index 用户中心
	index : function(req,res){
		res.send('用户个人中心');
	}
};

// 向外暴露模块
module.exports = user;

