/*
 * @Description: index
 * @Author: IWillBe12138
 * @Date: 2022-07-06 12:35:01
 * @LastEditTime: 2022-07-15 17:26:26
 * @LastEditors: IWillBe12138
 */
var express = require('express')
var router = express.Router()
const cookieParser=require('cookie-parser')
// 设置中间件
router.use(cookieParser())
/* GET home page. */
router.get('/', function (req, res, next) {
    //   res.render('index', { title: 'Express' });
    // res.redirect('/login')
    res.send('首页')
})
//设置cookie
router.get('/set',(req,res)=>{
    res.cookie("userName",'Harrison',{
        maxAge:20000,
        httpOnly:true
    })
    res.send('设置cookie成功')
})
//获取cookie
router.get('/get',(req,res)=>{
    console.log(req.cookies.userName)
    res.send("获取cookie成功，cookie为："+req.cookies.userName)
})
// router.all('/login',(req,res,next)=>{
//     res.render('index',{title:'请登录'})
// }) 运行index时  任何请求都会执行

module.exports = router
