// 保证页面加载完毕
$(function(){
	// 设置无缝轮播show元素的滚动

	// 获取滚动条的值
	// console.log($('#show').scrollLeft());

	// 定义滚动条移动的步径
	var step = 1;


	// 获取ul的宽度
	// console.log($('#show ul:first').width());

	// 当进入页面时，将现有的列表复制一份，追加
	$('#show ul:first').clone().appendTo($('#list'));

	// 允许滚动条滚动的最大值
	var maxSL = $('#show ul:first').width();

	// 使用定时器，依次将show元素的滚动条的值进行累加
	setInterval(function(){
		// 将滚动的条进行累加
		var newSL = $('#show').scrollLeft() + step;

		// 超过最大值，重置为0
		if(newSL>=maxSL){
			newSL = 0;
		}

		// 设置
		$('#show').scrollLeft(newSL);
	},8);

})