// 事件处理模块

// 加载模块
var events = require('events');

// 实例化事件对象
var em = new events();

console.log(em);

// 定义函数
function callbackA(){
	console.log('手不要乱摸！');
}

// 绑定事件
em.on('memeda',callbackA);
em.on('papapa',function(){
	console.log('不要停!');
})

// 触发
em.emit('memeda');
em.emit('papapa');

// 设置监听器
em.addListener('click',function(){
	console.log('触发了click事件...');
});

// 触发
em.emit('click');
em.emit('click');

// 单次监听 once
em.once('firsttime',function(){
	console.log('只有第一次，第一次结束了，就只能感叹了...');
});

// 触发
em.emit('firsttime');
em.emit('firsttime');

// 移除指定的监听器
em.removeListener('memeda',callbackA);

// 触发memeda
em.emit('memeda');