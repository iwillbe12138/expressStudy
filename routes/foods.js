/*
 * @Description: foods
 * @Author: IWillBe12138
 * @Date: 2022-07-14 13:40:58
 * @LastEditTime: 2022-07-14 14:06:36
 * @LastEditors: IWillBe12138
 */
const express=require('express')
const router= express.Router()

router.get('/:id',(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    if(id==1){
        res.render('foods/foods1')
        // res.send('foods1')
    }
    else if(id==2){
        res.render('foods/foods2')
        // res.send('foods2')
    }
    else{
        throw new Error('id不正确')
    }
})
router.get('/',(req,res,next)=>{
    throw new Error('id为空')
})

module.exports= router