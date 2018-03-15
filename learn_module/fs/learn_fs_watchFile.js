var fs = require('fs')

//异步方式
var filepath = './a.txt'
/**
 * 监听文件或者目录
 * filepath:      文件路径
 * listener:      当文件或者目录改变时触发函数
 */
fs.watchFile(filepath,function (ev,fileNme) {
    console.log('********')
    console.log(ev)
    console.log('********')
    console.log(fileNme)
})

