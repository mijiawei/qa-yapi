/**
 * Created by wdr520 on 2018/9/6.
 */
var mysql  = require('mysql');
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
app.on('request', function (req, res) {

    console.log(req.method);

    //1.通过判断url路径和请求方式来判断是否是表单提交
    if (req.url === '/heroAdd' && req.method === 'POST') {
        /**服务端接收post请求参数的流程
         * （1）给req请求注册接收数据data事件（该方法会执行多次，需要我们手动累加二进制数据）
         *      * 如果表单数据量越多，则发送的次数越多，如果比较少，可能一次就发过来了
         *      * 所以接收表单数据的时候，需要通过监听 req 对象的 data 事件来取数据
         *      * 也就是说，每当收到一段表单提交过来的数据，req 的 data 事件就会被触发一次，同时通过回调函数可以拿到该 段 的数据
         * （2）给req请求注册完成接收数据end事件（所有数据接收完成会执行一次该方法）
         */
        //创建空字符叠加数据片段
        var data = '';

        //2.注册data事件接收数据（每当收到一段表单提交的数据，该方法会执行一次）
        req.on('data', function (chunk) {
            // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
            data += chunk;
        });

        // 3.当接收表单提交的数据完毕之后，就可以进一步处理了
        //注册end事件，所有数据接收完成会执行一次该方法
        req.on('end', function () {

            //（1）.对url进行解码（url会对中文进行编码）
            data = decodeURI(data);
            console.log(data);

            /**post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象 */

            //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
            //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
            var dataObject = querystring.parse(data);
            console.log(dataObject);
             ip =  dataObject['ip'];
            user =  dataObject['user'];
            password =  dataObject['password'];
            post =  dataObject['post'];
            database =  dataObject['database'];
            tool =  dataObject['ip'];
            Sql =  dataObject['Sql'];
            addSql =  dataObject['addsql'];
            delSql =  dataObject['delsql'];
            modSql =  dataObject['modsql'];

            var connection = mysql.createConnection({
                host     : ip,
                user     : user,
                password : password,
                port: post,
                database: database
            });
            connection.connect();

            if(tool == 1) {
                //查询
//var  sql = 'SELECT * FROM websites';
                connection.query(Sql, function (err, result) {
                    if (err) {
                        console.log('[SELECT ERROR] - ', err.message);
                        return;
                    }
                    console.log('--------------------------SELECT----------------------------');
                    console.log(result);
                    console.log('------------------------------------------------------------\n\n');
                    res.send(result);
                });
            }else{
                if(tool == 2 ){
//插入
//var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
//var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
            connection.query(addSql ,function (err, result) {
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                }

                console.log('--------------------------INSERT----------------------------');
                //console.log('INSERT ID:',result.insertId);
                console.log('INSERT ID:',result);
                console.log('-----------------------------------------------------------------\n\n');
                res.send(result);
            });

            }else {
                    if(tool == 3 ) {
//更新
//var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
//var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
                        connection.query(modSql, function (err, result) {
                            if (err) {
                                console.log('[UPDATE ERROR] - ', err.message);
                                return;
                            }
                            console.log('--------------------------UPDATE----------------------------');
                            console.log('UPDATE affectedRows', result.affectedRows);
                            console.log('-----------------------------------------------------------------\n\n');
                            res.send(result);
                        });
                    }else {
//删除
//var delSql = 'DELETE FROM websites where id=6';
            connection.query(delSql,function (err, result) {
                if(err){
                    console.log('[DELETE ERROR] - ',err.message);
                    return;
                }

                console.log('--------------------------DELETE----------------------------');
                console.log('DELETE affectedRows',result.affectedRows);
                console.log('-----------------------------------------------------------------\n\n');
                res.send(result);
            });
            }
            }
            }
            connection.end();

        });


    }


});

//4.监听端口号
app.listen(3000, function () {
    console.log('欢迎来到王者荣耀英雄管理器');
});





