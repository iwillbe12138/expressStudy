/*
 * @Description:
 * @Author: IWillBe12138
 * @Date: 2022-06-28 16:20:42
 * @LastEditTime: 2022-07-15 16:12:04
 * @LastEditors: IWillBe12138
 */
var express = require('express')
var router = express.Router()

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('hello express')
// })
router.get('/', function (req, res, next) {
    res.send('hello express by post')
})
module.exports = router
