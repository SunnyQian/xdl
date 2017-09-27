<?php
	// 接收get方式(在地址栏中直接传递了参数)传递的参数
	// $_GET // 全局数组，接收的就是get方式传递的信息
	// var_dump($_GET);

	// echo 'ok';
	// echo $_GET['uname'];

	// 约定如果账户是孙悟空就是被占用了，否则就是可用
	if($_GET['uname']=='孙悟空'){
		// 约定好的！
		echo 'buok';
	} else{
		echo 'ok';
	}
?>