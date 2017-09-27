// 实例化swiper滑动组件
new Swiper('#lun',{
	// 自动轮播 时间单位是ms
	autoplay : 3000,

	// 允许用户手动操作滑动组件后，再次自动轮播
	autoplayDisableOnInteraction : false,

	// 分页 --- 指向页面中的分页器元素
	pagination : '.swiper-pagination',

	// 分页器的图标样式
	// paginationType : 'progress',

	// 单击分页器图标发生切换
	paginationClickable : true,

	// 循环轮播
	loop : true 
});