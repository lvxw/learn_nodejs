//测试NodeJS是否支持某种编码
console.log(Buffer.isEncoding('utf-8'))     // true
console.log(Buffer.isEncoding('gbk'))       // false
console.log(Buffer.isEncoding('ascii'))     // true
console.log("*********************")

//测试是否是Buffer对象
var arr = [1,2,34,5]
console.log(typeof arr)
console.log(Buffer.isBuffer(arr))
console.log("********************")
//计算字符创的字节长度
var str = "中国你好"

console.log(str.length)
console.log(Buffer.byteLength(str,'utf8'))
console.log("********************")

// 拼接buffer对象
var str2 = "hello world";
var str3 = "你好中国";
var list = [new Buffer(str2),new Buffer(str3)];
var buf = Buffer.concat(list);
console.log(buf.toString());
console.log("********************")


// 标注输入，其实数据存储在Buffer对象中
process.stdout.write("请输入数据：")
process.stdin.resume()
process.stdin.on('data',function (data) {
    console.log(typeof data)
    console.log(data)
    console.log(data.toString())
    // buffer对象与字符串拼接时，会自动调用Buffer对象的toString()方法
    console.log(data+"")
})


