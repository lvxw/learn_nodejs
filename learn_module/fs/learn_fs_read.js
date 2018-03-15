var fs = require('fs')

/*
fs.open('./a.txt','r',function (err,fd) {
    if(err){
        console.log("文件打开失败")
    }else{
        /!**
         * fd：      通过open方法成功打开一个文件返回的编号
         * buffer：  Buffer对象
         * offset：  buffer的偏移量
         * length:   读取的长度
         * position: 文件开始读取的位置
         * callback: 回调函数
         *!/
        var buffer = new Buffer(10)
        fs.read(fd,buffer,0,6,0,
            /!**
             *
             * @param err       错误信息对象
             * @param lenth     buffer长度
             * @param newBuf    Buffer对象
             *!/
            function (err,lenth,newBuf) {
                console.log(buffer)
                console.log(err)
                console.log(lenth)
                console.log(newBuf)
            }
        )
    }
})

*/


/**
 * 同步方式操作文件
 */
var fd = fs.openSync('a.txt','r');
var buf = new Buffer(10)
var res = fs.readSync(fd,buf,0,4,0)
console.log(buf)
console.log(res)
