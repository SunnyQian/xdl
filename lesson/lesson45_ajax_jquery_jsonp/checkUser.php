<?php
	// 获取传递的用户名 -- 约定好的传递方式
	
	// 根据用户名的实际情况返回对应的数据
	// 获取用户传递的数据
	// var_dump($_POST);
	$username = $_POST['username'];

	// 判断
	if($username=='admin'){
		// 不可用
		echo 'buok';
	}else{
		// 可用
		echo 'ok';
	}
?>