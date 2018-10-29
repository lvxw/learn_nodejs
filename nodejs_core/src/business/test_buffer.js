const println = console.log

let buffer = Buffer.from("你好世界","utf-8")

println(buffer.length)

println(buffer.toString(encoding='utf-8'))

let buffer1 = Buffer;
let buf = buffer1.alloc(12)

buf.write("你好世界")

println(buf.toString(encoding='utf8',3,6))


let buf1 = Buffer.from("hello world")
let buf2 = Buffer.from("你好世界")

let newBuf = Buffer.concat([buf1,buf2]);
println(newBuf.toString())



