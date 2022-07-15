/*
 * @Description:
 * @Author: IWillBe12138
 * @Date: 2022-06-30 09:34:58
 * @LastEditTime: 2022-07-14 14:21:44
 * @LastEditors: IWillBe12138
 */
let express = require('express')
let router = express.Router()
let multiparty = require('multiparty')
let util = require('util')
let fs = require('fs')
let path = require('path')
router.get('/', function (req, res, next) {
    res.sendFile( path.resolve(__dirname,'..','views','uploading.html') );
})

// 文件上传处理
router.post('/', function (req, res, next) {
    let form = new multiparty.Form()
    form.encoding = 'utf-8'
    // form.uploadDir = '../public/files'
    console.log(path.resolve(__dirname,'..','public','files'))
    form.uploadDir = path.resolve(__dirname,'..','public','files')
    form.maxFilesSize = 20 * 1024 * 1024
    form.parse(req, function (err, fileds, files) {
        let filesTemp = JSON.stringify(files, null, 2)
        if (err) {
            console.log('parse error:' + err)
        } else {
            // console.log(files.inputFiles)
            let inputFile = files.inputFiles[0]
            let uploadedPath = inputFile.path
            let dstPath = './public/files/' + inputFile.originalFilename
            // let dstPath =  inputFile.originalFilename 
            // console.log(inputFile)
            console.log(uploadedPath)
            console.log(dstPath)
            // 重命名为真是文件名
            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) throw err
            })
        }
        // res.end( util.inspect({
        //     fileds:fileds,
        //     files:filesTemp
        // }))
        res.end()
    })
})
module.exports= router