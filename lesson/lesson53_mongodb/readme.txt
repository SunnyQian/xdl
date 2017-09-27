使用MongoDB数据库时：
	1. 启动MongoDB的服务器
	2. 连接MongoDB服务器


--- 常用命令操作

--- 对字段进行重命名
> db.stu.update({},{$rename:{age:'nianling'}},{multi:true})
WriteResult({ "nMatched" : 9, "nUpserted" : 0, "nModified" : 8 })
>

--- $push和$each操作符进行结合,插入多个数据
> db.stu.update({uname:'猪八戒'},{$push:{cook:{$each:['木须肉','馒头']}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>

--- 查询

--- 查询名称为张三的数据
> db.stu.find({uname:'张三'})
>

--- 查询名称为孙悟空的数据
> db.stu.find({uname:'孙悟空'})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 120
0 }
>

--- 查询年龄>200岁的人
> db.stu.find({nianling:{$gt:200}})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
>

--- 查询年龄<200岁的人
> db.stu.find({nianling:{$lt:200}})
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "保密", "class" : "西岐", "nianling" : 100 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
>

--- 年龄为200岁
> db.stu.find({nianling:200})
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
>

--- 年龄为200
> db.stu.find({nianling:{$eq:200}})
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
>

查询年龄>=200
> db.stu.find({nianling:{$gte:200}})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
>

查询年龄<=200
> db.stu.find({nianling:{$lte:200}})
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "保密", "class" : "西岐", "nianling" : 100 }
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
>

--- 查询年龄!=200
> db.stu.find({nianling:{$ne:200}})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "保密", "class" : "西岐", "nianling" : 100 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
>

--- 查询年龄在300和100之间
> db.stu.find({$and:[{nianling:{$gt:100}},{nianling:{$lt:300}}]})
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
>


--- 查询年龄为200的男性
> db.stu.find({$and:[{nianling:200},{sex:'男'}]})
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
>

--- 查询年龄<20 或者年龄>1000
> db.stu.find({$or:[{nianling:{$lt:20}},{nianling:{$gt:1000}}]})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
>

--- 关于范围性查询 $in []
> db.stu.find({uname:{$in:['李烨','玉帝','孙悟空','猪八戒']}})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
>

--- 不再某一个范围 $nin
> db.stu.find({uname:{$nin:['李烨','玉帝','孙悟空','猪八戒']}})
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "保密", "class" : "西岐", "nianling" : 100 }
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
>

--- 存储数据为Null
> db.stu.find({sanzhiyan:null})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "保密", "class" : "西岐", "nianling" : 100 }
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
{ "_id" : ObjectId("59c3667fbb8f96e33345b538"), "uname" : "二郎神", "sanzhiyan" : null }
>

--- 查询数据的值为Null,并且是存在的数据
> db.stu.find({$and:[{sanzhiyan:null},{sanzhiyan:{$exists:true}}]})
{ "_id" : ObjectId("59c3667fbb8f96e33345b538"), "uname" : "二郎神", "sanzhiyan" : null }
>

--- 模糊性查询

--- 匹配姓名中包含 二 这个字符的数据
> db.stu.find({uname:/二/})
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c3667fbb8f96e33345b538"), "uname" : "二郎神", "sanzhiyan" : null }
>

--- 以孙开头
> db.stu.find({uname:/^孙/})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
>

--- 以孙结尾
> db.stu.find({uname:/孙$/})
{ "_id" : ObjectId("59c36817bb8f96e33345b53a"), "uname" : "者行孙" }
{ "_id" : ObjectId("59c3681fbb8f96e33345b53b"), "uname" : "行者孙" }
>

--- 姓孙，名字是三个字的
> db.stu.find({uname:/^孙..$/})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
>

--- 第二种方式 姓孙，名字是三个字的
> db.stu.find({uname:/^孙.{2}$/}))
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
>

--- sort() 排序  如果字段的值是1，表示按照该字段进行升序排列
> db.stu.find().sort({nianling:1})
{ "_id" : ObjectId("59c3667fbb8f96e33345b538"), "uname" : "二郎神", "sanzhiyan" : null }
{ "_id" : ObjectId("59c366bebb8f96e33345b539"), "uname" : "闻仲", "sanzhiyan" : "眼" }
{ "_id" : ObjectId("59c36817bb8f96e33345b53a"), "uname" : "者行孙" }
{ "_id" : ObjectId("59c3681fbb8f96e33345b53b"), "uname" : "行者孙" }
{ "_id" : ObjectId("59c36894bb8f96e33345b53c"), "uname" : "孙乾杨杨" }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "保密", "class" : "西岐", "nianling" : 100 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
>

--- {nianling:-1} 降序
> db.stu.find().sort({nianling:-1})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "保密", "class" : "花果山", "nianling" : 1200 }
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧", "sex" : "保密", "class" : "大唐", "nianling" : 200 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "保密", "class" : "西岐", "nianling" : 100 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c3667fbb8f96e33345b538"), "uname" : "二郎神", "sanzhiyan" : null }
{ "_id" : ObjectId("59c366bebb8f96e33345b539"), "uname" : "闻仲", "sanzhiyan" : "眼" }
{ "_id" : ObjectId("59c36817bb8f96e33345b53a"), "uname" : "者行孙" }
{ "_id" : ObjectId("59c3681fbb8f96e33345b53b"), "uname" : "行者孙" }
{ "_id" : ObjectId("59c36894bb8f96e33345b53c"), "uname" : "孙乾杨杨" }
>

--- 插入数据
> db.score.insert([
...
... {uname:'孙悟空',html:90,css:90,js:90},
... {uname:'猪八戒',html:0,css:0,js:0},
... {uname:'唐僧',html:100,css:0,js:100},
... {uname:'沙僧',html:90,css:20,js:80}
... ])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 4,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
>

> db.score.find().sort({html:-1})
{ "_id" : ObjectId("59c36a35bb8f96e33345b53f"), "uname" : "唐僧", "html" : 100, "css" : 0, "js" : 100 }
{ "_id" : ObjectId("59c36a35bb8f96e33345b53d"), "uname" : "孙悟空", "html" : 90, "css" : 90, "js" : 90 }
{ "_id" : ObjectId("59c36a35bb8f96e33345b540"), "uname" : "沙僧", "html" : 90, "css" : 20, "js" : 80 }
{ "_id" : ObjectId("59c36a35bb8f96e33345b53e"), "uname" : "猪八戒", "html" : 0, "css" : 0, "js" : 0 }
>

--- 先按照HTML成绩降序，再按照CSS成绩升序排列
> db.score.find().sort({html:-1,css:1})
{ "_id" : ObjectId("59c36a35bb8f96e33345b53f"), "uname" : "唐僧", "html" : 100, "css" : 0, "js" : 100 }
{ "_id" : ObjectId("59c36a35bb8f96e33345b540"), "uname" : "沙僧", "html" : 90, "css" : 20, "js" : 80 }
{ "_id" : ObjectId("59c36a35bb8f96e33345b53d"), "uname" : "孙悟空", "html" : 90, "css" : 90, "js" : 90 }
{ "_id" : ObjectId("59c36a35bb8f96e33345b53e"), "uname" : "猪八戒", "html" : 0, "css" : 0, "js" : 0 }
>

--- 分页查询

--- 限制查询 limit(number)

--- 查询HTML成绩最高的一位!
> db.score.find().sort({html:-1}).limit(1)
{ "_id" : ObjectId("59c36a35bb8f96e33345b53f"), "uname" : "唐僧", "html" : 100, "css" : 0, "js" : 100 }
>

--- skip() 偏移查询
> db.score.find().sort({html:-1}).skip(3)
{ "_id" : ObjectId("59c36a35bb8f96e33345b53e"), "uname" : "猪八戒", "html" : 0, "css" : 0, "js" : 0 }
>


> db.stu.find().skip(3)
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江", "sex" : "保密", "class" : "梁山", "nianling" : 120 }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉", "sex" : "保密", "class" : "大观园", "nianling" : 40 }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵", "sex" : "保密", "class" : "梁山", "nianling" : 30 }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘", "sex" : "女", "class" : "梁山", "nianling" : 18 }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青", "sex" : "女", "class" : "梁山", "nianling" : 20 }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒", "sex" : "男", "class" : "高老庄", "cook" : [ "宫保鸡丁", "水煮
鱼", "水煮肉", "水煮肉", [ "木须肉", "馒头" ], "木须肉", "馒头" ], "nianling" : 200 }
{ "_id" : ObjectId("59c3667fbb8f96e33345b538"), "uname" : "二郎神", "sanzhiyan" : null }
{ "_id" : ObjectId("59c366bebb8f96e33345b539"), "uname" : "闻仲", "sanzhiyan" : "眼" }
{ "_id" : ObjectId("59c36817bb8f96e33345b53a"), "uname" : "者行孙" }
{ "_id" : ObjectId("59c3681fbb8f96e33345b53b"), "uname" : "行者孙" }
{ "_id" : ObjectId("59c36894bb8f96e33345b53c"), "uname" : "孙乾杨杨" }
>

/*
	分页：
		设置每页显示条 pageCount=4 每页条数

		第一页 		db.stu.find().skip(0).limit(4)
		第二页 		db.stu.find().skip(4).limit(4)
		第三页 		db.stu.find().skip(8).limit(4)
		第page页  	db.stu.find().skip(?).limit(pageCount)

		pageOffset skip的偏移量
			var pageOffset = (page-1)*pageCount

*/

/*
	端口：
		Apache 		80
		IIS			80
		MySQL 		3306
		MongoDB 	27017
		Node.js 	指定
*/

--- 启动服务器指定端口号
mongod --dbpath=d:/data/db --logpath=d:/data/log/mongodb.log --port=666

--- 数据库连接方式
mongo  默认连接 localhost:27017/test 数据库
mongo 127.0.0.1:27017(默认端口号)


--- MongoDB数据库权限管理
1. 先建立权限
	特殊数据库 admin (存储所有与权限相关的数据信息)

	创建系统级别管理员(只要你对admin数据库拥有绝对的管理权限那么就对整个数据库系统有绝对的管理权限)

	创建权限：
		a. 切换到对应的数据库
			use admin

		b. 创建用户
			db.createUser()


		> db.createUser({
		... user : 'huxiaoshuai',			用户名
		... pwd : 'memeda',					密码
		... roles:[{						角色
		... role: '__system',				__system 系统级别管理员
		... db:'admin'}]					db 描述对那个数据库生效
		... })
		Successfully added user: {
		        "user" : "huxiaoshuai",
		        "roles" : [
		                {
		                        "role" : "__system",
		                        "db" : "admin"
		                }
		        ]
		}
		>



2. 开启权限限制
	mongod --dbpath=d:/data/db --logpath=d:/data/log/mongodb.log --auth



错误信息：
	表示没有权限
	not authorized on admin to execute command { listDatabases: 1.0 }"

3. 用户身份权限验证：
	必须在有权限的数据库位置才能验证自己的权限
	> db.auth('huxiaoshuai','memeda')
	1
	>

创建一个具有readWrite权限的用户
> db.createUser({
... user : 'meeda',
... pwd : 'memeda',
... roles:[{
... role : 'readWrite',
... db: 'school'
... }]
... })
Successfully added user: {
        "user" : "meeda",
        "roles" : [
                {
                        "role" : "readWrite",
                        "db" : "school"
                }
        ]
}
>

--- 连接指定位置的数据库 使用指定的身份
C:\Users\Administrator>mongo localhost:27017/school -u meeda -p                                                                                            
Enter password:
connecting to: localhost:27017/school                                           
> show collections                                        
score                                                         
stu                                                           
system.indexes                                                
>                                                                                      
--- 开启权限，绑定允许访问的来源地址为 127.0.0.1                                
mongod --dbpath=d:/data/db --logpath=d:/data/log/mongodb.log --auth --bind_ip=127.0.0.1