//搜索商品
exports.searchgoods = function(req, res, connection) {
    console.log(req.query);
    var brandStoreName = req.query.brandStoreName || 'all';
    var minPrice = req.query.vipshopPrice1 || 0;
    var maxPrice = req.query.vipshopPrice2 || 0;
    var name = req.query.name || "";
    var pageitems = req.query.pageitems || 10;//默认每页10条数据
    var page = req.query.page || 1;
    var className = req.query.class || 'all';
    function minToMax(a,b){
        var c;
        a=a*1;
        b=b*1;
        if(a>b){
            c=b;
            b=a;
            a=c;
        };
        return {a,b};
    }
    a=minToMax(minPrice,maxPrice).a;//得到a,b为小到大
    b=minToMax(minPrice,maxPrice).b;
    console.log(a,b);
    console.log(a==0 && b==0);
    if(brandStoreName!='all'){  
        console.log(brandStoreName);  
        if(className!='all'){

            if(a!=0 && b!=0){
             // 如果全部参数都传
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where brandStoreName='${brandStoreName}' 
                    AND vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND class = '${className}'
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where brandStoreName='${brandStoreName}' 
                    AND vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND name like '%${name}%'
                    AND class = '${className}';
                 `
                 console.log(sql);
            }else if(a==0 && b==0){
                //a,b都不传
                sql=`
                   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where brandStoreName='${brandStoreName}'
                    AND class = '${className}'
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where brandStoreName='${brandStoreName}' 
                    AND name like '%${name}%'
                    AND class = '${className}'; 
                `
                console.log(sql);
            }else{
                //a,b传一个
                var c=a>b? a : b;
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where brandStoreName='${brandStoreName}' 
                    AND class = '${className}'
                     AND vipshopPrice<=${c}
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where brandStoreName='${brandStoreName}' 
                    AND vipshopPrice<=${c}
                    AND name like '%${name}%'
                    AND class = '${className}';
                 `
                 console.log(sql);
            }
        } else{
             if(a!=0 && b!=0){
             // 如果全部参数都传
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where brandStoreName='${brandStoreName}' 
                    AND vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where brandStoreName='${brandStoreName}' 
                    AND vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND name like '%${name}%'
                    ;
                 `
                 console.log(sql);
            }else if(a==0 && b==0){
                //a,b都不传
                sql=`
                   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where brandStoreName='${brandStoreName}'
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where brandStoreName='${brandStoreName}' 
                    AND name like '%${name}%'
                    ; 
                `
                console.log(sql);
            }else{
                //a,b传一个
                var c=a>b? a : b;
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where brandStoreName='${brandStoreName}' 
                     AND vipshopPrice<=${c}
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where brandStoreName='${brandStoreName}' 
                    AND vipshopPrice<=${c}
                    AND name like '%${name}%'
                    ;
                 `
                 console.log(sql);
            }
        }     
    }else if(brandStoreName=='all'){
        //全部商品
        console.log(className);
        if(className!='all'){

            if(a!=0 && b!=0){
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where  
                    vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND class = '${className}'
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where 
                    vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND name like '%${name}%'
                    AND class = '${className}';
                 `
            }else if(a==0 && b==0){
                console.log(`${name},${(page-1)*pageitems},${pageitems}`);
                //a,b都不传
                sql=`
                   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where  
                    name like '%${name}%' 
                    AND class = '${className}'
                    limit ${(page-1)*1*pageitems},${pageitems*1};
                    select count(*) as rowscount from goods
                    where  
                    name like '%${name}%'
                    AND class = '${className}'; 
                `

            }else{
                //a,b传一个
                var c=a>b? a : b;
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where vipshopPrice<=${c}
                    AND class = '${className}'
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where vipshopPrice<=${c}
                    AND name like '%${name}%'
                    AND class = '${className}';
                 `
            }
        }else{
             if(a!=0 && b!=0){
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where  
                    vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where 
                    vipshopPrice>=${a} AND vipshopPrice<=${b}
                    AND name like '%${name}%'
                    ;
                 `
            }else if(a==0 && b==0){
                console.log(`${name},${(page-1)*pageitems},${pageitems}`);
                //a,b都不传
                sql=`
                   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where  
                    name like '%${name}%'     
                    limit ${(page-1)*1*pageitems},${pageitems*1};
                    select count(*) as rowscount from goods
                    where  
                    name like '%${name}%'
                    ; 
                `

            }else{
                //a,b传一个
                var c=a>b? a : b;
                sql=
                `   select SQL_CALC_FOUND_ROWS
                    * FROM goods 
                    where vipshopPrice<=${c}
                    AND name like '%${name}%' limit ${(page-1)*pageitems},${pageitems};
                    select count(*) as rowscount from goods
                    where vipshopPrice<=${c}
                    AND name like '%${name}%'
                    ;
                 `
            }
        }
    }
    connection.query(sql, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        //console.log('The solution is: ', results);      
        res.send(results);
        connection.end();
    });
}