/*
 * @Description: login
 * @Author: IWillBe12138
 * @Date: 2022-07-11 16:02:00
 * @LastEditTime: 2022-07-15 15:41:14
 * @LastEditors: IWillBe12138
 */

const express = require('express')
const router = express.Router()
const bodyParse=require('body-parser')
const path=require('path')

let goods={
    iphone:{
        nums:100,
        price:1999.98,
        color:'red'
    },
    car:{
        nums:100,
        price:999999,
        color:'black'
    }
}

router.use(bodyParse.urlencoded({extended:false}))

router.get('/', (req, res) => {
    //发送get请求，用req.query接收传过来的值
    res.sendfile(path.resolve(__dirname,'..','views','index.html'))
})

router.post('/', (req, res) => {
    //发送get请求，用req.query接收传过来的值
    let account = req.body.account
    let password = req.body.password
    console.log(req.body)
    console.log(account, password)
    if (account && password) {
        // res.send('登录成功')
        // res.json({
        //     error:0,
        //     data:goods
        // })//返回json对象
        res.send('success')//发送数据给客户端，可以是字符串、json对象或者Buffer
        // res.render('index',{title:'Hi,Hou Sir!'})//渲染制定模板给客户端
        // res.redirect('/')//重定向
        // res.status(200).send('success')//设置状态码
        //设置响应报头
        /* res.setHeader('Content-Type','application/json')
        //res.set() 设置响应报头信息，如content-type、content-length
        res.set({
            'Content-Type':'application/json'
        })
        res.json(goods)
        console.log(res.get('Content-Type'))
        res.end() */
    }
    else{ 
        throw new Error('账号或密码错误')
    }
})


module.exports = router
