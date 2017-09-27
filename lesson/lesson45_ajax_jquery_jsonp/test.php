<?php
	// 延迟数据处理
	// sleep(5);

	// 合法的请求才允许进行跨域
	// 接收客户端传递的Token值
	// var_dump($_GET);
	$token = $_GET['token'];

	// 判断是否是允许
	if($token=='H5-31'){
		// 设置文档头信息，允许所有的来源可访问
		header('Access-Control-Allow-Origin:*');

		// 实际上想传递 “哈哈” 字符串
		echo '哈哈哈';
	}

	
	// 返回一个字符串 函数名，实际上要传递的值作为函数的实参
	// echo 'memeda("哈哈")';

	// 我到底要返回一个什么样的函数名 
	// echo 'haha("哈哈")'

	// 获取用户传递的参数
	// var_dump($_GET); 
	// $callback = $_GET['callback'];
	// $callback = $_GET['memeda'];
	
	// PHP中字符串连接运算符.
	// echo $callback.'("么么哒")';
	// echo 'haha("enenen")'

?>