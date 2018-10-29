const println = console.log

let fs = require("fs")
let readStream = fs.createReadStream("../tmp/1.txt",encoding="utf8")
// readStream.setEncoding('UTF8')


let data = ''
//一次性全部读完
readStream.on("data",function (chunk, two) {
    data+=chunk
})
readStream.on("end",function (one,two) {
    println(data)
})


let writeStream = fs.createWriteStream("../tmp/2",encoding='utf-8')
writeStream.on("finish",function () {
    println("写入数据完成")
})
let rData = "111111111111111"

writeStream.write(rData)
writeStream.end()

let readStream2 = fs.createReadStream("../tmp/2.txt",encoding='utf-8')
let writeStream2 = fs.createWriteStream("../tmp/3",encoding='utf-8')

readStream2.pipe(writeStream2)




let zlib = require("zlib")
fs.createReadStream("../tmp/3.txt",encoding='utf-8')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("../tmp/4.zip",encoding='utf-8'))

