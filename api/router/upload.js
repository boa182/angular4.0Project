exports.upload = function(req, res, connection) {
    //查找......................
    console.log(req.files,111);
    console.log(req.body,222);
    var file=req.files;
    var path=file.img.path;
    path=path.substring(7);
    console.log(path);
    
    // connection.query(`DELETE FROM goods where gid IN (${gid})`, function(error, results, fields) {
    //     if(error) throw error;
    //     //results =>array类型
    //     console.log('The solution is: ', results);
    //     res.send(results);
    //     connection.end();
    // });
}