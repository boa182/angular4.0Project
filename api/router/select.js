//加入购物车
exports.addCar = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.body.uid;
    var gid = req.body.gid;
    var qty = req.body.qty;
    connection.query(`insert into car (uid,gid,qty) values ('${uid}','${gid}','${qty}')`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(true);
        connection.end();
    });
}
//关联商品表和购物车表
exports.selectgoods = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.query.uid;
    connection.query(`select * from car,goods where car.gid = goods.gid and car.uid = '${uid}' and car.order_type = 0`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

//根据传order_type获取商品数据
exports.selectgoods_fromType = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.query.uid;
    var order_type = req.query.type;
    connection.query(`select * from car,goods where car.gid = goods.gid and car.uid = '${uid}' and car.order_type = '${order_type}'`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

//统计品牌数量
exports.staisticsGoods = function(req, res, connection) {
    //查找......................
    console.log(req)
    connection.query(`select * from ( select brandStoreName, count(*) as totals  from goods group by brandStoreName) as a order by a.totals DESC LIMIT 5;`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

//删除所有订单
exports.deleteAll = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.query.uid;
    connection.query(`DELETE FROM carFrom WHERE uid = '${uid}'`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}


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

//前端修改商品数量
exports.updateqty = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.body.uid;
    var gid = req.body.gid;
    connection.query(`update car set qty = qty+1 where uid = '${uid}' AND gid ='${gid}'`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(true);
        connection.end();
    });
}
//减少商品数量
exports.reduceQty = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.body.uid;
    var gid = req.body.gid;
    connection.query(`update car set qty = qty-1 where uid = '${uid}' AND gid ='${gid}'`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(true);
        connection.end();
    });
}

//通过id查找商品
exports.getCarGoods = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.query.uid;
    connection.query(`SELECT * FROM carFrom where uid='${uid}'`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

exports.setOrderList = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.query.uid;
    var order_detail = req.query.order_detail;
    connection.query(`insert into orderfrom(uid,order_detail)values('${uid}','${order_detail}');`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

exports.getOrderList = function(req, res, connection) {
    //查找......................
    console.log(req)
    var uid = req.query.uid;
    connection.query(`select * from orderfrom where uid = '${uid}'`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

////后端用户信息修改
exports.usercontrol = function(req, res, connection) {
    //查找......................
    console.log(req)
    var userid = req.body.userid;
    var username = req.body.username;
    var password = req.body.password;
    var usertype = req.body.usertype;
    connection.query(`UPDATE user SET username = '${username}' , password = password ,  type = '${usertype}' WHERE userid = '${userid}';`, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

// 分页查找商品
exports.getUser = function(req, res, connection) {

    var page = req.query.page;
    var pageitems=req.query.pageitems;
    console.log(page,pageitems)
    var sql;
    if(!pageitems){
        aql=`SELECT  SQL_CALC_FOUND_ROWS * FROM user;select count(*) as rowscount from user;`
    }else{
        sql=`SELECT  SQL_CALC_FOUND_ROWS * FROM user limit ${(page-1)*pageitems},${pageitems};
 select count(*) as rowscount from user;`
    }
    //查找......................
    connection.query(sql, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

exports.createOrder = function(req, res, connection) {
    var uid = req.query.uid;
    let sql = `UPDATE car SET order_type = 1 WHERE uid = '${uid}'`;
    console.log(sql)
         
    connection.query(sql, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //把数据整理，返回到前端
        
        res.send(results);
        connection.end();
    });
}

//前端根据uid gid删除商品
exports.deletegoods = function(req, res, connection) {
    var uid = req.query.uid;
    var gid = req.query.gid;

    connection.query(`DELETE FROM car WHERE uid = '${uid}' and gid= '${gid}';`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //把数据整理，返回到前端
        
        res.send(true);
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
	var pageCount = 10;//每一页显示多少条
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
//根据uid查找数量
exports.selectQty = function(req, res, connection) {
	console.log(req.query.type);
	//查找......................
	var uid = req.query.uid;
	let sql= `SELECT * FROM car where uid = '${uid}'`;
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
exports.allclass = function(req, res, connection) {
	
	connection.query(`select DISTINCT class from goods`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);		
		res.send(results);
		connection.end();
	});
}

//根据uid和goodid查找car
exports.selectCar = function(req, res, connection) {
    var uid = req.query.uid;
    var gid = req.query.gid;
    connection.query(`select * from car where uid='${uid}' and gid='${gid}' `, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);      
        res.send(results);
        connection.end();
    });
}

