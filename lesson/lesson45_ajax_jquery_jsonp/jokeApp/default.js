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
			url : 'https://bird.ioliu.cn/joke/?type=text',
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
				$('#content').html(joke.data[0].content);
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
})