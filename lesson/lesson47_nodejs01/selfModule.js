// 自定义模块 -- 自己根据自己的需求来定义自己需要的模块

// 定义模块
function makeBaby(childName){
	console.log('不小心来了一个孩子'+childName);
}

// 向外暴露(到处)，供其他模块使用
// exports.makeBaby = makeBaby;

// 使用module.exports导出属性或者对象
// module.exports.makeBaby = makeBaby;

// 直接将该函数向外暴露
// module.exports = makeBaby;

/*
	将变量或者是函数或者是对象之类的向外暴露：
		exports.key = 变量  		向外暴露了一个对象
		module.exports.key = 变量 	向外暴露了一个对象
		module.exports = 变量 		直接向外暴露了该变量
*/ 

var a = 200;
var b = 100;

// 向外暴露多个变量
// exports.a = a;
// exports.b = b;

// module.exports.a = a;
// module.exports.b = b;
module.exports = {
	// 左侧的a是对象的键(属性名),右侧的a是将a变量的值当做了值
	a : a,
	b : b
}
