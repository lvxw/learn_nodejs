var fs = require('fs')

/**
 *fs.open(path,flags,[mode],callback) 异步的方式操作文件
 *  path:   要打开的文件的路径
 *  flags:  打开文件的方式 读/写
 *  mode:   设置文件的模式 读/写/执行 4/2/1
 *  callback:   回调函数
 *      err:    文件打开失败的错误信息保存在err里，如果读取成功err为null
 *      fd:     被打开文件的标识
 */
fs.open('./a.txt','r',function (err,fd) {
    if(err){
        console.log("文件打开失败")
    }else{
        console.log(fd)
    }
})
console.log("ok")
console.log("-------------------------------------------")

/**
 * 同步方式操作文件
 */
var fd = fs.openSync('a.txt','r');
console.log(fd)
console.log("-------------------------------------------")
