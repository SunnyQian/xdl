// 定义JS代码
$(function(){
	// 当第一次进入页面时显示一个文字类型的笑话

	// 定义当前请求的笑话的位置
	var page = 1; 

	// 定义一个请求笑话的函数
	function getJoke(page){
		// 向jsonbird请求一条数据
		$.ajax({
			// 笑话的网址
			url : 'https://bird.ioliu.cn/joke/rand?type=text',
			// 传递参数
			data : {
				page : page
			},
			type : 'get',
			success : function(joke){
				// console.log(joke);
				// 获取第一条
				// console.log(joke.data[0]);

				// 将笑话的内容赋值给
				// $('.content').html(joke.data[0].content);

				// 定义包含笑话内容的空字符串
				var jokeStr = '';

				// 依次遍历
				joke.data.forEach(function(item){
					jokeStr += '<div class="content">'+item.content+'</div>';
				});
				// 将笑话的内容进行展示
				$('#joke-content').html(jokeStr);
			},
			error : function(){
				alert('请检查当前的网络...');
			}
		});
	}

	getJoke();
		

	// 下一个按钮
	$('#next').click(function(){
		// 下一页
		page++;

		// 再次发送一个请求
		getJoke(page);
	})

	// 定义向趣图发送请求
	function getPic(){
		$.ajax({
			url:'https://bird.ioliu.cn/joke/rand',
			type:'get',
			success:function(pic){
				// console.log(pic);

				// 将每一个趣图进行遍历
				var picStr = '';

				pic.data.forEach(function(item){
					picStr += '<div class="pic-show"><p class="title">'+item.content+'</p><img src="'+item.url+'" alt="" /></div>';
				});

				// 将拼接完成的字符串赋值
				$('#pic-content').html(picStr);
			},
			error : function(errInfo){
				// 失败时
				alert('网络连接不流畅，请稍后尝试...');
			}
		})
	}

	// 趣图和笑话之间的选项卡操作
	$('nav>ul>li').click(function(){
		// 之前选中现在取消
		$('nav>ul>li.active').removeClass('active');

		// 当前元素添加.active
		$(this).addClass('active');

		// 单击到底是谁
		// console.log($(this).attr('data-tab'));
		if($(this).attr('data-tab')=='joke'){
			// 将笑话进行显示
			$('#joke').show();
			$('#pic').hide();
		}else{
			// 趣图
			$('#joke').hide();
			$('#pic').show();

			// 判断当前情况下，是否已经有了趣图
			// console.log($('#pic-content').html());
			if($('#pic-content').html().trim()==''){
				// console.log('没有');
				// 发送一次请求
				getPic();
			}
		}
	});

	// 随机趣图请求一次
	$('#randpic').click(function(){
		// 调用一次函数
		getPic();
	});
})