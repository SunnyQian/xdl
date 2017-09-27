<?php // 起始符
	/*
		避免页面数据乱码：
			1. 当前文件必须是utf-8编码
			2. 设置header头信息，为utf-8的编码格式
	*/ 
	// 设置文档类型和编码格式
	header('content-type','text/html;charset=utf-8');

	/*
		PHP文件与目录的命名规则：
			1. 禁止使用中文作为文件名或者是目录名称
	*/ 

	// 单行注释
	/*
		多行注释
	*/

	/*
		变量：存储数据的容器
		变量声明规则：
			1. 必须以$符号开头
			2. 首字符必须是字母或者下划线
			3. 后跟任意长度的数字、字母、下划线
			4. 严格区分大小写
			5. 命名尽量有意义
			6. 推荐使用驼峰命名法

		指令分隔符 分号;

		变量的类型：
			整型 int
			浮点型 float
			字符串 string
			布尔值 boolean
			对象 object
			null null
			数组 array
			资源 resource

		弱类型的语言
	*/ 

	/*
		以服务器的形式访问PHP文件：
			1. 运行服务器 wamp(wamp变绿之后，表示正常)
			2. http://localhost 相当于在访问服务器根目录
				如果在根目录中发现 index.php，立刻删除
			3. 按照目录关系访问对应的文件
	*/

	// 名称
	$name = '王二狗';
	$Name = '张三';	

	// 输出变量
	echo $name;
	echo $Name;

	// var_dump() 打印变量的值和类型
	var_dump($name);


	// 函数的定义
	function hello(){
		// 函数体
		echo 'Hello Wolrd!';
	}

	// 调用函数
	hello();

	/*
		流程控制和JS完全一样
	*/ 

	// 数组的定义和取值
	$arr = array(
		// 键 => 值
		'name' => '张三',

		// 数字索引
		0 => '哈哈'
		);

	/*
		数组类型（按照维度进行划分）
			
	*/

	// 一维数组
	$arr = ['香蕉','梨','苹果'];

	// 二维数组
	$arr = array(
		// 数字索引数组
		array('唐僧','孙悟空','猪八戒'),
		array('刘备','关羽','张飞','诸葛亮'),
		array('宋江','吴用','武松','大郎')
	);

	var_dump($arr);

	// 数组的取值 数组[index 索引]
	echo $arr[1][3];

//结束符?>