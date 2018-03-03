// 登录    
exports.login = function(req, res, connection) {
    //查找......................
    var user = req.query.user;
    var psd = req.query.psd;
    connection.query(`SELECT * FROM user where account = '${user}' and password='psd'`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}
// 注册
exports.register = function(req, res, connection) {
    var user = req.body.user;
    var psd = req.body.psd;
    connection.query(`SELECT * FROM user where account = '${user}'`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        // res.send(results);
        connection.end();
    });
}