// 路由文件 index.js 主要负责中转对应index路由操作

// 加载模块,创建路由
var express = require('express');
var router = express.Router();

// 加载对应的控制器
var index = require('../controllers/index');

// console.log(index);

// 定义路由规则
router.get('/',index.index);

// 匹配路由
// router.get('/user',function(req,res){
	// res.send('你说走不走！');
// })

// 匹配登录页面
router.get('/login',index.login);

// 处理用户登录数据
router.post('/doLogin',index.doLogin);


// 将模块向外暴露
module.exports = router;