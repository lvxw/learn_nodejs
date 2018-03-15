var fs = require('fs')

//异步方式
var filepath = './aa'
/**
 * charset:       字符编码
 * callback:      回调函数
 */
fs.mkdir(filepath,function (err) {
    console.log(err)
})



//同步方式
var filepath2 = './bb'
fs.mkdirSync(filepath2)

