// 匹配正则表达式
var str = `<ul class="picList">
	这是中间的部分....
</ul>`;

// 正则
var reg = /<ul class="picList">([\s\S]*?)<\/ul>/;

// 执行匹配
var res = reg.exec(str);
console.log(res);