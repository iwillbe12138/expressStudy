/*
 * @Description: throwErr 测试抛出错误
 * @Author: IWillBe12138
 * @Date: 2022-07-06 13:19:17
 * @LastEditTime: 2022-07-06 14:10:11
 * @LastEditors: IWillBe12138
 */

const express=require('express')
const route=express.Router()
route.get('/',(req,res,next)=>{
    throw new Error('服务器错误')
})

module.exports=route