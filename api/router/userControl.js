// 登录    
exports.loginapp = function(req, res, connection) {
    //查找......................
    var user = req.query.username;
    var psd = req.query.password;
    console.log(req);
    connection.query(`SELECT SQL_CALC_FOUND_ROWS * FROM usercontrol where username = '${user}' and password='${psd}';`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        // console.log('The solution is: ', results);
        
        if(results.length==1){
            console.log('The solution is: ', results);
            res.send({status:true,uid:results[0].uid});
        }else{
            res.send(false);
        }
        connection.end();
    });
}
exports.registerapp = function(req, res, connection) {
    //获取注册的手机，密码
    var user = req.body.user;
    var psd = req.body.psd;
    console.log(user,psd)
    //先查找手机似乎否已被注册
    connection.query(`SELECT username from usercontrol where username = '${user}'`, function(err, data) {
        //数据库中查不到手机号会返回空的数组
        if(data.length == 0) {
            connection.query(`INSERT INTO usercontrol (username, password) VALUES ('${user}', '${psd}')`, function(err, data) {
                
                res.send({status:'注册成功'})
            })
            //关闭数据库要写进判断里面
            connection.end();
        } else {
            res.send({status:'该帐号已注册'})
            //关闭数据库要写进判断里面
            connection.end();
        }

    })

}