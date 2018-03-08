var express = require('express');
var app = express();
//链接数据库模块
var mysql = require("mysql");


//连接服务器配置.......................................................................
function createConnection() {
	var connection = mysql.createConnection({
		host: '10.3.132.88',// 127.0.0.1 10.3.136.153
		user: 'root',
		password: '',
		database: 'lefeng',
        multipleStatements: true
	});
	return connection
}
//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});


app.use(express.static('config'));
// parse application/json 

//get请求.................................................................................
app.get('/login', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/user').login(req,res,connection);
    console.log(req.query)
})

//根据名牌id查找东西
app.get('/selectbrand', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').selectBrand(req,res,connection);
    console.log(req.query)
})

//根据用户名查找类型
app.get('/usertype', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/user').userType(req,res,connection);
    console.log(req.query)
})

//根据userid删除用户
app.get('/updateuser', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').updateUser(req,res,connection);
    console.log(req.query)
})

//根据gid查找商品
app.get('/getgid', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').getGid(req,res,connection);
    console.log(req.query)
})
//根据bsn查找bsn
app.get('/selectstorename', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').selectStoreName(req,res,connection);
    console.log(req.query)
})
//查找goods前一百条数据
app.get('/getgoods', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').getGoods(req,res,connection);
    console.log(req.query)
})

//关联商品表和购物车表
app.get('/connetGoods', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').selectgoods(req,res,connection);
    console.log(req.query)
})

//查找所有用户信息
app.get('/getuser', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').getUser(req,res,connection);
    console.log(req.query)
})

//通过class查找商品
app.get('/selectclass', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').selectClass(req,res,connection);
    console.log(req.query)
})
//通过uid查找数量
app.get('/selectqty', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').selectQty(req,res,connection);
    console.log(req.query)
})

// 分页查找商品
app.get('/goods', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/goods').goods(req,res,connection);
    console.log(req.query)
})

// 查找商品中所有品牌
app.get('/brandStore', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').brandStore(req,res,connection);
    console.log(req.query)
})
// 根据用户id查找订单
app.get('/getCarGoods', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').getCarGoods(req,res,connection);
    console.log(req.query)
})

//要post请求...............................................................................
// parse application/x-www-form-urlencoded 
//使用bodyParser模块
//用于post请求获取参数
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/register', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/user').register(req,res,connection);
})
//加入购物车
app.post('/addCar', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').addCar(req,res,connection);
})
//后端用户信息修改
app.post('/usercontrol', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').usercontrol(req,res,connection);
})

//前端修改商品数量
app.post('/updateqty', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').updateqty(req,res,connection);
})
//减少商品数目
app.post('/reduceqty', function(req, res) {
    //然后请求的很快的时候才能正常关闭链接、
    var connection = createConnection();
    connection.connect();
    //引入查找模块
    require('./router/select').reduceQty(req,res,connection);
})

//监听该端口..............................................................................
var server = app.listen(3000, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})