exports.updategoods = function(req, res, connection) {
    //查找......................
    console.log(req.body);
    console.log(JSON.parse(req.body.data));
    var obj=JSON.parse(req.body.data);
    var str='';
    for(let key in obj){
        str+=`${key}='${obj[key]}',`
    }
    str=str.substr(0,str.length-1);
    console.log(str);
    var sql=`update goods SET  ${str}  WHERE gid = '${req.body.gid}'`;
    console.log(sql);
    connection.query(sql, function(error, results, fields) { 
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
}
