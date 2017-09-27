MongoDB数据库
========================
数据库概念：
	以一种特定的方式进行数据的存储、读写

数据库分类：
	关系型数据库：
		特点：
			存储数据的数据结构是固定

			school 数据库 (school文件夹)
				teacher 数据表 table(excel表格) --- 存储所有与老师相关的数据
					field 字段(垂直方向)
					row/record 记录(数据)

				student 数据表 --- 存储所有与学员相关的数据

		归属：
			MySQL/Oracle/SQL Server/DB2


	非关系型数据库：
		特点：
			存储的数据的数据结构是不固定的(每一条记录身上有可能是不一样多)

			school 数据库
				teacher 集合 collection --- 存储和老师相关的数据
					field 字段
					document 文档

		归属：
			MongoDB/Mamcache/Redis

开源软件：
	开源: 表示是免费使用...

	一部分人负责维护这个项目(捐助),同时又一些专业的社区人员进行相应的贡献
	Git 版本控制器、团队协作工具


MongoDB数据库
	1. 开源、免费的非关系型数据库
	2. 基于分布式文件存储系统的数据库
	3. 存储数据时采用是文档(document)的形式
		语法结构是一种类似于JSON的BSON结构 {id:1,name:'孙悟空'}

MongoDB数据库安装

	MongoDB软件--windows 32位操作系统，只允许存储最大为2G的数据

	祝你安装成功！

	配置MongoDB的环境变量

		当输入mongod命令时显示如下信息，就表示你没有将mongod.exe文件所在的目录添加到环境变量中
		C:\Users\Administrator>mongod
		'mongod' 不是内部或外部命令，也不是可运行的程序
		或批处理文件。

		C:\Users\Administrator>

		将mongod.exe文件所在的路径添加到系统环境变量中
			1. 找到文件所在的位置 D:\Program Files\MongoDB\Server\3.2\bin,将目录复制
			2. 右键单击我的电脑-->属性-->高级系统设置-->环境变量
			3. 
				如果在当前用户环境变量中没有path变量名，自行创建一个
				如果有path变量名
					使用;将之前的进行分割，将路径进行粘贴，然后保存(说三遍！)
			4. 重启命令行

			当看到如下信息时，表示添加系统环境变量成功！
			C:\Users\Administrator>mongod
				2017-09-20T14:27:45.377+0800 I CONTROL  [main]
				2017-09-20T14:27:45.378+0800 W CONTROL  [main] 32-bit servers don't have journal
				ing enabled by default. Please use --journal if you want durability.
				2017-09-20T14:27:45.378+0800 I CONTROL  [main]
				2017-09-20T14:27:45.381+0800 I CONTROL  [main] Hotfix KB2731284 or later update
				is not installed, will zero-out data files
				2017-09-20T14:27:45.386+0800 I CONTROL  [initandlisten] MongoDB starting : pid=4
				308 port=27017 dbpath=C:\data\db\ 32-bit host=PC201709082205
				2017-09-20T14:27:45.386+0800 I CONTROL  [initandlisten] targetMinOS: Windows Vis
				ta/Windows Server 2008
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten] db version v3.2.16-25-g1
				ebd782
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten] git version: 1ebd782eccc
				7a48766a2f3b97271c09129cd7c4b
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten] allocator: tcmalloc
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten] modules: none
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten] build environment:
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten]     distarch: i386
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten]     target_arch: i386
				2017-09-20T14:27:45.387+0800 I CONTROL  [initandlisten] options: {}
				2017-09-20T14:27:45.389+0800 I STORAGE  [initandlisten] exception in initAndList
				en: 28663 Cannot start server. The default storage engine 'wiredTiger' is not av
				ailable with this build of mongod. Please specify a different storage engine exp
				licitly, e.g. --storageEngine=mmapv1., terminating
				2017-09-20T14:27:45.392+0800 I CONTROL  [initandlisten] dbexit:  rc: 100

				C:\Users\Administrator>


MongoDB的命令操作：

	启动MongoDB服务器(手动启动)
		需要设置存储的数据的目录、日志的记录格式、数据引擎
			存储目录
				data
					db 	存储数据
					log 存储日志

		mongod --dbpath=d:/data/db --logpath=d:/data/log/mongodb.log --storageEngine=mmapv1(64位不需要进行指定)


		--- 当前字符串表示MongoDB数据库的服务器已经启动了,默认监听的端口是27017
		waiting for connections on port 27017


	创建客户端连接MongoDB服务器
		C:\Users\Administrator>mongo
		2017-09-20T15:05:08.059+0800 I CONTROL  [main] Hotfix KB2731284 or later update is not installed, will zero-out data fil
		es
		MongoDB shell version: 3.2.16-25-g1ebd782
		connecting to: test
		Welcome to the MongoDB shell.
		For interactive help, type "help".
		For more comprehensive documentation, see
		        http://docs.mongodb.org/
		Questions? Try the support group
		        http://groups.google.com/group/mongodb-user
		Server has startup warnings:
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten]
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten] ** WARNING: This 32-bit MongoDB binary is deprecated
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten]
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten]
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten] ** NOTE: This is a 32 bit MongoDB binary.
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten] **       32 bit builds are limited to less than 2GB of data (or
		less with --journal).
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten] **       Note that journaling defaults to off for 32 bit and is
		currently off.
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten] **       See http://dochub.mongodb.org/core/32bit
		2017-09-20T15:03:26.014+0800 I CONTROL  [initandlisten]
		>

退出MongoDB的服务器
> exit
bye

C:\Users\Administrator>

--- db 查询当前所在的数据库 database
> db
test
>

--- show dbs 显示当前服务器下所有的（非空）数据库
> show dbs
local  0.078GB
>

--- use school 
--- 1. 切换到数据库 school
--- 2. 如果当前的数据库scholl是不存在的，自动进行创建
> use school
switched to db school
>

--- 创建集合 collection
> db.createCollection('stu')
{ "ok" : 1 }
>

--- 当前数据库下有多少个集合
> show collections
stu
system.indexes		-- 专门用于存储当前数据库中索引信息
>


--- 添加一条数据
> db.stu.insert({uname:'孙悟空',sex:'男',age:12000,class:'花果山' })
WriteResult({ "nInserted" : 1 })
>

--- 查看集合中的所有的数据 find()
> db.stu.find();
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空", "sex" : "男", "age" : 12000, "class" : "花果山" }
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙", "sex" : "男", "age" : 100, "class" : "西岐" }
>

--- 一次性插入多条数据
> db.stu.insert([
... {uname:'唐僧',age:200,sex:'男',class:'大唐'},
... {uname:'宋江',age:120,sex:'男',class:'梁山'},
... {uname:'贾宝玉',age:40,sex:'男',class:'大观园'}
... ])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 3,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
>

--- 定义数组对象
> var userData = [
... { uname:'李逵',sex:'男',age:30,class:'梁山' },
... { uname:'孙二娘',sex:'女',age:18,class:'梁山' },
... { uname:'张青',sex:'女',age:20,class:'梁山' }
... ]
>

--- 插入多条数据
> db.stu.insert(userData)
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 3,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
>

--- count() 统计查询出来的条数
> db.stu.find().count()
8
>

--- _id 是MongoDB在进行数据存储时的一个唯一标志
"_id" : ObjectId("59c21576a163122642bd2863")


--- 查询获取一条
> db.stu.findOne()
{
        "_id" : ObjectId("59c21576a163122642bd2863"),
        "uname" : "孙悟空",
        "sex" : "男",
        "age" : 12000,
        "class" : "花果山"
}
>

--- db.stu.update() 进行数据的更新 
> db.stu.update({uname:'孙悟空'},{$set:{age:1200}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>

--- 让所有的男性的性别变成保密
> db.stu.update({sex:'男'},{$set:{sex:'保密'}})		默认只匹配一条
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>

--- {multi:true} 允许同时修改多条数据
> db.stu.update({sex:'男'},{$set:{sex:'保密'}},{multi:true})  
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 5 })
>

--- 当匹配的条件不存在时，默认是不命中的
> db.stu.update({uname:'武松'},{$set:{like:'潘金莲'}}) 
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
>

--- {upsert:true} 当更新的数据不存在时，自动添加
> db.stu.update({uname:'武松'},{$set:{like:'潘金莲'}},{upsert:true})
WriteResult({
        "nMatched" : 0,
        "nUpserted" : 1,
        "nModified" : 0,
        "_id" : ObjectId("59c2206c83b249c6658b59e9")
})
>

--- 删除操作(一定要慎重！一定要慎重！一定要慎重！)
> db.stu.remove({uname:'武松'})
WriteResult({ "nRemoved" : 1 })
>


--- 如何清空数据、删集合、删库

--- db.memeda.remove({}) 清空数据
> db.memeda.remove({})
WriteResult({ "nRemoved" : 7 })
>

--- 删除集合
> db.memeda.drop()
true
>

--- 1. 删库第一步 切换到对应的数据库
--- 2. 执行命令
> db.dropDatabase()
{ "dropped" : "demo", "ok" : 1 }
>

--- MongoDB中允许存储的数据类型
	数值
	字符串
	对象
	数组
	函数
	正则对象
	时间
	undefined
	...

--- 插入的数据包含数组结构
> db.stu.insert({uname:'猪八戒',age:200,sex:'男',class:'高老庄',cook:['鱼香肉丝','宫保鸡丁','水煮鱼','水煮肉','一盆米饭']})
WriteResult({ "nInserted" : 1 })
> db.stu.find()

--- 美化查询结果
> db.stu.find().pretty()
{
        "_id" : ObjectId("59c21576a163122642bd2863"),
        "uname" : "孙悟空",
        "sex" : "保密",
        "age" : 1200,
        "class" : "花果山"
}
{
        "_id" : ObjectId("59c215d7a163122642bd2864"),
        "uname" : "姜子牙",
        "sex" : "保密",
        "age" : 100,
        "class" : "西岐"
}
{
        "_id" : ObjectId("59c21685a163122642bd2865"),
        "uname" : "唐僧",
        "age" : 200,
        "sex" : "保密",
        "class" : "大唐"
}
{
        "_id" : ObjectId("59c21685a163122642bd2866"),
        "uname" : "宋江",
        "age" : 120,
        "sex" : "保密",
        "class" : "梁山"
}
{
        "_id" : ObjectId("59c21685a163122642bd2867"),
        "uname" : "贾宝玉",
        "age" : 40,
        "sex" : "保密",
        "class" : "大观园"
}
{
        "_id" : ObjectId("59c2180da163122642bd2868"),
        "uname" : "李逵",
        "sex" : "保密",
        "age" : 30,
        "class" : "梁山"
}
{
        "_id" : ObjectId("59c2180da163122642bd2869"),
        "uname" : "孙二娘",
        "sex" : "女",
        "age" : 18,
        "class" : "梁山"
}
{
        "_id" : ObjectId("59c2180da163122642bd286a"),
        "uname" : "张青",
        "sex" : "女",
        "age" : 20,
        "class" : "梁山"
}
{
        "_id" : ObjectId("59c2232ea163122642bd2872"),
        "uname" : "猪八戒",
        "age" : 200,
        "sex" : "男",
        "class" : "高老庄",
        "cook" : [
                "鱼香肉丝",
                "宫保鸡丁",
                "水煮鱼",
                "水煮肉",
                "一盆米饭"
        ]
}
>

--- 向数组单元中压入一个新的值
> db.stu.update({uname:'猪八戒'},{$push:{cook:'红烧肉'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>

--- 删除数组单元的一个值  $pop:1 尾部  $pop:-1 头部
> db.stu.update({uname:'猪八戒'},{$pop:{cook:1}})

--- 移除数组单元中指定的值
> db.stu.update({uname:'猪八戒'},{$pull:{cook:'一盆米饭'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>

--- 进行数据的添加，如果数据已经存在了不再进行添加
> db.stu.update({uname:'猪八戒'},{$addToSet:{cook:'水煮鱼'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })

