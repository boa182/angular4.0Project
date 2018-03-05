
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