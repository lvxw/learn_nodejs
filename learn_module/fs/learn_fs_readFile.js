var fs = require('fs')

//异步方式
var filepath = './d.txt'
/**
 * 读取文件内容
 * filepath:      文件路径
 * charset:       字符编码
 * callback:      回调函数
 */
fs.readFile(filepath,'utf-8',function (err,data) {
    console.log(data)
})



//同步方式
var filepath2 = './e.txt'
var result  = fs.readFileSync(filepath2,'utf-8')
console.log(result)
