// 分页查找商品
exports.goods = function(req, res, connection) {
    //查找......................
    connection.query(`SELECT  SQL_CALC_FOUND_ROWS * FROM goods limit 10;
 select count(*) as rowscount from goods;`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}