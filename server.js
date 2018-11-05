var http = require('http');
var mysql  = require('mysql');
var ip = '' ;
var user = '';
var password = '';
var post = '3306';
var database= '';
var tool='';
var Sql='';
var addSql='';
var modSql='';
var delSql='';
var type='';
var query1='';
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var url = require('url');
http.createServer(function (request, response) {
                   response.writeHead(200,{'Content-Type':'text/html'});
                   response.writeHead(200, {'Content-Type': 'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'}); 
                               
          //       var name = "aaaa";
                var pathname = url.parse(request.url).pathname;
                var arg = url.parse(request.url).query;
                 type =  querystring.parse(arg).type; 
        if(!type){        
            ip =  querystring.parse(arg).ip; 
            user =  querystring.parse(arg).user; 
            password =  querystring.parse(arg).password; 
            post =  querystring.parse(arg).post; 
            database =  querystring.parse(arg).database; 
            Sql =  querystring.parse(arg).sql; 

            }else{
             Sql =  querystring.parse(arg).sql;            
            }
            var connection = mysql.createConnection({
                host     : ip,
                user     : user,
                password : password,
                port: post,
                database: database
            });
               connection.connect();
                connection.query(Sql, function (err, result) {
                    if (err) {
                        console.log('[SELECT ERROR] - ', err.message);
                        return;
                    }
                   response.end(JSON.stringify(result));
                //  var name =  String(result);
                //    response.end(name);
                });
           
          connection.end();



 //  response.end(name);
 
                         }).listen(8889);
    
    
