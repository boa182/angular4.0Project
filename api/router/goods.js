// 分页查找商品
exports.goods = function(req, res, connection) {
    var page = req.query.page;
    var pageitems=req.query.pageitems;
    var sql;
    if(!pageitems){
        aql=`SELECT  SQL_CALC_FOUND_ROWS * FROM goods;select count(*) as rowscount from goods;`
    }else{
        sql=`SELECT  SQL_CALC_FOUND_ROWS * FROM goods limit ${(page-1)*pageitems},${pageitems};
 select count(*) as rowscount from goods;`
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