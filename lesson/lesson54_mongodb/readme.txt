1. 将MongoDB服务设置为系统级别服务，设置该服务开机自启
	
	安装系统服务：
		mongod --dbpath=d:/data/db --logpath=d:/data/log/mongodb.log --storageEngine=mmapv1 --auth --bind_ip=127.0.0.1 --port=27017 --serviceName=MongoDB --install 

	启动服务
		a. 直接在系统中的服务位置，开启和停止对应的服务
		b. 在命令行中使用命令
			net stop MongoDB		停止服务
			net start MongoDB 		开启服务


	删除服务
		a. 终止当前的服务
		b. 删除服务 sc delete mongodb
			C:\Users\Administrator>sc delete mongodb
			[SC] DeleteService 成功

			C:\Users\Administrator>

2. 连接MongoDB的完整模式
	mongo 	默认连接localhost:27017/test数据库
	mongo IP:port/database -u user -p 密码

	使用huxiaoshuai的身份连接指定位置的数据库
	mongo 192.168.31.254:27017/school -u huxiaoshuai -p(回车)

3. 在权限管理中
	删除用户
		a. 切换到用户所在的数据库
		2. 执行 db.dropUser('meeda')

	添加账户：
		> db.createUser({
		... user: 'memeda',
		... pwd:'memeda',
		... roles:[{
		... role:'readWrite',
		... db:'school'
		... }]
		... })
		Successfully added user: {
		        "user" : "memeda",
		        "roles" : [
		                {
		                        "role" : "readWrite",
		                        "db" : "school"
		                }
		        ]
		}
		>

4. 数据的备份与恢复
	备份：
		服务一定要停止！！！
			a. 最简单的方式
				将data拷贝走

			b. 使用命令进行备份(退出数据库连接)
				mongodump -h localhost --port 27017 -d school -o e:/memeda

				-- 使用指定的身份导出指定位置的指定数据库
				C:\Users\Administrator>mongodump -h localhost --port 27017 -d school -u memeda -p memeda -o e:/memeda
				2017-09-22T14:12:39.338+0800    writing school.system.indexes to
				2017-09-22T14:12:39.347+0800    done dumping school.system.indexes (2 documents)
				2017-09-22T14:12:39.426+0800    writing school.score to
				2017-09-22T14:12:39.426+0800    writing school.stu to
				2017-09-22T14:12:39.466+0800    done dumping school.score (4 documents)
				2017-09-22T14:12:39.467+0800    done dumping school.stu (14 documents)

				C:\Users\Administrator>

	恢复：
		a. 直接将data属具目录拷贝回来就OK！
		b. 使用命令进行恢复（一定是退出数据库的链接）

			C:\Users\Administrator>mongorestore -h localhost --port 27017 -d school -u memeda -p memeda e:/memeda/school
			2017-09-22T14:18:26.181+0800    building a list of collections to restore from e:\memeda\school dir
			2017-09-22T14:18:26.192+0800    reading metadata for school.stu from e:\memeda\school\stu.metadata.json
			2017-09-22T14:18:26.205+0800    reading metadata for school.score from e:\memeda\school\score.metadata.json
			2017-09-22T14:18:26.699+0800    restoring school.score from e:\memeda\school\score.bson
			2017-09-22T14:18:26.700+0800    restoring school.stu from e:\memeda\school\stu.bson
			2017-09-22T14:18:26.731+0800    restoring indexes for collection school.score from metadata
			2017-09-22T14:18:26.734+0800    restoring indexes for collection school.stu from metadata
			2017-09-22T14:18:26.736+0800    finished restoring school.score (4 documents)
			2017-09-22T14:18:26.746+0800    finished restoring school.stu (14 documents)
			2017-09-22T14:18:26.748+0800    done

			C:\Users\Administrator>


5. 数据的导入与导出
	导出 指数据从集合中导出(json文件、csv的文件)
	mongoexport 

	C:\Users\Administrator>mongoexport -h localhost --port 27017 -d school -c stu -q {} -f uname,nianling,sex,class  -u memeda -p memeda --type=json -o e:/memeda/stu.json                                                                                              2017-09-22T14:22:00.744+0800    connected to: localhost:27017                                                                     2017-09-22T14:22:00.775+0800    exported 14 records                                                                                                                                                                                                                 C:\Users\Administrator>         

	-- 导出CSV格式文件
	C:\Users\Administrator>mongoexport -h localhost --port 27017 -d school -c stu -q {} -f uname,class  -u memeda -p memeda --type=csv
 -o e:/memeda/stu.csv
2017-09-22T14:23:27.569+0800    connected to: localhost:27017
2017-09-22T14:23:27.586+0800    exported 14 records

C:\Users\Administrator>       

--- find 第二个参数 为1表示需要，0 表示排除
> db.stu.find({},{uname:1})
{ "_id" : ObjectId("59c21576a163122642bd2863"), "uname" : "孙悟空" }
{ "_id" : ObjectId("59c215d7a163122642bd2864"), "uname" : "姜子牙" }
{ "_id" : ObjectId("59c21685a163122642bd2865"), "uname" : "唐僧" }
{ "_id" : ObjectId("59c21685a163122642bd2866"), "uname" : "宋江" }
{ "_id" : ObjectId("59c21685a163122642bd2867"), "uname" : "贾宝玉" }
{ "_id" : ObjectId("59c2180da163122642bd2868"), "uname" : "李逵" }
{ "_id" : ObjectId("59c2180da163122642bd2869"), "uname" : "孙二娘" }
{ "_id" : ObjectId("59c2180da163122642bd286a"), "uname" : "张青" }
{ "_id" : ObjectId("59c2232ea163122642bd2872"), "uname" : "猪八戒" }
{ "_id" : ObjectId("59c3667fbb8f96e33345b538"), "uname" : "二郎神" }
{ "_id" : ObjectId("59c366bebb8f96e33345b539"), "uname" : "闻仲" }
{ "_id" : ObjectId("59c36817bb8f96e33345b53a"), "uname" : "者行孙" }
{ "_id" : ObjectId("59c3681fbb8f96e33345b53b"), "uname" : "行者孙" }
{ "_id" : ObjectId("59c36894bb8f96e33345b53c"), "uname" : "孙乾杨杨" }
>

--- 数据导入
	mongoiport

	mongoimport -h localhost --port 27017 -d school -c stu -u memeda -p memeda --type json e:/memeda/stu.json


	-h 指定IP地址
	--port 指定端口号
	-d 数据库
	-c 集合
	-u 用户
	-p 密码
	--type 导入文件类型
		json 文件类型
		csv  文件类型
	--drop 如果数据之前的已经存在，自动删除	

	C:\Users\Administrator>mongoimport -h localhost --port 27017 -d school -c stu -u memeda -p memeda --type json --drop e:/memeda/stu
	.json
	2017-09-22T14:31:30.570+0800    connected to: localhost:27017
	2017-09-22T14:31:30.595+0800    dropping: school.stu
	2017-09-22T14:31:30.615+0800    imported 14 documents

	C:\Users\Administrator>

	注意：在使用CSV文件进行导入时需要指定 --headerline




错误信息：
	E11000 duplicate key error 数据重复


---- 索引
	类似于字典的目录，用于数据的快速定位

	_id ObjectID 是唯一、存在、不重复 (有且只有一个) primary key

	唯一索引 unqiue index
		只能有一个是这样的

	普通索引 index

创建索引的方式：
	普通索引
		> db.stu.ensureIndex({uname:1})
		{
		        "createdCollectionAutomatically" : false,
		        "numIndexesBefore" : 1,
		        "numIndexesAfter" : 2,
		        "ok" : 1
		}
		>
		
	创建唯一索引
	> db.stu.ensureIndex({uname:1},{unique:true})
	{
	        "createdCollectionAutomatically" : false,
	        "numIndexesBefore" : 1,
	        "numIndexesAfter" : 2,
	        "ok" : 1
	}
	>

	创建唯一索引，如果存在重复的数据自动删除一个
	> db.memeda.ensureIndex({uname:1},{unique:true,"dropDups":true})



	删除索引	
		> db.stu.dropIndex({uname:1})
		{ "nIndexesWas" : 2, "ok" : 1 }
		>

图形化操作工具
	


===============================
Bootstrap 前端布局框架

基本介绍：
	1. 是Twitter的前端开发团队开发的一款框架
	2. 开源
	3. 统一规范，保证在脱离了UI、美工的存在下依然能够设计出非常好看的页面
	3. 支持响应式布局框架，移动设备优先

基本使用方式
	写HTML页面、CSS样式、JS没有区别

	在Bootstrap中已经内置好了一定的css样式和JS特效，只需要按照方式进行调用

基本使用：
	使用Bootstrap的方式：
		1. 引入在线的bootstrap.min.css/bootstrap.min.js
		2. 直接将bootstrap下载到本地使用