轮播图：
	一、轮播图的基本布局
	二、如何将轮播图轮显
			1. 如何切换显示
				对要显示的li元素添加指定的类名 active
				添加了active类名的元素显示
				没有active类名的元素隐藏

				想让谁显示，就给谁添加类名active
				想让谁隐藏，将类名active移除

			2. 周期性、循环显示
				// 定时器
				// callback 形容回调函数 time 形容时间
				setInterval(callback,time) 

	三、获取元素
			// 定义轮播图显示的标志
			var run;

			// 定义变量index 表示当前显示图片的li的索引
			var index = 0;

			第一个li显示

			// 切换显示：当前显示的li隐藏，下一个li显示
			lis[index].removeAttribute('class');

			// 下一个
			index++;

			// 下一个显示
			lis[index].setAttribute('class','active');

	四、让轮播图动起来
		// 定时器运行时，返回特定的标记
		function autoRun(){
			run = setInterval(function(){
				// 切换显示：当前显示的li隐藏，下一个li显示
				lis[index].removeAttribute('class');	// 图
				lists[index].removeAtribute('class');	// 圆点

				// 下一个
				index++;

				// 当最后一张图轮播完之后，index的值已经等于lis.length
				// 应该切换到第一张显示
				if(index==lis.length){
					// 控制index的值，就相当于在控制谁(li)显示
					index = 0
				}

				// 下一个显示	
				lis[index].setAttribute('class','active');	// 图片
				lists[index].setAttribute('class','list-active');	// 圆点
			},2000);
		}

		// 页面第一次进入时，调用轮播
		autoRun();
			

	五、鼠标移入轮播图容器，暂停轮播；鼠标移出，轮播继续
		lun.onmouseover = function(){
			// 停止定时器
			// clearInterval(需要定时器的标记);
			clearInterval(run);
		}

		lun.onmouseout = function(){
			// 重新调用
			autoRun();
		}

	六、底部有对应数量的圆点，表示当前是第几个
			1. 当前显示的图片对应的圆点要有背景颜色，表明当前是第几个
			

			先写样式，通过类名list-active控制圆点背景颜色

			圆点的数量和li的数量是否一致？是！

			2. 当鼠标移入圆点时，对应的轮播图要切换到当前图片
				是不是要给所有的圆点都添加鼠标的移入事件

				function setIndex(i){
					return function(){
						// 函数定义时已经确定了作用域
						// i 就是索引	// 按照作用域链查找规则

						// 当前(index)显示的隐藏
						lis[index].removeAttribute('class');	// 图片
						lists[index].removeAttribute('class');	// 圆点

						// 将当前要显示图片索引赋值给index
						index = i;

						// 对应的索引图片显示
						lis[index].setAttribute('class','active');	// 图片
						lists[index].setAttribute('class','list-active'); //圆点
					}
				}

				所以用到了for循环遍历
				for(var i=0;i<lists.length;i++){
					// 每一个
					lists[i].onmouseover = setIndex(i);
				}


	七、轮播图左右箭头
		1. 位置和样式
		2. 
			左箭头 单击，切换到上一张显示
			右箭头 单击，切换到下一张显示

			// index 当前图

			左键
				index 当前隐藏
				index--

				// index最小值就是0
				if(index<0){
					// 将索引重置为最大值
					index = lis.length - 1
				}

				index 上一张显示

			右键
				index 当前隐藏
				index++

				// index的最大值 lis.length -1
				if(index==lis.length){
					// 重置为第一张
					index = 0;
				}

				index 下一张显示

==========================
	1. 自定义函数实现反转数组的方法
	2. 自己写返回如下格式的结果(参考pdf文档：实例3题)
	3. 自定义获取随机数的函数
	4. 自己写一个随机点名器

