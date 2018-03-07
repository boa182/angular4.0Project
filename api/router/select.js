//通过id查找商品
exports.getGid = function(req, res, connection) {
    //查找......................
    console.log(req)
    var gid = req.query.gid;
    connection.query(`SELECT * FROM goods where gid='${gid}'`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

//查找所有用户信息  余路
exports.getUser = function(req, res, connection) {
	connection.query(`SELECT * FROM user`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	});
}

//查找travel所有的东西  黄子健
exports.selectBrand = function(req, res, connection) {
	connection.query(`SELECT * FROM brand`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	});
}
////根据userid删除用户
exports.updateUser = function(req, res, connection) {
	var id = req.query.page;
	console.log(id)
	connection.query(`DELETE FROM user WHERE userid = '${id}'`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	});
}
//查找travel所有的东西  黄子健
exports.getGoods = function(req, res, connection) {
	connection.query(`select SQL_CALC_FOUND_ROWS * from goods limit 100`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	});
}
//通过class or brandStoreName 分页查找goods表里面的东西
exports.selectClass = function(req, res, connection) {
	console.log(req.query.type);
	//查找......................
	var type = req.query.type;
	//分页查找
	var pageCount = 6;//每一页显示多少条
	var page = req.query.page||1;//页码
	var pageBegin = pageCount * (page - 1)//从哪里开始
	let sql= `SELECT * FROM goods where class = '${type}' or brandStoreName = '${type}' limit `+ pageBegin + ','+pageCount;
	console.log(sql)
	connection.query(sql, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
		}
		res.send(results);
		connection.end();
	});
}
//通过brandStoreName 查找brandStoreName表里面的东西
exports.selectStoreName = function(req, res, connection) {
	console.log(req.query.type);
	//查找......................
	var brandStoreName = req.query.brandStoreName;
	let sql= `SELECT * FROM brand where name = '${brandStoreName}'`;
	console.log(sql)
	connection.query(sql, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
		}
		res.send(results);
		connection.end();
	});
}


// 查找商品中所有品牌
exports.brandStore = function(req, res, connection) {
	
	connection.query(`select DISTINCT brandStoreName from goods`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);		
		res.send(results);
		connection.end();
	});
}


