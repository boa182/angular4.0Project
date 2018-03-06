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
//通过class查找goods表里面的东西
exports.selectClass = function(req, res, connection) {
	console.log(req.query.type);
	//查找......................
	var type = req.query.type;
	connection.query(`SELECT * FROM goods where class = '${type}'`, function(error, results, fields) {
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

