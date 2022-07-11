/*
 * @Description: login
 * @Author: IWillBe12138
 * @Date: 2022-07-11 16:02:00
 * @LastEditTime: 2022-07-11 16:07:49
 * @LastEditors: IWillBe12138
 */

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //发送get请求，用req.query接收传过来的值
    let account=req.query.account;
    let password=req.query.password;
    console.log(account,password)
    res.send('login')
})
