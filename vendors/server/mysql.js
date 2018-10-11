/**
 * Created by wdr520 on 2018/9/6.
 */
// var mysql  = require('mysql');
// 出入后台的数据
var ip = '11.231.74.71' ;
var user = 'root';
var password = 'MDbF9bcK8dH7';
var post = '3306';
var database= '3150nodejs';
var tool='';
var Sql='';
var addSql='';
var modSql='';
var delSql='';


//1.导入http模块
var http = require('http');
//导入文件模块
var fs = require('fs');
//导入路径模块
var path = require('path');
//导入querystring模块（解析post请求数据）
var querystring = require('querystring');
//2.创建服务器
var app = http.createServer();
//3.添加响应事件

var url = require('url');

 app.on('request', function (req, res) {
 //     http.createServer(function(req, res){
  //  console.log(req.method);

    //1.通过判断url路径和请求方式来判断是否是表单提交


res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        var url = request.url;
        if(url ==='/project/9/interface/api/heroAdd')
        {

            response.writeHead(200,{'Content-Type':'text/html'});
          res.json(resoinseData);
          response.write("Hello world!");
        response.end();
     //   let params = url.parse(request.url, true).query;//解析数据 获得Json对象
     //   let value = params.ip;//通过参数名称获得参数值
           // var resoinseData=1;
           //  res.json(resoinseData);
           //  global.name = 1;
           //  global.value = value;
           //  return


            //var dataObject = querystring.parse(data);
            //console.log(dataObject);
            // ip =  dataObject['ip'];
            //user =  dataObject['user'];
            //password =  dataObject['password'];
            //post =  dataObject['post'];
            //database =  dataObject['database'];
            //tool =  dataObject['ip'];
            //Sql =  dataObject['Sql'];
            //addSql =  dataObject['addsql'];
            //delSql =  dataObject['delsql'];
            //modSql =  dataObject['modsql'];

            //var connection = mysql.createConnection({
            //    host     : ip,
            //    user     : user,
            //    password : password,
            //    port: post,
            //    database: database
            //});
            //connection.connect();
       
//            if(tool == 1) {
//                //查询
////var  sql = 'SELECT * FROM websites';
//                connection.query(Sql, function (err, result) {
//                    if (err) {
//                        console.log('[SELECT ERROR] - ', err.message);
//                        return;
//                    }
//                    console.log('--------------------------SELECT----------------------------');
//                    console.log(result);
//                    console.log('------------------------------------------------------------\n\n');
//                    res.send(result);
//                });
//            }else{
//                if(tool == 2 ){
////插入
////var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
////var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
//            connection.query(addSql ,function (err, result) {
//                if(err){
//                    console.log('[INSERT ERROR] - ',err.message);
//                    return;
//                }
//
//                console.log('--------------------------INSERT----------------------------');
//                //console.log('INSERT ID:',result.insertId);
//                console.log('INSERT ID:',result);
//                console.log('-----------------------------------------------------------------\n\n');
//                res.send(result);
//            });
//
//            }else {
//                    if(tool == 3 ) {
////更新
////var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
////var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//                        connection.query(modSql, function (err, result) {
//                            if (err) {
//                                console.log('[UPDATE ERROR] - ', err.message);
//                                return;
//                            }
//                            console.log('--------------------------UPDATE----------------------------');
//                            console.log('UPDATE affectedRows', result.affectedRows);
//                            console.log('-----------------------------------------------------------------\n\n');
//                            res.send(result);
//                        });
//                    }else {
////删除
////var delSql = 'DELETE FROM websites where id=6';
//            connection.query(delSql,function (err, result) {
//                if(err){
//                    console.log('[DELETE ERROR] - ',err.message);
//                    return;
//                }
//
//                console.log('--------------------------DELETE----------------------------');
//                console.log('DELETE affectedRows',result.affectedRows);
//                console.log('-----------------------------------------------------------------\n\n');
//                res.send(result);
//            });
//            }
//            }
//            }
//          connection.end();

       }
       }).listen(3001);


//var createServer = http.createServer(onRequest);
//
//function onRequest(request, response) {
//    response.writeHead(200, {
//        'Content-Type': 'text/plain',
//        'Access-Control-Allow-Origin': '*'
//    });
//     const urlModule = require('/heroAdd');
//
//
//    var str = JSON.stringify(urlModule.parse(request.url, true).query);
//    response.write(str);
//    response.end();
//
//
//}
//createServer.listen(3000);







