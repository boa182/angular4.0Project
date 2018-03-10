exports.upload = function(req, res, connection) {
    //查找......................
    console.log(req.files,111);
    console.log(req.body,222);
    var file=req.files;
    var user = req.body.user;
    var nickName = req.body.nickName;
    var sex = req.body.sex;
    if(file.img){
        var path=file.img.path;
        path=path.substring(7);
        sql=  `UPDATE user SET nickName = '${nickName}',sex = '${sex}',imgurl='${path}' WHERE username = '${user}';`    
    }else{
        sql=  `UPDATE user SET nickName = '${nickName}',sex = '${sex}'WHERE username = '${user}';` 
    }

    connection.query(sql, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}