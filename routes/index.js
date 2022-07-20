/*
 * @Description: index
 * @Author: IWillBe12138
 * @Date: 2022-07-06 12:35:01
 * @LastEditTime: 2022-07-20 17:32:43
 * @LastEditors: IWillBe12138
 */
var express = require('express')
var router = express.Router()
const fs = require('fs')
const { resolve } = require('path')
// const session = require('express-session')
// const cookieParser = require('cookie-parser')

// 设置中间件
// router.use(cookieParser())

//配置express-session
// router.use(
//     session({
//         secret: 'keyboard cat',
//         resave: false,
//         saveUninitialized: true,
//         cookie:
//             ('name',

//             'value',
//             {
//                 maxAge: 5 * 60 * 1000,
//                 secure: false
//             })
//     })
// )

/* GET home page. */
// router.get('/', function (req, res, next) {
//     //   res.render('index', { title: 'Express' });
//     // res.redirect('/login')
//     res.send('首页')
// })
//设置cookie
// router.get('/set',(req,res)=>{
//     res.cookie("userName",'Harrison',{
//         maxAge:20000,
//         httpOnly:true
//     })
//     res.send('设置cookie成功')
// })
// //获取cookie
// router.get('/get',(req,res)=>{
//     console.log(req.cookies.userName)
//     res.send("获取cookie成功，cookie为："+req.cookies.userName)
// })
// router.all('/login',(req,res,next)=>{
//     res.render('index',{title:'请登录'})
// }) 运行index时  任何请求都会执行

//cookie 登录验证

/* 接口：checkLogin 检查是否登录 */
// router.get('/checkLogin', (req, res) => {
//     let cookie = req.cookies.username
//     if (!cookie) {
//         //cookie为空
//         res.send('alert("请登录以后在操作！");location.href="./login.html"')
//     } else {
//         res.send('0')
//     }
// })

//设置登录路由
// router.post('/login', (req, res, next) => {
//     //获取前端 帐号和密码
//     let usr = req.body.username,
//         pwd = req.body.password
//     let users = fs.readFileSync(resolve(__dirname, '../public/data/user.json'))
//     users = JSON.parse(users)
//     console.log(usr)
//     console.log(pwd)
//     console.log(users)
//     //帐号登录
//     for (var i = 0; i < users.length; i++) {
//         //验证通过
//         if (users[i].username == usr && users[i].password == pwd) {
//             res.cookie('username', usr, {
//                 maxAge: 36000000,
//                 httpOnly: true
//             })
//             res.send({
//                 code: 200,
//                 msg: '登录成功'
//             })
//             return
//         }
//     }
//     //验证没通过
//     if (i == users.length) {
//         res.send({
//             code: 406,
//             msg: '登录失败'
//         })
//     }
// })

// router.use('/login', (req, res) => {
//     //设置session
//     req.session.userinfo = 'Harrison'
//     res.send('登录成功')
// })

// router.use('/', function (req, res) {
//     //获取session
//     console.log(req.session.userinfo)
//     if (req.session.userinfo) {
//         res.send('Hello' + req.session.userinfo + ',welcome')
//     } else {
//         res.send('未登录')
//     }
// })


const mysql=require('mysql')

let connection=mysql.createConnection({
    host:'175.24.187.235',
    port:3306,
    user:'root',
    password:'Rr20080808.',
    database:'person_will_mysql'
})

connection.connect((err)=>{
    if(err){
        console.error('连接错误：'+err.stack)
        return
    }
    console.log('连接ID'+connection.threadId)
})

// let sql='select * from user'
// let sql='insert into user values (?,?)'
// let sql='update user set user_name=? where user_id=?'
let sql='delete from '
// let params=[1,'何志祥']
let params=['何志祥111',1]
connection.query(sql,params,(err,result)=>{
    if(err){
        console.log('查询出错',err.message)
        return
    }
    console.log('修改成功')
    console.log(result)
})

router.use('/', function (req, res) {
    res.end('welcome')
})

module.exports = router
