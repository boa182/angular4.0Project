exports.deletegood = function(req, res, connection) {
    //查找......................
    var gid = req.body.gid;
    console.log(gid);
    connection.query(`DELETE FROM goods where gid = '${gid}'`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}

//批量删除
exports.deletebatch = function(req, res, connection) {
    //查找......................
    var gid = req.body.gid;
    console.log(gid);
    connection.query(`DELETE FROM goods where gid IN (${gid})`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}