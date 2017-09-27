// 负责user模块的路由中转

// 加载模块，创建路由
var express = require('express');
var router = express.Router();

// 加载对应的控制器
var user = require('../controllers/user');

// 设置对应的路由		// 匹配的路由/user/
router.get('/',user.index);

// 匹配收藏路由
router.get('/collect',function(req,res){
	res.send('<h3>这是我的收藏-小泽玛利亚</h3><a href="/">首页</a>');
})

// 向外暴露(导出)模块
module.exports = router;