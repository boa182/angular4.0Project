//通过id查找admin表里面的东西
exports.selectAid = function(req, res, connection) {
	//查找......................
	var aid = req.query.aid;
	connection.query(`SELECT * FROM admin where aid = '${aid}'`, function(error, results, fields) {
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


//通过id查找homestay里面的东西
exports.selectId = function(req, res, connection) {
	//查找......................
	var hid = req.query.hid;
	connection.query(`SELECT * FROM homestary where hid = '${hid}'`, function(error, results, fields) {
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

//查找所有的员工信息
exports.getadmin = function(req, res, connection) {
	connection.query(`SELECT * FROM admin`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
}

//查找所有审核表单里的东西
exports.checkhomestay = function(req, res, connection) {
	connection.query(`SELECT * FROM checkhomestay`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
}
//获得所有workplan里面的东西
exports.getplan = function(req, res, connection) {
	connection.query(`SELECT * FROM workplan`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
}

exports.selectAll = function(req, res, connection) {
	connection.query(`SELECT * FROM homestary`, function(error, results, fields) {
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



//查找travel所有的东西
exports.selectTravel = function(req, res, connection) {
	connection.query(`SELECT * FROM travelStrategy`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	});
}
//分页查找所有的酒店信息
exports.selectPage = function(req,res,connection){
	var pageCount = req.query.pageCount||10;
	var page = req.query.page||1;
	var pageBegin = pageCount * (page - 1)
												//从这里开始显示     显示多少个
	connection.query('select * from homestary limit '+ pageBegin + ','+pageCount,function(err,results, fields){
		var obj = {
			news: results,
		}
		res.end(JSON.stringify(obj))
		
		
	})
	connection.end();
	
}

//获取所有评论
exports.selectCommon = function(req,res,connection){
	connection.query(`SELECT
	*
	FROM commons as a
INNER JOIN orderform as b INNER JOIN homestary as c

WHERE a.order_id = b.id AND b.room_id=c.hid;

`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	});
	
}