/*
 * @Description: 
 * @Author: IWillBe12138
 * @Date: 2022-06-28 16:20:42
 * @LastEditTime: 2022-07-20 15:31:53
 * @LastEditors: IWillBe12138
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {resolve}=require('path')

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var uploadRouter = require('./routes/upload');
// var loginRouter = require('./routes/login');
// var foodsRouter = require('./routes/foods');
// var throwErrRouter = require('./routes/throwErr');

var app = express();

//1.使用express.static 内置中间件访问静态文件
// let options={
//     dotfiles:'ignore',//是否对外输出以点（.）开头的文件名的文件
//     etag:false,//是否启用 etag 生成
//     extensions:['htm','html'],//设置默认文件扩展名（遇到这些扩展名时，可以省略）
//     index:false,//发送目录索引文件，设置为false禁用目录索引
//     maxAge:'1d',//以毫秒或者其字符串格式设置Cache-Control 头的max-age属性
//     redirect:false,//当路径为目录时，重定向至“/”
//     setHeaders:function (res,path,stat) {//设置 HTTP 头以提供文件的函数
//         res.set('x-timestamp',Date.now());
//     }
// }
//1.1设置静态文件默认访问路径
// app.use(express.static('./public',options))

//2.中间件-->检查每个请求中是否含有token（认证） 如果含有继续执行
// app.use((req,res,next)=>{
//     //自定义一个token
//     let token ='abcd1234';
//     let accessToken=req.query.token;
//     //检查请求中是否含有“认证”，如果含有，就继续执行
//     if(accessToken==token){
//         next()
//     }
//     else{
//         res.send({
//             code:406,
//             message:'请求必须包含token'
//         })
//     }
// }) 

//3.记录网站访问日志中间件
// app.use((req,res,next)=>{
//     let fs=require('fs')
//     // console.log(req)
//     console.log(req.ip)
//     let ip=req.ip
//     let time =new Date().toLocaleString()
//     let data=fs.readFileSync('./web.log')
//     data+=`访问时间：${time}  IP:${ip}`
//     fs.writeFileSync('./web.log',data)
//     next()
// })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(resolve(__dirname,'public/html')))
// app.use(express.static(resolve(__dirname,'views')))

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/uploading', uploadRouter);
// // app.use('/login', loginRouter);
// app.use('/foods', foodsRouter);
// app.use('/throwErr', throwErrRouter);



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send(err.message)
// //   res.render('error');
// });

module.exports = app;
