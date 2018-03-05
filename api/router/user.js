// 登录    
exports.login = function(req, res, connection) {
    //查找......................
    var user = req.query.user;
    var psd = req.query.psd;
    console.log(req.query.psd);
    connection.query(`SELECT * FROM user where username = '${user}' and password='${psd}'`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}
// 注册
exports.register = function(req, res, connection) {
    console.log(req.body,111);
    var user = req.body.user;
    var psd = req.body.psd;
    connection.query(`SELECT * FROM user where username = '${user}'`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //res.send(results);
        console.log(results.length);
        if(results.length==0){
            console.log(user,psd);
            connection.query(`insert into user (username,password) values ('${user}','${psd}')`, function(error, results, fields) {
                if(error) throw error;
                if(results.affectedRows==1){
                    res.send('success');
                }
                console.log(results.affectedRows,222);
            });
        }else{
            res.send('exist');
        }
        connection.end();
    });
}