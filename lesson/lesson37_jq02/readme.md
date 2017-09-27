# jq 02

##一、筛选器
```
    find()  ***
    hassClass
        检查当前的元素是否含有某个特定的类，如果有，则返回true。
    filter(expr|obj|ele|fn)
        筛选出与指定表达式匹配的元素集合。这个方法用于缩小匹配的范围。用逗号分隔多个表达式
    is()
    jQuery.map(array,callback)
```


##二、包裹节点
```
    wrap(html) 
        向指定元素包裹一层html 代码

    wrap(element) 
        向指定元素包裹一层DOM 对象节点

    wrap(function (index) {}) 
        使用匿名函数向指定元素包裹一层自定义内容

    unwrap() 
        移除一层指定元素包裹的内容

    wrapAll(html) 
        用html 将所有元素包裹到一起

    wrapAll(element) 
        用DOM 对象将所有元素包裹在一起

    wrapInner(html) 
        向指定元素的子内容包裹一层html

    wrapInner(element) 
        向指定元素的子内容包裹一层DOM 对象节点

    wrapInner(function (index) {}) 
        用匿名函数向指定元素的子内容包裹一层
```

##三、节点操作 ★★★
```
    //复制节点
    $('body').append($('div').clone(true)); //复制一个节点添加到HTML 中
    注意：clone(true)参数可以为空，表示只复制元素和内容，不复制事件行为。
        而加上true参数的话，这个元素附带的事件处理行为也复制出来。


    //删除节点
    $('div').remove(); //直接删除div 元素
    注意：.remove()不带参数时，删除前面对象选择器指定的元素。而.remove()本事也可以
        带选择符参数的，比如：$('div').remove('#box');只删除id=box 的div。
```

##四、 事件
```
    1. 绑定事件
        $('div').bind('click',function(){

        })

        $('input').bind('click', fn);

        //移入和移出分别执行一次
        $('input').bind('mouseout mouseover', function () { 
            
        });

        on();


    2. 移除事件
        $('input').unbind();        //删除所有当前元素的事件
        $('input').unbind('click'); //删除当前元素的click 事件


    3. 常用事件
        click(fn)       鼠标触发每一个匹配元素的click(单击)事件
        dblclick(fn)    鼠标触发每一个匹配元素的dblclick(双击)事件
        mousedown(fn)   鼠标触发每一个匹配元素的mousedown(点击后)事件
        mouseup(fn)     鼠标触发每一个匹配元素的mouseup(点击弹起)事件
        mouseover(fn)   鼠标触发每一个匹配元素的mouseover(鼠标移入)事件
        mouseout(fn)    鼠标触发每一个匹配元素的mouseout(鼠标移出)事件
        mousemove(fn)   鼠标触发每一个匹配元素的mousemove(鼠标移动)事件
        mouseenter(fn)  鼠标触发每一个匹配元素的mouseenter(鼠标穿过)事件
        mouseleave(fn)  鼠标触发每一个匹配元素的mouseleave(鼠标穿出)事件
        keydown(fn)     键盘触发每一个匹配元素的keydown(键盘按下)事件
        keyup(fn)       键盘触发每一个匹配元素的keyup(键盘按下弹起)事件
        keypress(fn)    键盘触发每一个匹配元素的keypress(键盘按下)事件
        resize(fn)      文档触发每一个匹配元素的resize(文档改变大小)事件
        scroll(fn)      文档触发每一个匹配元素的scroll(滚动条拖动)事件
        focus(fn)       表单触发每一个匹配元素的focus(焦点激活)事件
        blur(fn)        表单触发每一个匹配元素的blur(焦点丢失)事件
        focusin(fn)     表单触发每一个匹配元素的focusin(焦点激活)事件
        focusout(fn)    表单触发每一个匹配元素的focusout(焦点丢失)事件
        select(fn)      表单触发每一个匹配元素的select(文本选定)事件
        change(fn)      表单触发每一个匹配元素的change(值改变)事件
        submit(fn)      表单触发每一个匹配元素的submit(表单提交)事件

    4. 复合事件
        ready(fn) 当DOM 加载完毕触发事件
        hover([fn1,]fn2) 当鼠标移入触发第一个fn1，移出触发fn2

```
##五、事件对象
```
    //接收事件对象
    $('button').bind('click', function (event) { 
        alert(event);
    });


    //通过event.data 获取额外数据，可以是数字、字符串、数组、对象
    $('input').bind('click', 123, function () { 
        alert(e.data);
    });
```

    event 对象的属性
    属性名                 描述
    type            获取这个事件的事件类型，例如：click
    target          获取绑定事件的DOM 元素
    data            获取事件调用时的额外数据
    relatedTarget   获取移入移出目标点离开或进入的那个DOM 元素
    currentTarget   获取冒泡前触发的DOM 元素，等同与this
    pageX/pageY     获取相对于页面原点的水平/垂直坐标
    screenX/screenY 获取显示器屏幕位置的水平/垂直坐标(非jQuery 封装)
    clientX/clientY 获取相对于页面视口的水平/垂直坐标(非jQuery 封装)
    result          获取上一个相同事件的返回值
    timeStamp       获取事件触发的时间戳
    which           获取鼠标的左中右键(1,2,3)，或获取键盘按键
    

    冒泡事件
    -----------------
        e.stopPropagation() 禁止冒泡


    默认行为
    -------------------
        // 阻止默认行为
        $('a').click(function(event){
            e.preventDefault();

        })


        //禁止提交表单跳转
        $('form').submit(function (e) {
            e.preventDefault();
        });


        $('a').click(function (e) {
            return false;
        });


    jquery 为冒泡和默认行为的常用方法

    方法名                     描述
    ---------------------------------------
    preventDefault()                取消某个元素的默认行为
    isDefaultPrevented()            判断是否调用了preventDefault()方法
    stopPropagation()               取消事件冒泡
    isPropagationStopped()          判断是否调用了stopPropagation()方法
    stopImmediatePropagation()      取消事件冒泡，并取消该事件的后续事件处理函数
    isImmediatePropagationStopped() 判断是否调用了stopImmediatePropagation()方法


    模拟操作
    -----------------
    1. 模拟操作   trigger()
         //点击按钮事件
        $('input').click(function () {
        alert('我的第一次点击来自模拟！');
        });
        //模拟用户点击行为
        $('input').trigger('click');

    2. 模拟操作传递参数
        $('button').click(function (e, data1, data2) {
            alert(data1 + ',' + data2);
        }).trigger('click', ['abc', 'efg']);


        $('button').click(function () {
            alert('我的第一次点击来自模拟！');
        }).triggerHandler('click');
        

    3. trigger() trigerHandler() 区别
        triggerHandler()方法只会影响第一个匹配到的元素，而.trigger()会影响所有。
        triggerHandler()方法会返回当前事件执行的返回值，如果没有返回值，则返回undefined；
        trigger()则返回当前包含事件触发元素的jQuery对象.




    事件命名空间
    ---------------
    $('button').bind('click.abc', function () {
        alert('abc');
    });

    $('button').bind('click.efg', function () {
        alert('xyz');
    });

    $('button').unbind('click.abc'); //移除click 实践中命名空间为abc 的


    事件委托
    ---------------
        live()原理就是把click 事件绑定到祖先元素$(document)上，而只需要给$(document)绑
        定一次即可，而非2000 次。然后就可以处理后续动态加载的按钮的单击事件。在接受任何
        事件时，$(document)对象都会检查事件类型(event.type)和事件目标(event.target)，如果click
        事件是.button，那么就执行委托给它的处理程序。

        live()  1.9 删除

        当我们需要停止事件委托的时候，可以使用.die()来取消掉。
        $('.button').die('click');


        由于.live()和.die()在jQuery1.4.3 版本中废弃了，之后推出语义清晰、减少冒泡传播层次、
        又支持链接连缀调用方式的方法：.delegate()和.undelegate()。但这个方法在jQuery1.7 版本中
        被.on()方法整合替代了。


        on off one
        -------------
        目前绑定事件和解绑的方法有三组共六个。由于这三组的共存可能会造成一定的混乱，
        为此jQuery1.7 以后推出了.on()和.off()方法彻底摒弃前面三组。

        //类似于.bind()只触发一次
        $('.button').one('click', function () {
            alert('one 仅触发一次！');
        });



    jQuery 动画
    --------------
        1．显示 show()、隐藏 hiden();  

        //显示
        $('.show').click(function () { 
            $('#box').show();
        });

        //隐藏
        $('.hide').click(function () { 
            $('#box').hide();
        });


        2．滑动、卷动
            slideUp()   slideDown()     slideToggle()。

        3．淡入、淡出
            fadeIn()     fadeOut()      fadeToggle()。

        4. 自定义动画
            animate()