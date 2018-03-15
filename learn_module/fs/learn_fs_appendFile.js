var fs = require('fs')

//异步方式
var filepath = './f.txt'
/**
 * 如果文件不存在，则自动创建并写入数据；如果文件存在，则追加
 * filepath:      文件路径
 * data:          要写入的数据
 * charset:       字符编码
 * callback: 回调函数
 */
fs.appendFile(filepath,"你好",'utf-8',function (err) {
    console.log(err)
})



//同步方式
var filepath2 = './g.txt'
fs.appendFileSync(filepath2,"sync 方式追加",'utf-8')
