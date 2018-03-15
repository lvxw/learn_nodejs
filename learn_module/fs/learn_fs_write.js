var fs = require('fs')

//异步方式
fs.open('./b.txt','r+',function (err, fd) {
    /**
     * fd:      打开文件成功后的编号
     * buffer:  Buffer对象
     * offset:  buffer的偏移位置
     * length:  要写入文件数据的长度
     * position：fd中的位置
     * callback: 回调函数
     */
    var buffer = new Buffer("hello world")
    fs.write(fd,buffer,1,4,5,
        function (err,length,newBuf) {
            console.log(err)
            console.log(length)
            console.log(newBuf)
            console.log(arguments)
        }
    )
})



//同步方式
var fd = fs.openSync('./b.txt','w')
var buf = new Buffer("hello world")
var re = fs.writeSync(fd,"hhhhhhhhhhh",1,4,5)
console.log(re)


/**
 * 直接写字符串
 */
var fd2 = fs.openSync('c.txt','w');
var res2 = fs.writeSync(fd2,"你好中国",'uft-8')
console.log(res2)
