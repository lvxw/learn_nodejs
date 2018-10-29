const println = console.log

let fs = require("fs");

fs.readFile("../tmp/1.txt",encoding='utf8',function (err,data) {
    if(err){
        println("读取文件失败")
    }else {
        console.log(data)
    }
})


