CSS属性
	定位 position 
		static		默认定位方式，遵循正常的文档流
		relative	相对定位
			1. 参考对象：自身应该在的位置
			2. 没有脱离正常的文档流

		absolute	绝对定位
			1. 参考对象：当前文档的左上角
			2. 脱离了正常的文档流

		fixed		固定定位
			1. 参考对象：当前屏幕的左上角
			2. 脱离了正常的文档流

		一旦元素添加了relative/absolute/fixed之后，多出left/top/right/bottom描述元素所在的位置


		z-index 	定义垂直方向的元素层叠关系，一般来说值越大越在上面
					设置数值就行 

	布局： layout
		display 		设置元素的显示方式
			none 				隐藏元素显示(不占位隐藏)
			block				块状元素
			inline-block		内联块元素
			inline 				内联元素


		float 			设置浮动
			left 			左浮动
			right 			右浮动

			设置某个元素浮动：
				1. 如果之前有浮动的元素，那么该元素就和之前的元素浮动到一行
				2. 如果之前没有浮动的元素，那么该元素在自己所在的行自行浮动

		clear  			清除浮动元素对该元素的影响
			left 			清除左浮动元素对当前元素的影响
			right			清除右浮动元素对当前元素的影响
			both			清除左右浮动元素对当前元素的影响

		visibility 		占位隐藏
			visible			显示
			hidden			隐藏

		overflow		对溢出、超出部分进行处理
			hidden
			scroll


	head头部
		meta charset="utf-8"
		title 	标题
		meta name="keywords" content="" 关键字
		meta name="description" content="" 描述
		link rel="stylesheet" href="文件地址"

		引入标题左侧的logo，定义收藏夹图标
		link rel="icon" href="图标的地址.ico" 

		style 	定义css样式的标签
		script	定义和引入js文件的标签

		meta http-equiv="refresh" content="5"	每5秒，网页自动刷新

		5s后，自动跳转百度
		meta http-equiv="refresh" content="5,http://www.baidu.com" 

		meta name="author" content="作者信息"


	尺寸	
		width			宽度
		height			高度
		min-width		最小宽度
		min-height		最小高度
		max-width		最大宽度
		max-height		最大高度

	边距
		margin 外边距
			办公室之间墙与墙之间的间距

		padding 内边距
			你与办公室墙之间的距离是内边距

			注意：
				设置padding时会导致容器变大，对应位置对应方向减少高度或者宽度

		边框 border
			墙的厚度是边框


		top/right/bottom/left

			1个值：表示4个方向
			2个值：先上下后左右
			3个值: 先上，后左右，在下
			4个值: 上右下左


		border 边框
			简写：
				border:1px solid #ccc; 宽度、样式、颜色

			4个方向：
				border-top
				border-right
				border-left
				border-bottom

			3个属性
				border-width	宽度
				border-style	样式
					solid 		实线
					dashed 		虚线
					double 		双线
					dotted 		点状线

				border-color	颜色

	圆角 border-radius

	盒子阴影	box-shadow 
		box-shadow:1px 10px 20px 30px gray

			1px 			水平方向偏移值
			10px 			垂直方向偏移值
			20px 			阴影的模糊值
			30px 			阴影的外延值
			gray 			阴影的颜色


	背景 background：

		background-color 		颜色
		background-image 		图片 url()
		background-position 	图片填充开始的位置
			
			雪碧图、精灵图 sprite picture
				将多个小图标合并到一张图片上，使用background-position 进行定位显示

				好处：
					1. 减少http请求，提高响应的速度
					2. 提升用户体验

		background-repeat		设置重复的方式
		background-size 		设置填充的图片大小
		background-clip			剪切开始的位置
		background-origin  		填充开始的位置


	颜色 color
		设置颜色的方式
			颜色英文单词
				red / blue /green / yellow / gray / gold / purple / yellowgreen / pink / orange / white / black

			使用#和六位十六进制
				#ff0000			红色		#f00
				#00ff00 		绿色
				#0000ff			蓝色
				#ededed 		浅灰色		

				1. 每一个颜色RGB分别用两个位置进行描述
				2. 如果相邻两个位置的字符是相同，可以简写

			rgb()
				R 红色 0-255
				G 绿色 0-255
				B 蓝色 0-255

			rgba() 
				a alpha 透明度

			hsl() 工业颜色
				色环
					H 	色调
					S	饱和度
					L 	亮度

			hsla() 设置透明度


		opacity 	设置透明度

	字体 font
		简写 
		分开写

		font-family 	字体(允许自定义字体 @font-face)
		font-size		文字大小
		font-style 		是否斜体
		font-weight 	是否加粗
		line-height 	行高
		font-variant 	设置小写字母变成小型的大写字母

	文本 text
		text-transform 		设置文字的转换(针对英文)
			uppercase 			大写
			lowercase			小写
			capitalize			首字母大写

		text-align 			水平对齐方式
			left				左对齐
			center 				居中对齐
			right 				右对齐









