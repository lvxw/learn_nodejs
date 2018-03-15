var fs = require('fs')

var fd2 = fs.openSync('c.txt','w');
var res2 = fs.writeSync(fd2,"你好中国",'uft-8')

/**
 * err 关闭方法失败的错误对象
 */
fs.close(fd2,function (err) {
    console.log(err)
})
