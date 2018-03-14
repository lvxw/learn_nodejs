var str = "hello world"
var buf1 = new Buffer(20)
var buf2 = new Buffer(20)
var buf3 = new Buffer(20)
var buf4 = new Buffer(20)

// Buffer对象的写入方法,把字符长写入buffer
buf1.write(str)
console.log(buf1)

// Buffer对象的写入方法,把字符长写入buffer,从不buf2的第一位开始
buf2.write(str,1)
console.log(buf2)

// Buffer对象的写入方法,把字符长写入buffer,从不buf2的第1位开始写入str的前3位
buf3.write(str,1,3)
console.log(buf3)

// 第四个参数为字符编码
buf4.write(str,1,3,'utf-8')
console.log(buf4)


// Buffer对象转字符长
var bufStr = new Buffer("你好中国",'utf-8')
console.log(bufStr.toString())              //你好中国
// 从字节数组的第3位开始，到第6位结束（不包括6）
console.log(bufStr.toString('utf-8',3,6))   //好


var bufStr2 = new Buffer([1,2,3,4,5]);
console.log(bufStr2.toJSON())               //{ type: 'Buffer', data: [ 1, 2, 3, 4, 5 ] }


var bufferStr3 = new Buffer("hello world");
// 从第1位开始，截取到字符串结尾
var newBuffer = bufferStr3.slice(1);
console.log(newBuffer)
// 从第一位开始，截取到第3位（不包括第三位）
var newBuffer2 = bufferStr3.slice(1,3);
console.log(newBuffer2)
// 需要注意,slice()方法生成的新的buffer，会和原始的buffer公用内存，修该元素后会相互影响
console.log("*******************************")
console.log("original:\t"+bufferStr3)
console.log("new1:\t"+newBuffer)
console.log("new2:\t"+newBuffer2)

console.log("*******************************")
newBuffer[0]=97
console.log("original:\t"+bufferStr3)
console.log("new1:\t"+newBuffer)
console.log("new2:\t"+newBuffer2)