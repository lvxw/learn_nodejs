var fs = require('fs')

//异步方式
var filepath = './f.txt'
/**
 * 删除文件
 * filepath:      文件路径
 * callback:      回调函数
 */
fs.unlink(filepath,function (err) {
    console.log(err)
})



//同步方式
var filepath2 = './g.txt'
fs.unlinkSync(filepath2)
